// src/App.jsx
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FaSmile, FaArrowRight } from "react-icons/fa";

// Página de inicio con diseño
function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Bienvenido a Mi Sitio</h1>
      <p>¡Gracias por visitarnos! Esperamos que disfrutes la experiencia.</p>
      <FaSmile size={50} style={{ color: "#f5a623", margin: "20px 0" }} />

      <button
        onClick={() => navigate("/about")}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
      >
        Ir a Sobre Nosotros <FaArrowRight />
      </button>
    </div>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div
        style={{
          paddingTop: "60px",
          height: "calc(100vh - 60px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
