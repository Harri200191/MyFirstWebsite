/* const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
}); */

// ATTEMPT 2 -------------------------------------------------------------
const { MongoClient } = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const dbName = 'test';

async function connectToMongoDB() {
  try {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db(dbName);
    client.close();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongoDB();


