const express = require('express');
const Favorite = require('../models/favorite');
const authenticate = require('../authenticate');
const cors = require('./cors'); // note that this is importing the routes/cors.js file, not the cors package

const favoriteRouter = express.Router();

favoriteRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200) )
.get(cors.cors, authenticate.verifyUser, (req, res, next) => {
  res.statusCode(200);
  res.end('Will send favorites')
})
.post(cors.cors, authenticate.verifyUser, (req, res, next) => {
  res.statusCode(200);
  res.end('Will post favorites')
})
.put(cors.cors, authenticate.verifyUser, (req, res, next) => {
  res.statusCode(200);
  res.end('Will put favorites')
})
.delete(cors.cors, authenticate.verifyUser, (req, res, next) => {
  res.statusCode(200);
  res.end('Will delete favorites')
})

favoriteRouter.route('/:campsiteId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200) )
.get(cors.cors, authenticate.verifyUser, (req, res, next) => {
  res.statusCode(200);
  res.end('Will send campsite favorites')
})
.post(cors.cors, authenticate.verifyUser, (req, res, next) => {
  res.statusCode(200);
  res.end('Will post campsite favorites')
})
.put(cors.cors, authenticate.verifyUser, (req, res, next) => {
  res.statusCode(200);
  res.end('Will put campsite favorites')
})
.delete(cors.cors, authenticate.verifyUser, (req, res, next) => {
  res.statusCode(200);
  res.end('Will delete campsite favorites')
})

module.exports = favoriteRouter;