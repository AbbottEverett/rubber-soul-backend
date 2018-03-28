const fs = require('fs');
const shoes_sizes = require('../shoes_sizes.json');

const inventory = shoes_sizes.filter(shoe_size => {
    return shoe_size.qty;
});

let cartItems = []

for (let i = 1; i < 61; i++) {
  const cartItem = {
    id: i,
    cart_id: Math.ceil(Math.random()*30),
    cart_qty: 1
  }
  let randomProductId = Math.floor(Math.random()*inventory.length);
  let randomProduct = inventory[randomProductId];

  while (
    cartItems.some(item => item.inventory_id === randomProduct.id) ||
    !randomProduct.qty
  ) {
    randomProductId = Math.floor(Math.random()*inventory.length);
    randomProduct = inventory[randomProductId];
  }

  cartItem.inventory_id = randomProduct.id;
  randomProduct.qty--;
  cartItems.push(cartItem);
}

fs.writeFile('cartItems.json', JSON.stringify(cartItems), () => {
  console.log('File was written.');
});
