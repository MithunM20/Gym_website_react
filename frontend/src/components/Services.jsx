import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://gym-website-react.onrender.com/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our <span>Services</span></h2>
        <p>Transform your body, mind, and lifestyle with our fitness solutions.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service._id} className="service-card">
            <img src={`https://gym-website-react.onrender.com${service.image}`} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
