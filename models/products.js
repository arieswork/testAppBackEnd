const mongoose = require('mongoose');
const uri = "mongodb://admin:bu3uCmdJKOfmHkoX@cluster0.bztpe.mongodb.net/demo?retryWrites=true&w=majority";
var options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };

// mongoose.connect(uri, options).then(
//     (result) => { 
//         console.log('Mongodb connected!!', result)
//      },
//     err => { 
//         console.log('Mongo db connection error: ', err)
//      }
// );

// mongoose.connect(uri, { useMongoClient: true });

var Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
})

const Product = mongoose.model('products', productSchema)

module.exports = Product;
