import React, { useState, useEffect } from "react";
import { Menu, X, LogIn, User, Lock, Mail, Check, AlertCircle } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [userName, setUserName] = useState("");
  const [popupMsg, setPopupMsg] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to apply active styles to navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin
        ? "https://gym-website-react.onrender.com/api/auth/login"
        : "https://gym-website-react.onrender.com/api/auth/signup";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setUserName(data.user ? data.user.name : formData.name);
        setFormData({ name: "", email: "", password: "" });
        setPopupMsg(isLogin ? "🎉 Login Successful!" : "✅ Registration Successful!");

        setTimeout(() => {
          setShowModal(false);
          setPopupMsg(null);
        }, 1500);
      } else {
        setPopupMsg(`❌ ${data.message}`);
        setTimeout(() => setPopupMsg(null), 3000);
      }
    } catch (err) {
      console.error(err);
      setPopupMsg("❌ Something went wrong!");
      setTimeout(() => setPopupMsg(null), 3000);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <a href="#home" className="logo" onClick={handleNavClick}>
            ROYAL <span>FITNESS</span>
          </a>
          
          <ul className={`nav-links ${mobileMenuOpen ? "nav-active" : ""}`}>
            <li><a href="#home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#services" onClick={handleNavClick}>Services</a></li>
            <li><a href="#about" onClick={handleNavClick}>About Us</a></li>
            <li><a href="#pricing" onClick={handleNavClick}>Pricing</a></li>
            <li><a href="#reviews" onClick={handleNavClick}>Reviews</a></li>
            <li className="mobile-join-li">
              <button className="btn-join mobile-join-btn" onClick={() => { setShowModal(true); setMobileMenuOpen(false); }}>
                {userName ? <span className="user-span"><User size={16} /> {userName}</span> : "Join Club"}
              </button>
            </li>
          </ul>

          <div className="navbar-actions">
            <button className="btn-join desktop-join-btn" onClick={() => setShowModal(true)}>
              {userName ? <span className="user-span"><User size={16} /> {userName}</span> : "Join Club"}
            </button>
            
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)} aria-label="Close modal">
              <X size={20} />
            </button>
            
            <div className="modal-header">
              <h2>{isLogin ? "Welcome Back" : "Start Your Journey"}</h2>
              <p>{isLogin ? "Enter your details to log in to your account" : "Create an account to join the gym family"}</p>
            </div>

            {popupMsg && (
              <div className={`popup-msg ${popupMsg.includes("❌") ? "popup-error" : "popup-success"}`}>
                {popupMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="modal-form">
              {!isLogin && (
                <div className="input-group">
                  <User className="input-icon" size={18} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              <div className="input-group">
                <Mail className="input-icon" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <Lock className="input-icon" size={18} />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="modal-submit-btn">
                {isLogin ? "Sign In" : "Register"}
              </button>
            </form>

            <div className="modal-footer">
              <p onClick={() => { setIsLogin(!isLogin); setPopupMsg(null); }}>
                {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
