const MongoClient = require('mongodb').MongoClient;
const assert = require('assert').strict;

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

    const collection = db.collection('campsites');

    collection.insertOne({name: "Breadcrumb Train Campground", description: "Test"},
    (err, result) => {
      assert.strictEqual(err, null);
      console.log('Insert Document: ', result.ops);

      collection.find().toArray((err, docs) => {  // to find all collections, leave the find criteria blank
        assert.strictEqual(err, null);
        console.log('Found Documents: ', docs);

        client.close();
      });  
    });
  });  
}); 
