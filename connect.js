const mongoClient = require('mongodb').MongoClient;
const config = require('./config');

exports.connect = (collection, query, res) => {
      // Connect to the db
      mongoClient.connect(config.connectionString,
        (err, db) => {
            if(err) throw err;

            db.collection(collection)
              .find(query)
              .toArray(function(err, result) {
                if (err) throw err;

                res.send(result);

                db.close();
              });
      });
}
