const { Product } = require("../models/product.model");

const { catchAsync } = require("../utils/catchAsync");

const getAllProducts = catchAsync(async (req, res, next) => {
  
  const products = await Product.findAll(   
 ); 

  res.status(200).json({
      products,
 });
});

const getProductsId = catchAsync(async (req, res, next) => {
  
});

module.exports = { getAllProducts };
