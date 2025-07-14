import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    axios.get('/data/services.json')
      .then((response) => setServices(response.data))
      .catch((error) => console.error('Error fetching services:', error));
  }, []);

  return (
    <main className="services" role="main">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" role="region" aria-label={service.title}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.shortDescription}</p>
            <button
              onClick={() => setActiveService(index)}
              aria-controls={`service-details-${index}`}
              aria-expanded={activeService === index}
            >
              Learn More
            </button>
            {activeService === index && (
              <div id={`service-details-${index}`} className="service-details">
                <p>{service.fullDescription}</p>
                <button onClick={() => setActiveService(null)}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;