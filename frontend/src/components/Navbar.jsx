import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [userName, setUserName] = useState(""); // store logged-in user
  const [popupMsg, setPopupMsg] = useState(null); // floating popup message

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/signup";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // Set user name for navbar button
        setUserName(data.user ? data.user.name : formData.name);

        // Clear form fields
        setFormData({ name: "", email: "", password: "" });

        // Show popup message
        setPopupMsg(isLogin ? "🎉 Login Successful!" : "✅ Registration Successful!");

        // Hide modal after short delay
        setTimeout(() => {
          setShowModal(false);
          setPopupMsg(null);
        }, 1500);

      } else {
        // Show error popup
        setPopupMsg(`❌ ${data.message}`);
        setTimeout(() => setPopupMsg(null), 2000);
      }
    } catch (err) {
      console.error(err);
      setPopupMsg("❌ Something went wrong!");
      setTimeout(() => setPopupMsg(null), 2000);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Royal <span>Fitness</span></div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#reviews">Review</a></li>
        </ul>
        <button className="btn-join" onClick={() => setShowModal(true)}>
          {userName || "Login / Signup"}
        </button>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{isLogin ? "Login" : "Signup"}</h2>
            {popupMsg && <div className="popup-msg">{popupMsg}</div>}
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit">{isLogin ? "Login" : "Signup"}</button>
            </form>
            <p
              onClick={() => setIsLogin(!isLogin)}
              style={{ cursor: "pointer", color: "#00e0b8", marginTop: "10px" }}
            >
              {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
            </p>
            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
          </div>
        </div>
      )}
    </>
  );
}
