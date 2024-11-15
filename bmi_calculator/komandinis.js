const reset = document.querySelector(".reset");
reset.addEventListener("click", (_) => {
  document.getElementById("result").innerText = "";
  document.getElementById("result").style.color = "white";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
});

function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const bmi = weight / ((height / 100) * (height / 100));
  document.getElementById("result").innerText = bmi.toFixed(2);
  if (bmi <= 18.5) {
    document.getElementById("result").style.color = "lightblue";
    document.getElementById("result").innerText += " (Underweight)";
  } else if (bmi > 18.5 && bmi <= 22.9) {
    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerText += " (Normal)";
  } else if (bmi > 22.9 && bmi <= 24.9) {
    document.getElementById("result").style.color = "yellow";
    document.getElementById("result").innerText += " (Risk to overweight)";
  } else if (bmi > 24.9 && bmi <= 29.9) {
    document.getElementById("result").style.color = "orange";
    document.getElementById("result").innerText += " (Overweight)";
  } else {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerText += " (Obese)";
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") calculateBMI();
});

document.addEventListener("keydown", (e) => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
      (document.getElementById("result").innerText = ""),
        (document.getElementById("height").value = ""),
        (document.getElementById("weight").value = "");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    document.getElementById("height").value++;
  } else if (e.key === "ArrowDown") {
    document.getElementById("height").value--;
    if (document.getElementById("height").value < 0) {
      document.getElementById("height").value = 0;
    }
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    document.getElementById("weight").value++;
  } else if (e.key === "ArrowLeft") {
    document.getElementById("weight").value--;
    if (document.getElementById("weight").value < 0) {
      document.getElementById("weight").value = 0;
    }
  }
});
