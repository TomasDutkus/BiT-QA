// atsakingas uz prisijungima prie duombazes

// duomenis is .env failo
require("dotenv").config();

const { Pool } = require("pg"); //npm i pg/ atsakingas uz prisijungima prie postgresql duombazes

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

pool.on('error', (err, client) => {
    console.error('Something went wrong', err);
    process.exit(-1);
});

// visa faila galim naudoti kaip moduli
module.exports = pool;