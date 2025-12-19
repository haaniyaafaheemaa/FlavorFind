import express from "express";
import protect from "../middleware/authMiddleware.js";
import Recipe from "../models/Recipe.js";


const router = express.Router();

// SAVE RECIPE
router.post("/save", protect, async (req, res) => {
  console.log("🔥 SAVE ROUTE HIT");
  console.log("USER ID:", req.user._id);
  console.log("BODY:", req.body);

  try {
    const recipe = new Recipe({
      user: req.user._id,
      name: req.body.name || "TEST NAME",
      category: req.body.category || "Test",
      ingredients: req.body.ingredients || ["test"],
      time: req.body.time || "10 min",
      instructions: req.body.instructions || ["test step"],
    });

    console.log("📌 BEFORE SAVE:", recipe);

    await recipe.save();   // 👈 force save

    console.log("✅ AFTER SAVE");

    res.status(201).json({
      message: "Recipe saved successfully",
      recipe,
    });
  } catch (error) {
    console.error("❌ SAVE ERROR FULL:", error);
    res.status(500).json({ message: error.message });
  }
});



// GET SAVED RECIPES
router.get("/saved", protect, async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.user._id });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE SAVED RECIPE
router.delete("/:id", protect, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    if (recipe.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await recipe.deleteOne();
    res.json({ message: "Recipe removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
