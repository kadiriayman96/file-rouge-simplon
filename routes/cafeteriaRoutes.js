import express from "express";
import {
  createCafeteria,
  getCafeterias,
  updateCafeteria,
  deleteCafeteria,
} from "../controllers/cafeteriaController.js";
import auth from "../middlewares/auth.js";
import role from "../middlewares/role.js";
import { validateCafeteria } from "../middlewares/validate.js";

const router = express.Router();

// Create a new cafeteria (admin only)
router.post("/", auth, role(["admin"]), validateCafeteria, createCafeteria);

// Get all cafeterias (public access)
router.get("/", getCafeterias);

// Update a cafeteria (admin only)
router.put("/:id", auth, role(["admin"]), validateCafeteria, updateCafeteria);

// Delete a cafeteria (admin only)
router.delete("/:id", auth, role(["admin"]), deleteCafeteria);

export default router;
