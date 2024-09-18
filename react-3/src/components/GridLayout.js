import React from 'react';
import './GridLayout.css'; 
import zoom from '../assets/zoom.jpg';
import tent from '../assets/tent.jpg';
import zoom2 from '../assets/zoom2.JPG';
import durga from '../assets/durga.JPG';
import hari from '../assets/hari.JPG';
import haridp from '../assets/haridpp.JPG';

const GridLayout = () => {
  return (
    <div className="grid-layout">
      <h2>CSS Grid Layout</h2>
      <div className="grid-container">
        <div className="grid-item">
          <img src={zoom} alt="Grid Item 1" />
        </div>
        <div className="grid-item">
          <img src={zoom2} alt="Grid Item 2" />
        </div>
        <div className="grid-item">
          <img src={durga} alt="Grid Item 3" />
        </div>
        <div className="grid-item">
          <img src="https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzEyMTh8MHwxfGFsbHwxfHx8fHx8fHx8MTY4MjYxMTQ0&ixlib=rb-1.2.1&q=80&w=400" alt="Grid Item 4" />
        </div>
        <div className="grid-item">
          <img src={hari} alt="Grid Item 5" />
        </div>
        <div className="grid-item">
          <img src={haridp} alt="Grid Item 6" />
        </div>
        <div className="grid-item">
          <img src={tent} alt="Grid Item 7" />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
