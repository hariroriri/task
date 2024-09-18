import React from 'react';
import './FlexboxLayout.css'; 
import hari from '../assets/hari.JPG'
import durga from '../assets/durga.JPG';
import haridp from '../assets/haridpp.JPG';


const FlexboxLayout = () => {
  return (
    <div className="flexbox-layout">
      <h2>Flexbox Layout</h2>
      <div className="flex-container">
        <div className="flex-item">
          <img src={hari} alt="Item 1" />
          <p>Item 1</p>
        </div>
        <div className="flex-item">
          <img src={durga} alt="Item 2" />
          <p>Item 2</p>
        </div>
        <div className="flex-item">
          <img src={haridp} alt="Item 3" />
          <p>Item 3</p>
        </div>
      </div>
    </div>
  );
};

export default FlexboxLayout;
