
exports.up = function(knex, Promise) {
    return knex.schema.createTable('shoes_tags', table => {
      table.increments();
      table.integer('shoe_id').notNullable();
      table.foreign('shoe_id').references('shoes.id');
      table.integer('tag_id').notNullable();
      table.foreign('tag_id').references('tags.id');
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('shoes_tags');
};
  
  
