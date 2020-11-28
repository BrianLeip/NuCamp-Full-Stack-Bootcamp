const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = 'mongodb://localhost:27017/nucampsite'; // 27017 is the default for mongodb, nucampsite is the database we created

const connect = mongoose.connect(url, {
  useCreateIndex: true, // these 3 options just avoid deprecation warnings
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(() => {
  console.log('Connected successfully to the server');
  // const newCampsite = new Campsite({
  //   name: 'React Lake Campground',
  //   description: 'test'             // note - if this description was excluded, mongoose would throw an error since it needs to match the Schema
  // });
  // newCampsite.save()
  // .then(campsite => {
  //   console.log("Saving campsite: " + campsite);
  //   return Campsite.find();
  // })

  console.log("Creating new campsite 'React Lake Campground'...");
  Campsite.create({
    name: 'React Lake Campground',
    description: 'test'
  })
  .then(campsite => {
    console.log("Finding campsite: ");
    console.log(campsite);
    // return Campsite.find();
    return Campsite.findByIdAndUpdate(campsite._id, {
      $set: { description: 'Updated Test Document' }
    }, {
      new: true
    });
  })
  .then(campsite => {
    console.log("Adding a comment to: ");
    console.log(campsite);
    campsite.comments.push({
      rating: 5,
      text: 'What a magnificent view!',
      author: 'Tinus Lorvaldes'
    });
    return campsite.save();
  })
  .then(campsites => {
    console.log("Deleting all campsites: ");
    console.log(campsites);
    return Campsite.deleteMany();
  })
  .then(() => {
    console.log("Done...shutting down.");
    return mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  })
});