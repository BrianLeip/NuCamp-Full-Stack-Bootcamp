var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionsRouter = require('./routes/promotionsRouter');
const partnersRouter = require('./routes/partnersRouter');

const url = 'mongodb://localhost:27017/nucampsite';

const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(() => {
  console.log('Connected correctly to server'),
  err => console.log(err)
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug'); // jade was replaced by pug, but pug doesn't properly work with error.jade file. Revert to jade
app.set('view engine', 'jade');  // jade is deprecated and has multiple security vulnerabilities, but required to work with errors.  leaving in

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser('12345-67890-09876-54321'));   // random security code for cookie parser. update: replaced cookieParser with session

app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}));

function auth(req, res, next) {
  console.log("SESSION DATA:");
  console.log(req.session);

  if (!req.session.user) {
    const err = new Error('You are not authenticated!');
    err.status = 401;
    return next(err);
  } else {
    if (req.session.user === 'authenticated') {
      return next();
    } else {
      console.log("not admin");
      const err = new Error('You are not authenticated!');
      err.status = 401;
      return next(err);
    }
  }
}

// allow people to go to the main page or user signup before checking user authentication
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// now check for user authentication and block other urls below if not authenticated
app.use(auth);

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionsRouter);
app.use('/partners', partnersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; 
