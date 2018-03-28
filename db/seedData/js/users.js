const fs = require('fs');
const faker = require('faker');
let users = require('../users.json');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let usersHashed = require('./usersHashed.json');

// let hashedPassPromises = [];
// for (let i = 0; i < users.length; i++) {
//     hashedPassPromises.push(bcrypt.hash(users[i].password, 10));
// }

// Promise.all(hashedPassPromises)
//     .then(passArray => {
//         passArray.forEach((pass, i) => {
//             users[i].password = pass;
//         });
//         fs.writeFile('usersHashed.json', JSON.stringify(users), (err) => {
//             if (err) throw err;
//             console.log('Passwords hashed!');
//         })
//     });

// let users = [];

// for (let i = 1; i < 31; i++) {
//     let user = {
//         id: i,
//         first_name: faker.name.firstName(),
//         last_name: faker.name.lastName(),
//         address_line_1: faker.address.streetAddress(),
//         address_line_2: faker.address.secondaryAddress(),
//         city: faker.address.city(),
//         state: faker.address.stateAbbr(),
//         zip: faker.address.zipCode("#####"),
//         email: faker.internet.email(),
//         phone_number: faker.phone.phoneNumberFormat(2),
//         password: faker.internet.password()
//     };
//     users.push(user);
// }




