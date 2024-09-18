import React from 'react';
import './ResponsiveVideoEmbed.css';

const ResponsiveVideoEmbed = ({ videoSrc }) => {
  return (
    <div className="responsive-video">
      <iframe
        src={videoSrc}
        title="Responsive Video"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResponsiveVideoEmbed;
