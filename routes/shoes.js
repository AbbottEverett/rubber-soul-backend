const express = require('express');
const controller = require('../controllers');
const router = express.Router();

router.get('/', controller.shoes.getAllShoes);
router.get('/:id', controller.shoes.getShoeById);

module.exports = router;