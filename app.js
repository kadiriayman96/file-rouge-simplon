import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import cafeteriaRoutes from "./routes/cafeteriaRoutes.js";

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Middleware to parse JSON

// MongoDB connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/cafeterias", cafeteriaRoutes);

// Catch-all route for 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: "API route not found" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
