const express = require('express');
const Vendor = require('../models/Vendor');
const router = express.Router();

// Add a Vendor
router.post('/', async (req, res) => {
  try {
    const { vendorId, name, location } = req.body;
    const vendor = new Vendor({ vendorId, name, location });
    await vendor.save();
    res.status(201).json(vendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Vendors
router.get('/', async (req, res) => {
  const vendors = await Vendor.find();
  res.json(vendors);
});

module.exports = router;
