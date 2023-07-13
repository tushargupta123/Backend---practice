const express = require('express');
const { create, get } = require('../controller/user-controller');

const router = express.Router();

router.post('/signup',create);
router.post('/login',get);

module.exports = router;