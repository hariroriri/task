import React, { useState } from 'react';
import './DynamicTabs.css'; 

const DynamicTabs = () => {
  const [activeTab, setActiveTab] = useState('About');

  const renderContent = () => {
    switch (activeTab) {
      case 'About':
        return (
          <div>
            <h2>About Us</h2>
            <p>
              We are a cutting-edge digital agency that specializes in creating
              innovative, high-performing websites, mobile apps, and digital
              marketing strategies. Our team of experts delivers top-notch
              solutions tailored to our clients’ needs, ensuring the best
              outcomes and long-term success.
            </p>
            <p>
              Since our inception, we have partnered with numerous organizations
              across various industries to build custom software solutions,
              elevate brand identities, and create user-centric experiences.
            </p>
          </div>
        );
      case 'Services':
        return (
          <div>
            <h2>Our Services</h2>
            <ul>
              <li><strong>Web Development:</strong> We build responsive, scalable websites using the latest technologies.</li>
              <li><strong>Mobile App Development:</strong> Native and hybrid mobile apps to meet business objectives.</li>
              <li><strong>UI/UX Design:</strong> Crafting intuitive, beautiful interfaces for web and mobile platforms.</li>
              <li><strong>SEO & Digital Marketing:</strong> Optimize your online presence and grow your audience organically.</li>
            </ul>
          </div>
        );
      case 'Portfolio':
        return (
          <div>
            <h2>Our Portfolio</h2>
            <p>
              Take a look at some of the fantastic projects we've worked on:
            </p>
            <ul>
              <li><strong>E-commerce Platform:</strong> A high-traffic, seamless platform built to drive sales and conversions.</li>
              <li><strong>Finance App:</strong> A secure, easy-to-use app for financial management and transactions.</li>
              <li><strong>Educational Platform:</strong> Custom learning management system (LMS) designed for both students and educators.</li>
              <li><strong>Healthcare Portal:</strong> A comprehensive system to manage appointments, patient records, and remote consultations.</li>
            </ul>
          </div>
        );
      default:
        return <p>Select a tab to display content.</p>;
    }
  };

  return (
    <div className="tabs">
      <ul className="tab-list">
        <li
          className={activeTab === 'About' ? 'active' : ''}
          onClick={() => setActiveTab('About')}
        >
          About
        </li>
        <li
          className={activeTab === 'Services' ? 'active' : ''}
          onClick={() => setActiveTab('Services')}
        >
          Services
        </li>
        <li
          className={activeTab === 'Portfolio' ? 'active' : ''}
          onClick={() => setActiveTab('Portfolio')}
        >
          Portfolio
        </li>
      </ul>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default DynamicTabs;
