import React from "react";
import Header from "./Header";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <header className="HeroSection">
      <div className="hero-container">
        <Header />
        <div className="hero-text">
          <h1 className="f-overpass">A modern publishing platform</h1>
          <p className="f-overpass">
            Grow your audience and build your online brand
          </p>
          <div className="hero-cta">
            <button className="btn primary-btn f-ubuntu">Start for Free</button>
            <button className="btn secondary-btn f-ubuntu">Learn More</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
