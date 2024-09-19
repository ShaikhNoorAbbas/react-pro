import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="Pro" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
