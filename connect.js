const mongoClient = require('mongodb').MongoClient;

exports.connect = (collection, query, res) => {
      // Connect to the db
      
      mongoClient.connect(process.env.connectionString,
        (err, client) => {
            if(err) throw err;
            const db = client.db('movies');
            db.collection(collection)
              .find(query)
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
