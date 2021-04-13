const express = require('express');
const router = express.Router();

const addNewProduct = require('../controller/addProduct');

router.post('/', addNewProduct);

module.exports = router;

