const express = require("express");
require("./DataBase_Mongoose/config");
const schemas_and_models = require("./DataBase_Mongoose/schemas_and_models");

const app = express();
app.use(express.json());;

app.post('/', async (req, resp) => {
    let data = new schemas_and_models(req.body);
    let result = await data.save();
    resp.send(result);
});

app.listen(5000);