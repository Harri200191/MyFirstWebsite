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
    let result = await data.updateOne(
        // first object showing records which you want to change
        {first_name: req.body.last_name},
        // conditions to follow and change data
        {$set: req.body}
    );
    resp.send(result);
});

// /:first_name is used to send data in postman through the url paramters
// like: localhost:5000/first_name
app.delete('/:first_name', async (req, resp) =>{
    let data = await dbConnect();
    let result = await data.deleteOne({first_name: req.params.first_name});
    resp.send(result);
});

app.listen(3000);