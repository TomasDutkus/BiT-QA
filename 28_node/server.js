const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1 style='color: red'>This is Sparta!!!</h1>");
});

app.get("/athens", (req, res) => {
  const { color, size } = req.query;
  res.send(
    `<h1 style="color: ${color ?? "black"}; font-size: ${
      size ?? 20
    }px;">This is Athens!!!</h1>`
  );
});

app.get("/athens/:color/:size", (req, res) => {
  //const color = req.params.color;
  //const size = req.params.size;
  const { color, size } = req.params;
  res.send(
    `<h1 style="color: ${color}; font-size: ${size}px;">This is Athens!!!</h1>`
  );
});

app.post("/form", (req, res) => {
  res.send("Form received");
});

app.listen(port, () => {
  console.log(`${port} Spartans ready to fight!`);
});
