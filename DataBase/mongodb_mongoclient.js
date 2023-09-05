const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://0.0.0.0:27017';
const database = "test";
const client = new MongoClient(uri);

// This is common function called once in start always
async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(database);
    // this returns a promise
    return db.collection("num1"); 
}

module.exports = dbConnect;

//  WAYS TO HANDLE PROMISES --------------------
// Way number 1 
dbConnect().then((resp) => {
    resp.find({}).toArray().then((data) => {
        console.warn(data);
    })
});

// Way number 2
const main = async() => {
    let data = await dbConnect();
    data = await data.find({}).toArray();
};
