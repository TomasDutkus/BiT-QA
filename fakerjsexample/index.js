// npm init
// npm install @faker-js/faker
// npm install fs
// node index.js paleidimui

//https://www.npmjs.com/package/@faker-js/faker
//https://fakerjs.dev/api/

const {faker} = require('@faker-js/faker');
const fs = require('fs');

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
    "title": faker.commerce.product(),
    "description": faker.commerce.productDescription(),
    "price": faker.commerce.price(),
    "material": faker.commerce.productMaterial()
}

console.log(product);

const category = {
    "title": faker.commerce.department(),
    "description": faker.commerce.productDescription()
}

console.log(category);

const toy = {
    "title": faker.commerce.productName(),
    "description": faker.commerce.productDescription(),
    "price": faker.commerce.price(),
    "material": faker.commerce.productMaterial()
}

console.log(toy);

// sugeneruoti 100 users duomenu objektu
// primityvus budas

const users = [];
for (let i = 0; i < 100; i++) {
    const user = {
        "name": faker.person.firstName(),
        "surname": faker.person.lastName(),
        "email": faker.internet.email(),
        "phone": faker.phone.number(),
        "username": faker.internet.username(),
        "password": faker.internet.password(),
        "birthday": faker.date.birthdate()
    }
    users.push(user);
}

console.log(users);

function generateUser() {
    return {
        "name": faker.person.firstName(),
        "surname": faker.person.lastName(),
        "email": faker.internet.email(),
        "phone": faker.phone.number(),
        "username": faker.internet.username(),
        "password": faker.internet.password(),
        "birthday": faker.date.birthdate()
    }
}

function generateProduct() {
    return {
        "title": faker.commerce.product(),
        "description": faker.commerce.productDescription(),
        "price": faker.commerce.price(),
        "material": faker.commerce.productMaterial()
    }
}

function generateCategory() {
    return {
        "title": faker.commerce.department(),
        "description": faker.commerce.productDescription()
    }
}

function generateToy() {
    return {
        "title": faker.commerce.productName(),
        "description": faker.commerce.productDescription(),
        "price": faker.commerce.price(),
        "material": faker.commerce.productMaterial()
    }
}

function generateCompany() {
    return {
        title: faker.commerce.department(),
    }
}

const users2 = Array.from({length: 100}, generateUser);
console.log(users2);
console.log(users2.length);

const products = Array.from({length: 100}, generateProduct);
const categories = Array.from({length: 100}, generateCategory);
const toys = Array.from({length: 100}, generateToy);
const companies = Array.from({length: 100}, generateCompany);

// issaugoti visus sugeneruotus duomenis i JSON ir CSV failus
// lengvai pakeisti generuojamu duomenu kieki

fs.writeFileSync('users.json', JSON.stringify(users2, null, 4));
fs.writeFileSync('products.json', JSON.stringify(products, null, 4));
fs.writeFileSync('categories.json', JSON.stringify(categories, null, 4));
fs.writeFileSync('toys.json', JSON.stringify(toys, null, 4));
fs.writeFileSync('companies.json', JSON.stringify(companies, null, 4));

const csvHeader = Object.keys(users2[0]).join(',') + '\n';
console.log(csvHeader);

let csvRows = "";
for (let i = 0; i < users2.length; i++) {
    let csvRow = Object.values(users2[i]).join(',') + '\n';
    csvRows += csvRow;
}
fs.writeFileSync('users.csv', csvHeader + csvRows);