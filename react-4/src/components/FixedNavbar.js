import React, { useState } from 'react';
import './FixedNavbar.css';

const FixedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">HomeTown</div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </button>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#services">Services</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default FixedNavbar;
