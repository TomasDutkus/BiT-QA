class Stikline {
  constructor(turis) {
    this.kiekis = 0;
    this.turis = turis;
  }

  ipilti(kiekis) {
    this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
    return this;
  }

  ispilti() {
    const kiekis = this.kiekis;
    this.kiekis = 0;
    return kiekis;
  }

  stiklinejeYra() {
    console.log(
      `Stiklineje, kurios tūris ${this.turis} yra ${this.kiekis} skysčio`
    );
  }
}

const stikline100 = new Stikline(100);
const stikline150 = new Stikline(150);
const stikline200 = new Stikline(200);

stikline100.ipilti(
  stikline150.ipilti(stikline200.ipilti(500).ispilti()).ispilti()
);

stikline100.stiklinejeYra();
stikline150.stiklinejeYra();
stikline200.stiklinejeYra();

class Grybas {
  constructor() {
    this.svoris = this.#rand(5, 45);
    this.valgomas = !this.#rand(0, 1);
    this.sukirmijes = !this.#rand(0, 1);
  }

  #rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }
}

class Krepsys {
  constructor() {
    this.prideta = 0;
    this.dydis = 500;
  }

  deti(grybas) {
    if (grybas.valgomas && !grybas.sukirmijes) {
      this.prideta += grybas.svoris;
    }
    return 500 > this.prideta;
  }
}

const krepsys = new Krepsys();

do {} while (krepsys.deti(new Grybas()));

console.log(krepsys);

const manoMap = new Map();

manoMap.set("vardas", "Jonas"); // key, value
manoMap.set("pavarde", "Jonaitis");
manoMap.set("amzius", 99);
manoMap.set({ a: 1 }, "Petras");
manoMap.set("vardas", "Jolanta");
manoMap.set({ a: 1 }, "Antanas");
manoMap.set(function () {
  return 2;
}, "Jonas");
manoMap.set([1, 2, 3], "Jonas");
manoMap.delete("vardas");

console.log(manoMap.size);

console.log(manoMap);

console.log(manoMap.get("vardas")); // Jolanta
console.log(manoMap.get({ a: 1 }));

const objektas = {
  vardas: "Jonas",
  pavarde: "Jonaitis",
  amzius: 99,
};

console.log(objektas);

manoMap.forEach((value, key) => {
  console.log(key, value);
});

const manoSetas = new Set();

manoSetas.add("Jonas");
manoSetas.add("Jonas");
manoSetas.add("Jonas");
manoSetas.add("Jonas");
manoSetas.add("Petras");
manoSetas.add("Antanas");

console.log(manoSetas);

console.log(manoSetas.has("Jonas"));

manoSetas.delete("Jonas");

console.log(manoSetas.has("Jonas"));
