console.log("Hello, World!");

// express - ekspreso serveris
//pg  - integracija su PSql duombaze
//dotenv prisijungimo duomenu pasidejimui duombazei

const express = require("express"); // require pasiima is modules express
const app = express();
const pool = require("./database");

// prisijungimas prie duombazes

app.use(express.json()); // requestam ir responsam

// apsirasyti ROUTES - kelius
// GET products - route grazins visus produktus
// GET products/:id - route grazins viena produkta
// POST products/create - route sukurs produkta
// PUT/PATCH products/update/:id - route redaguos produkta
// DELETE products/delete/:id - route istrins produkta

// req - request
// res - response
// localhost:3000/products
app.get("/products", async (req, res) => {
    // neapibrezta klaida 400 kodas, jeigu nepavyksta prisijungti prie duombazes 500
    try {
        res.status(200).json({
            message: "Products fetched successfully"
        });
    } catch (error) {
        res.status(400).json({
            error: 'error'
        });
    }
})

// GET /users - route grazins visus users
app.get("/users", async (req, res) => {
    // neapibrezta klaida 400 kodas, jeigu nepavyksta prisijungti prie duombazes 500
    // select * from users
    try {
        const results = await pool.query("SELECT * FROM users");
        res.status(200).json(results.rows);
        //res.status(200).json({message: "Users fetched successfully"});
    } catch (error) {
        res.status(400).json({
            error: 'error'
        });
    }
})

// GET /users/:id - route grazins viena user
app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const results = await pool.query(`SELECT * FROM users WHERE id=${id}`);
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(400).json({
            error: 'error'
        });
    }
})

// POST /users - route sukurs user
app.post("/users", async (req, res) => {
    try {
        const { id, username, password } = req.body;
        const results = await pool.query(`INSERT INTO users (id, username, password) VALUES (${id}, '${username}', '${password}') RETURNING *`);
        res.status(201).json(results.rows[0]);
    } catch (error) {
        res.status(400).json({
            error: 'error'
        });
    }
})

// PUT /users/:id - route redaguos user
app.put('/users/:id', async(req, res)=> {
    try{
        const id = req.params.id;
        const {username, password} = req.body;
        const results = await pool.query(`update users set username = '${username}', "password" = '${password}' where id = ${id} returning *`);
        res.status(200).json(results.rows[0]);
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }
});

// DELETE /users/:id - route istrins user
app.delete('/users/:id', async(req, res)=> {
    try{
        const id = req.params.id;
        const results = await pool.query(`delete from users where id = ${id} returning *`);
        res.status(200).json({message: "User deleted successfully"});
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})