const express = require("express");

//Controller
const {
    getAllCategories
} = require("../controllers/category.controller");

const router = express.Router();

router.get("/", getAllCategories);

module.exports = { categoriesRouter: router };