const express = require("express");
const path = require("path");
const reqFilter = require('./middleware');

const PublicPath = path.join(__dirname, "public");
const app = express();
//const route = express.route();

//app.use(express.static(PublicPath));

// TEMPORARY TEST DATA --------------------
const userData = {
    username: 'harry19',
    firstName: 'Haris',
    lastName: 'Rehman',
    email: 'harisrehmanchugtai@gmail.com'
};

// GETTING MONGODB DATA ---------------------
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

// APP STARTS HERE --------------------------
app.set('view engine', 'ejs');

app.get('', reqFilter, (_, res) =>{
    res.sendFile(`${PublicPath}/index.html`)
});

app.get('/about', (_, res) =>{
    res.sendFile(`${PublicPath}/about.html`)
});

app.get('/help', (_, res) =>{
    res.sendFile(`${PublicPath}/help.html`)
});

app.get('/profile', (_, res) => {
    res.render('profile', { user: userData });
});

app.get('*', (_, res) =>{
    res.sendFile(`${PublicPath}/404page.html`)
});

app.listen(4000);