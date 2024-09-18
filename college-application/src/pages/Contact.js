import React from 'react';
import '../styles/Contact.css';
import contactIllustration from '../assets/Contact.png'; // Replace with your illustration path

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        {/* Illustration Section */}
        <div className="contact-illustration">
          <img src={contactIllustration} alt="Contact Us Illustration" />
        </div>
        {/* Form Section */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form action="#" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
