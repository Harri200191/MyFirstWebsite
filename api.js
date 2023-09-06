const express = require("express");
const dbConnect = require("./DataBase/mongodb_mongoclient");

const app = express();

app.use(express.json());;

app.get('/', async (req, resp) =>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    resp.send(data);
});

app.post('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find({}).toArray();
    resp.send(data);

    console.log(req.body);
});

app.listen(3000);