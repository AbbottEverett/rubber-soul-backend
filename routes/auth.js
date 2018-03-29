const express = require('express');
const controller = require('../controllers');
const router = express.Router({ mergeParams: true });
const authorize = require('./authorizeMiddleware');

router.post('/reviews', authorize, controller.reviews.createReview);

module.exports = router;