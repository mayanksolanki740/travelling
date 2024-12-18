import React from "react";
import "../App.css";
import "./HeroSection.css";
import vid from "../videos/vid.mp4";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <video src={vid} autoPlay loop muted />
      <div className="hero-container">
        <h1>ADVENTURE <span>AWAITS</span></h1>
        <p>What are you waiting  <span>for ?</span></p>
        <div className="hero-btns">
          <button className="btn">Get Started</button>
          <button className="btn-dark">
            Watch Trailer <FaPlay className="icon"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
