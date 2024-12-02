const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("handlebars");
const fs = require("node:fs");
const app = express();
const port = 80;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/create", (req, res) => {
  const file = fs.readFileSync("./html/create.html", "utf8");
  const template = handlebars.compile(file);
  const data = { manoKintamasis: "Labas" };
  const html = template(data);
  res.send(html);
});

/*const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));*/

app.listen(port, () => {
  console.log(`Knygynas darbui pasiruoses ant ${port} porto`);
});

/*
create (rodo tuscia forma) GET url:/create
store (issaugo nauja irasa) POST url:/store data
delete (rodo trynimo patvirtinima) GET url:/delete/45 id
destroy (trina pasirinkta irasa) DELETE url:/destroy/45 id
edit (rodo uzpildyta forma) GET url:/edit/45 id
update (pakeicia pasirinkta irasa) PUT url:/update/45 id, data
read (irasu sarasa) GET url:/
show (rodo pasirinkta irasa) GET url:/show/45 id
*/