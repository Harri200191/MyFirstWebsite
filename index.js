const express = require("express");
const path = require("path");
const reqFilter = require('./middleware');
const getData = require("./mongodb_mongoclient");

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
getData();

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