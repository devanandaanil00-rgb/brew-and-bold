const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Menu = require("./models/menu");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public")); // Serves your HTML

// Connect to MongoDB Compass (Localhost)
mongoose.connect(process.env.MONGO_URI);

// API to get menu items
app.get("/api/menu", async (req, res) => {
    const menu=await Menu.find();
    res.json(menu);
});

app.post("/api/order", (req, res) => {
  const order = req.body;
  console.log("New Order:", order);

  res.json({ message: "Order received!" });
});

// Start Server
const PORT =process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));
