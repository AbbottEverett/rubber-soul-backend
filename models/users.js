const knex = require('../db/knex');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function getUserByEmail(email) {
    return knex('users')
        .select('*')
        .where('email', email)
        .first()
        .then(user => {
            return user;
        });
}

function signup(user) {
    return getUserByEmail(user.email)
         .then(existingUser => {
            // if (existingUser) throw 'User already exists';
            return bcrypt.hash(user.password, process.env.WORK_FACTOR || 10);
         })
         .then(hashedPassword => {
            user.password = hashedPassword;
            return user;
         });
         
}

function login(email, password) {
    let validUser;
    return getUserByEmail(email)
        .then(user => {
            if (!user) throw 'Please enter a valid username';
            validUser = user;
            return bcrypt.compare(password, user.password);
        }) 
}

let dummyEmail = "Cleta.Cremin@gmail.com";
let testSignup = "severettabbott@gmail.com";
let dummyUser = {
    email: dummyEmail,
    password: 'snzmT5Nx1_ovVpM'
};
let testUser = {
    email: testSignup,
    password: "mynewpassword"
};
signup(dummyUser)
    .then(user => {
        console.log(user);
    })

// login(dummyUser.email, dummyUser.password)
//     .then(result => {
//         console.log(result);
//     })