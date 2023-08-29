const express = require("express");
const path = require("path");
const cors = require('cors');

const PublicPath = path.join(__dirname, "public");
const app = express();
//app.use(express.static(PublicPath));

app.set('view engine', 'ejs');

app.get('', (_, res) =>{
    res.sendFile(`${PublicPath}/index.html`)
});

app.get('/about', (_, res) =>{
    res.sendFile(`${PublicPath}/about.html`)
});

app.get('/help', (_, res) =>{
    res.sendFile(`${PublicPath}/help.html`)
});

app.get('/profile', (_, res) => {
    res.render('profile');
});

app.get('*', (_, res) =>{
    res.sendFile(`${PublicPath}/404page.html`)
});

app.listen(4000);