import React from "react";
import "./Hero.css";
import heroImage from "../assets/gym-hero.jpg"; // replace with your gym image path

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Push Your <span>Limits</span>
        </h1>
        <p>Transform your body. Transform your life.</p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Gym Workout" />
      </div>
    </section>
  );
};

export default Hero;
