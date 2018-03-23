const shoes_sizes = require('../seedData/shoes_sizes.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoes_sizes').del()
    .then(function () {
      // Inserts seed entries
      return knex.raw(
        "ALTER SEQUENCE shoes_sizes_id_seq RESTART WITH 1;"
      );
    })
    .then(() => {
      return knex('shoes_sizes').insert(shoes_sizes);
    });
};
