const express = require('express');
const controller = require('../controllers');
const router = express.Router({ mergeParams: true });
const authorize = require('./authorizeMiddleware');

router.post('/reviews', authorize, controller.reviews.createReview);
router.patch('/cart/complete', authorize, controller.carts.completeCart);

module.exports = router;