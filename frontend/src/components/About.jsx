import React from "react";
import { Dumbbell, Target, Users, Award, Flame } from "lucide-react";
import "./About.css";
import aboutImg from "../assets/about.jpg"; 

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Image Section */}
        <div className="about-image-wrapper">
          <div className="about-backdrop-glow"></div>
          <div className="about-image-frame">
            <img src={aboutImg} alt="Royal Fitness Club Training Arena" />
            <div className="experience-badge">
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="about-content">
          <div className="about-subtitle">ABOUT ROYAL FITNESS</div>
          <h2>
            Why Choose <span>Royal Fitness</span>?
          </h2>
          <p className="about-intro">
            At Royal Fitness, we are more than just a gym – we are your ultimate fitness sanctuary.
            Our mission is to help you crush your limits with premium professional guidance, 
            modern equipment, and a high-energy community.
          </p>

          <ul className="about-list">
            <li>
              <div className="about-list-icon">
                <Award size={20} />
              </div>
              <div className="about-list-text">
                <strong>Certified & Experienced Trainers</strong>
                <p>Learn from elite fitness experts dedicated to your form and progress.</p>
              </div>
            </li>
            <li>
              <div className="about-list-icon">
                <Flame size={20} />
              </div>
              <div className="about-list-text">
                <strong>Personalised Workout & Diet Plans</strong>
                <p>Tailored nutrition and exercise routines structured for your body type.</p>
              </div>
            </li>
            <li>
              <div className="about-list-icon">
                <Dumbbell size={20} />
              </div>
              <div className="about-list-text">
                <strong>Latest Gym Equipment & Machines</strong>
                <p>Train with high-quality bio-mechanically optimized equipment.</p>
              </div>
            </li>
            <li>
              <div className="about-list-icon">
                <Target size={20} />
              </div>
              <div className="about-list-text">
                <strong>Strength & Endurance Focus</strong>
                <p>Targeted conditioning programs designed to elevate physical performance.</p>
              </div>
            </li>
            <li>
              <div className="about-list-icon">
                <Users size={20} />
              </div>
              <div className="about-list-text">
                <strong>Supportive Elite Community</strong>
                <p>Work out alongside driven individuals who keep you motivated every day.</p>
              </div>
            </li>
          </ul>

          <div className="about-footer">
            <p className="about-highlight">
              Join us and experience the power of a true fitness transformation!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
