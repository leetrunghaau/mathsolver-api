// server.js

const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Load environment variables from .env file
dotenv.config();

// Parse JSON body
app.use(express.json());

// Routes
const apiRoutes = require('./routes/index');
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
