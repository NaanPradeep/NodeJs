const express = require('express');
const router = express.Router();

const getUserInfo = require('../controller/profile');

router.get('/', getUserInfo);

module.exports = router;