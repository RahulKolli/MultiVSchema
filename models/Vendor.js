const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  vendorId: { type: Number, unique: true },
  name: { type: String, required: true, unique: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model('Vendor', vendorSchema);
