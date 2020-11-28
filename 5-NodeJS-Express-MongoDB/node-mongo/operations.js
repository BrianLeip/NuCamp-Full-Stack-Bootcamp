const assert = require('assert').strict;

exports.insertDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection); // gets the collection based on the string passed in to 'collection'
  coll.insertOne(document, (err, result) => {
    assert.strictEqual(err, null);
    callback(result); // passes the result on to the callback function that was included in the parameters
  });
};

exports.findDocuments = (db, collection, callback) => {
  const coll = db.collection(collection); 
  coll.find().toArray((err, docs) => {  // find all collections and convert to an array
    assert.strictEqual(err, null);
    callback(docs);
  });  
};

exports.removeDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection); 
  coll.deleteOne(document, (err, result) => {
    assert.strictEqual(err, null);
    callback(result);
  });
};

exports.updateDocument = (db, document, update, collection, callback) => {
  // console.log("Updating document: ", document);
  const coll = db.collection(collection); 
  coll.updateOne(document, { $set: update }, null, (err, result) => {
    assert.strictEqual(err, null);
    callback(result);
  });
};