console.log("Hello, World!");

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// 1

const s1Tag = document.querySelector("#s1");

for (let i = 0; i < 14; i++) {
  const h1Tag = document.createElement("h1");
  h1Tag.innerText = 4;
  s1Tag.appendChild(h1Tag);
}
for (let i = 0; i < 14; i++) {
  const h4Tag = document.createElement("h4");
  h4Tag.innerText = 1;
  s1Tag.appendChild(h4Tag);
}

// 2

const s2Tag = document.querySelector("#s2");
