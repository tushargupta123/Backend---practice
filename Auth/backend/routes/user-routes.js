const express = require('express');
const { create, get, sendOtp, matchOtp, updatePassword } = require('../controller/user-controller');

const router = express.Router();

router.post('/signup',create);
router.post('/login',get);
router.post('/forgot',sendOtp);
router.post('/matchOtp',matchOtp);
router.post('/updatePassword',updatePassword);

module.exports = router;