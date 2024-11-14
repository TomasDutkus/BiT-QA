const size = "S";

if (size === "S") {
  console.log("S");
}
if (size === "S" || size === "M") {
  console.log("M");
}
if (size === "S" || size === "M" || size === "L") {
  console.log("L");
}
if (size === "S" || size === "M" || size === "L" || size === "XL") {
  console.log("XL");
}

console.log("--------------------------------------");

switch (size) {
  case "S":
    console.log("S");
  case "M":
    console.log("M");
  case "L":
    console.log("L");
  case "XL":
    console.log("XL");
  default:
    console.log("Unknown");
}

console.log("--------------------------------------");

const letter = "B";

if (letter === "A") {
  console.log("A");
} else if (letter === "B") {
  console.log("B");
} else if (letter === "C") {
  console.log("C");
} else {
  console.log("D");
}

console.log("--------------------------------------");

switch (letter) {
  case "A":
    console.log("A");
    break;
  case "B":
    console.log("B");
    break;
  case "C":
    console.log("C");
    break;
  default:
    console.log("D");
    break;
}

console.log("--------------------------------------");

while (true) {
  console.log("Hello, World!");
  break;
}

console.log("--------------------------------------");

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let moneta1;
let moneta2;
let saugiklis = 50;

do {
  moneta1 = rand(0, 1) ? "S" : "H";
  moneta2 = rand(0, 1) ? "S" : "H";
  console.log(moneta1, moneta2);
  if (--saugiklis < 0) {
    console.log("BOOM");
    break;
  }
} while (moneta1 != "S" || moneta2 != "S");

/* invert

== <---> !=
=== <---> !==
> <---> <=
< <---> >=
|| <---> &&

*/

console.log("--------------------------------------");

let jonasTuri = 0;

const mociuteDave = rand(300, 700);

jonasTuri += mociuteDave;
console.log("Mociute dave:" + mociuteDave);

while (jonasTuri <= 500) {
  console.log("Jonas vaziuoja");
  const uzdirbo = rand(20, 100);
  jonasTuri += uzdirbo;
  console.log(jonasTuri);
}

console.log("--------------------------------------");

const masyvas = ["green", "red", "blue"];

for (let i = 0; i < masyvas.length; i++) {
  console.log(masyvas[i]);
}

for (let i in masyvas) {
  console.log(masyvas[i]);
}

for (let color of masyvas) {
  console.log(color);
}

console.log("--------------------------------------");

const objektas = {
  name: "John",
  age: 30,
  city: "New York",
};

//const key = "name";

for (let key in objektas) {
  console.log(key, objektas[key]);
}
