import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        
        <div className="footer-about">
          <h2>Royal Fitness</h2>
          <p>Your journey to a stronger, healthier you starts here.</p>
        </div>

        {/* Middle - Contact info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Fitness Street, Kochi, Kerala</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 royalfitness@gmail.com</p>
        </div>

        {/* Right - Opening hours */}
        <div className="footer-hours">
          <h3>Opening Hours</h3>
          <p>Mon - Sat: 5:00 AM - 10:00 PM</p>
          <p>Sunday: 6:00 AM - 8:00 PM</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Royal Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
