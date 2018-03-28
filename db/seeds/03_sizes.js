const sizes = require('../seedData/sizes.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sizes').del()
    .then(() => {
      return knex.raw(
        "SELECT setval('sizes_id_seq', 1, FALSE);"
      );
    })
    .then(function () {
      // Inserts seed entries
      return knex('sizes').insert(sizes);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('sizes_id_seq', (SELECT MAX(id) FROM sizes));"
      );
    });
};
