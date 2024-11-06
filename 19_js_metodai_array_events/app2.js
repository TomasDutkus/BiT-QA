console.log("Hello, World!");

document.querySelector("#btn1").addEventListener("click", (e) => {
  console.log("Button 1 clicked");
});

document.querySelector("#btn1").addEventListener("dblclick", (e) => {
  console.log("Button 1 dbclicked");
});

document.querySelector("#btn2").addEventListener("click", (e) => {
  console.log("Button 2 clicked");
});

window.addEventListener("scroll", (e) => {
  console.log("Window scrolled", window.scrollY);
});

document.querySelector("#btn3").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link clicked", e.target);
});

document.querySelector(".tevas").addEventListener("click", (e) => {
  document.querySelector(".tevas").style.backgroundColor = "darkred";
  // e.target.style.backgroundColor = "darkred";
});

document.querySelector(".vaikas").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".vaikas").style.backgroundColor = "darkblue";
});
