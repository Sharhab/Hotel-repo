// routes/crops.js
const express = require('express');
const Crop = require('../models/Crop');
const router = express.Router();

// Add a crop
router.post('/', async (req, res) => {
  const { name, type, plantingDate, harvestDate } = req.body;
  try {
    const crop = new Crop({ name, type, plantingDate, harvestDate });
    await crop.save();
    res.status(201).send(crop);
  } catch (error) {
    res.status(400).send({ error: 'Failed to add crop' });
  }
});

// Get all crops
router.get('/', async (req, res) => {
  try {
    const crops = await Crop.find();
    res.send(crops);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch crops' });
  }
});

module.exports = router;
