// routes/livestock.js
const express = require('express');
const Livestock = require('../models/Livestock');
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

// Add livestock (Admin only)
router.post('/', verifyToken, verifyAdmin, async (req, res) => {
  const { name, type, birthDate, healthStatus } = req.body;
  try {
    const livestock = new Livestock({ name, type, birthDate, healthStatus });
    await livestock.save();
    res.status(201).send(livestock);
  } catch (error) {
    res.status(400).send({ error: 'Failed to add livestock' });
  }
});

// Get all livestock (All users)
router.get('/', verifyToken, async (req, res) => {
  try {
    const livestock = await Livestock.find();
    res.send(livestock);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch livestock' });
  }
});

module.exports = router;
