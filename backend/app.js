// backend/app.js
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Neighborhood Help App Backend is Running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});