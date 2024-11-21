class Elektra {
  constructor() {
    this.elektra = "AC220v";
  }
}
class TV extends Elektra {
  constructor(savininkas) {
    super();
    this.istrizaine = 55;
    this.savininkas = savininkas;
  }
  rodytiPrograma() {
    console.log("Default TV programa");
  }
}

class TVSamsung extends TV {
  constructor(savininkas) {
    super(savininkas);
    this.modelis = "Samsung";
    this.istrizaine = 65;
  }
}

class TVSony extends TV {
  constructor(savininkas) {
    super(savininkas);
    this.modelis = "Sony";
    this.elektra = "AC110v";
  }
  rodytiPrograma() {
    console.log("Sony programa");
  }
}

const tv1 = new TVSamsung("Tomas");
const tv2 = new TVSony("Petras");

console.log(tv1, tv2);

tv1.rodytiPrograma();
tv2.rodytiPrograma();

class Cart {
  static instance;
  static createCart() {
    if (!this.instance) {
      this.instance = new Cart();
    }
    return this.instance;
  }

  constructor() {
    this.items = [];
  }
  addProduct(product) {
    this.items.push(product);
  }
  #doSomething() {
    console.log("Something");
  }
}

const cart1 = Cart.createCart();
const cart2 = Cart.createCart();

cart1.addProduct("Product 1");
cart1.addProduct("Product 2");
cart2.addProduct("Product 3");
cart2.addProduct("Product 4");

console.log(cart1, cart2);
