console.log("Hello, World!");

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, "0")
  );
}

// 1 Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. Visi tagai turi rikiuotis į vieną eilutę.

const s1Tag = document.querySelector("#s1");

for (let i = 0; i < 14; i++) {
  const h1Tag = document.createElement("h1");
  h1Tag.innerText = 4;
  s1Tag.appendChild(h1Tag);
}
for (let i = 0; i < 14; i++) {
  const h4Tag = document.createElement("h4");
  h4Tag.innerText = 1;
  s1Tag.appendChild(h4Tag);
}

// 2 Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) surašykite 44 atsitiktinius skaičius nuo 14 iki 44. Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai.

const s2Tag = document.querySelector("#s2");
let p2Tag = "";

for (let i = 0; i < 44; i++) {
  const randNr2 = rand(14, 44);
  if (randNr2 % 4 === 0) {
    p2Tag += `<span style="color: red">${randNr2}</span>`;
  } else {
    p2Tag += `<span style="color: blue">${randNr2}</span>`;
  }
}

s2Tag.innerHTML = p2Tag;

// 3 Naršyklėje nupieškite 14 mėlynų apskritimų, išdėliotų eilute.

const s3Tag = document.querySelector("#s3");

for (let i = 0; i < 14; i++) {
  const p3Tag = document.createElement("p");
  p3Tag.style.width = "50px";
  p3Tag.style.height = "50px";
  p3Tag.style.border = "1px solid blue";
  p3Tag.style.margin = "5px";
  p3Tag.style.backgroundColor = "blue";
  p3Tag.style.borderRadius = "50%";
  s3Tag.appendChild(p3Tag);
}

// 4 Naršyklėje nupieškite 4 mėlynus ir 4 raudonus apskritimus, išdėliotus eilute  “zebru”. (raudonas, mėlynas, raudonas…).

const s4Tag = document.querySelector("#s4");

for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    const p4Tag = document.createElement("p");
    p4Tag.style.width = "50px";
    p4Tag.style.height = "50px";
    p4Tag.style.border = "1px solid blue";
    p4Tag.style.margin = "5px";
    p4Tag.style.backgroundColor = "blue";
    p4Tag.style.borderRadius = "50%";
    s4Tag.appendChild(p4Tag);
  } else {
    const p4Tag = document.createElement("p");
    p4Tag.style.width = "50px";
    p4Tag.style.height = "50px";
    p4Tag.style.border = "1px solid red";
    p4Tag.style.margin = "5px";
    p4Tag.style.backgroundColor = "red";
    p4Tag.style.borderRadius = "50%";
    s4Tag.appendChild(p4Tag);
  }
}

// 5 Naršyklėje nupieškite daugybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.

const s5Tag = document.querySelector("#s5");

for (let i = 4; i <= 14; i++) {
  // 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
  const p5Tag = document.createElement("p");
  p5Tag.style.margin = "5px";
  p5Tag.style.border = "1px solid black";
  p5Tag.innerText = `${i} * 4 = ${i * 4}`;
  s5Tag.appendChild(p5Tag);
}

// 6 Naršyklėje nupieškite linija iš 444 “*” (tarp žvaigždučių tarpų nėra). Programiškai “suskaldykite” (naudodami tagus atskirom žvaigždučių grupėm) žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 44 “*”.

const s6Tag = document.querySelector("#s6");
let p6Tag = "";

for (let i = 1; i <= 444; i++) {
  if (i % 44 === 0) {
    p6Tag += "*<br>";
  } else {
    p6Tag += "*";
  }
}

s6Tag.innerHTML = p6Tag;

// 7 Naršyklėje nupieškite 14 atsitiktinių spalvų kvadratų esančių vienas kitame (“matrioška”).#pamastykKaip

const s7Tag = document.querySelector("#s7");

for (let i = 0; i < 14; i++) {
  const p7Tag = document.createElement("p");
  p7Tag.style.width = "50px";
  p7Tag.style.height = "50px";
  p7Tag.style.border = "1px solid blue";
  p7Tag.style.margin = "5px";
  p7Tag.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  s7Tag.appendChild(p7Tag);
}
