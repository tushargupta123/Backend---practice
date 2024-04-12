const express = require('express');
const { createTest,getTest } = require('../controllers/test-controller');
const router = express.Router();

router.post('/',createTest);
router.get('/',getTest);

module.exports = router;