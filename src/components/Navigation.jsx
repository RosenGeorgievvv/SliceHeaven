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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={plogo} alt="logo" className="navbar-logo" />
        <div className={`navbar-links ${visible ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <button className="navbar-toggle" onClick={toggleNavigation}>
          <ReorderIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
