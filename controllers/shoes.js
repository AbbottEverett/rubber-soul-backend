const model = require('../models');

function getAllShoes(req, res, next) {
    let data = model.shoes.getAllShoes();
    return res.status(200).json({ data });
    // model.shoes.getAllShoes()
    //     .then(shoes => {
    //         return res.status(200).json({ data....});
    //     })
    //     .catch(err =+ {
    //         next({ status: 404, message: 'asdasd'});
    //     })
}

function getShoeById(req, res, next) {
    let data = model.shoes.getShoeById(req.params.id);
    return res.status(200).json({ data });
}

module.exports = { getAllShoes, getShoeById };