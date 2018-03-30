const knex = require('../db/knex');

function getInventoryCount(shoe_id, size) {
    let size_id;
    return knex('sizes')
        .where('size', size)
        .select('id')
        .first()
        .then(res => {
            size_id = res.id;
            return knex('shoes_sizes')
                .where('shoe_id', shoe_id)
                .andWhere('size_id', res.id)
                .returning('*')
                .first();
        });
}

function modifyInventory(shoe_id, size, cart_qty) {
    let size_id;
    return getInventoryCount(shoe_id, size)
        .then(res => {
            let newQty = res.qty-cart_qty;
            return knex('shoes_sizes')
                .where('id', res.id)
                .update('qty', newQty)
                .returning('*')
        })
        .then(res => {
            return res[0];
        })
}

module.exports = {
    getInventoryCount, modifyInventory
}
