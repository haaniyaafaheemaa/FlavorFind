import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import recipes from "../data/recipes";
import API from "../api/api";

const categories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Side Dish",
  "Dessert",
  "Drinks",
];

// ignore very common ingredients
const IGNORE = ["salt", "water", "oil", "ghee", "sugar"];

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🔑 detect mode
  const showAll = !state || !state.ingredients;

  const userIngredients = showAll
    ? []
    : state.ingredients.filter(
        (i) => !IGNORE.includes(i.toLowerCase())
      );

  // category filter
  const filtered = recipes.filter((r) =>
    selectedCategory === "All" ? true : r.category === selectedCategory
  );

  const bestMatches = [];
  const otherMatches = [];

  filtered.forEach((recipe) => {
    const mainIngredients = recipe.ingredients.slice(0, 2);
    const otherIngredients = recipe.ingredients.slice(2);

    const mainMatch = mainIngredients.some((ing) =>
      userIngredients.includes(ing)
    );

    const otherMatch = otherIngredients.some((ing) =>
      userIngredients.includes(ing)
    );

    if (mainMatch) bestMatches.push(recipe);
    else if (otherMatch) otherMatches.push(recipe);
  });

  const saveRecipe = async (recipe) => {
    try {
      await API.post("/recipes/save", recipe);
      alert("Recipe saved!");
    } catch (err) {
      alert(err.response?.data?.message || "Please login to save recipes");
    }
  };

  // 🔥 SMART GRID (single vs multiple)
  const renderGrid = (list) => {
    const isSingle = list.length === 1;

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSingle
            ? "minmax(300px, 420px)"
            : "repeat(auto-fit, minmax(300px, 1fr))",
          justifyContent: isSingle ? "center" : "initial",
          gap: "28px",
        }}
      >
        {list.map((recipe) => (
          <div key={recipe.id} className="soft-card" style={{ padding: "26px" }}>
            
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  marginBottom: "14px",
                }}
              />
            )}

            <h2 style={{ fontWeight: "800", marginBottom: "6px" }}>
              {recipe.name}
            </h2>

            {recipe.video && (
              <a
                href={recipe.video}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  marginBottom: "10px",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  background: "rgba(255,0,0,0.08)",
                  color: "#c62828",
                  fontWeight: "700",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                ▶ Watch on YouTube
              </a>
            )}

            <p style={{ color: "#666" }}>⏱ {recipe.time}</p>

            <p style={{ fontWeight: "700" }}>Ingredients</p>
            <ul style={{ paddingLeft: "18px" }}>
              {recipe.ingredients.slice(0, 5).map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: "12px", marginTop: "18px" }}>
              <button
                className="btn-pastel-primary"
                onClick={() =>
                  navigate(`/details/${recipe.id}`, { state: recipe })
                }
              >
                View Recipe
              </button>

              <button
                className="btn-pastel-secondary"
                onClick={() => saveRecipe(recipe)}
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontWeight: "800" }}>Recipe Results</h1>
        <p style={{ color: "#555" }}>
          {showAll
            ? "Browse all available recipes 🍽️"
            : <>Based on your ingredients: <strong>{userIngredients.join(", ")}</strong></>}
        </p>
      </div>

      {/* Categories */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className="btn-pastel-secondary"
            style={{ opacity: selectedCategory === cat ? 1 : 0.6 }}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Browse All */}
      {showAll && (
        <>
          <h2 style={{ marginBottom: "20px" }}>🍽️ All Recipes</h2>
          {renderGrid(filtered)}
        </>
      )}

      {/* Ingredient Search Results */}
      {!showAll && bestMatches.length > 0 && (
        <>
          <h2>⭐ Best Matches (Main Ingredient)</h2>
          {renderGrid(bestMatches)}
        </>
      )}

      {!showAll && otherMatches.length > 0 && (
        <>
          <h2 style={{ marginTop: "40px" }}>
            🍃 Other Recipes Using Your Ingredients
          </h2>
          {renderGrid(otherMatches)}
        </>
      )}
    </div>
  );
}

export default Results;
