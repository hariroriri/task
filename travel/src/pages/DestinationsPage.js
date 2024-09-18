// src/pages/DestinationsPage.js
import React, { useState } from 'react';
import { destinations } from '../data/destinations';
import FilterBar from '../components/FilterBar';
import DestinationCard from '../components/DestinationCard';
import '../styles/DestinationsPage.css';
import InteractiveMap from '../components/InteractiveMap';

const DestinationsPage = () => {
  const [regionFilter, setRegionFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  // Filter destinations based on selected region and type
  const filteredDestinations = destinations.filter((destination) => {
    const regionMatch = regionFilter === 'All' || destination.region === regionFilter;
    const typeMatch = typeFilter === 'All' || destination.type === typeFilter;
    return regionMatch && typeMatch;
  });

  return (
    <div className="destinations-page">
      <h1>Explore Our Destinations</h1>

      {/* Filter Section */}
      <FilterBar
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />

      {/* Grid of Destinations */}
      <div className="destination-grid">
        {filteredDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>

      {/* Interactive Map */}
      <InteractiveMap />
    </div>
  );
};

export default DestinationsPage;
