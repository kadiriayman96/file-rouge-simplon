import express from "express";
import {
  createMenu,
  getMenus,
  updateMenu,
  deleteMenu,
} from "../controllers/menuController.js";
import { validateMenu } from "../middlewares/validate.js";
import auth from "../middlewares/auth.js";
import role from "../middlewares/role.js";

const router = express.Router();

// Route to create a new menu (admin only)
router.post("/", auth, role(["admin"]), validateMenu, createMenu);

// Route to get all menus for a specific cafeteria (public access)
router.get("/", getMenus);

// Route to update a menu (admin only)
router.put("/:id", auth, role(["admin"]), validateMenu, updateMenu);

// Route to delete a menu (admin only)
router.delete("/:id", auth, role(["admin"]), deleteMenu);

export default router;
