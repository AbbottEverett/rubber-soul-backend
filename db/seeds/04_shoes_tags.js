const shoes_tags = require('../seedData/shoes_tags.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoes_tags').del()
    .then(() => {
      return knex.raw(
        "SELECT setval('shoes_tags_id_seq', 1, FALSE);"
      );
    })
    .then(function () {
      // Inserts seed entries
      return knex('shoes_tags').insert(shoes_tags);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('shoes_tags_id_seq', (SELECT MAX(id) FROM shoes_tags));"
      );
    });
};
