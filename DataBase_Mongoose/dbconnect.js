const mongoose = require("mongoose");
const uri = 'mongodb://0.0.0.0:27017';

const main = async () => {
    await mongoose.connect(uri);

    // defining a fixed data type for fields in database 
    const test_schema = new mongoose.Schema(
        {
            first_name: String,
            last_name : String,
            email : String,
            gender: String,
            ip_address : String
        }
    );

    const test_model = new mongoose.model('num1', test_schema);

    let data = new test_model(            
        {
            first_name : "haris",
            last_name : "chugtai",
            email : "abc@gmail.com",
            gender: "Male",
            ip_address : "0.0.0.0"
        }
    );

    let result = await data.save();
    console.log(result);
};

module.exports = main;