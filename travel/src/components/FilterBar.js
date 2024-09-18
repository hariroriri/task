// src/components/FilterBar.js
import React from 'react';
import '../styles/FilterBar.css';

const FilterBar = ({ regionFilter, setRegionFilter, typeFilter, setTypeFilter }) => {
  return (
    <div className="filter-bar">
      <select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)}>
        <option value="All">All Regions</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="North America">North America</option>
        {/* Add more regions as needed */}
      </select>

      <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
        <option value="All">All Types</option>
        <option value="Beach">Beach</option>
        <option value="Adventure">Adventure</option>
        <option value="Cultural">Cultural</option>
        {/* Add more types as needed */}
      </select>
    </div>
  );
};

export default FilterBar;
