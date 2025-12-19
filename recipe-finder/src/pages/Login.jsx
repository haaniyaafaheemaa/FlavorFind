import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // store token + login flag
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loggedIn", "true");

      // update navbar immediately
      window.dispatchEvent(new Event("auth-change"));

      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid email or password");
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
      <div
        className="soft-card"
        style={{ maxWidth: "420px", width: "100%", textAlign: "center" }}
      >
        <h1 style={{ fontWeight: "800", marginBottom: "8px" }}>
          Welcome Back
        </h1>
        <p style={{ color: "#666", marginBottom: "28px" }}>
          Login to continue exploring recipes on{" "}
          <strong>FlavorFind</strong>
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
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          style={{ width: "100%", marginBottom: "22px" }}
        />

        <button
          className="btn-pastel-primary"
          style={{ width: "100%" }}
          onClick={loginUser}
        >
          Login
        </button>

        <p style={{ marginTop: "20px", color: "#555" }}>
          Don’t have an account?{" "}
          <Link
            to="/register"
            style={{ color: "var(--primary)", fontWeight: "700" }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
