import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import "./Pricing.css";

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackPlans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "$29/mo",
      features: [
        "Access to gym during off-peak hours",
        "Free locker & shower access",
        "Basic fitness assessment",
        "1 Free training session"
      ]
    },
    {
      id: 2,
      name: "Premium Elite",
      price: "$59/mo",
      features: [
        "24/7 Unlimited gym access",
        "Free locker & shower access",
        "Customized diet & workout plans",
        "Weekly coach consultations",
        "Access to all group fitness classes"
      ]
    },
    {
      id: 3,
      name: "VIP Diamond",
      price: "$99/mo",
      features: [
        "24/7 VIP Gym & Spa access",
        "Personal dedicated trainer",
        "Custom diet, workouts & supplements",
        "Daily coach consultations",
        "Free gym apparel & merchandise"
      ]
    }
  ];

  useEffect(() => {
    let isMounted = true;
    
    // Set a timer to show fallback data if the Render server takes too long (e.g. 2.5 seconds)
    const fallbackTimer = setTimeout(() => {
      if (isMounted) {
        setPlans((prev) => (prev.length === 0 ? fallbackPlans : prev));
        setLoading(false);
      }
    }, 2500);

    fetch("https://gym-website-react.onrender.com/api/pricing")
      .then((res) => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then((data) => {
        clearTimeout(fallbackTimer);
        if (isMounted) {
          if (Array.isArray(data) && data.length > 0) {
            setPlans(data);
          } else {
            setPlans(fallbackPlans);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error fetching pricing, using fallbacks:", err);
        clearTimeout(fallbackTimer);
        if (isMounted) {
          setPlans(fallbackPlans);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-header">
        <h2><span>Our</span> Pricing Plans</h2>
        <p>Choose the plan that fits your fitness goals at Royal Fitness. Flexible memberships, no hidden fees.</p>
      </div>

      <div className="pricing-container">
        <div className="pricing-grid">
          {loading ? (
            // Shimmer pricing skeleton cards
            Array(3).fill(0).map((_, idx) => (
              <div key={idx} className="pricing-card skeleton-card">
                <div className="pricing-card-header">
                  <div className="skeleton-title" style={{ margin: "0 auto 16px", width: "50%" }}></div>
                  <div className="skeleton-title" style={{ margin: "0 auto", width: "40%", height: "35px" }}></div>
                </div>
                <div className="pricing-card-body" style={{ marginTop: "24px" }}>
                  <div className="skeleton-text" style={{ width: "90%", marginBottom: "16px" }}></div>
                  <div className="skeleton-text" style={{ width: "80%", marginBottom: "16px" }}></div>
                  <div className="skeleton-text" style={{ width: "85%", marginBottom: "16px" }}></div>
                  <div className="skeleton-text" style={{ width: "70%" }}></div>
                </div>
                <div className="pricing-card-footer" style={{ marginTop: "32px" }}>
                  <div className="skeleton-button"></div>
                </div>
              </div>
            ))
          ) : (
            // Actual pricing cards
            plans.map((plan, index) => {
              const isHighlighted = index === 1;
              return (
                <div 
                  key={plan._id || plan.id || index} 
                  className={`pricing-card ${isHighlighted ? "pricing-card-highlighted" : ""}`}
                >
                  {isHighlighted && <div className="popular-badge">Most Popular</div>}
                  
                  <div className="pricing-card-header">
                    <h3>{plan.name}</h3>
                    <div className="price-tag">
                      <h4>{plan.price}</h4>
                    </div>
                  </div>
                  
                  <div className="pricing-card-body">
                    <ul>
                      {plan.features.map((feature, featureIdx) => (
                        <li key={featureIdx}>
                          <Check size={16} className="check-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pricing-card-footer">
                    <a href="#home" className={`pricing-btn ${isHighlighted ? "pricing-btn-primary" : "pricing-btn-secondary"}`}>
                      Choose Plan
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
