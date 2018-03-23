
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sizes').del()
    .then(() => {
      return knex('tags').del();
    })
    .then(() => {
      return knex('shoes').del();
    });
};
