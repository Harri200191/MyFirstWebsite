const {MongoClient} = require("mongodb");
const url_for_mongodb = "mongodb://localhost:27017";
const client = new MongoClient(url_for_mongodb);

async function getData()
{
  let result = await client.connect();
  let db = result.db("test");
  let collection = db.collection("num1");
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData();

module.exports = getData;