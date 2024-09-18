// src/components/DestinationCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DestinationCard.css';

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
      <Link to={`/destinations/${destination.id}`} className="btn">
        Book Now
      </Link>
    </div>
  );
};

export default DestinationCard;
