const express = require('express');
const Favorite = require('../models/favorite');
const authenticate = require('../authenticate');
const cors = require('./cors'); // note that this is importing the routes/cors.js file, not the cors package

const favoriteRouter = express.Router();

favoriteRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200) )
.get(cors.cors, authenticate.verifyUser, (req, res, next) => {
  Favorite.find( {user: req.user._id} )
  .populate('favorite.user')  // will populate the user field of all favorites with the user's name
  .populate('favorite.campsites')  // will populate the campsites array with each users's favorite campsites
  .then( (favorite) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(favorite);
  })
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Favorite.findOne( {user: req.user._id} )
  .then( (favorite) => {
    if (favorite) {
      req.body.forEach( (campsite) => {
        if (!favorite.campsites.includes(campsite._id)) {
          favorite.campsites.push(campsite._id);
        }
      })
      favorite.save()
      .then( (favorite) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(favorite);
      })
      .catch(err => next(err));
    } else {
      Favorite.create( {user: req.user._id} )
      .then( (favorite) => {
        req.body.forEach( (campsite) => {
          favorite.campsites.push(campsite._id);
        })
        favorite.save()
        .then( (favorite) => {
          console.log('Favorite Created: ', favorite);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(favorite);
        })
        .catch(err => next(err));
      })
      .catch(err => next(err));
    }
  })
  .catch(err => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /favorites');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Favorite.findOne( {user: req.user._id} )
  .then( (favorite) => {
    if (favorite) {
      console.log("Deleting favorites");
      Favorite.deleteOne( {user: req.user._id} )
      .then( (response) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch(err => next(err));
    } else {
      console.log("No favorites to delete");
      res.statusCode = 410;
      res.end("No favorites to delete");
    }
  })
  .catch(err => next(err));
})

favoriteRouter.route('/:campsiteId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200) )
.get(cors.cors, authenticate.verifyUser, (req, res) => {
  res.statusCode = 403;
  res.end('GET operation not supported on /favorites/campsiteId');
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Favorite.find()
  .then( () => {
    res.statusCode = 200;
    res.end('Will post campsite favorites')
  })
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Favorite.find()
  .then( () => {
    res.statusCode = 200;
    res.end('Will put campsite favorites')
  })
})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Favorite.find()
  .then( () => {
    res.statusCode = 200;
    res.end('Will delete campsite favorites')
  })
})

module.exports = favoriteRouter;