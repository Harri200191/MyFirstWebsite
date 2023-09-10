const express = require("express");
require("./DataBase_Mongoose/config");
const schemas_and_models = require("./DataBase_Mongoose/schemas_and_models");

const app = express();
app.use(express.json());;

app.get("/search/:key", async (req, resp) => {
    let data = await schemas_and_models.find(
        {
            "$or": 
            [
                {"first_name": {$regex : req.params.key}},
                {"last_name": {$regex : req.params.key}}
            ]
        }
    );
    resp.send(data);
});

app.listen(5000);