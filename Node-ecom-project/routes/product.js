const express = require('express');
const router = express.Router();

const {getProduct, addToCart} = require('../controller/product');

router.get('/:productID', getProduct);
router.post('/:productID/addToCart', addToCart);

module.exports = router;