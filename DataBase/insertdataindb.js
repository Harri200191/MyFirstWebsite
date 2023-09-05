const dbConnect = require("./mongodb_mongoclient");

const insert = async() => {
    const db = await dbConnect();
    const result = await db.insert(
        [
            {
                first_name : "haris",
                last_name : "rehman",
                email : "xyz@gmail.com",
                gender: "Male",
                ip_address : "0.0.0.0"
            },
            {
                first_name : "haris",
                last_name : "chugtai",
                email : "abc@gmail.com",
                gender: "Male",
                ip_address : "0.0.0.0"
            },
        ]
    )
    
    if (result.acknowledged == true){
        console.log("Data Inserted Successfully");
    };
};

module.exports = insert;