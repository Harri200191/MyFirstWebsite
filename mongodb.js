// Connecting with Database
const mongoose = require('mongoose');
const mongoURI = 'mongodb://0.0.0.0:27017/test';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

// Adding data to database
const Schema = mongoose.Schema;

const yourSchema = new Schema({
  field1: String,
  field2: Number,
});

const YourModel = mongoose.model('num1', yourSchema);

YourModel.find({ /* your query criteria */ }, (err, documents) => {
  if (err) {
    console.error('Error querying MongoDB:', err);
    return;
  }

  console.log('Query result:', documents);

  // Close the MongoDB connection
  mongoose.connection.close();
});

