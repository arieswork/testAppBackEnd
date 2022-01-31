var mongodb = require("./../index.js");
var Q = require('q');

module.exports = {
    findProduct: function () {
        var deferred = Q.defer();
        const products = mongodb.getCollectionProducts();
        products.find({}).toArray(function(err, result) {
            if (err) {
             deferred.reject(err);
            }
            console.log(result);
            deferred.resolve(result);
          });
        return deferred.promise;
    },

    insertProduct: function(req, res){
        var deferred = Q.defer();
        const products = mongodb.getCollectionProducts();
        products.insertOne(req.body, function(err, result){
            if (err) {
                deferred.reject(err);
               }
               deferred.resolve({msg: '1 document inserted'});  
        })
        return deferred.promise;
    }
}