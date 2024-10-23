console.log("Hello, World!");

// 1

const h1Tag = document.querySelector("h1");
h1Tag.innerText = 1;
const h2Tag = document.querySelector("h2");
h2Tag.innerText = 2;
const h3Tag = document.querySelector("h3");
h3Tag.innerText = 3;
const h4Tag = document.querySelector("h4");
h4Tag.innerText = 4;

// 2

const div1Tag = document.querySelector("div:nth-of-type(1)");
const div2Tag = document.querySelector("div:nth-of-type(2)");

div1Tag.style.width = "50px";
div1Tag.style.height = "50px";
div1Tag.style.border = "1px solid blue";
div1Tag.style.backgroundColor = "blue";

div2Tag.style.width = "50px";
div2Tag.style.height = "50px";
div2Tag.style.border = "1px solid red";
div2Tag.style.backgroundColor = "red";
div2Tag.style.borderRadius = "50%";

// 3

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  {
  }
}

const A = rand(0, 4);
const B = rand(0, 4);

if (A > B) {
  //console.log(A, "divided by", B, "is", A / B);
  document.querySelector("section#go3 span:nth-of-type(1)").innerText = A;
  document.querySelector("section#go3 span:nth-of-type(2)").innerText = B;
  document.querySelector("section#go3 span:nth-of-type(3)").innerText = A / B;
} else if (A < B) {
  //console.log(B, "divided by", A, "is", B / A);
  document.querySelector("section#go3 span:nth-of-type(1)").innerText = B;
  document.querySelector("section#go3 span:nth-of-type(2)").innerText = A;
  document.querySelector("section#go3 span:nth-of-type(3)").innerText = B / A;
} else {
  //console.log(A, "is equal to", B);
  document.querySelector("section#go3 span:nth-of-type(1)").innerText = A;
  document.querySelector("section#go3 span:nth-of-type(2)").innerText = B;
  document.querySelector("section#go3 span:nth-of-type(3)").innerText = A / B;
}

// 4

const C = rand(50, 200);
const D = rand(50, 200);
const E = rand(50, 200);

document.querySelector("section#go4").style.display = "flex";

const cTag = document.querySelector("section#go4 div:nth-of-type(1)");
cTag.style.width = C + "px";
cTag.style.height = C + "px";
cTag.style.border = "1px solid blue";
cTag.style.backgroundColor = "blue";
cTag.style.borderRadius = "50%";

const dTag = document.querySelector("section#go4 div:nth-of-type(2)");
dTag.style.width = D + "px";
dTag.style.height = D + "px";
dTag.style.border = "1px solid red";
dTag.style.backgroundColor = "red";
dTag.style.borderRadius = "50%";

const eTag = document.querySelector("section#go4 div:nth-of-type(3)");
eTag.style.width = E + "px";
eTag.style.height = E + "px";
eTag.style.border = "1px solid green";
eTag.style.backgroundColor = "green";
eTag.style.borderRadius = "50%";

cTag.style.order = C;
dTag.style.order = D;
eTag.style.order = E;

// 5

const F = rand(-10, 10);
const G = rand(-10, 10);
const H = rand(-10, 10);

document.querySelector("section#go5 span:nth-of-type(1)").innerText = F;
document.querySelector("section#go5 span:nth-of-type(2)").innerText = G;
document.querySelector("section#go5 span:nth-of-type(3)").innerText = H;

if (F < 0) {
  document.querySelector("section#go5 span:nth-of-type(1)").style.color = "red";
} else if (F > 0) {
  document.querySelector("section#go5 span:nth-of-type(1)").style.color =
    "blue";
} else {
  document.querySelector("section#go5 span:nth-of-type(1)").style.color =
    "green";
}

if (G < 0) {
  document.querySelector("section#go5 span:nth-of-type(2)").style.color = "red";
} else if (G > 0) {
  document.querySelector("section#go5 span:nth-of-type(2)").style.color =
    "blue";
} else {
  document.querySelector("section#go5 span:nth-of-type(2)").style.color =
    "green";
}

if (H < 0) {
  document.querySelector("section#go5 span:nth-of-type(3)").style.color = "red";
} else if (H > 0) {
  document.querySelector("section#go5 span:nth-of-type(3)").style.color =
    "blue";
} else {
  document.querySelector("section#go5 span:nth-of-type(3)").style.color =
    "green";
}

// 6

const zvakes = rand(5, 3000);

let nuolaida;

if (zvakes > 1000 && zvakes < 2000) {
  nuolaida = "3";
} else if (zvakes > 2000) {
  nuolaida = "4";
} else {
  nuolaida = "0";
}

let kaina;
if (zvakes > 1000 && zvakes < 2000) {
  kaina = zvakes - zvakes * 0.03;
} else if (zvakes > 2000) {
  kaina = zvakes - zvakes * 0.04;
} else {
  kaina = zvakes;
}

const zvakesVnt = document.querySelector("section#go6 [data-amount] span");
zvakesVnt.innerText = zvakes;
const zvakesKaina = document.querySelector("section#go6 [data-subtotal] span");
zvakesKaina.innerText = zvakes;
const zvakesNuolaida = document.querySelector(
  "section#go6 [data-discount] span"
);
zvakesNuolaida.innerText = nuolaida;
const galutineKaine = document.querySelector("section#go6 [data-total] span");
galutineKaine.innerText = kaina;

// 7

const I = rand(1, 3);

document.querySelector("section#go7").style.display = "flex";

const iTag = document.querySelector("section#go7 div:nth-of-type(1)");

if (I == 1) {
  iTag.style.width = "50px";
  iTag.style.height = "50px";
  iTag.style.border = "1px solid blue";
  iTag.style.backgroundColor = "blue";
  iTag.style.borderRadius = "50%";
} else if (I == 2) {
  iTag.style.width = "50px";
  iTag.style.height = "50px";
  iTag.style.border = "1px solid red";
  iTag.style.backgroundColor = "red";
} else {
  iTag.style.width = "50px";
  iTag.style.height = "50px";
  iTag.style.border = "1px solid green";
  iTag.style.backgroundColor = "green";
  iTag.style.clipPath = "polygon(50% 0, 100% 100%, 0 100%)";
}

// 8

let J = document.querySelector("section#go8 div:nth-of-type(2)").style
  .backgroundColor;
console.log(J);
