import { useEffect, useState } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://gym-website-react.onrender.com/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2>
          Customer <span>Reviews</span>
        </h2>
        <p>What our members say about Royal Fitness</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3>{review.name}</h3>
            <p className="review-text">"{review.review}"</p>
            <p className="review-rating">
              {"⭐".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
