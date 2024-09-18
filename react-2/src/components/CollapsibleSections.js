import React, { useState } from 'react';
import './CollapsibleSections.css';

const CollapsibleSections = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-section">
      <h3 onClick={() => setIsOpen(!isOpen)}>{title}</h3>
      <div className={`content ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CollapsibleSections;
