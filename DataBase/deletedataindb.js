const dbConnect = require("./mongodb_mongoclient");

const deletefromdb = async() => {
    const data = await dbConnect();
    // deleteOne changes only one record. Use deleteMany() for all
    const result = await data.deleteOne(
        {
            first_name : "Noell"
        }
    )

    if (result.acknowledged == true && result.deletedCount != 0){
        console.log("Data Deleted Successfully");
    }
    else if (result.deletedCount == 0){
        console.log("The record was not present in database");
    }
};

module.exports = deletefromdb;