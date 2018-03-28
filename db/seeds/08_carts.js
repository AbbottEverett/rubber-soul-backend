const carts = require('../seedData/carts');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('carts').del()
    .then(function () {
      // Inserts seed entries
      return knex('carts').insert(carts);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('carts_id_seq', (SELECT MAX(id) FROM carts));"
      );
    });
};
