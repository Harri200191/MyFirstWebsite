const express = require("express");
const path = require("path");

const PublicPath = path.join(__dirname, "public");
const app = express();
//app.use(express.static(PublicPath));

app.get('', (_, res) =>{
    res.sendFile(`${PublicPath}/index.html`)
});

app.get('/about', (_, res) =>{
    res.sendFile(`${PublicPath}/about.html`)
});

app.get('/help', (_, res) =>{
    res.sendFile(`${PublicPath}/help.html`)
});

app.get('*', (_, res) =>{
    res.sendFile(`${PublicPath}/404page.html`)
});

app.listen(3000);