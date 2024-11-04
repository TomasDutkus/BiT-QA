console.log("Hello, World!");

//1. Nuspalvinti Visus žodžius iš NR1 sekcijos raudonai. Naudoti forEach.

document
  .querySelectorAll("#nr1 div")
  .forEach((div) => (div.style.color = "crimson"));

// 2. Nuspalvinti visus žodžius iš NR1 sekcijos mėlynai., kurie prasideda raide "J". Naudoti forEach.

/*
document.querySelectorAll("#nr1 div").forEach((div) => {
  if (div.innerText[0] == "J") {
    div.style.color = "skyblue";
  }
});
*/

// one line

document
  .querySelectorAll("#nr1 div")
  .forEach((div) => div.innerText[0] == "J" && (div.style.color = "skyblue"));

// 3. Nuspalvinti visus skaičius iš NR2 sekcijos mėlynai, kurie yra didesni nei 10. Naudoti forEach.

document
  .querySelectorAll("#nr2 div")
  .forEach((div) => div.innerText > 10 && (div.style.color = "skyblue"));

// 4. Prie visų skaičių iš NR2 sekcijos pridėti 7. Naudoti forEach.

document
  .querySelectorAll("#nr2 div")
  .forEach((div) => (div.innerText = parseInt(div.innerText) + 7));

/* ----------------------------------------------- */

const I = document.querySelector("#I");
const Ia = document.querySelector("#Ia");

I.innerHTML = '<h2 style="color: skyblue;">Bebras1</h2>';
Ia.innerHTML = '<h2 style="color: skyblue;">Bebras1</h2>';

const II = document.querySelector("#II");
const IIa = document.querySelector("#IIa");

const h2 = document.createElement("h2");
h2.style.color = "skyblue";
const text = document.createTextNode("Bebras2");
h2.appendChild(text);

// clone

const h2Clone = h2.cloneNode(true);

// const h2Clone = h2

II.appendChild(h2);
IIa.appendChild(h2Clone);

const mas1 = [1, 2, 3, 4, 5];

mas1.forEach((el, i) => {
  console.log(el, i);
});

const mas2 = mas1.map((el) => {
  return el * 2;
});

console.log(mas2);

const mas3 = mas1.filter((el) => {
  return el > 2;
});

console.log(mas3);

const mas4 = mas1.map((el) => el * 2).filter((el) => el > 5);

console.log(mas4);

mas1[5] = "Bebras";

mas1.push("Jonas");

mas1.unshift("Ona", "Petras");

mas1.pop();

mas1.shift();

console.log(mas1);

const mas1W03 = mas1.filter((el) => el != 3);

console.log(mas1W03);
