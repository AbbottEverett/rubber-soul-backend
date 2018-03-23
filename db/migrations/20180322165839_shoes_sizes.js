
exports.up = function(knex, Promise) {
    return knex.schema.createTable('shoes_sizes', table => {
        table.increments();
        table.integer('shoe_id').notNullable();
        table.foreign('shoe_id').references('shoes.id');
        table.integer('size_id').notNullable();
        table.foreign('size_id').references('sizes.id');
        table.integer('qty').notNullable();
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('shoes_sizes');
};
