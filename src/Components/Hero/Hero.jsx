import React from "react";
import "./hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>we ensure better education for better world</h1>
        <p>
          our cutting-edge curriculum is designed to empower studends with the
          knowledge,skills, and experience needed to excel in the dynamic field
          of education
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="->" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
