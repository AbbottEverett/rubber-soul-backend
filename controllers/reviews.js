const model = require ('../models');

function createReview(req, res, next) {
  return model.reviews.createReview(req.body)
    .then(review => {
      res.status(200).json({data: review});
  }).catch(err => {
    console.log(err);
    next({status: 500, message: 'Internal Server Error'});
  });
}

module.exports = {
  createReview
};


// {
//   star_count,
//   title,
//   content,
//   first_name,
//   last_name,
//   shoe_id,
//   thumbs_up,
//   thumbs_down,
// }
