const express = require('express');
const router = express.Router();

const getCart = require('../controller/cart');

router.get('/', getCart);

module.exports = router;