import mongoose from "mongoose";

// Menu schema
const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  cafeteria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cafeteria",
    required: true,
  },
});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
