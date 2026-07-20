import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackServices = [
    {
      _id: "fb1",
      title: "Strength & Conditioning",
      description: "Build muscle, enhance endurance, and build functional power with our core strength training.",
      image: "/src/assets/gym-hero.jpg"
    },
    {
      _id: "fb2",
      title: "Cardio Kickboxing",
      description: "High-intensity cardio training designed to burn calories and improve coordination.",
      image: "/src/assets/about.jpg"
    },
    {
      _id: "fb3",
      title: "Personal Training",
      description: "Get customized guidance, posture correction, and diet charts with our certified instructors.",
      image: "/src/assets/gym-hero.jpg"
    }
  ];

  useEffect(() => {
    let isMounted = true;
    
    // Set a timer to show fallback data if the Render server takes too long (e.g. 2.5 seconds)
    const fallbackTimer = setTimeout(() => {
      if (isMounted) {
        setServices((prev) => (prev.length === 0 ? fallbackServices : prev));
        setLoading(false);
      }
    }, 2500);

    fetch("https://gym-website-react.onrender.com/api/services")
      .then((res) => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then((data) => {
        clearTimeout(fallbackTimer);
        if (isMounted) {
          if (Array.isArray(data) && data.length > 0) {
            setServices(data);
          } else {
            setServices(fallbackServices);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Services fetch error, using fallbacks:", err);
        clearTimeout(fallbackTimer);
        if (isMounted) {
          setServices(fallbackServices);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <h2>Our <span>Services</span></h2>
        <p>Transform your body, mind, and lifestyle with our professional high-performance fitness solutions.</p>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {loading ? (
            // Shimmer skeletons
            Array(3).fill(0).map((_, idx) => (
              <div key={idx} className="service-card skeleton-card">
                <div className="skeleton-image"></div>
                <div className="service-info">
                  <div className="skeleton-title"></div>
                  <div className="skeleton-text" style={{ width: "90%", marginTop: "12px" }}></div>
                  <div className="skeleton-text" style={{ width: "70%", marginTop: "8px" }}></div>
                  <div className="skeleton-text" style={{ width: "40%", marginTop: "20px" }}></div>
                </div>
              </div>
            ))
          ) : (
            // Actual services
            services.map((service) => {
              // Distinguish local fallback assets from backend uploaded assets
              const imageUrl = service._id && service._id.toString().startsWith("fb")
                ? service.image
                : `https://gym-website-react.onrender.com${service.image}`;
                
              return (
                <div key={service._id} className="service-card">
                  <div className="service-image-wrapper">
                    <img src={imageUrl} alt={service.title} />
                    <div className="service-card-overlay"></div>
                  </div>
                  <div className="service-info">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-card-footer">
                      <span className="learn-more-link">Learn More</span>
                    </div>
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

export default Services;
