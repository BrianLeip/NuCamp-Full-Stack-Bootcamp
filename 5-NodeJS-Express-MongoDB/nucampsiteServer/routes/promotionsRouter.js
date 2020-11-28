const express = require('express');
const Promotion = require('../models/promotion');

const promotionsRouter = express.Router();
promotionsRouter.use(express.json()); // parses json data into JS properties so we can use it

promotionsRouter.route('/')   // chaining all verbs to this router below
.get((req, res, next) => {
  Promotion.find()
  .then(promotion => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(promotion);
  })
  .catch(err => next(err));
})
.post((req, res, next) => {
  Promotion.create(req.body)
  .then(promotion => {
    console.log('Partner Created: ', partner);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(partner);
  })
  .catch(err => next(err));
})
.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
  console.log('Deleting all promotions');
});

promotionsRouter.route('/:promotionId')  // chaining all verbs to this router below
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