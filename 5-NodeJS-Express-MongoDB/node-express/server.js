const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionsRouter = require('./routes/promotionsRouter');
const partnersRouter = require('./routes/partnersRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
// app.use(morgan('dev'));   // use development version of morgan
app.use(express.json());  // parses json data into JS properties so we can use it

// app.use('/campsites', campsiteRouter);
app.use('/', campsiteRouter);
app.use('/', promotionsRouter);
app.use('/', partnersRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
  // console.log(req.headers);  // no longer needed since morgan/express handles headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>')
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
