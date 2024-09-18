import React, { useState } from 'react';
import './AgeCalculator.css'; 


const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const handleDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    
    let ageYears = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    const dayDifference = today.getDate() - birthDateObj.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      ageYears--;
    }

    setAge(ageYears);
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="input-section">
        <label htmlFor="birthDate">Enter your birthdate:</label>
        <input 
          type="date" 
          id="birthDate" 
          value={birthDate} 
          onChange={handleDateChange}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        <div className="age-result">
          <h2>Your age is: {age} {age > 1 ? 'years' : 'year'} old</h2>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
