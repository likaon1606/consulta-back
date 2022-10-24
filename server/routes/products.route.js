const express = require("express");

//Controller
const { getAllProducts } = require("../controllers/products.controller");

const router = express.Router();

router.get("/", getAllProducts);

module.exports = { productsRouter: router };
