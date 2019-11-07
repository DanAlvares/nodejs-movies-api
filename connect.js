const mongoClient = require('mongodb').MongoClient;

exports.connect = (collection, query, res, projection) => {
      // Connect to the db
      console.log('connectionString',process.env.connectionString)
      mongoClient.connect(process.env.connectionString, { useNewUrlParser: true },
        (err, client) => {
            if(err) throw err;
          const db = client.db('movies');
            db.collection(collection)
              .find(query)
              .project(projection || {})
              .toArray(function(err, result) {
                if (err) throw err;
                res.send({
                  count: result.length,
                  response: result
                });

                client.close();
              });
      });
}
