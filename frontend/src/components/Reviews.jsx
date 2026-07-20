import React, { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackReviews = [
    {
      _id: "r1",
      name: "Rahul Sharma",
      review: "Royal Fitness completely changed my lifestyle. The trainers are absolute experts, and the equipment is top-tier!",
      rating: 5
    },
    {
      _id: "r2",
      name: "Sneha Nair",
      review: "I lost 15kg in 6 months using their customized diet plan. The atmosphere here is extremely supportive and motivating.",
      rating: 5
    },
    {
      _id: "r3",
      name: "John Mathew",
      review: "Super clean gym, high-quality crowd, and amazing coaching. Best fitness decision I have ever made.",
      rating: 5
    }
  ];

  useEffect(() => {
    let isMounted = true;
    
    // Set a timer to show fallback data if the Render server takes too long (e.g. 2.5 seconds)
    const fallbackTimer = setTimeout(() => {
      if (isMounted) {
        setReviews((prev) => (prev.length === 0 ? fallbackReviews : prev));
        setLoading(false);
      }
    }, 2500);

    fetch("https://gym-website-react.onrender.com/api/reviews")
      .then((res) => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then((data) => {
        clearTimeout(fallbackTimer);
        if (isMounted) {
          if (Array.isArray(data) && data.length > 0) {
            setReviews(data);
          } else {
            setReviews(fallbackReviews);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error fetching reviews, using fallbacks:", err);
        clearTimeout(fallbackTimer);
        if (isMounted) {
          setReviews(fallbackReviews);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
    };
  }, []);

  const getInitials = (name) => {
    if (!name) return "RF";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const renderStars = (rating) => {
    const starArray = [];
    const maxStars = 5;
    const validatedRating = Math.min(Math.max(parseInt(rating) || 5, 1), maxStars);
    
    for (let i = 1; i <= maxStars; i++) {
      starArray.push(
        <Star 
          key={i} 
          size={16} 
          fill={i <= validatedRating ? "var(--accent)" : "none"} 
          stroke={i <= validatedRating ? "var(--accent)" : "var(--text-muted)"} 
          className="star-icon"
        />
      );
    }
    return starArray;
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="section-header">
        <h2>Customer <span>Reviews</span></h2>
        <p>What our members say about their life-changing transformation at Royal Fitness.</p>
      </div>

      <div className="reviews-container">
        <div className="reviews-grid">
          {loading ? (
            // Shimmer review cards
            Array(3).fill(0).map((_, idx) => (
              <div key={idx} className="review-card skeleton-card">
                <div className="quote-icon-wrapper" style={{ marginBottom: "15px" }}>
                  <div className="skeleton-title" style={{ width: "30px", height: "30px", borderRadius: "50%" }}></div>
                </div>
                
                <div className="skeleton-body" style={{ display: "flex", flexDirection: "column", gap: "10px", flexGrow: 1, marginBottom: "25px" }}>
                  <div className="skeleton-text" style={{ width: "100%" }}></div>
                  <div className="skeleton-text" style={{ width: "95%" }}></div>
                  <div className="skeleton-text" style={{ width: "80%" }}></div>
                </div>
                
                <div className="review-card-footer" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "15px" }}>
                  <div className="skeleton-avatar" style={{ width: "42px", height: "42px", borderRadius: "50%" }}></div>
                  <div className="skeleton-info" style={{ display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 }}>
                    <div className="skeleton-title" style={{ width: "50%", height: "16px" }}></div>
                    <div className="skeleton-text" style={{ width: "30%", height: "12px" }}></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Actual review cards
            reviews.map((review, index) => (
              <div className="review-card" key={review._id || index}>
                <div className="quote-icon-wrapper">
                  <Quote size={28} className="quote-icon" />
                </div>
                
                <p className="review-text">"{review.review}"</p>
                
                <div className="review-card-footer">
                  <div className="reviewer-avatar">
                    {getInitials(review.name)}
                  </div>
                  <div className="reviewer-info">
                    <h3>{review.name}</h3>
                    <div className="review-rating">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
