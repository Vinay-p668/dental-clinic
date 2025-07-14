import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <main className="home" role="main">
      <section className="hero" aria-label="Welcome to Dental Clinic">
        <h1>Welcome to Our Dental Clinic</h1>
        <p>Providing quality dental care with a smile.</p>
        <Link to="/contact" className="cta-button">Book Appointment</Link>
      </section>
      <section className="intro" aria-label="Introduction">
        <h2>About Us</h2>
        <p>We are a family-friendly dental clinic dedicated to your oral health.</p>
      </section>
      <section className="services-overview" aria-label="Services Overview">
        <h2>Our Services</h2>
        <p>From cleanings to cosmetic dentistry, we’ve got you covered.</p>
        <Link to="/services">View All Services</Link>
      </section>
    </main>
  );
};

export default Home;