const express = require('express');
const { create } = require('../controllers/Hotels');
const router = express.Router();

router.post('/',create);

module.exports = router;