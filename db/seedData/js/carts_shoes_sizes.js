const fs = require('fs');
const shoes_sizes = require('../shoes_sizes.json');
const shoes = require('../shoes.json');

const inventory = shoes_sizes.filter(shoe_size => {
    return shoe_size.qty > 0;
});

let cart_shoe_sizes = []
let count = 0;

for (let i = 1; i < 31; i++) {
    let itemCount = Math.floor(Math.random() * 5)
    for (let j = 0; j < itemCount; j++) {
        let shoe_size_check = inventory[count+j];
        console.log(shoe_size_check)
        let cart_shoe_size = {
            id: cart_shoe_sizes+1,
            cart_id: i,
            shoe_size_id: count+j+1,
        } 
    }
    count = itemCount;
    
}



