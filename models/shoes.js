const knex = require('../db/knex');

function getAllShoes () {
    let shoeTags;
    let shoeSizes;
    return knex('shoes_tags')
            .innerJoin('tags', 'shoes_tags.tag_id', 'tags.id')
            .orderBy('shoe_id')
            .select('shoe_id', 'name')
            .then(res => {
                shoeTags = res;
                return knex('shoes_sizes')
                    .innerJoin('sizes', 'shoes_sizes.size_id', 'sizes.id')
                    .orderBy('shoe_id')
                    .select('shoe_id', 'size', 'qty');
            })
            .then(res => {
                shoeSizes = res;
                return knex('shoes')
                        .orderBy('id');
            })
            .then(res => {
                let shoesArr = [...res];
                let tags = [];
                let sizes = [];
                let currentId = 1;
                shoeTags.forEach(shoeTag => {
                    if (shoeTag.shoe_id > currentId) {
                        shoesArr[currentId-1].tags = tags;
                        currentId = shoeTag.shoe_id;
                        tags = [];
                    }
                    tags.push(shoeTag.name);
                });
                if (tags.length) {
                    shoesArr[currentId-1].tags = tags;
                    currentId = 1;
                }
                shoeSizes.forEach(shoeSize => {
                    if (shoeSize.shoe_id > currentId) {
                        shoesArr[currentId-1].sizes = sizes;
                        currentId = shoeSize.shoe_id;
                        sizes = [];
                    }
                    sizes.push({ [shoeSize.size]: shoeSize.qty });
                });
                if (sizes.length) {
                    shoesArr[currentId-1].sizes = sizes;
                }
                return shoesArr;
            })
            .catch(err => {
                console.log(err);
            });
        
}

function getShoeById(id) {
    return knex('shoes')
        .where({ id: id })
        .first();
}

getAllShoes();


module.exports = { getAllShoes, getShoeById };