const express = require('express');
const Campsite = require('../models/campsite');

const campsiteRouter = express.Router();
campsiteRouter.use(express.json()); // parses json data into JS properties so we can use it

campsiteRouter.route('/campsites')  // BL NOTE - I put /campsites here instead of / to keep ownership of site name within this file instead of app.js
// .all((req, res, next) => {          // chaining all verbs to this router using promises  .all is catch all for all HTTP verbs
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   next();
// })
.get((req, res, next) => {
  // res.end('Will send all the campsites to you');
  Campsite.find()
  .then(campsites => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(campsites);
  })
  .catch(err => next(err));
})
.post((req, res, next) => {
  // res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
  Campsite.create(req.body)
  .then(campsite => {
    console.log('Campsite Created: ', campsite);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(campsite);
  })
  .catch(err => next(err));
})
.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /campsites');
})
.delete((req, res, next) => {
  console.log('Deleting all campsites');
  Campsite.deleteMany()
  .then(response => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(response);
  })
  .catch(err => next(err));
});

campsiteRouter.route('/campsites/:campsiteId')  // BL NOTE - I put /campsites/:campsiteId here to keep ownership of site name within this file instead of app.js
// .all((req, res, next) => {                      // chaining all verbs to this router using promises  .all is catch all for all HTTP verbs
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   next();
// })
.get((req, res, next) => {
  // res.end(`Will send details of the campsite: ${req.params.campsiteId} to you.`)
  Campsite.findById(req.params.campsiteId)
  .then(campsite => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(campsite);
  })
  .catch(err => next(err));
})
.post((req, res) => {
  res.statusCode = 403;
  res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`)
})
.put((req, res) => {
  console.log(`Updating the campsite: ${req.params.campsiteId}.\n`);
  // res.end(`Will update the campsite: ${req.body.name} with description ${req.body.description}`);
  Campsite.findByIdAndUpdate(req.params.campsiteId, {
    $set: req.body
  }, { new: true })
  .then(campsite => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(campsite);
  })
  .catch(err => next(err));
})
.delete((req, res) => {
  console.log(`Deleting campsite: ${req.params.campsiteId}`);
  Campsite.findByIdAndDelete(req.params.campsiteId)
  .then(response => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(response);
  })
  .catch(err => next(err));
});

module.exports = campsiteRouter;