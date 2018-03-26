const fs = require('fs');
let reviews = require('../reviews');

function getRandomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
}

reviews = reviews.map(review => {
  const randomDate = getRandomDate(new Date('January 1, 2018'), new Date());
  review.created_at = randomDate;
  review.updated_at = randomDate;
  return review;
});

// fs.writeFile('reviewsWithRandomDates.json', JSON.stringify(reviews), (err) => {
//     if(err) throw err;
//     console.log('File was saved!');
// });
