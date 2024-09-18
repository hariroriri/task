import React, { useState } from 'react';
import '../styles/Flights.css';

const Flights = () => {
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: '1',
  });

  // eslint-disable-next-line no-unused-vars
  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: 'SkyHigh Airlines',
      departure: 'New York',
      destination: 'San Francisco',
      departureDate: '2024-11-05',
      returnDate: '2024-11-12',
      price: '$350',
    },
    {
      id: 2,
      airline: 'FlyAway',
      departure: 'Chicago',
      destination: 'Orlando',
      departureDate: '2024-11-10',
      returnDate: '2024-11-15',
      price: '$275',
    },
    {
      id: 3,
      airline: 'JetSetters',
      departure: 'Los Angeles',
      destination: 'Miami',
      departureDate: '2024-11-20',
      returnDate: '2024-11-25',
      price: '$300',
    },
  ]);

  const [filteredFlights, setFilteredFlights] = useState(flights);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const results = flights.filter(flight => {
      return (
        (formData.departure === '' || flight.departure.toLowerCase().includes(formData.departure.toLowerCase())) &&
        (formData.destination === '' || flight.destination.toLowerCase().includes(formData.destination.toLowerCase())) &&
        (formData.departureDate === '' || flight.departureDate === formData.departureDate) &&
        (formData.returnDate === '' || flight.returnDate === formData.returnDate)
      );
    });

    setFilteredFlights(results);
  };

  return (
    <div className="flights">
      <h2>Book Your Next Adventure</h2>
      <p>Find the best flights for your next trip. Explore top destinations and secure your travel plans with our easy-to-use search tool.</p>

      <div className="search-flights">
        <form className="flight-search-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="departure">Departure City:</label>
            <input
              type="text"
              id="departure"
              value={formData.departure}
              onChange={handleChange}
              placeholder="e.g., New York"
            />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination City:</label>
            <input
              type="text"
              id="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g., San Francisco"
            />
          </div>
          <div className="form-group">
            <label htmlFor="departureDate">Departure Date:</label>
            <input
              type="date"
              id="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="returnDate">Return Date:</label>
            <input
              type="date"
              id="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passengers">Number of Passengers:</label>
            <select
              id="passengers"
              value={formData.passengers}
              onChange={handleChange}
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </select>
          </div>
          <button type="submit" className="search-btn">Search Flights</button>
        </form>
      </div>

      <div className="flights-results">
        {filteredFlights.length > 0 ? (
          filteredFlights.map(flight => (
            <div key={flight.id} className="flight-card">
              <h3>{flight.airline}</h3>
              <p><strong>From:</strong> {flight.departure} <strong>To:</strong> {flight.destination}</p>
              <p><strong>Departure:</strong> {flight.departureDate} <strong>Return:</strong> {flight.returnDate}</p>
              <p><strong>Price:</strong> {flight.price}</p>
            </div>
          ))
        ) : (
          <p>No flights found. Please adjust your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Flights;
