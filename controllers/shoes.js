const model = require('../models');

function getAllShoes(req, res, next) {
    return model.shoes.getAllShoes()
        .then(shoes => {
            res.status(200).json({ data: shoes });
        })
        .catch(err => {
            next({ status: 500, message: 'Internal Server Error' });
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

function getAllBrands(req, res, next) {
  return model.shoes.getAllBrands()
    .then(brands => {
        res.status(200).json({ data: brands });
    })
    .catch(err => {
        next({ status: 404, message: err });
    });
}

function getAllTags(req, res, next) {
  return model.shoes.getAllTags()
    .then(tags => {
        res.status(200).json({ data: tags });
    })
    .catch(err => {
        next({ status: 404, message: err });
    });
}

function getAllSizes(req, res, next) {
  return model.shoes.getAllSizes()
    .then(sizes => {
        res.status(200).json({ data: sizes });
    })
    .catch(err => {
        next({ status: 404, message: err });
    });
}

function getAllColors(req, res, next) {
  return model.shoes.getAllColors()
    .then(colors => {
      res.status(200).json({ data: colors });
    })
    .catch(err => {
        next({ status: 404, message: err });
    });
}

module.exports = {
  getAllShoes,
  getShoeById,
  getAllBrands,
  getAllTags,
  getAllSizes,
  getAllColors
};
