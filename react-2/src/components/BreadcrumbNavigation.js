import React from 'react';
import './BreadcrumbNavigation.css';

const BreadcrumbNavigation = () => {
  return (
    <nav className="breadcrumb-nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/section">Section</a></li>
        <li><span>About</span></li>
      </ul>
    </nav>
  );
};

export default BreadcrumbNavigation;
