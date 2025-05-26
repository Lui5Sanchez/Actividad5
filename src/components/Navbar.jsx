// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",  // Centrar horizontalmente
        gap: "1.5rem",             // Separación entre links
        padding: "1rem",
        background: "#eee",
        boxSizing: "border-box",
        zIndex: 1000,
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
