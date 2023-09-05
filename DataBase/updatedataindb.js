const dbConnect = require("./mongodb_mongoclient");

const update = async() => {
    const data = await dbConnect();
    // UpdateOne changes only one record. Use UpdateMany() for more
    const result =  await data.updateOne(
        // first object showing records which you want to change
        {first_name: "haris"},

        // conditions to follow and change data
        {$set: {first_name: 'asima'}}
    )

    if (result.acknowledged == true){
        console.log("Data Updated Successfully");
    };
};

module.exports = update;