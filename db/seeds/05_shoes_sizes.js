const shoes_sizes = require('../seedData/shoes_sizes.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoes_sizes').del()
    .then(() => {
      return knex.raw(
        "SELECT setval('shoes_sizes_id_seq', 1, FALSE);"
      );
    })
    .then(function () {
      // Inserts seed entries
      return knex('shoes_sizes').insert(shoes_sizes);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('shoes_sizes_id_seq', (SELECT MAX(id) FROM shoes_sizes));"
      );
    });
};
