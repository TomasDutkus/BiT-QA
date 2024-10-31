console.log("Hello, World!");

// 1 Sukurti funkcija, kuri priima 2 kintamuosius ir grazina didesni

function compare(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

const fun1 = (a, b) => {
  return a > b ? a : b;
};

console.log(compare(1, 2));
console.log(fun1(1, 2));

// 2 Sukurti funkcija, kuri priima 2 stringus ir grazina trumpesni

const fun2 = (a, b) => {
  if (a.length < b.length) {
    return a;
  }
  return b;
};

console.log(fun2("hello", "world"));

// 3. Sukurti funkciją, kuri priima 2 kintamuosius. Jeigu didesnis pirmas grąina 1, jeigu didesnis antras grąžina -1, jeigu lygūs grąžina 0.

const fun3 = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};

const funTer3 = (a, b) => {
  return a > b && a != b ? 1 : a < b && a != b ? -1 : 0;
};

const fun33 = (a, b) => {
  return a === b ? 0 : a > b ? 1 : -1;
};

console.log(fun3(1, 2));
console.log(funTer3(1, 2));
console.log(fun33(1, 2));

function funSum(a, b) {
  return a + b;
}

const funSum2 = function (a, b) {
  return a + b;
};

const funSum3 = (a, b) => {
  return a + b;
};

const funSum4 = (a, b) => a + b;

console.log(funSum4(1, 2));

function funBig1(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

const funBig2 = function (a, b) {
  if (a > b) {
    return a;
  }
  return b;
};

const funBig3 = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

const funBig4 = (a, b) => (a > b ? a : b);

function funStrLen1(a) {
  return a.length;
}

const funStrLen2 = function (a) {
  return a.length;
};

const funStrLen3 = (a) => {
  return a.length;
};

const funStrLen4 = (a) => a.length;

function FunReturnLabas1() {
  return "labas";
}

const FunReturnLabas2 = function () {
  return "labas";
};

const FunReturnLabas3 = () => {
  return "labas";
};

const FunReturnLabas4 = () => "labas";

console.log(FunReturnLabas4());

const fun3sum = (a, b, c) => a + b + c;

console.log(fun3sum(1, 2, 3));

const funSumMany1 = (a, b, ...rest) => {
  console.log(rest);

  let sumAll = 0;
  for (let i = 0; i < rest.length; i++) {
    sumAll += rest[i];
  }
  return a + b + sumAll;
};

console.log(funSumMany1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const funSumMany2 = (...rest) => {
  let sumAll = 0;
  for (let i = 0; i < rest.length; i++) {
    sumAll += rest[i];
  }
  return sumAll;
};

console.log(funSumMany2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const animals = ["cat", "dog", "elephant", "lion", "tiger"];

const animals2 = [...animals];

const animals3 = animals;

animals[0] = "bear";

console.log(animals2, animals3);
