const shoeData = require('../resources/shoeData.json');

let shoes = [];

shoes = shoeData.map((shoe, i) => {
    let shoeModified = {
        id: i+1,
        model: shoe.model,
        brand: shoe.brand,
        imgURL: shoe.imgURL,
        color: shoe.color,
        price: shoe.price,
        description: shoe.description
    };
    return shoeModified;
});

function getAllShoes () {
    return shoes;
}

function getShoeById(id) {
    return shoes.find(shoe => {
        return shoe.id === parseInt(id);
    });
}

module.exports = { getAllShoes, getShoeById };