console.log("Hello, World!");

// 1. Atspausdinti visus masyvo skaičius ul tage nr1, įdėtus į <li> elementus nuo didžiausio skaičiaus iki mažiausio.

const numbers = [-150, 410, 104, 258];

const ul = document.querySelector("#nr1");
const numbersSorted = numbers.sort((a, b) => b - a);

numbersSorted.forEach((number) => {
  const li = document.createElement("li");
  li.innerText = number;
  ul.appendChild(li);
});

//2. Html'e nupiešti kvadratą. Paspaudus ant kvadrato jis virsta į apskritimą. Paspaudus dar kartą, vėl tampa kvadratu ir t.t.

const div = document.createElement("div");

div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "black";
div.style.transition = "border-radius 0.5s";

div.dataset.shape = "square";

document.body.appendChild(div);

div.addEventListener("click", (_) => {
  if (div.dataset.shape === "square") {
    div.style.borderRadius = "50%";
    div.dataset.shape = "circle";
  } else {
    div.style.borderRadius = "0px";
    div.dataset.shape = "square";
  }
});

//3. Sekcijoje nr2 įrašius tekstą į input laukelį ir paspaudus mygtuką, tas tekstas atsiranda sekcijoje nr2, virš input laukelio.

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");

btn.addEventListener("click", (_) => {
  h1.innerText = input.value;
  input.value = "";
});

// Agregacija.

//Masyvo skaiciu suma

const mas1 = [1, 2, -1, 3, 4, 5];

const suma = mas1.reduce((a, b) => {
  return a + b;
});

console.log(suma);

// Maziausias skaicius

const min = mas1.reduce((a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
});

console.log(min);

// Maziausias teigiamas skaicius

const minPositive = mas1
  .filter((el) => el > 0)
  .reduce((a, b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  });

console.log(minPositive);

// Maziausias masyvo skaicius, didesnis nei 2

const min2 = mas1
  .filter((el) => el > 2)
  .reduce((a, b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  });

console.log(min2);

// Ilgiausias masyvo zodis
const mas2 = ["antis", "višta", "povas", "kiaušas", "puodas", "šakė"];

const max = mas2.reduce((a, b) => {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
});

console.log(max);

// Trumpiausias zodis

const max2 = mas2.reduce((a, b) => {
  if (a.length < b.length) {
    return a;
  } else {
    return b;
  }
});

console.log(max2);

// Trumpiausias zodis, didesnis nei 5

const max3 = mas2
  .filter((el) => el.length > 5)
  .reduce((a, b) => {
    if (a.length < b.length) {
      return a;
    } else {
      return b;
    }
  });

console.log(max3);

// Trumpiausias zodis, didesnis nei 5 naudojant forEach cikla

let trumpiausiasDidesnisUz5WithForeach = mas2.find((zodis) => zodis.length > 5);

mas2.forEach((zodis) => {
  if (
    zodis.length < trumpiausiasDidesnisUz5WithForeach.length &&
    zodis.length > 5
  ) {
    trumpiausiasDidesnisUz5WithForeach = zodis;
  }
});

console.log(trumpiausiasDidesnisUz5WithForeach);

// Trumpiausias zodis, didesnis nei 5 naudojant for cikla

let trumpiausiasDidesnisUz5WithForOnly = mas2[0];

for (let i = 0; i < mas2.length; i++) {
  if (mas2[i].length > 5) {
    trumpiausiasDidesnisUz5WithForOnly = mas2[i];
  }
}

for (let i = 0; i < mas2.length; i++) {
  if (
    mas2[i].length < trumpiausiasDidesnisUz5WithForOnly.length &&
    mas2[i].length > 5
  ) {
    trumpiausiasDidesnisUz5WithForOnly = mas2[i];
  }
}

console.log(trumpiausiasDidesnisUz5WithForOnly);
