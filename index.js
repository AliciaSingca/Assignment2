//Alicia Singca | 301336105 | 02-23-2024
const express = require("express");
const cors = require("cors")
const { mongoConnect } = require("./mongo");
const productRouter = require("./src/routes/product.router");
const categoryRouter = require("./src/routes/category.router");

const app = express();
app.get("/", (req, res) => {
    res.send({ message: "Welcome to DressStore application." });
});
app.use(express.json());
app.use(productRouter);
app.use(categoryRouter);
app.use(cors());
const port = process.env.PORT || 8000;

async function startServer() {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
  await mongoConnect();
}

startServer();
