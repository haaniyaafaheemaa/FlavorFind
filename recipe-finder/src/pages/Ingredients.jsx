import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Ingredients() {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  const addIngredient = () => {
    if (!input.trim()) return;

    const value = input.trim().toLowerCase();
    if (ingredients.includes(value)) {
      setInput("");
      return;
    }

    setIngredients([...ingredients, value]);
    setInput("");
  };

  const removeIngredient = (item) => {
    setIngredients(ingredients.filter((i) => i !== item));
  };

  const findRecipes = () => {
    navigate("/results", { state: { ingredients } });
  };

  return (
    <div
      className="container"
      style={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Main Card */}
      <div className="soft-card" style={{ maxWidth: "720px", width: "100%", textAlign: "center" }}>
        
        {/* Title */}
        <h1 style={{ fontWeight: "800", marginBottom: "10px" }}>
          Search by Ingredients
        </h1>

        <p
          style={{
            color: "#555",
            fontSize: "1.1rem",
            lineHeight: "1.7",
            marginBottom: "32px",
          }}
        >
          Tell us what’s in your kitchen and let <strong>FlavorFind</strong> do the thinking.
        </p>

        {/* Input Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          <input
            type="text"
            placeholder="e.g. tomato, onion, rice"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addIngredient()}
            className="input"
            style={{ minWidth: "280px" }}
          />

          <button
            className="btn-pastel-secondary"
            onClick={addIngredient}
          >
            Add Ingredient
          </button>
        </div>

        {/* Ingredients Chips */}
        {ingredients.length > 0 && (
          <div
            className="chips"
            style={{
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            {ingredients.map((item, index) => (
              <div key={index} className="chip">
                {item}
                <span className="x" onClick={() => removeIngredient(item)}>
                  ✕
                </span>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div>
          <p style={{ color: "#666", marginBottom: "18px" }}>
            {ingredients.length === 0
              ? "Add at least one ingredient to continue"
              : `${ingredients.length} ingredient(s) added`}
          </p>

          <button
            className="btn-pastel-primary"
            onClick={findRecipes}
            disabled={ingredients.length === 0}
          >
            Find Recipes →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
