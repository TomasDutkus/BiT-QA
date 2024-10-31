console.log("Hello, World!");

// 1. Reikia parašyti funkciją, kuri priima vieną argumentą - stringą ir tą stringą ideda į h1 tagą ir tą h1 tagą ideda į body tagą.
/*
function addH1(string) {
  const h1Tag = document.createElement("h1");
  h1Tag.textContent = string;
  document.body.appendChild(h1Tag);
}

addH1("Hello, World!");
*/
const fun1 = (text) => {
  const body = document.querySelector("body");
  const h1Html = `<h1>${text}</h1>`;
  body.innerHTML = h1Html;
};

fun1("Hello, World!");

// 2. Reikia parašyti funkciją, kuri priima vieną argumentą - stringą ir ras stringas yra spalva, kuria reikia nuspalvinti h1 tagą.

const fun2 = (color) => {
  const h1Tag = document.querySelector("h1");
  h1Tag.style.color = color;
};

fun2("crimson");

// 3. Reikia parašyti funkciją, kuri nieko nepriima, bet pakeičia h1 tago teksta į "Kaboom!".

const fun3 = () => {
  const h1Tag = document.querySelector("h1");
  h1Tag.textContent = "Kaboom!";
};

fun3();

let A = 5;
let B = A; // by value

A = A + 2;

console.log(A, B);

const C = [5, "labas", true];
const D = C; // by reference
const F = [...C]; // by copying values

C[0] = C[0] + 2;

console.log(C, D, F);

const fun4 = (...rest) => {
  console.log(rest[0] + rest[1]);
};

fun4(1, 2);

const fun5 = (a, b) => {
  console.log(a + b);
};

const spread = [1, 2];

fun5(...spread);

const person = {
  name: "Vardenis",
  surname: "Pavardenis",
  age: 99,
  city: "Vilnius",
  country: "Lietuva",
  hasTail: true,
};

const { age, city } = person;

console.log(age, city);

const animals = ["bebras", "lokys", "vilkas"];

const [animal1, animal2] = animals;

console.log(animal1, animal2);

const bigFun = (a, b) => {
  console.log("BIG FUN SUM:", a + b);
};

const notFun = (c) => {
  const d = 5;
  const e = 8;
  c(d, e); // calling bigFun
};

notFun(bigFun);

const printItem = (item) => {
  console.log("ITEM:", item.toUpperCase());
};

const itemsData = (f) => {
  const items = ["stalas", "kede", "lova", "spinta"];

  for (let i = 0; i < items.length; i++) {
    f(items[i]);
  }
};

console.log("------------------------------------");

itemsData(printItem);

console.log("------------------------------------");

itemsData((item) => {
  console.log("ITEM:", item.toUpperCase());
});

console.log("------------------------------------");

const coolItems = ["stalas", "kede", "lova", "spinta"];

for (let i = 0; i < coolItems.length; i++) {
  console.log("ITEM:", coolItems[i].toUpperCase());
}

console.log("------------------------------------");

// forEach nieko negrazina
coolItems.forEach((item, index) => {
  if (index < 3) {
    console.log("ITEM:", index + 1, item.toUpperCase());
  }
});

console.log("------------------------------------");

// map grazina nauja masyva
const newItems = coolItems.map((item, index) => {
  return index + 1 + ":" + item.toUpperCase();
});

console.log(newItems);

console.log("------------------------------------");

const withDivs = coolItems.map((item) => {
  return `<div>${item.toUpperCase()}</div>`;
});

console.log("WITH DIVS:", withDivs);

let divs = "";

for (let i = 0; i < withDivs.length; i++) {
  divs += withDivs[i];
}

const body = document.querySelector("body");
body.innerHTML = divs;
