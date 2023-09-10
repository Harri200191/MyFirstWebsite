const express = require("express");
const multer = require("multer");
const schemas_and_models = require("./DataBase_Mongoose/schemas_and_models");

const app = express();
app.use(express.json());



app.listen(4000);