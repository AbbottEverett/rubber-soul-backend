const model = require('../models');

function getCartById(req, res, next) {
  return model.carts.getCartById(req.params.id)
    .then(cart => {
      res.status(200).json({ data: cart });
    })
    .catch(err => {
        next({ status: 404, message: err });
    });
}

function updateCart(req, res, next) {
  return model.carts.updateCart(req,params.id, req.body)
    .then(cart => {
      res.status(200).json({ data: cart });
    })
    .catch(err => {
        next({ status: 404, message: err });
    });
}

module.exports = {
  getCartById,
  updateCart
};
