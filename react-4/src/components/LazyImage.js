// src/components/LazyImage.js

import React from 'react';
import './LazyImage.css'; // Import the CSS for styling

const LazyImage = ({ src, alt, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`lazy-image ${className}`}
      loading="lazy"
      {...props}
    />
  );
};

export default LazyImage;
