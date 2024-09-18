import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">TravelX</Link>
      </div>

      <div className="menu-icon" onClick={() => setIsMobile(!isMobile)}>
        <i className={isMobile ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/book-now" className="book-now-btn">Book Now</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
