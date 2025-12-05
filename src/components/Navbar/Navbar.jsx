import React from "react";
import "./Navbar.css";
import logo from "../../assets/proxy-image.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#programs">Programs</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">
            <button className="btn">Contact Us</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
