const shoes = require('../seedData/shoes.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoes').del()
    .then(() => {
      return knex.raw(
        "SELECT setval('shoes_id_seq', 1, FALSE);"
      );
    })
    .then(function () {
      // Inserts seed entries
      return knex('shoes').insert(shoes);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('shoes_id_seq', (SELECT MAX(id) FROM shoes));"
      );
    });
};
