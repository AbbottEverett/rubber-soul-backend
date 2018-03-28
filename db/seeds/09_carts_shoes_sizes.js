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
      return knex('carts_shoes_sizes').insert(cartItemsWithoutIds);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('carts_shoes_sizes_id_seq', (SELECT MAX(id) FROM carts_shoes_sizes));"
      );
    });
};
