const mongoose = require("mongoose");

const test_schema = new mongoose.Schema(
    {
        id: String,
        first_name: String,
        last_name : String,
        email : String,
        gender: String,
        ip_address : String
    }
);

module.exports = mongoose.model('num1', test_schema);