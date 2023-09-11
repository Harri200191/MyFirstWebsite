const mysql = require("mysql"); 
const express = require("express");
const con = require("./config");

const app = express();
app.use(express.json());;

app.get('/', (req, resp) =>{
    con.query("select * from users", (err, result) =>{
        if (err){
            resp.send("error");
        }
        else{
            resp.send(result)
        }
    });
});

app.listen(5000);