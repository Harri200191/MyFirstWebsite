const express = require("express");
require("./DataBase_Mongoose/config");
const schemas_and_models = require("./DataBase_Mongoose/schemas_and_models");

const app = express();
app.use(express.json());;

app.get("/search/:key", async (req, resp) => {
    resp.send();
});

app.listen(5000);