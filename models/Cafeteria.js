import mongoose from "mongoose";

// Cafeteria schema
const cafeteriaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  manager: { type: String, required: true },
  description: { type: String, required: true },
  menus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }],
});

// Cafeteria model
const Cafeteria = mongoose.model("Cafeteria", cafeteriaSchema);
export default Cafeteria;
