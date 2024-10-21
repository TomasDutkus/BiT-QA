console.log("Hello, World!");

// Number 4
// String (tekstas)
// Object (objektas)
// Boolean (true/false)
// undefined (neapibrėžtas)

let A;

console.log(A, "->", typeof A);

const B = 5;

if (B > 10) {
  A = "Daugiau nei 10";
} else {
  A = "Maziau nei 10";
}

console.log(A, "->", typeof A);

const R1 = 1 + 2;
const R2 = 1 * 2;
const R3 = 1 / 2;
const R4 = 1 - 2;

console.log(R1, R2, R3, R4);

const R5 = 0.1 + 0.2;

console.log(R5);

const R5_galutiniam = R5.toFixed(2);

console.log(R5, R5_galutiniam, "->", typeof R5_galutiniam);

const R6 = 7 % 3;

console.log(R6); // liekana

const R7 = parseInt(7 / 3);

console.log(R7); // sveikas skaicius

let R8 = 2;

R8++; // R8 = R8 + 1;

console.log(R8++); // ++R8 pries veiksma, R8++ po veiksmo

console.log(R8);

R9 = 2;

let rezultatas = R9++ * ++R9; // 2 * 4

console.log(rezultatas);

S1 = "Labas";
S2 = "rytas";

const S3 = S1 + " " + S2; // " " tarpas

console.log(S3);

let raideB = "b";

raideB++;

console.log(raideB);

console.log(raideB, "->", typeof raideB); // NaN -> not a number

const be = "Bebras";

console.log(be[0] + be[1] + be[2]); // Array
console.log(be.length); // Ilgis
console.log(be[be.length - 1]); // Paskutine raide
console.log(be[parseInt((be.length - 1) / 2)]); // Vidurine raide

const bebras2 = 55 + 20 + "Bebras";

console.log(bebras2); // Sudetis tarp stingo ir skaiciaus visuomet duoda stringa
