const express = require("express");
const path = require("path");

const PublicPath = path.join(__dirname, "public");
const app = express();
app.use(express.static(PublicPath));

app.listen(3000);