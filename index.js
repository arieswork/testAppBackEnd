const express = require('express');
const app = express();
const router = express.Router();
// Middleware
const logger = (req, res, next) =>{
    console.log('API :', req.url);
    console.log('req.params --> ', req.params);
    console.log('req.query --> ', req.query);
    console.log('req.body --> ', req.body);
    next();
}

require('./routes/products.js')(app, router);

app.use('/api', router);
app.use(logger);

app.listen(7000, () => {
    console.log('Node server is listening on port 7000');
})

module.exports = app;
