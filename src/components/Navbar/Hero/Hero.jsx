import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container" id="home">
      <div className="hero-text">
        <h1>Build your future byte by byte</h1>
        <p>
          With our top of the line curriculum take a hold of your career path as
          a leading IT professional in training{" "}
        </p>
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
