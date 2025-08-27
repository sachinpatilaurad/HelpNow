// backend/app.js
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
const app = express();
const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Deprecated in newer versions, but good practice for compatibility
      useUnifiedTopology: true, // Deprecated in newer versions, but good practice for compatibility
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

// Call the connectDB function
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.send('Neighborhood Help App Backend is Running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});