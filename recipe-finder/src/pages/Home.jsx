import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="container"
      style={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "720px", width: "100%" }}>
        
        {/* Logo + Brand (leaf only, no circle) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "18px",
          }}
        >
          <span
            style={{
              fontSize: "2.2rem",
              lineHeight: "1",
            }}
          >
            🍃
          </span>

          <span
            style={{
              fontSize: "2.8rem",
              fontWeight: "800",
              background:
                "linear-gradient(90deg, var(--primary), var(--primary-600))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "1px",
            }}
          >
            FlavorFind
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "1.3rem",
            color: "#555",
            lineHeight: "1.7",
            marginBottom: "40px",
          }}
        >
          Turn the ingredients you already have into something delicious.
          <br />
          Smart recipes. Zero waste. Pure flavor.
        </p>

        {/* Start Searching Button */}
        <Link to="/ingredients" style={{ textDecoration: "none" }}>
          <button className="btn-pastel-primary">
            Start Searching →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
