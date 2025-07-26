// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to database
mongoose.connect('mongodb://localhost/rakhi-sibling');

// Middleware
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));