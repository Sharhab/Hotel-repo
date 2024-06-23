// server.js or app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const cropRoutes = require('./routes/crops');
const livestockRoutes = require('./routes/livestock');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('your_mongo_db_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/livestock', livestockRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
