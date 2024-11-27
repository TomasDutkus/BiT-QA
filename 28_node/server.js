const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1 style='color: red'>This is Sparta!!!</h1>");
});

app.get("/vilnius", (req, res) => {
  const data = {
    hello: "Hello, Vilnius!",
  };
  res.json(data);
});

app.get("/vilnius/:color/:size", (req, res) => {
  //const color = req.params.color;
  //const size = req.params.size;
  const { color, size } = req.params;
  const data = {
    color: color,
    size: size,
  };
  res.json(data);
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
  //const { name, surname, email, password } = req.body;
  //res.send(`Form post received! ${name} ${surname} ${email} ${password}`);
  res.status(302).redirect("http://localhost:3000/success");
});

app.get("/success", (req, res) => {
  res.send("<h1>Forma gavome!</h1>");
});

app.listen(port, () => {
  console.log(`${port} Spartans ready to fight!`);
});
