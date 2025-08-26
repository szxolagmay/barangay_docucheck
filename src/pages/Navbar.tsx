import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="navbar">
      <nav className="nav-links">
        <a href="#">About</a>
        <a href="#" className="active">Home</a>
        <a href="#">Contact</a>
      </nav>
      <span className="date">{today}</span>
    </header>
  );
};

export default Navbar;
