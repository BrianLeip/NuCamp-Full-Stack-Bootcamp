const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')           // chaining all verbs to this router below
.all((req, res, next) => {          // .all is catch all for all HTTP verbs
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res) => {
  res.end('Will send all the campsites to you');
})
.post((req, res) => {
  res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
  res.end('Deleting all campsites');
});

module.exports = campsiteRouter;