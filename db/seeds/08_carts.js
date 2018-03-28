const carts = require('../seedData/carts');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('carts').del()
    .then(function () {
      // Inserts seed entries
      return knex.raw(
        "ALTER SEQUENCE shoes_id_seq RESTART WITH 1;"
      );
    })
    .then(() => {
      return knex('carts').insert(carts);
    });
};
