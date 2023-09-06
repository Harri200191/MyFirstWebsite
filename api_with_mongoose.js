const express = require("express");
require("./DataBase_Mongoose/config");
const schemas_and_models = require("./DataBase_Mongoose/schemas_and_models");

const app = express();
app.use(express.json());;

app.post('/create', async (req, resp) => {
    let data = new schemas_and_models(req.body);
    let result = await data.save();
    resp.send(result);
});

app.get('/list', async (req, resp) => {
    let data = await schemas_and_models.find();
    resp.send(data);
});

app.delete('/delete/:_id', async (req, resp) => {
    let data = await schemas_and_models.deleteOne(req.params);
    resp.send(data);
});

app.put('/update/:_id', async (req, resp) => {
    let data = await schemas_and_models.updateOne(
        req.params,
        { $set: req.body }
    );
    resp.send(data);
});

app.listen(5000);