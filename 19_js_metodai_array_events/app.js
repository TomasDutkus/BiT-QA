console.log("Hello, World!");

const machines = [
  "Traktorius",
  "Kombainas",
  "Volavimo mašina",
  "Buldozeris",
  "Krautuvas",
  "Keltuvas",
  "Kranas",
  "Kompresorius",
];

// 1. Padaryti HTML, sąrašą <ul>, su class="machines-list". Naudoti forEach. createElement ir appendChild.

const ul = document.querySelector(".machines-list");

machines.forEach((machine) => {
  const li = document.createElement("li");
  const text = document.createTextNode(machine);
  li.appendChild(text);
  // li.textContent = machine;
  ul.appendChild(li);
});

document.body.appendChild(ul);

// 2. Padaryti HTML, sąrašą <ul>, su class="machines-list-1", kuriame nebūtų "Krano" (nufiltruoti filter metodu). Naudoti forEach. createElement ir appendChild.

const ul1 = document.querySelector(".machines-list-1");

machines
  .filter((machine) => machine !== "Kranas")
  .forEach((machine) => {
    const li = document.createElement("li");
    const text = document.createTextNode(machine);
    li.appendChild(text);
    ul1.appendChild(li);
  });

// 3. Padaryti HTML, sąrašą <ul>, su class="machines-list-2", kuriame nebūtų "Volo" ir "Keltuvo" (nufiltruoti filter metodu).
// Prie kiekvieno aparato gale pridėti " - mašina". Naudoti map metodą.
// Naudoti forEach. createElement ir appendChild.

const ul2 = document.querySelector(".machines-list-2");

machines
  .filter((machine) => machine !== "Volavimo mašina" && machine !== "Keltuvas")
  .map((machine) => `${machine} - mašina`)
  .forEach((machine) => {
    const li = document.createElement("li");
    const text = document.createTextNode(machine);
    li.appendChild(text);
    ul2.appendChild(li);
  });

const digits = [44, 87, 43, 0, 87, 58, 95, 21];

digits.sort((a, b) => a - b);
console.log(digits);

// Pagal stringo ilgo
machines.sort((a, b) => b.length - a.length);
console.log(machines);

// Pagal pirma raide
machines.sort((a, b) => {
  if (a[0] < b[0]) {
    return -1;
  }
  if (a[0] > b[0]) {
    return 1;
  }
  return;
});

console.log(machines);

// Pagal pirma raide
machines.sort((a, b) => a[0].localeCompare(b[0]));

console.log(machines);
