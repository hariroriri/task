// src/components/GridLayout.js

import React from 'react';
import LazyLoad from 'react-lazyload';
import './GridLayout.css';
import bmw from '../assets/BMW.jpg';

const GridLayout = () => {
  return (
    <div className="grid-layout">
      <h2>Lazy loading</h2>
      <div className="grid-container">
        <div className="grid-item">
          <LazyLoad height={500} offset={100}>
            <img
              src={bmw}
              alt="Item 1"
              className="grid-image"
            />
          </LazyLoad>
        </div>
        {/* Repeat for other items */}
      </div>
    </div>
  );
};

export default GridLayout;
