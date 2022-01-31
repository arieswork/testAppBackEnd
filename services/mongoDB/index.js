var MongoClient = require('mongodb').MongoClient;
var products;
var dbConnection;
var isErr = false; // error while connecting

//cloud database: https://cloud.mongodb.com/v2/61e8f94384f1ac51d4a5cd4f#security/database/users

const localURL = "mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb"
const uri = "mongodb+srv://admin:bu3uCmdJKOfmHkoX@cluster0.bztpe.mongodb.net/demo?retryWrites=true&w=majority";


MongoClient.connect(uri, function(err, clientDB) {
    if (err) {
        isErr = true;
        return;
    }
    const dbo = clientDB.db("demo");
    products = dbo.collection("products");
    dbConnection = clientDB;
  });

module.exports = {
    getCollectionProducts:()=>{
        return products;
    },

    closeConnection: ()=> {
        if(!isErr){
            dbConnection.close();
			console.log('MongoDB connection closed');
        }
    }
}


