const model = require('../models');

function getAllShoes(req, res, next) {
    return model.shoes.getAllShoes()
        .then(shoes => {
            res.status(200).json({ data: shoes });
        })
        .catch(err => {
            next({ status: 404, message: err });
        });
}

function getShoeById(req, res, next) {
    return model.shoes.getShoeById(req.params.id)
        .then(shoe => {
            res.status(200).json({ data: shoe });
        })
        .catch(err => {
            next({ status: 404, message: err });
        });
}

module.exports = { getAllShoes, getShoeById };