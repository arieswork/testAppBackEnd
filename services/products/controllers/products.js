var mongoService = require('./../../mongoDB/services/mongoService.js')
function getProducts (req, res) {
    mongoService.findProduct().then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(400).send(err.message);
    })
}

function getProduct(req, res) {
    const id = Number(req.params.id);
    const product = products.find(product => product.id === id)
    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product);
}

function insertProduct(req, res) {
    mongoService.insertProduct(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(400).send(err);
    })
}

const updateProduct = ((req, res) => {
    const id = Number(req.params.id)
    const index = products.findIndex(product => product.id === id)
    const updatedProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price
    }

    products[index] = updatedProduct
    res.status(200).json('Product updated')
})

const deleteProduct = ((req, res) => {
    const id = Number(req.params.id)
    const index = products.findIndex(product => product.id === id)
    products.splice(index, 1)
    res.status(200).json('Product deleted')
})

const searchProducts = ((req, res)=>{
    const str = req.query.name.toLowerCase();
    const result = products.filter(product => product.name.toLowerCase().includes(str));

    if (result.length < 1) {
        return res.status(200).send('No products matched your search');
    }
    res.json(result);
})

module.exports = {
    getProducts,
    getProduct,
    insertProduct,
    updateProduct,
    deleteProduct,
    searchProducts
}
