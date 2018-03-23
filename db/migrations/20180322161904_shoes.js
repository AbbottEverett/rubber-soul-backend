
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shoes', table => {
    table.increments();
    table.string('model').notNullable();
    table.string('brand').notNullable();
    table.text('imgURL').notNullable();
    table.string('color').notNullable();
    table.float('price').notNullable();
    table.text('description').notNullable();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('shoes');
};
