
exports.up = function(knex, Promise) {
  return knex.schema.createTable('carts_shoes_sizes', table => {
    table.increments();
    table.integer('cart_id').notNullable();
    table.foreign('cart_id').references('carts.id');
    table.integer('inventory_id').notNullable();
    table.foreign('inventory_id').references('shoes_sizes.id');
    table.integer('cart_qty').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('carts_shoes_sizes');
};
