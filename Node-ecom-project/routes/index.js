const express = require('express');
const router = express.Router();

const getHomePage = require('../controller/index');

router.get('/', getHomePage);

module.exports = router;