console.log("Hello, World!");

// 1 Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
  constructor() {
    this.akmenuKiekis = 0;
  }

  prideti1Akmeni() {
    this.akmenuKiekis += 1;
  }

  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
  }

  kiekPririnktaAkmenu() {
    console.log(this.akmenuKiekis);
  }
}

const kibiras = new Kibiras1();

kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(3);
kibiras.kiekPririnktaAkmenu();

// 2 Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
  }

  ideti(kiekis) {
    if (kiekis < 2) {
      this.metaliniaiPinigai += kiekis;
    } else {
      this.popieriniaiPinigai += kiekis;
    }
  }

  skaiciuoti() {
    console.log(`Popieriniai pinigai: ${this.popieriniaiPinigai}`);
    console.log(`Metaliniai pinigai: ${this.metaliniaiPinigai}`);
    console.log(`Viso: ${this.popieriniaiPinigai + this.metaliniaiPinigai}`);
  }
}

// Sukurti klasės objektą
const pinigine = new Pinigine();

// Pademonstruoti veikimą
pinigine.ideti(1);
pinigine.ideti(5);
pinigine.ideti(0.5);
pinigine.skaiciuoti();

// 3 Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

class Troleibusas {
  constructor() {
    this.keleiviuSkaicius = 0;
  }

  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
  }

  islipa(keleiviuSkaicius) {
    if (this.keleiviuSkaicius - keleiviuSkaicius < 0) {
      this.keleiviuSkaicius = 0;
    } else {
      this.keleiviuSkaicius -= keleiviuSkaicius;
    }
  }

  vaziuoja() {
    console.log(
      `Troleibusu važiuojančių keleivių skaičius: ${this.keleiviuSkaicius}`
    );
  }
}

const troleibusas = new Troleibusas();
troleibusas.ilipa(5);
troleibusas.islipa(1);
troleibusas.islipa(1);

troleibusas.vaziuoja();

// 4 (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

class Troleibusas1 {
  static visiKeleiviai = 0;
  static troleibusai = [];

  static keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log("Viso važiuojančių keleivių skaicius:" + this.visiKeleiviai);
    this.troleibusai.forEach((troleibusas) => {
      troleibusas.vaziuoja();
    });
  }

  static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
    this.visiKeleiviai += keleiviuSkaicius;
  }

  static visiLauk() {
    this.troleibusai.forEach((troleibusas) => {
      troleibusas.islipa(troleibusas.keleiviuSkaicius);
    });
  }

  constructor() {
    this.keleiviuSkaicius = 0;
    this.constructor.troleibusai.push(this);
  }

  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
    this.constructor.visiKeleiviai += keleiviuSkaicius;
  }

  islipa(keleiviuSkaicius) {
    const liko = Math.max(this.keleiviuSkaicius - keleiviuSkaicius, 0);
    this.constructor.bendrasKeleiviuSkaicius(liko - this.keleiviuSkaicius);
    this.keleiviuSkaicius = liko;
  }

  vaziuoja() {
    console.log("Troleibuso keleiviu skaicius: " + this.keleiviuSkaicius);
  }
}

const troleibusas1 = new Troleibusas1();
troleibusas1.ilipa(5);
troleibusas1.islipa(5);
troleibusas1.ilipa(5);

const troleibusas11 = new Troleibusas1();
troleibusas11.ilipa(5);
troleibusas11.islipa(4);
troleibusas11.ilipa(5);

Troleibusas1.keleiviuSkaiciusVisuoseTroleibusuose();

Troleibusas1.visiLauk();

Troleibusas1.keleiviuSkaiciusVisuoseTroleibusuose();
