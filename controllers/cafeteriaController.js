import Cafeteria from "../models/Cafeteria.js";

// Get all cafeterias
export const getCafeterias = async (req, res) => {
  try {
    const cafeterias = await Cafeteria.find();
    res.json(cafeterias);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cafeterias", error });
  }
};

// Create a new cafeteria
export const createCafeteria = async (req, res) => {
  const { name, location, manager, description } = req.body;

  // Validate input
  if (!name || !location || !manager || !description) {
    return res
      .status(400)
      .json({
        message:
          "All fields are required: name, location, manager, description",
      });
  }

  try {
    const cafeteria = new Cafeteria({ name, location, manager, description });
    await cafeteria.save();
    res.status(201).json(cafeteria);
  } catch (error) {
    res.status(500).json({ message: "Error creating cafeteria", error });
  }
};

// Update a cafeteria
export const updateCafeteria = async (req, res) => {
  const { id } = req.params;
  const { name, location, manager, description } = req.body;

  try {
    const cafeteria = await Cafeteria.findByIdAndUpdate(
      id,
      { name, location, manager, description },
      { new: true }
    );
    if (!cafeteria) {
      return res.status(404).json({ message: "Cafeteria not found" });
    }
    res.json(cafeteria);
  } catch (error) {
    res.status(500).json({ message: "Error updating cafeteria", error });
  }
};

// Delete a cafeteria
export const deleteCafeteria = async (req, res) => {
  const { id } = req.params;

  try {
    const cafeteria = await Cafeteria.findByIdAndDelete(id);
    if (!cafeteria) {
      return res.status(404).json({ message: "Cafeteria not found" });
    }
    res.json({ message: "Cafeteria deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting cafeteria", error });
  }
};
