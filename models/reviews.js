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

function createReview(review) {
  return knex('reviews')
    .where({ shoe_id: review.shoe_id })
    .insert({
      ...review,
      thumbs_up: 1,
      thumbs_down: 1
    })
    .returning('*')
}

module.exports = {
  getAllReviewsById,
  getAverageReviewScoreById,
  createReview,
 };
