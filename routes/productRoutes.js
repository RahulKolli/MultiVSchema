const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Add a Product
router.post('/', async (req, res) => {
  try {
    const { productId, name, price, quantity, vendor } = req.body;
    const product = new Product({ productId, name, price, quantity, vendor });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Products
router.get('/', async (req, res) => {
  const products = await Product.find().populate('vendor');
  res.json(products);
});

module.exports = router;
