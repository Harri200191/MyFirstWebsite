const mongoose = require("mongoose");
const uri = 'mongodb://0.0.0.0:27017';

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

const saveindb = async () => {
    const test = new mongoose.model('num1', test_schema);

    let data = new test(            
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

const updateindb = async () => {
    const test = new mongoose.model('num1', test_schema);
    let data = await test.updateOne(
        {first_name: "haris"},
        {$set: {first_name: 'asima'}}
    )
}

const deleteindb = async () => {
    const test = new mongoose.model('num1', test_schema)
    let data = await test.deleteOne(
        {
            first_name : "Noell"
        }
    )
}

const findindb = async () => {
    const test = new mongoose.model('num1', test_schema)
    let data = await test.find({first_name: "haris"});
}

module.exports = {
    saveindb, 
    test_schema, 
    deleteindb,
    findindb
};