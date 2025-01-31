console.log("Hello, World!");

// express - ekspreso serveris
//pg  - integracija su PSql duombaze
//dotenv prisijungimo duomenu pasidejimui duombazei

const express = require("express"); // require pasiima is modules express
const app = express();

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

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})