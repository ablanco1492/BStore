//API router
const express       = require('express'),
	  router        = express.Router(),
	  Product       = require('../models/product'),
      productsCtrl  = require('../controllers/products.ctrl');

router.get('/api/products', productsCtrl.getAllProducts);

module.exports = router; 