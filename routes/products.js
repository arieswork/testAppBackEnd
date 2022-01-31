const products = require('./../services/products/controllers/products');
const bodyParser = require('body-parser');

module.exports = function (app, router) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    router.get('/products', products.getProducts);

    router.get('/product/:id', products.getProduct);

    router.post('/product', products.insertProduct);

    router.put('/product/:id', products.updateProduct);

    router.delete('/product/:id', products.deleteProduct);

    router.get('/products/query', products.searchProducts);
}







