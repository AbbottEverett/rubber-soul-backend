
exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', table => {
        table.increments();
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('users.id');
        table.integer('shoe_id').notNullable();
        table.foreign('shoe_id').references('shoes.id');
        table.string('title').notNullable();
        table.text('content').notNullable();
        table.integer('star_count').notNullable();
        table.integer('thumbs_up').notNullable();
        table.integer('thumbs_down').notNullable();
        table.timestamps(true, true);
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reviews');
};
