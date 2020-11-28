const MongoClient = require('mongodb').MongoClient;
const assert = require('assert').strict;
const dboper = require('./operations.js');

const url = 'mongodb://localhost:27017/';
const dbname = 'nucampsite';

// useUnifiedTopology is recommended by the devs, but will be phased out in the future
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  
  assert.strictEqual(err, null);  // checks err === null and auto quits if an error exists
  console.log('Connected successfully to server');

  const db = client.db(dbname);

  // delete the entire campsites directory to start fresh
  db.dropCollection('campsites', (err, result) => {
    assert.strictEqual(err, null);
    console.log('Dropped Collection', result);

    dboper.insertDocument(db, {name: "Breadcrumb Trail Campground", description: "Test"}, 'campsites', result => {
      console.log('Insert Document: ', result.ops);

      dboper.findDocuments(db, 'campsites', docs => {
        console.log('Found Docments: ', docs);

        dboper.updateDocument(db, {name: "Breadcrumb Trail Campground"}, {description: "Updated Test Description"}, 'campsites', result => {
          console.log('Updated Document Count: ', result.result.nModified);

          dboper.findDocuments(db, 'campsites', docs => {
            console.log('Found Documents: ', docs);

            dboper.removeDocument(db, {name: "Breadcrumb Trail Campground"}, 'campsites', result => {
              console.log('Deleted Document Count: ', result.deletedCount);
              client.close();
            });
          });
        });
      });
    });
  });  
}); 
