const EventEmitter = require("events");
const express = require("express");

const app = express();
const event = new EventEmitter();

let count = 0
event.on("CountAPI", () => {
    console.log("Event called", count);
    count +=1;
});

app.get('/', async (req, resp) =>{
    event.emit("CountAPI");
});

app.listen(5000);