const count = document.querySelector(".count");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");

subtract.addEventListener("click", (_) => count.textContent--);
reset.addEventListener("click", (_) => (count.textContent = 0));
add.addEventListener("click", (_) => count.textContent++);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") count.textContent++;
  if (e.key === "ArrowDown") count.textContent--;
  if (e.key === "0") count.textContent = 0;
});
