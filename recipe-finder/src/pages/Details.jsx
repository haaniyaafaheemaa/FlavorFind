import { useLocation, useNavigate } from "react-router-dom";

function Details() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="container" style={{ textAlign: "center", paddingTop: "80px" }}>
        <h2>No recipe details found</h2>
        <button className="btn-pastel-primary" onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    );
  }

  const saveRecipe = () => {
    const saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const exists = saved.find((r) => r.id === state.id);

    if (!exists) {
      saved.push(state);
      localStorage.setItem("savedRecipes", JSON.stringify(saved));
      alert("Recipe saved!");
    } else {
      alert("Recipe already saved!");
    }
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
      <div className="soft-card" style={{ maxWidth: "900px", width: "100%" }}>

        {/* 🔥 Recipe Image
        {state.image && (
          <img
            src={state.image}
            alt={state.name}
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              borderRadius: "16px",
              marginBottom: "24px",
            }}
          />
        )} */}

        {/* Title Section */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1 style={{ fontWeight: "800", marginBottom: "6px" }}>
            {state.name}
          </h1>

          {/* 🎥 YouTube Chip */}
          {state.video && (
            <a
              href={state.video}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                borderRadius: "999px",
                background: "rgba(255, 0, 0, 0.1)",
                color: "#c62828",
                fontWeight: "800",
                textDecoration: "none",
                fontSize: "1rem",
                marginBottom: "14px",
              }}
            >
              ▶ Watch on YouTube
            </a>
          )}

          <p style={{ color: "#666", fontSize: "1.05rem" }}>
            ⏱ Cooking Time: <strong>{state.time}</strong>
          </p>
        </div>

        {/* Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "36px",
          }}
        >
          {/* Ingredients */}
          <div>
            <h3 style={{ fontWeight: "800", marginBottom: "14px" }}>
              Ingredients
            </h3>
            <ul style={{ paddingLeft: "18px", color: "#444" }}>
              {state.ingredients.map((ing, index) => (
                <li key={index} style={{ marginBottom: "8px", fontSize: "1rem" }}>
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h3 style={{ fontWeight: "800", marginBottom: "14px" }}>
              Instructions
            </h3>

            {Array.isArray(state.instructions) ? (
              <ol style={{ paddingLeft: "18px", color: "#444" }}>
                {state.instructions.map((step, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "10px",
                      lineHeight: "1.7",
                      fontSize: "1rem",
                    }}
                  >
                    {step}
                  </li>
                ))}
              </ol>
            ) : (
              <p style={{ color: "#444", lineHeight: "1.7", fontSize: "1rem" }}>
                {state.instructions ||
                  "Follow the listed ingredients and cook with care to enjoy this delicious recipe."}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div
          style={{
            marginTop: "36px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <button className="btn-pastel-primary" onClick={saveRecipe}>
            Save Recipe
          </button>

          <button
            className="btn-pastel-secondary"
            onClick={() => navigate(-1)}
          >
            Back to Results
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
