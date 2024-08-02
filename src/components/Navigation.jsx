import React, { useState } from "react";
import "../styles/Navigation.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReoderIcon from "@mui/icons-material/Reorder";

const Navigation = () => {
const [visible, setVisible] = useState(false);

const toggleNavigation = () =>{
    setVisible(!visible);
}

  return (
    <div className="navbar" id={visible ? 'open' : 'close'}>
      <div className="leftSide">
        <img src={logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
      <div className="rightSide">
      <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <button onClick={toggleNavigation}>
            <ReoderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
