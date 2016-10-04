// product App product controller

const mongoose = require('mongoose'),
    Product = mongoose.model('product');

function getAllProducts(req, res) {
    var query = (req.body.query != null) ? req.body.query : {};
    query.state = 'AC';
    Product.find(query).exec(function (err, data) {
        if (err) { console.log("///////////////// error querying /////////////////"); console.error(err); return handleError(err); }
        res.status(200);
        res.json(data);
    });
}


module.exports = { getAllProducts };