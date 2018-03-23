const shoes = require('../seedData/shoes.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoes').del()
    .then(function () {
      // Inserts seed entries
      return knex.raw(
        "ALTER SEQUENCE shoes_id_seq RESTART WITH 1;"
      );
    })
    .then(() => {
      return knex('shoes').insert(shoes);
    });
};
