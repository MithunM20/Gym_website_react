import React from "react";
import { ArrowRight, Play, Award, Zap, Users } from "lucide-react";
import "./Hero.css";
import heroImage from "../assets/gym-hero.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">
            <Zap size={14} className="tag-icon" />
            <span>CRUSH YOUR GOALS TODAY</span>
          </div>
          <h1>
            Push Your <br />
            <span>Limits</span> & Grow
          </h1>
          <p className="hero-description">
            Unleash your potential at Royal Fitness. Our elite coaches, state-of-the-art facilities, 
            and customized training plans are engineered to transform your body and elevate your lifestyle.
          </p>
          
          <div className="hero-actions">
            <a href="#pricing" className="btn-primary">
              Start Training <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Users size={18} />
              </div>
              <div className="stat-text">
                <h4>500+</h4>
                <p>Members Joined</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Award size={18} />
              </div>
              <div className="stat-text">
                <h4>15+</h4>
                <p>Expert Coaches</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-backdrop-glow"></div>
          <div className="image-frame">
            <img src={heroImage} alt="Professional Royal Fitness Training Session" />
            <div className="floating-badge">
              <div className="badge-pulse"></div>
              <span>Live Training Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
