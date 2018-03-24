const fs = require('fs');
const faker = require('faker');
const shoesHighest = 134;
const usersHighest = 30;

let review = {
    id: 1,
    user_id: Math.floor(Math.random() * usersHighest) + 1,
    shoe_id: 1,
    title: faker.lorem.lines(1),
    content: faker.lorem.paragraph(),
    star_count: Math.floor(Math.random() * 5) + 1,
    thumbs_up: Math.floor(Math.random() * 6),
    thumbs_down: Math.floor(Math.random() * 6),
};

let reviews = [];

for (let i = 1; i < shoesHighest; i++) {
    let reviewCount = Math.floor(Math.random() * 11);
    if (i === 65) {
        reviewCount = 0;
    }
    for (let j = 0; j < reviewCount; j++) {
        let review = {
            id: reviews.length+1,
            user_id: Math.floor(Math.random() * usersHighest) + 1,
            shoe_id: i,
            title: faker.lorem.lines(1),
            content: faker.lorem.paragraph(),
            star_count: Math.floor(Math.random() * 5) + 1,
            thumbs_up: Math.floor(Math.random() * 6),
            thumbs_down: Math.floor(Math.random() * 6),
        }
        reviews.push(review);
    }
}

// fs.writeFile('reviews.json', JSON.stringify(reviews), (err) => {
//     if(err) throw err;
//     console.log('File was saved!');
// });