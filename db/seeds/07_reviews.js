const reviews = require('../seedData/reviewsWithRandomDates');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(() => {
      return knex.raw(
        "SELECT setval('reviews_id_seq', 1, FALSE);"
      );
    })
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert(reviews);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews));"
      );
    });;
};
