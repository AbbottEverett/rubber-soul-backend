
exports.up = function(knex, Promise) {
    return knex.schema.createTable('sizes', table => {
        table.increments();
        table.float('size').notNullable();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('sizes');
};
