const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String, // e.g., Espresso, Pastry
    description: String
});

module.exports = mongoose.model('Menu', menuSchema);
