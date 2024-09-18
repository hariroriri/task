import React, { useState, useEffect } from 'react';
import './SearchSuggestion.css';

// URL for REST Countries API
const COUNTRIES_API_URL = 'https://restcountries.com/v3.1/all';

const SearchSuggestion = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    // Fetch country data on component mount
    fetch(COUNTRIES_API_URL)
      .then(response => response.json())
      .then(data => {
        setAllCountries(data); // Assume data contains country information
      })
      .catch(error => console.error('Error fetching country data:', error));
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const filteredSuggestions = allCountries.filter(country =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query, allCountries]);

  const handleSuggestionClick = (country) => {
    setQuery(country.name.common);
    setSelectedCountry(country);
    setSuggestions([]);
  };

  return (
    <div className="search-suggestion">
      <h2>Real-time Search Suggestion</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search country..."
      />
      {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((country, index) => (
            <li
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(country)}
            >
              {country.name.common}
            </li>
          ))}
        </ul>
      )}
      {selectedCountry && (
        <div className="country-info">
          <h3>{selectedCountry.name.common}</h3>
          <img src={selectedCountry.flags.png} alt={selectedCountry.name.common} className="country-flag" />
          <p>Region: {selectedCountry.region}</p>
          <p>Population: {selectedCountry.population}</p>
        </div>
      )}
    </div>
  );
};

export default SearchSuggestion;
