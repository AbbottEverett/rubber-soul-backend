const express = require('express');
const controller = require('../controllers');
const router = express.Router();

router.get('/:id', controller.carts.getCartById);
router.patch('/:id', controller.carts.updateCart);

module.exports = router;
