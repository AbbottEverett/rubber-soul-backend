const shoeData = require('../resources/shoeData.json');
const sizes = require('./sizes.json');

let shoeSizes = [];

shoeData.forEach((shoe, i) => {
    shoe.sizes.forEach((size, j) => {
        let key = Object.keys(size)[0];
        let qty = size[key];
        let newShoeSize = {
            id: shoeSizes.length,
            shoe_id: i+1,
            size_id: j+1,
            qty
        };
        shoeSizes.push(newShoeSize);
    });
});
