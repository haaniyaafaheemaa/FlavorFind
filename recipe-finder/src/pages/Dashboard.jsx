import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Dashboard() {
  const [saved, setSaved] = useState([]);
  const navigate = useNavigate();

  // Fetch saved recipes from backend
  useEffect(() => {
    const fetchSaved = async () => {
      try {
        const res = await API.get("/recipes/saved");
        setSaved(res.data);
      } catch (err) {
        alert("Please login to view saved recipes");
        navigate("/login");
      }
    };

    fetchSaved();
  }, [navigate]);

  // Remove recipe via backend
  const removeRecipe = async (id) => {
    try {
      await API.delete(`/recipes/${id}`);

      setSaved((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      alert("Failed to remove recipe");
    }
  };

  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontWeight: "800", marginBottom: "8px" }}>
          Saved Recipes
        </h1>
        <p style={{ color: "#555", fontSize: "1.1rem" }}>
          Your favorite recipes, saved for quick access 🍃
        </p>
      </div>

      {/* Empty State */}
      {saved.length === 0 ? (
        <div
          className="soft-card"
          style={{
            textAlign: "center",
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ fontWeight: "800", marginBottom: "10px" }}>
            No saved recipes yet
          </h2>
          <p style={{ color: "#666", marginBottom: "24px" }}>
            Start exploring recipes and save your favorites to see them here.
          </p>

          <button
            className="btn-pastel-primary"
            onClick={() => navigate("/ingredients")}
          >
            Start Searching →
          </button>
        </div>
      ) : (
        /* Saved Recipes Grid */
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {saved.map((recipe) => (
            <div
              key={recipe._id}
              className="soft-card"
              style={{
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Recipe Info */}
              <div>
                <h2 style={{ fontWeight: "800", marginBottom: "6px" }}>
                  {recipe.name}
                </h2>

                <p style={{ color: "#666", marginBottom: "12px" }}>
                  ⏱ {recipe.time}
                </p>

                <p style={{ fontWeight: "700", marginBottom: "6px" }}>
                  Ingredients
                </p>
                <ul style={{ paddingLeft: "18px", color: "#444" }}>
                  {recipe.ingredients.slice(0, 4).map((ing, index) => (
                    <li key={index} style={{ marginBottom: "4px" }}>
                      {ing}
                    </li>
                  ))}
                  {recipe.ingredients.length > 4 && (
                    <li style={{ color: "#888" }}>+ more</li>
                  )}
                </ul>
              </div>

              {/* Actions */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "22px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="btn-pastel-primary"
                  onClick={() =>
                    navigate(`/details/${recipe.id}`, { state: recipe })
                  }
                >
                  View
                </button>

                <button
                  className="btn-pastel-secondary"
                  onClick={() => removeRecipe(recipe._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
