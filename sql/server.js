const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
const port = 6457;
app.use(bodyParser.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'forest'
});

con.connect((err) => {
    if (err) {
        console.log('Klaida prisijungiant prie DB');
        return;
    }
    console.log('Prisijungeme prie DB');
});

app.get('/', (req, res) => {
    const sql = 
    `SELECT id, name, height, type
    FROM forest.4
    ORDER BY height DESC
    `;

    con.query(sql, (err, data) => {
        if (err) {
            res.send('Klaida gaunant duomenis');
            return;
        }
        res.json(data);
    });
});
 
app.listen(port, () => {
    console.log(`Duombazynas darbui pasiruošęs ant ${port} porto!`);
});