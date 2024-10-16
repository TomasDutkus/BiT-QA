console.log("Hello, World!");

console.log(4 + 5 * 7);

const myFirstDigit = 4;
const mySecondDigit = 5;
const myThirdDigit = 7;

let myResult = myFirstDigit + mySecondDigit * myThirdDigit;
console.log(myResult);

myResult = myResult + 100;
console.log(myResult);

{
  let myResult = "Hi";
  console.log(myResult, typeof myResult);
  {
    let myResult = "Hello";
    console.log(myResult, typeof myResult);
  }
}

console.log(myResult, typeof myResult);

let number = 1 + 1;
console.log(number, typeof number);
let string = 1 + "1";
console.log(string, typeof string);

const me = {};
me.name = "Tomas";
me.age = 37;
me.about = {};
me.about.hometown = "Vilnius";
me.about.favoriteColor = "red";
console.log(me, typeof me);

console.log(document);

const h1 = document.querySelector("h1");
h1.innerText = myResult;
h1.style.color = "blue";
console.log(h1, typeof h1);