const mongoClient = require('mongodb').MongoClient;

exports.connect = (collection, query, res) => {
      // Connect to the db
      console.log('connectionString',process.env.connectionString)
      mongoClient.connect(process.env.connectionString, { useNewUrlParser: true },
        (err, client) => {
            if(err) throw err;
          const db = client.db('movies');
          console.log(query)
            db.collection(collection)
              .find(query)
              .toArray(function(err, result) {
                if (err) throw err;
console.log(err, result)
                res.send({
                  count: result.length,
                  response: result
                });

                client.close();
              });
      });
}
