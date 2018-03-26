const express = require('express');
const controller = require('../controllers');
const router = express.Router();

router.get('/', controller.shoes.getAllShoes);
router.get('/brands', controller.shoes.getAllBrands);
router.get('/tags', controller.shoes.getAllTags);
router.get('/sizes', controller.shoes.getAllSizes);
router.get('/:id', controller.shoes.getShoeById);

module.exports = router;
