console.log("Hello, World!");

function suma(a, b) {
  console.log("Suma: ", a + b);
  const c = a + b;
  return c;
}

suma(2, 3);
suma(5, 6);
suma("8", 9);

const manoSuma = suma(8, 2);

console.log("Mano suma: ", manoSuma);

const manoSuma2 = suma;

console.log("Mano suma: ", manoSuma2, typeof manoSuma2);

const skirtumas = function (a, b) {
  console.log("Skirtumas: ", a - b);
  return a - b;
};

console.log(skirtumas(5, 3));

// this
const sandauga = (a, b) => {
  console.log("Sandauga: ", a * b);
  return a * b;
};

console.log(sandauga(5, 3));
