import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { validateRegistration } from "../middlewares/validate.js";

const router = express.Router();

// Register a new user
router.post("/register", validateRegistration, registerUser);

// Login user
router.post("/login", loginUser);

export default router;
