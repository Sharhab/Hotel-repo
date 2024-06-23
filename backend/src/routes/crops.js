// routes/crops.js
const express = require('express');
const Crop = require('../models/Crop');
const jwt = require('jsonwebtoken');
const router = express.Router();

const jwtSecret = 'your_jwt_secret_key';

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = jwt.verify(token, jwtSecret);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

// Middleware to verify if user is admin
const verifyAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).send('Access denied');
  next();
};

// Add a crop (Admin only)
router.post('/', verifyToken, verifyAdmin, async (req, res) => {
  const { name, type, plantingDate, harvestDate } = req.body;
  try {
    const crop = new Crop({ name, type, plantingDate, harvestDate });
    await crop.save();
    res.status(201).send(crop);
  } catch (error) {
    res.status(400).send({ error: 'Failed to add crop' });
  }
});

// Get all crops (All users)
router.get('/', verifyToken, async (req, res) => {
  try {
    const crops = await Crop.find();
    res.send(crops);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch crops' });
  }
});

module.exports = router;
