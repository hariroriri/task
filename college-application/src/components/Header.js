import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Ensure you have this file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">NEOZ</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/courses">Courses</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li> {/* Added About link */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
