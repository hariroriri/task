// src/pages/AboutPage.js
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          Welcome to TravelX, your ultimate travel companion. Our mission is to provide you with the best travel experiences around the world. From exotic destinations to thrilling adventures, we curate travel packages that cater to every type of traveler.
        </p>
      </section>

      <section className="about-content">
        <div className="about-section about-mission">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our team of experienced travel enthusiasts works tirelessly to ensure that every trip you take with us is memorable and seamless. We believe in creating personalized experiences that go beyond the ordinary, making sure that your journey is nothing short of extraordinary.
            </p>
          </div>
          <div className="about-image">
            <img src="https://media.istockphoto.com/id/599997170/photo/hiker-capturing-the-view.jpg?s=1024x1024&w=is&k=20&c=NBM-FKCEsLx52yLaLgEkVCSnGeQgqCv005pGUtugeuA=" alt="Our Mission" />
          </div>
        </div>

        <div className="about-section about-team">
          <div className="about-image">
            <img src="https://media.istockphoto.com/id/1403195809/photo/business-colleagues-giving-high-five-celebrating-success.jpg?s=1024x1024&w=is&k=20&c=BfgDwRJ54UM4z1ZfFGlBE0TpJMhHc2VklVnENrfI8aw=" alt="Our Team" />
          </div>
          <div className="about-text">
            <h2>Meet the Team</h2>
            <p>
              Founded in 2020, TravelX has quickly become a leader in the travel industry. Our commitment to excellence and customer satisfaction has earned us numerous accolades and a loyal customer base. Thank you for choosing us as your travel partner. We look forward to helping you explore the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
