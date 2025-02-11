const rand = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const uzduotis1 = document.querySelector("div.select1");
const uzduotis2 = document.querySelector("div.select2");
const uzduotis3 = document.querySelector("div.select3");
const uzduotis4 = document.querySelector("div.select4");
const uzduotis5 = document.querySelector("div.select5");
const uzduotis6 = document.querySelector("div.select6");
const uzduotis7 = document.querySelector("div.select7");
const uzduotis8 = document.querySelector("div.select8");
const uzduotis9 = document.querySelector("div.select9");
const uzduotis10 = document.querySelector("div.select10");

// Užduotis 1:

const skaicius = rand(-1000, 1000);

if (skaicius > 0) {
  uzduotis1.innerText = `Skaičius ${skaicius} yra teigiamas`;
} else if (skaicius < 0) {
  uzduotis1.innerText = `Skaičius ${skaicius} yra neigiamas`;
} else {
  uzduotis1.innerText = `Skaičius yra nulis`;
}

// Užduotis 2:

const skaicius2 = rand(0, 1000);

if (skaicius2 % 2 == 0) {
  uzduotis2.innerText = `Skaičius ${skaicius2} yra lyginis`;
} else {
  uzduotis2.innerText = `Skaičius ${skaicius2} yra nelyginis`;
}

// Uzduotis 3:

const temp = rand(-30, 100);

if (temp < 0) {
  uzduotis3.innerText = `temperatūra ${temp} yra neigiama`;
} else if (temp >= 0 && temp <= 30) {
  uzduotis3.innerText = `temperatūra ${temp} yra tarp nulio ir 30`;
} else {
  uzduotis3.innerText = `It's getting hot in here`;
}

// Užduotis 4: Amžiaus tikrinimas
// Aprašymas: Sukurk kintamąjį amzius ir patikrink, ar amžius yra mažesnis nei 18, tarp 18 ir 65, ar virš 65. Atspausdink rezultatą.
// Pavyzdys: Jei amzius = 70, konsolėje turėtų atsirasti tekstas „Asmuo yra pensinio amžiaus“.

const amzius = rand(0, 100);

if (amzius < 18) {
  uzduotis4.innerText = "Mažiau nei 18";
} else if (amzius >= 18 && amzius <= 65) {
  uzduotis4.innerText = "Tarp 18 ir 65";
} else if (amzius > 65) {
  uzduotis4.innerText = "Daugiau nei 65";
}

// Užduotis 5:

const a = rand(1000, 2000);
const b = rand(1000, 2000);

if (a > b) {
  uzduotis5.innerText = `Skaičius ${a} yra didesnis už ${b}`;
} else if (b > a) {
  uzduotis5.innerText = `Skaičius ${b} yra didesnis už ${a}`;
} else {
  uzduotis5.innerText = `Skaičius ${a} yra lygus ${b}`;
}

// Užduotis 6: Pasiūlymas pirkėjui
// Aprašymas: Sukurk kintamąjį suma. Jei suma mažesnė nei 100, pasiūlyk „Įsigyk daugiau prekių“. Jei suma tarp 100 ir 500, parašyk „Jūs gaunate nuolaidą!“. Jei virš 500, parašyk „Jūs gaunate papildomą dovaną!“.
// Pavyzdys: Jei suma = 250, konsolėje turėtų atsirasti tekstas „Jūs gaunate nuolaidą!“.

const suma = rand(0, 1000);

if (suma < 100) {
  uzduotis6.innerText = "Įsigyk daugiau prekių";
} else if (suma >= 100 && suma <= 500) {
  uzduotis6.innerText = "Jūs gaunate nuolaidą";
} else if (suma > 500) {
  uzduotis6.innerText = "Jūs gaunate papildomą dovaną";
}

// Užduotis 7: Vardų patikrinimas
// Aprašymas: Sukurk kintamąjį vardas. Jei vardas yra „Jonas“, atspausdink „Labas, Jonai!“, jei „Ona“ – „Labas, Ona!“, o kitu atveju – „Labas, [vardas]!“.
// Pavyzdys: Jei vardas = „Ona“, konsolėje turėtų atsirasti tekstas „Labas, Ona!“.

let vardas = rand(1, 4);
const jonas = 1;
const ona = 2;
const tomas = 3;

if (vardas === jonas) {
  uzduotis7.innerText = "Labas, Jonai!";
} else if (vardas === ona) {
  uzduotis7.innerText = "Labas, Ona!";
} else if (vardas === tomas) {
  vardas = "Tomas";
  uzduotis7.innerText = `Labas, ${vardas}!`;
}

// Užduotis 8: Egzaminų rezultatas
// Aprašymas: Sukurk kintamąjį rezultatas. Jei rezultatas didesnis nei 90, parašyk „Puiku!“, jei tarp 60 ir 90 – „Gerai!“, jei žemiau 60 – „Nepakanka!“.
// Pavyzdys: Jei rezultatas = 85, konsolėje turėtų atsirasti tekstas „Gerai!“.

const rezultatas = rand(0, 100);

if (rezultatas > 90) {
  uzduotis8.innerText = "Puiku!";
} else if (rezultatas >= 60 && rezultatas <= 90) {
  uzduotis8.innerText = "Gerai!";
} else if (rezultatas < 60) {
  uzduotis8.innerText = "Nepakanka!";
}

// Užduotis 9: Darbo valandos
// Aprašymas: Sukurk kintamąjį valandos. Jei valandos reikšmė tarp 9 ir 17 (imtinai), parašyk „Dabar darbo laikas“, kitu atveju – „Ne darbo laikas“.
// Pavyzdys: Jei valandos = 14, konsolėje turėtų atsirasti tekstas „Dabar darbo laikas“.

const valandos = rand(0, 24);

if (valandos >= 9 && valandos <= 17) {
  uzduotis9.innerText = "Dabar darbo laikas";
} else if (valandos < 9 || valandos > 17) {
  uzduotis9.innerText = "Ne darbo laikas";
}

// Užduotis 10: Studentų balai
// Aprašymas: Sukurk kintamuosius studentas1 ir studentas2. Patikrink, kuris iš jų gavo daugiau balų, ir atspausdink atitinkamą pranešimą.
// Pavyzdys: Jei studentas1 = 75 ir studentas2 = 85, konsolėje turėtų atsirasti tekstas „Studentas 2 gavo daugiau balų“.

const studentas1 = rand(0, 100);
const studentas2 = rand(0, 100);

if (studentas1 > studentas2) {
  uzduotis10.innerText = "Studentas 1 gavo daugiau balų";
} else if (studentas1 < studentas2) {
  uzduotis10.innerText = "Studentas 2 gavo daugiau balų";
}
