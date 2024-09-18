import React, { useState } from 'react';
import './VotingSystem.css'; 

const VotingSystem = () => {
  const [age, setAge] = useState('');
  const [eligible, setEligible] = useState(null); 
  const [vote, setVote] = useState(''); 

  const handleAgeInput = (e) => {
    setAge(e.target.value);
  };

  const handleCheckEligibility = () => {
    const ageNumber = parseInt(age);
    if (!isNaN(ageNumber) && ageNumber >= 18) {
      setEligible(true);
    } else {
      setEligible(false);
    }
  };

  const handleVote = (e) => {
    setVote(e.target.value);
  };

  const handleSubmitVote = () => {
    if (vote) {
      alert(`Thank you for voting for ${vote}!`);
      // Reset after submission
      setAge('');
      setEligible(null);
      setVote('');
    }
  };

  return (
    <div className="voting-system-container">
      <div className="voting-system">
        <h2>Voting System</h2>

        <div className="age-verification">
          <label htmlFor="age-input">Enter Your Age:</label>
          <input
            type="number"
            id="age-input"
            value={age}
            onChange={handleAgeInput}
            min="0"
            placeholder="Enter your age"
          />
          <button onClick={handleCheckEligibility}>Check Eligibility</button>
        </div>

        {eligible === false && <p className="error">You must be 18 years or older to vote.</p>}
        {eligible === true && (
          <div className="voting-section">
            <h3>You are eligible to vote!</h3>
            <p>Who do you want to vote for?</p>
            <div className="vote-options">
              <label>
                <input
                  type="radio"
                  name="vote"
                  value="Naam Tamilar Katchi(NTK)"
                  onChange={handleVote}
                />
                Naam Tamilar Katchi(NTK)
              </label>
              <label>
                <input
                  type="radio"
                  name="vote"
                  value="Tamilaga Vettri Kazhagam(TVK)"
                  onChange={handleVote}
                />
                Tamilaga Vettri Kazhagam(TVK)
              </label>
              <label>
                <input
                  type="radio"
                  name="vote"
                  value="Dravida Munnetra Kazhagam(Dmk)"
                  onChange={handleVote}
                />
                Dravida Munnetra Kazhagam(Dmk)
              </label>
              <label>
                <input
                  type="radio"
                  name="vote"
                  value="All India Anna Dravida Munnetra Kazhagam(ADMK)"
                  onChange={handleVote}
                />
                All India Anna Dravida Munnetra Kazhagam(ADMK)
              </label>
            </div>
            <button onClick={handleSubmitVote}>Submit Vote</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VotingSystem;
