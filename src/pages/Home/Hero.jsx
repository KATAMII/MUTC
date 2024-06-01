import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="herowelcome">Welcome to our Tech Club</h1>
        <div className="herotext">
          <p className="heropara">Where everyone is someone.</p>
        </div>
      </div>
      <div className="hero-link">
        <button className="herobtn">
          <Link to="/">view more </Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
