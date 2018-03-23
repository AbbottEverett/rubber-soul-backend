const sizes = require('../seedData/sizes.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sizes').del()
    .then(function () {
      // Inserts seed entries
      return knex.raw(
        "ALTER SEQUENCE sizes_id_seq RESTART WITH 1;"
      );
    })
    .then(() => {
      return knex('sizes').insert(sizes);
    });
};
