console.log("Hello, World!");

const obj = {
  name: "Mario",
  age: 32,
  job: "plumber",
};

console.log(obj);

class PlayerCharacter {
  constructor(name, age, job, lives = 3) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.speed = 10;
    this.strength = this.age * 2;
    this.lives = lives;
  }
}

const obj1 = new PlayerCharacter("Mario", 32, "plumber");
const obj2 = new PlayerCharacter("Luigi", 30, "plumber", 10);

console.log(obj1, obj2);

class TV {
  #channel = 1;
  constructor(owner) {
    this.brand = "Samsung";
    this.model = "UE55NU7172UXXH";
    this.year = 2018;
    this.price = 500;
    this.owner = owner;
    this.turnedOn = false;
  }

  turnOn() {
    this.turnedOn = true;
    console.log(
      this.owner + " turning on the TV and watching channel " + this.#channel
    );
  }

  turnOff() {
    this.turnedOn = false;
    console.log(this.owner + " turned off the TV");
  }

  // setter
  changeChannel(channel) {
    if (this.turnedOn === false) {
      console.log("TV is off");
      return;
    }
    if (channel < 1 || channel > 100) {
      console.log("Wrong channel");
      return;
    }
    this.#channel = channel;
    console.log(this.owner + " changed channel to " + this.#channel);
  }

  // getter
  channel() {
    return this.#channel;
  }
}

const tv1 = new TV("Petras");
const tv2 = new TV("Jonas");

console.log(tv1, tv2);

tv1.turnOn();
tv1.changeChannel(2);
/*let info = tv1.channel();
++info;
tv1.changeChannel(info); */
tv1.turnOff();
