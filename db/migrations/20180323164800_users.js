
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('address_line_1')
    table.string('address_line_2')
    table.string('city')
    table.string('state')
    table.integer('zip')
    table.string('email').notNullable();
    table.string('phone_number')
    table.string('password').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
