const mongoose = require('mongoose');
const User = require('./user');
const Campsite = require('./campsite');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  campsites: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Campsite,
    required: true
  }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

mongoose.models.export = Favorite;