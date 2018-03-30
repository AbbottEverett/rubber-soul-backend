const knex = require('../db/knex');
const inventory = require('./inventory')

function createCart(user_id = null) {
  return knex('carts').insert({ user_id }).returning('*');
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
  if (cart_id === "null") {
    return createCart().then(cart => updateCart(cart[0].id, item));
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

function completeCart(user_id, cart_id) {
  let cartItems;
  let inventoryForItems;
  return getCartById(cart_id)
    .then(res => {
      let inventoryPromises = []
      cartItems = res.items;
      cartItems.forEach(item => {
        let inventoryProm = inventory.getInventoryCount(item.shoe_id, item.size);
        inventoryPromises.push(inventoryProm);
      });
      return Promise.all(inventoryPromises);
    })
    .then(res => {
      inventoryForItems = res;
      let cartIsValid = true;
      let invalidItem;
      inventoryForItems.forEach((invItem, i) => {
        if (invItem.qty < cartItems[i].cart_qty) {
          cartIsValid = false;
          invalidItem = cartItems[i];
          return;
        }
      });
      console.log(invalidItem);
      if (!cartIsValid) throw Error(`Not enough inventory for shoe_id: ${invalidItem.shoe_id}, size: ${invalidItem.size}`)
      return knex('carts')
          .where('id', cart_id)
          .update({ is_completed: true });
    })
    .then(res => {
      let newInventoryProms = [];
      cartItems.forEach(item => {
        let newInvProm = inventory.modifyInventory(item.shoe_id, item.size, item.cart_qty);
        newInventoryProms.push(newInvProm);
      })
      return Promise.all(newInventoryProms);
    })
    .then(res => {
      return createCart(user_id)
    })
    .then(res => {
      return res;
    })
}

module.exports = {
  getCartById,
  updateCart,
  createCart,
  completeCart
};
