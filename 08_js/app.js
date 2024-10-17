function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  {
  }
}

console.log("Hello, World!");

const pTag = document.querySelector("p");
pTag.style.color = "skyblue";
pTag.innerText = "Hello, World!";
const text = pTag.innerText;
console.log(text);
const color = pTag.style.color;
console.log(color);

const A = 100;
const B = 100;

const t = true;
const f = false;

console.log(typeof t);

if (A > B) {
  console.log("A > B");
} else if (A < B) {
  console.log("A < B");
} else {
  console.log("A = B");
}

const Z = 10;
const X = 20;
const Y = 20;

if (Z > X && Z > Y) {
  console.log("Z");
} else if (X > Z && X > Y) {
  console.log("X");
} else if (Y > Z && Y > X) {
  console.log("Y");
} else {
  console.log("None");
}

if (Z > X) {
  if (Z > Y) {
    console.log("Z didziausias");
  } else if (Z == Y) {
    console.log("Y ir Z didziausias");
  } else {
    console.log("Y didziausias");
  }
} else if (X > Z) {
  if (X > Y) {
    console.log("X didziausias");
  } else if (X == Y) {
    console.log("X ir Y didziausias");
  } else {
    console.log("Y didziausias");
  }
} else if (Z == X) {
  if (Z > Y) {
    console.log("Z ir X didziausi");
  } else if (Z == Y) {
    console.log("Z, X ir Y lygus 1");
  } else {
    console.log("Y didziausias");
  }
}

const C = rand(1, 100);
const D = rand(1, 100);
const E = rand(1, 100);

console.log("C:", C, "D:", D, "E:", E);

if (C > D && C > E) {
  console.log("C");
} else if (D > C && D > E) {
  console.log("D");
} else if (E > C && E > D) {
  console.log("E");
} else {
  console.log("None");
}
if (1 == 1) {
  console.log("1 == 1");
} else {
  console.log("1 != 1");
}
if (1 === "1") {
  console.log("1 === 1");
} else {
  console.log("1 !=== 1");
}
