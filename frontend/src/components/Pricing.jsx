import React, { useEffect, useState } from "react";
import "./Pricing.css";

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("https://gym-website-react.onrender.com/api/pricing")
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((err) => console.error("Error fetching pricing:", err));
  }, []);

  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2><span>Our</span> Pricing Plans</h2>
        <p>Choose the plan that fits your fitness goals at Royal Fitness</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.id} className="pricing-card">
            <h3>{plan.name}</h3>
            <h4>{plan.price}</h4>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>✅ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
