const express = require('express');
const promotionsRouter = express.Router();
promotionsRouter.use(express.json()); // parses json data into JS properties so we can use it

promotionsRouter.route('/')   // chaining all verbs to this router below
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
})
.get((req, res) => {
  res.end('Will send all the promotions to you');
})
.post((req, res) => {
  res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
  res.end('Deleting all promotions');
});

promotionsRouter.route('/:promotionId')  // chaining all verbs to this router below
.all((req, res, next) => {                      // .all is catch all for all HTTP verbs
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res) => {
  res.end(`Will send details of the promotion: ${req.params.promotionId} to you.`)
})
.post((req, res) => {
  res.statusCode = 403;
  res.end(`POST operation not supported on /promotions/${req.params.promotionId}`)
})
.put((req, res) => {
  res.write(`Updating the promotion: ${req.params.promotionId}.\n`);
  res.end(`Will update the promotion: ${req.body.name} with description ${req.body.description}`);
})
.delete((req, res) => {
  res.end(`Deleting promotion: ${req.params.promotionId}`);
});

module.exports = promotionsRouter;