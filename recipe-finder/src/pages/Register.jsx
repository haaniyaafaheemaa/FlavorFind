import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = { email, password };
    localStorage.setItem("recipeUser", JSON.stringify(user));

    alert("Registration successful!");
    navigate("/login");
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
      <div className="soft-card" style={{ maxWidth: "420px", width: "100%", textAlign: "center" }}>
        
        <h1 style={{ fontWeight: "800", marginBottom: "8px" }}>Create Account</h1>
        <p style={{ color: "#666", marginBottom: "28px" }}>
          Join <strong>FlavorFind</strong> and start cooking smarter
        </p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          style={{ width: "100%", marginBottom: "14px" }}
        />

        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          style={{ width: "100%", marginBottom: "22px" }}
        />

        <button
          className="btn-pastel-primary"
          style={{ width: "100%" }}
          onClick={registerUser}
        >
          Register
        </button>

        <p style={{ marginTop: "20px", color: "#555" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "var(--primary)", fontWeight: "700" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
