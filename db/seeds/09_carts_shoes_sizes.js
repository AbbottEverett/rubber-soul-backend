const cartItems = require('../seedData/cartItems');
const cartItemsWithoutIds = cartItems.map(cartItem => {
  const { id, ...newItem } = cartItem;
  return newItem;
});

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('carts_shoes_sizes').del()
    .then(function () {
      // Inserts seed entries
      return knex.raw(
        "ALTER SEQUENCE shoes_id_seq RESTART WITH 1;"
      );
    })
    .then(() => {
      return knex('carts_shoes_sizes').insert(cartItemsWithoutIds);
    });
};
