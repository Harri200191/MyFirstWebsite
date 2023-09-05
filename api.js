const express = require("express");
const dbConnect = require("./mongodb_mongoclient");

const app = express();

app.get('/', async (req, resp) =>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    resp.send(data);
});

app.post('', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find({}).toArray();
});

app.listen(3000);