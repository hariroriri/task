import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <img src="https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Destination" className="hero-img" />
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore top destinations and exclusive packages</p>
          <div className="cta-buttons">
            <button className="btn">Book Now</button>
            <button className="btn">Explore Destinations</button>
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="packages">
        <h2>Popular Packages</h2>
        <div className="package-grid">
          <div className="package-card">
            <img src="https://plus.unsplash.com/premium_photo-1707507239493-ff71d2541684?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Maldives Honeymoon" />
            <h3>Maldives Honeymoon</h3>
            <p>Enjoy a romantic getaway in the Maldives with all-inclusive packages.</p>
            <button className="btn">View Details</button>
          </div>
          <div className="package-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Paris Tour" />
            <h3>Paris Tour</h3>
            <p>Experience the romance of Paris with a guided tour of all the famous landmarks.</p>
            <button className="btn">View Details</button>
          </div>
          <div className="package-card">
            <img src="https://media.istockphoto.com/id/1285296688/photo/success-woman-hiker-hiking-on-sunrise-mountain-peak-young-woman-with-backpack-rise-to-the.jpg?s=1024x1024&w=is&k=20&c=FuiR77X2N_LGeJTw4XNMRRCArvRkmLZtNQRAoRBzo_M=" alt="Italy Adventure" />
            <h3>Italy Adventure</h3>
            <p>Explore the historic cities and stunning landscapes of Italy.</p>
            <button className="btn">View Details</button>
          </div>
          <div className="package-card">
            <img src="https://images.unsplash.com/photo-1660593212118-e59bdd0c1e79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Thailand Beaches" />
            <h3>Thailand Beaches</h3>
            <p>Relax on the stunning beaches of Thailand with our exclusive packages.</p>
            <button className="btn">View Details</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Had an amazing honeymoon in the Maldives thanks to this travel agency! Highly recommended!"</p>
            <h4>- Sarah J.</h4>
          </div>
          <div className="testimonial-card">
            <p>"The Paris tour was unforgettable! Great guides and wonderful experience."</p>
            <h4>- Mark P.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Everything was taken care of, and the Italy trip was beyond our expectations."</p>
            <h4>- Emma D.</h4>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with our latest deals and travel tips</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 Your Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
