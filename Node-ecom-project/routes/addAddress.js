const express = require('express');
const router = express.Router();

const {
	addBillingAddress, 
	addShippingAddress
} = require('../controller/addAddress')


router.post('/addBillingAddress', addBillingAddress);
router.post('/addShippingAddress', addShippingAddress);

module.exports = router;