import Menu from "../models/Menu.js";

// Create a new menu
export const createMenu = async (req, res) => {
  const { name, description, price, cafeteria } = req.body;

  try {
    const newMenu = new Menu({
      name,
      description,
      price,
      cafeteria,
    });

    await newMenu.save();
    res.status(201).json({ message: "Menu created successfully", newMenu });
  } catch (error) {
    res.status(500).json({ message: "Error creating menu", error });
  }
};

// Get all menus for a specific cafeteria
export const getMenus = async (req, res) => {
  const cafeteriaId = req.query.cafeteria;

  try {
    const menus = await Menu.find({ cafeteria: cafeteriaId });
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: "Error fetching menus", error });
  }
};

// Update a menu by ID
export const updateMenu = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );

    if (!updatedMenu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    res.status(200).json({ message: "Menu updated successfully", updatedMenu });
  } catch (error) {
    res.status(500).json({ message: "Error updating menu", error });
  }
};

// Delete a menu by ID
export const deleteMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMenu = await Menu.findByIdAndDelete(id);

    if (!deletedMenu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    res.status(200).json({ message: "Menu deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting menu", error });
  }
};
