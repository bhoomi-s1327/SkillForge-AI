import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2>🚀 SkillForge AI</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/">Home</Link>
        <Link to="/">Features</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>

      <Link to="/login">
        <button>Login</button>
      </Link>
    </nav>
  );
}

export default Navbar;