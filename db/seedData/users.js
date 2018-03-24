const fs = require('fs');
const faker = require('faker');

let users = [];

for (let i = 1; i < 31; i++) {
    let user = {
        id: i,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        address_line_1: faker.address.streetAddress(),
        address_line_2: faker.address.secondaryAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zip: faker.address.zipCode("#####"),
        email: faker.internet.email(),
        phone_number: faker.phone.phoneNumberFormat(2),
        password: faker.internet.password()
    };
    users.push(user);
}




