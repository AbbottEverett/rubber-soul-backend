const knex = require('../db/knex');

function getAllReviewsById(id) {
    return knex('reviews')
        .where({ shoe_id: id })
        .join('users', 'users.id', '=', 'user_id')
        .select(
          'reviews.id as review_id',
          'user_id',
          'first_name',
          'last_name',
          'title',
          'content',
          'star_count',
          'updated_at',
          'thumbs_up',
          'thumbs_down'
        )
        .orderBy('updated_at', 'desc');
}

function getAverageReviewScoreById(id) {
    return knex('reviews')
        .avg('star_count')
        .where({ shoe_id: id})
        .first();
}

module.exports = { getAllReviewsById, getAverageReviewScoreById };
