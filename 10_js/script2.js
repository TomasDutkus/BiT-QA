console.log("Hello, World!");

const s1 = document.querySelector("#s1");

const html1 = `
<h2 style="color: skyblue;">
    HTML1
</h2>
`;

s1.innerHTML = html1;

const s2 = document.querySelector("#s2");

let bulve = "";

for (let i = 0; i <= 50; i++) {
  //bulve = bulve + "<div>" + i + "</div>";

  if (i == 5 || i == 7) {
    bulve = bulve + `<div style="background-color:green";>${i}</div>`;
  } else {
    bulve = bulve + `<div>${i}</div>`;
  }
}

s2.innerHTML = bulve;
