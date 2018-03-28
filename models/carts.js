const knex = require('../db/knex');

function createCart(userId = null) {
  return knex('carts').insert({ userId });
}

function getCartById(id) {
  let cart;
  return knex('carts')
    .where({ id })
    .first()
    .select('id as cart_id', 'user_id')
    .then(result => {
      cart = result;
      return knex('carts_shoes_sizes')
        .where({ cart_id: id })
        .join('shoes_sizes', 'inventory_id', '=', 'shoes_sizes.id')
        .join('sizes', 'size_id', '=', 'sizes.id')
        .select('cart_qty', 'shoe_id', 'size');
    })
    .then(result => {
      if (cart) cart.items = result;
      return cart;
    })

}

function updateCart(cart_id, item) {
  if (!cart_id) {
    createCart().then(cart => updateCart(cart.id, item));
  } else {
    let inventory_id;
    return knex('sizes')
      .where({ size: item.size})
      .select('id')
      .first()
    .then(size => {
      return knex('shoes_sizes')
        .where({ shoe_id: item.shoe_id, size_id: size.id })
        .select('id')
        .first();
    })
    .then(inventory => {
      inventory_id = inventory.id;
      if (item.qty) {
        console.log('Item qty is greater than 0')
        return knex('carts_shoes_sizes')
          .where({ cart_id, inventory_id })
          .first()
          .then(existingItem => {
            if (existingItem) {
              return knex('carts_shoes_sizes')
                .where({ cart_id, inventory_id })
                .update({ cart_qty: item.qty });
            } else {
              return knex('carts_shoes_sizes')
                .insert({ cart_id, inventory_id, cart_qty: item.qty });
            }
          })
      } else {
        return knex('carts_shoes_sizes')
          .where({ cart_id, inventory_id })
          .del()
      }
    })
    .then(result => {
      return knex('carts').where({ id: cart_id })
        .update({ updated_at: new Date() });
    })
    .then(result => {
      return getCartById(cart_id);
    });
  }
}

function completeCart(id, cart) {

}

module.exports = {
  getCartById,
  updateCart
};

updateCart(1, { shoe_id: 1, size: 9, qty: 0 }).then(res => console.log(res));
