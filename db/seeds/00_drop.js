
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoes_tags').del()
    .then(() => {
      return knex('shoes_sizes').del();
    })
    .then(() => {
      return knex('tags').del();
    })
    .then(() => {
      return knex('sizes').del();
    })
    .then(() => {
      return knex('reviews').del();
    })
    .then(() => {
      return knex('users').del();
    })
    .then(()=>{
     return knex('shoes').del();
    });
};
