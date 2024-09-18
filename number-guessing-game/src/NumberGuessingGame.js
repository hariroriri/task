// src/components/NumberGuessingGame.js
import React, { useState } from 'react';
import './NumberGuessingGame.css';

const NumberGuessingGame = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
  }

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericGuess = parseInt(guess, 10);

    if (isNaN(numericGuess) || numericGuess < 1 || numericGuess > 100) {
      setFeedback('Please enter a number between 1 and 100.');
      return;
    }

    setAttempts(attempts + 1);

    if (numericGuess < targetNumber) {
      setFeedback('Too low! Try again.');
    } else if (numericGuess > targetNumber) {
      setFeedback('Too high! Try again.');
    } else {
      setFeedback(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
      setTargetNumber(generateRandomNumber()); // Reset the game
      setAttempts(0);
    }
  };

  return (
    <div className="number-guessing-game">
      <h1>Number Guessing Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          max="100"
          value={guess}
          onChange={handleChange}
          placeholder="Enter your guess"
        />
        <button type="submit">Submit Guess</button>
      </form>
      <p>{feedback}</p>
      <p>Attempts: {attempts}</p>
    </div>
  );
};

export default NumberGuessingGame;
