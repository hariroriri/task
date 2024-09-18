import React, { useState } from 'react';
import './ExpandableSearchBar.css';

const ExpandableSearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
      <input
        type="text"
        placeholder="Search..."
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
      />
    </div>
  );
};

export default ExpandableSearchBar;
