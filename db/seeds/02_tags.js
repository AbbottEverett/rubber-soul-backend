const tags = require('../seedData/tags.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex.raw(
        "ALTER SEQUENCE tags_id_seq RESTART WITH 1;"
      );
    })
    .then(() => {
      return knex('tags').insert(tags);
    });
};
