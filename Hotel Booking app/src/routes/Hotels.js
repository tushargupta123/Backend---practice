const express = require('express');
const { create, getAll, makeComment, rate, update } = require('../controllers/Hotels');
const router = express.Router();

router.post('/',create);
router.patch('/:id',update);
router.get('/',getAll);
router.post('/comment',makeComment);
router.post('/rate',rate);

module.exports = router;