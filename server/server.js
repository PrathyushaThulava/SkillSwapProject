const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const protect = require("./middleware/authMiddleware");
const skillRoutes = require("./routes/skillRoutes");

const app = express(); // ✅ MUST come before using app

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/skills", skillRoutes);


// Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Protected test route
app.get("/api/test", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    userId: req.userId
  });
});

// Base route
app.get("/", (req, res) => {
  res.send("Skill Swap API Running");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
