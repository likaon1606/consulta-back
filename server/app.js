const express = require("express");

const { productsRouter } = require('./routes/products.route')

const { Product } = require('./models/product.model');
const { Category } = require('./models/category.model');

//Utils data base { db }
const { db } = require("./utils/database");

//Init express app
const app = express();

//Enable incoming JSON DATA
app.use(express.json());

// Enpoints
app.use("/api/v1/products", productsRouter);

// Authenticate db
db.authenticate()
  .then(() => console.log("Database authenticate"))
  .catch((err) => console.log(err));

// Establish relations
Category.hasMany(Product);
Product.belongsTo(Category);

db.sync()
  .then(() => console.log("Database Synced"))
  .catch((err) => console.log(err));

//Up server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Express app sunning on port: ${PORT}`);
});

module.exports = { app };
