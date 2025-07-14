import '../styles/About.css';

const About = () => {
  return (
    <main className="about" role="main">
      <h1>About Us</h1>
      <section aria-label="Clinic Background">
        <h2>Our Clinic</h2>
        <p>Founded in 2010, our clinic has been serving the community with top-notch dental care.</p>
      </section>
      <section aria-label="Our Team">
        <h2>Our Team</h2>
        <p>Meet our experienced dentists dedicated to your care:</p>
        <ul>
          <li>Dr. John Smith - Lead Dentist</li>
          <li>Dr. Jane Doe - Orthodontist</li>
        </ul>
      </section>
      <section aria-label="Mission Statement">
        <h2>Our Mission</h2>
        <p>To provide compassionate and professional dental care for all.</p>
      </section>
    </main>
  );
};

export default About;