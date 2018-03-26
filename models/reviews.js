const knex = require('../db/knex');

function getAllReviewsById(id) {
    return knex('reviews')
        .where({ shoe_id: id });
}

function getAverageReviewScoreById(id) {
    return knex('reviews')
        .avg('star_count')
        .where({ shoe_id: id})
        .first();
}

getAverageReviewScoreById(2);

module.exports = { getAllReviewsById, getAverageReviewScoreById };