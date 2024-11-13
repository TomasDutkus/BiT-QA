function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, "0")
  );
}

// 10 Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ 444 pusiau permatomus atsitiktinės spalvos ir atsitiktinio skersmens nuo 44 iki 144 (px) apskritimus. Apskritimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną.#fun

const totalCircles = 444;
let circles = "";

for (let i = 0; i < totalCircles; i++) {
  const circleSize = rand(44, 144);
  const circleColor = randomColor();
  const top = rand(0, window.innerHeight - circleSize);
  const left = rand(0, window.innerWidth - circleSize);

  circles += `<div style= "
    position: absolute;
    width: ${circleSize}px;
    height: ${circleSize}px;
    background: ${circleColor};
    opacity: 0.5;
    top: ${top}px;
    left: ${left}px;
    border-radius: 50%;
  "></div>`;
}

document.body.innerHTML = circles;
