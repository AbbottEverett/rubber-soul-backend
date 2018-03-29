const express = require('express');
const controller = require('../controllers');
const router = express.Router();
console.log(controller.reviews);
router.post('/', controller.reviews.createReview);


module.exports = router;
