const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("handlebars");
const fs = require("node:fs");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 80;


const domain = "http://books.final/";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const top = fs.readFileSync("./html/top.html", "utf8");
const bottom = fs.readFileSync("./html/bottom.html", "utf8");

app.get("/", (req, res) => {
  let books = fs.readFileSync('./data/books.json', 'utf8');
  books = JSON.parse(books);
  const file = top + fs.readFileSync("./html/read.html", "utf8") + bottom;
  const template = handlebars.compile(file);
  const data = {
    pageTitle: "Knygu sarasas",
    domain, books
  };
  const html = template(data);
  res.send(html);
});

app.get("/create", (req, res) => {
  const file = top + fs.readFileSync("./html/create.html", "utf8") + bottom;
  const template = handlebars.compile(file);
  const data = {
    manoKintamasis: "Labas",
    pageTitle: "Nauja knyga",
    domain: domain,
  };
  const html = template(data);
  res.send(html);
});

/*const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));*/

app.post("/store", (req, res) => {
  const { title, author, year, genre, isbn, pages } = req.body;
  const id = uuidv4();
  // need validation
  const book = {
    id,
    title,
    author,
    year,
    genre,
    isbn,
    pages,
  };
  let data = fs.readFileSync('./data/books.json', 'utf8');
  data = JSON.parse(data);
  data.push(book);
  data = JSON.stringify(data);
  fs.writeFileSync('./data/books.json', data);

  res.status(302).redirect(domain);
});

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
