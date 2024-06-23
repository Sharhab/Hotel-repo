// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/farm_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const userRoutes = require('./routes/users');
const cropRoutes = require('./routes/crops');
const livestockRoutes = require('./routes/livestock');

app.use('/api/users', userRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/livestock', livestockRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
