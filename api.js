const express = require("express");
const dbConnect = require("./DataBase/mongodb_mongoclient");

const app = express();

app.use(express.json());;

// To send response to postman
app.get('/', async (req, resp) =>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    resp.send(data);
});

// You get data from postman POST API and that sent data is received using req.body
app.post('/', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insert(req.body);
    resp.send(result);
});

app.put('/', async (req, resp) =>{
    let data = await dbConnect();
    let result = await data.updateOne(req.body);
    resp.send(result);
});

app.listen(3000);