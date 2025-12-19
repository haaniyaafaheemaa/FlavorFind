import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    time: {
      type: String,
    },
    instructions: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", recipeSchema);
