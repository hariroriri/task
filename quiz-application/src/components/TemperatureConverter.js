import React, { useState } from 'react';
import './TemperatureConverter.css'; // Import the CSS file for styling

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value !== '') {
      setFahrenheit((value * 9/5 + 32).toFixed(2)); // Convert Celsius to Fahrenheit
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value !== '') {
      setCelsius(((value - 32) * 5/9).toFixed(2)); // Convert Fahrenheit to Celsius
    } else {
      setCelsius('');
    }
  };

  return (
    <div className="temperature-converter">
      <h1>Temperature Converter</h1>
      <div className="converter-inputs">
        <div className="input-group">
          <label htmlFor="celsius">Celsius</label>
          <input 
            type="number" 
            id="celsius" 
            value={celsius} 
            onChange={handleCelsiusChange} 
            placeholder="Enter °C"
          />
        </div>
        <div className="input-group">
          <label htmlFor="fahrenheit">Fahrenheit</label>
          <input 
            type="number" 
            id="fahrenheit" 
            value={fahrenheit} 
            onChange={handleFahrenheitChange} 
            placeholder="Enter °F"
          />
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
