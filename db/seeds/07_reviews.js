const reviews = require('../seedData/reviews.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex.raw(
        "ALTER SEQUENCE shoes_id_seq RESTART WITH 1;"
      );
    })
    .then(() => {
      return knex('reviews').insert(reviews);
    });;
};
