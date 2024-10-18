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
div2Tag.style.borderRadius = "100%";

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

// 6

const span6 = document.querySelector("section#go6 [data-amount] span");
span6.innerText = 6;
