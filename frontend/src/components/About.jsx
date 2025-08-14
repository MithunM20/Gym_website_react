import React from "react";
import "./About.css";
import aboutImg from "../assets/about.jpg"; 

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Image */}
        <div className="about-image">
          <img src={aboutImg} alt="Royal Fitness Gym" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2>
            Why Choose <span>Royal Fitness</span>?
          </h2>
          <p className="about-intro">
            At Royal Fitness, we are more than just a gym – we are your fitness family.
            Our mission is to help you achieve your goals with professional guidance,
            modern equipment, and a motivating environment.
          </p>

          <ul className="about-list">
            <li>🏋️‍♂️ Certified & Experienced Trainers</li>
            <li>🔥 Personalised Workout & Diet Plans</li>
            <li>💪 Latest Gym Equipment & Machines</li>
            <li>🎯 Focus on Strength, Endurance & Flexibility</li>
            <li>🤝 Friendly & Supportive Atmosphere</li>
          </ul>

          <p className="about-highlight">
            Join us and experience the power of fitness transformation!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
