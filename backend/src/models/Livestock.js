// models/Livestock.js
const mongoose = require('mongoose');

const LivestockSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  birthDate: { type: Date, required: true },
  healthStatus: { type: String, required: true }
});

module.exports = mongoose.model('Livestock', LivestockSchema);
