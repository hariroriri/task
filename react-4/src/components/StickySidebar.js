import React, { useState } from 'react';
import './StickySidebar.css';

const StickySidebar = () => {
  const [activeSection, setActiveSection] = useState('Introduction');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        <h2>Explore</h2>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <a 
              href="#section1" 
              onClick={() => handleSectionClick('Introduction')}
              className={activeSection === 'Introduction' ? 'active' : ''}
            >
              Introduction
            </a>
          </li>
          <li className="sidebar-item">
            <a 
              href="#section2" 
              onClick={() => handleSectionClick('Features')}
              className={activeSection === 'Features' ? 'active' : ''}
            >
              Features
            </a>
          </li>
          <li className="sidebar-item">
            <a 
              href="#section3" 
              onClick={() => handleSectionClick('Pricing')}
              className={activeSection === 'Pricing' ? 'active' : ''}
            >
              Pricing
            </a>
          </li>
          <li className="sidebar-item">
            <a 
              href="#section4" 
              onClick={() => handleSectionClick('Contact')}
              className={activeSection === 'Contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        {activeSection === 'Introduction' && (
          <section id="section1">
            <h2>Introduction</h2>
            <p>Welcome to our platform! We provide comprehensive solutions designed to help you achieve your goals efficiently. Our user-centric approach ensures you get the best possible experience.</p>
            <p>Our platform is built with the latest technology to offer seamless integration, high performance, and reliable security. Whether you're looking for advanced analytics or intuitive design, we have something for everyone.</p>
          </section>
        )}
        {activeSection === 'Features' && (
          <section id="section2">
            <h2>Features</h2>
            <ul>
              <li><strong>Advanced Analytics:</strong> Gain insights into your data with our powerful analytics tools.</li>
              <li><strong>User-Friendly Interface:</strong> Navigate easily with a clean and intuitive design.</li>
              <li><strong>24/7 Customer Support:</strong> Get assistance whenever you need it with our round-the-clock support.</li>
              <li><strong>Customizable Options:</strong> Tailor the platform to fit your specific needs and preferences.</li>
              <li><strong>Seamless Integration:</strong> Integrate with other systems and tools effortlessly.</li>
            </ul>
          </section>
        )}
        {activeSection === 'Pricing' && (
          <section id="section3">
            <h2>Pricing</h2>
            <p>Choose from our flexible pricing plans to find the one that best suits your needs:</p>
            <ul>
              <li><strong>Basic Plan:</strong> $29/month - Includes essential features and standard support.</li>
              <li><strong>Pro Plan:</strong> $59/month - Unlocks advanced features and priority support.</li>
              <li><strong>Enterprise Plan:</strong> $99/month - Comprehensive plan with all features and dedicated account management.</li>
            </ul>
            <p>All plans come with a 14-day free trial so you can explore our features without any commitment.</p>
          </section>
        )}
        {activeSection === 'Contact' && (
          <section id="section4">
            <h2>Contact</h2>
            <p>If you have any questions or need further assistance, we're here to help:</p>
            <ul>
              <li><strong>Email:</strong> support@example.com</li>
              <li><strong>Phone:</strong> (123) 456-7890</li>
              <li><strong>Address:</strong> 123 Business Rd, City, Country</li>
            </ul>
            <p>Our team is dedicated to providing prompt and effective solutions to ensure your satisfaction.</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default StickySidebar;
