const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Menu = require('./models/Menu');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public')); // Serves your HTML

// Connect to MongoDB Compass (Localhost)
mongoose.connect('mongodb://localhost:27017/brewBoldDB');

// API to get menu items
app.get('/api/menu', async (req, res) => {
    const items = await Menu.find();
    res.json(items);
});

// Start Server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
