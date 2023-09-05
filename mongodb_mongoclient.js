const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  // Now you can perform database operations
  const db = client.db('your-database-name'); // Replace with your database name
  const collection = db.collection('your-collection-name'); // Replace with your collection name

  // Query the database
  collection.find({ /* your query criteria */ }).toArray((err, documents) => {
    if (err) {
      console.error('Error querying MongoDB:', err);
    } else {
      console.log('Query result:', documents);
    }

    // Close the connection
    client.close();
  });
});
