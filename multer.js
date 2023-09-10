// For Uploading files thorugh Postman
const express = require("express");
const multer = require("multer");
const schemas_and_models = require("./DataBase_Mongoose/schemas_and_models");

const app = express();
app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "uploads")
        },

        filename: function(req, file, cb){
            cb(null, file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("test_file");

app.post("/upload", upload, (req, resp) => {
    resp.send("Uploaded file!");
});

app.listen(4000);