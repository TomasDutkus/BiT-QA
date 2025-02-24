// npm init
// npm install @faker-js/faker
// node index.js paleidimui

//https://www.npmjs.com/package/@faker-js/faker
//https://fakerjs.dev/api/

const {faker} = require('@faker-js/faker');

// sugeneruoti netikra varda ir pavarde
let randomName = faker.person.firstName();
let randomSurname = faker.person.lastName();

console.log(randomName, randomSurname);

// sugeneruoti 100 netikru users/people, su siais duomenimis: vardas, pavarde, email, tel.nr., username, password, gimimo data

const user = {
    "name": faker.person.firstName(),
    "surname": faker.person.lastName(),
    "email": faker.internet.email(),
    "phone": faker.phone.number(),
    "username": faker.internet.username(),
    "password": faker.internet.password(),
    "birthday": faker.date.birthdate()
}

console.log(user);

const product = {
    "name": faker.commerce.productName(),
    "price": faker.commerce.price(),
    "material": faker.commerce.productMaterial(),
}

console.log(product);