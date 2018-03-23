const shoes_tags = require('../seedData/shoes_tags.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoes_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex.raw(
        "ALTER SEQUENCE shoes_tags_id_seq RESTART WITH 1;"
      );
    })
    .then(() => {
      return knex('shoes_tags').insert(shoes_tags);
    });
};
