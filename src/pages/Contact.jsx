import { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      axios.post('https://jsonplaceholder.typicode.com/posts', formData)
        .then(() => {
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSubmitted(false), 3000);
        })
        .catch((error) => console.error('Error submitting form:', error));
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <main className="contact" role="main">
      <h1>Contact Us</h1>
      <section className="contact-form" aria-label="Contact Form">
        {submitted && <p className="success-message">Form submitted successfully!</p>}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : null}
            />
            {errors.name && <span id="name-error" className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : null}
            />
            {errors.email && <span id="email-error" className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : null}
            />
            {errors.subject && <span id="subject-error" className="error">{errors.subject}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : null}
            />
            {errors.message && <span id="message-error" className="error">{errors.message}</span>}
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <section className="contact-details" aria-label="Contact Details">
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@dentalclinic.com</p>
        <p>Address: 123 Smile St, Dental City, DC 12345</p>
      </section>
      <section className="map" aria-label="Location Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086678007054!2d-122.4194156846813!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858147427b3961%3A0x6d4b06b4e7b6a6f3!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635789271357!5m2!1sen!2us"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Clinic Location"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;