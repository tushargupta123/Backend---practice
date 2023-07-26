const express = require('express');
const { createDish, getDishes, deleteDish, updateDish, getDisheById } = require('../controllers/dish-controller');
const router = express.Router();

router.post('/',createDish);
router.get('/',getDishes);
router.delete('/:id',deleteDish);
router.patch('/:id',updateDish);
router.get('/:id',getDisheById);

module.exports = router;