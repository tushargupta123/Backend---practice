const express = require('express');
const { create, update, getById, destroy } = require('../controllers/Booking');
const router = express.Router();

router.post('/',create);
router.patch('/:id',update);
router.get('/:id',getById);
router.delete('/:id',destroy);

module.exports = router;