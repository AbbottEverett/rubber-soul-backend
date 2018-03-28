
exports.up = function(knex, Promise) {
  return knex.schema.createTable('carts', table => {
    table.increments();
    table.integer('user_id');
    table.foreign('user_id').references('users.id');
    table.boolean('is_completed').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('carts');
};
