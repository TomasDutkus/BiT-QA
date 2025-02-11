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

// GET /products - route grazins visus produktus
app.get("/products", async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM products");
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(400).json({
            error: 'error'
        });
    }
})

// GET /products/:id - route grazins viena produkta
app.get("/products/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const results = await pool.query(`SELECT * FROM products WHERE id=${id}`);
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(400).json({
            error: 'error'
        });
    }
})

// POST /products - route sukurs produkta
app.post("/products", async (req, res) => {
    try {
        const { title, description, price } = req.body;
        const results = await pool.query(`INSERT INTO products (title, description, price) VALUES ('${title}', '${description}', ${price}) RETURNING *`);
        res.status(201).json(results.rows[0]);
    } catch (error) {
        res.status(400).json({
            error: 'error'
        });
    }
})

// PUT /products/:id - route redaguos produkta
app.put('/products/:id', async(req, res)=> {
    try{
        const id = req.params.id;
        const {title, description, price} = req.body;
        const results = await pool.query(`update products set title = '${title}', description = '${description}', price = ${price} where id = ${id} returning *`);
        res.status(200).json(results.rows[0]);
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }
});

// DELETE /products/:id - route istrins produkta
app.delete('/products/:id', async(req, res)=> {
    try{
        const id = req.params.id;
        const result = await pool.query(`delete from products where id = ${id} returning *`);
        res.status(200).json({product: result.rows, message: "Product deleted successfully"});
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})