console.log("Hello, World!");

let a = true;

console.log(a, "->", typeof a);

a = !a; // ! loginis ne

console.log(a, "->", typeof a);

b = 5;
c = "Labas";
d = 0;
e = "";

console.log(!!b); // !! tikroji logine reiksme
console.log(!!c);
console.log(!!d);
console.log(!!e);

// visi skaiciai yra true isskyrus 0, tuscias stringas yra false, undefined yra false, nan yra false, null yra false

if (8) {
  console.log("true");
} else {
  console.log("false");
}

if (0) {
  console.log("true");
} else {
  console.log("false");
}

if (40 - 20 - 20) {
  console.log("nera nulis");
} else {
  console.log("yra nulis");
}

console.log("true || true:", true || true); // || arba
console.log("true || false:", true || false);
console.log("false || true:", false || true);
console.log("false || false:", false || false);

console.log("true && true:", true && true); // && ir
console.log("true && false:", true && false);
console.log("false && true:", false && true);
console.log("false && false:", false && false);

// true if between 3 and 7

const skaicius = 5;

if (skaicius >= 3 && skaicius <= 7) {
  console.log("true");
} else {
  console.log("false");
}

// 5 or 7

if (skaicius == 5 || skaicius == 7) {
  console.log("true");
} else {
  console.log("false");
}

let ats;

console.log(ats || "nera atsakymo");
