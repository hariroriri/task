import React from 'react';
import './ImageZoom.css'; // Import the CSS

const ImageZoom = () => {
  return (
    <div className="image-zoom">
      <h2>Image Zoom Effect</h2>
      <div className="zoom-container">
      <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt="Airplane" />
      </div>
    </div>
  );
};

export default ImageZoom;
