const fs = require('fs');

let carts = [];

for (let i = 1; i < 31; i++) {
    let cart = {
        id: carts.length+1,
        user_id: i,
        is_completed: false
    }
    carts.push(cart);
}

fs.writeFile('carts.json', JSON.stringify(carts), (err) => {
    if (err) throw err;
    console.log('File success')
});