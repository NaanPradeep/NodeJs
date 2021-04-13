const express = require('express');
const router = express.Router();

const {
	getAllCategories, 
	getCategory
} = require('../controller/categories');


router.get('/', getAllCategories);
router.get('/:category', getCategory);

module.exports = router;