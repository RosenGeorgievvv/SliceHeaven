import React, { useState } from "react";
import "../styles/Navigation.css";
import plogo from '../assets/Pizzaicon.png';
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navigation = () => {
  const [visible, setVisible] = useState(false);

  const toggleNavigation = () => {
    setVisible(!visible);
  };

  const closeNavbar = () => {
    setVisible(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={plogo} alt="logo" className="navbar-logo" />
        <div className={`navbar-links ${visible ? "active" : ""}`}>
          <Link to="/" onClick={closeNavbar}>Home</Link>
          <Link to="/menu" onClick={closeNavbar}>Menu</Link>
          <Link to="/about" onClick={closeNavbar}>About</Link>
          <Link to="/contact" onClick={closeNavbar}>Contact</Link>
          <Link to="/login" onClick={closeNavbar}>Login</Link>
          <Link to="/register" onClick={closeNavbar}>Register</Link>
        </div>
        <button className="navbar-toggle" onClick={toggleNavigation}>
          <ReorderIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
