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
  return model.carts.updateCart(req.params.id, req.body)
    .then(cart => {
      res.status(200).json({ data: cart });
    })
    .catch(err => {
        next({ status: 404, message: err });
    });
}

function completeCart(req, res, next) {
  let { user_id, cart_id } = req.body;
  return model.carts.completeCart(user_id, cart_id)
    .then(payload => {
      res.status(200).json({ data: payload[0] });
    })
    .catch(err => {
      next({ status: 400, message: err});
    })
}

module.exports = {
  getCartById,
  updateCart,
  completeCart
};
