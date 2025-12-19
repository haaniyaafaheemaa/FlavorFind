import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateStatus = () => {
      setLoggedIn(localStorage.getItem("loggedIn") === "true");
    };

    updateStatus();
    window.addEventListener("auth-change", updateStatus);

    return () => {
      window.removeEventListener("auth-change", updateStatus);
    };
  }, []);

  const logout = () => {
    const yes = window.confirm("Are you sure you want to logout?");
    if (!yes) return;

    localStorage.removeItem("loggedIn");
    window.dispatchEvent(new Event("auth-change"));

    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Brand */}
        <Link className="brand" to="/">
          🍃 FlavorFind
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/recipes" className="nav-item">Recipes</Link>
          <Link to="/ingredients" className="nav-item">Search</Link>

          {loggedIn && (
            <Link to="/dashboard" className="nav-item">
              Saved
            </Link>
          )}

          {!loggedIn ? (
            <>
              <Link to="/login" className="nav-item">Login</Link>
              <Link to="/register" className="nav-item">Register</Link>
            </>
          ) : (
            <button onClick={logout} className="nav-item">
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
