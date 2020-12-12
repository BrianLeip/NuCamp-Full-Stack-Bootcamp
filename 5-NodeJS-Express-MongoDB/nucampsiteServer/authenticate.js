const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const JwtStrategy = require('passport-jwt').Strategy;   // JSON web tokens http://www.passportjs.org/packages/passport-jwt/ 
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const GoogleStrategy = require('passport-google-oauth');  // Googla oauth  http://www.passportjs.org/packages/passport-google-oauth/ 
const BearerTokenStrategy = require('passport-http-bearer');  // Bearer tokens auth http://www.passportjs.org/packages/passport-http-bearer/ 
const OpenIDStrategy = require('openid-client');  // OpenID server side client auth http://www.passportjs.org/packages/openid-client/ 
const { Issuer } = require('openid-client');

const config = require('./config.js');
const { NotExtended } = require('http-errors');

exports.local = passport.use(new LocalStrategy(User.authenticate() ));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = user => {
  return jwt.sign(user, config.secretKey, {expiresIn: 3600});
};

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(
  new JwtStrategy(
    opts,
    (jwt_payload, done) => {
      console.log('JWT payload: ', jwt_payload);
      User.findOne({_id: jwt_payload._id}, (err, user) => {
        if (err) {
          return done(err, false);
        } else if (user) {
          return done(null, user);
        } else {
          return done(null, false); // no error but also no user found
        }
      });
    }
  )
);

exports.verifyUser = passport.authenticate('jwt', {session: false});  // shortcut to use in other files for user authentication with jwt strategy
// exports.verifyUser = Issuer.discover('https://accounts.google.com') // => Promise
//   .then(function (googleIssuer) {
//   console.log('Discovered issuer %s %O', googleIssuer.issuer, googleIssuer.metadata);
// });

exports.verifyAdmin = (req, res, next) => {
  if(!req.user) {
    err = new Error('Server error: user must be verified prior to admin verification');
    err.status = 500;
    return next(err);
  } else {
    if (req.user.admin) {
      return next();
    } else {
      err = new Error('Not an authorized admin user!');
      err.status = 403;
      return next(err);
    }
  }
};