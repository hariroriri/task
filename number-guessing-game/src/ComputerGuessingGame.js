
import React, { useState } from 'react';
import './ComputerGuessingGame.css';

const ComputerGuessingGame = () => {
  const [low, setLow] = useState(1);
  const [high, setHigh] = useState(100);
  const [guess, setGuess] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const getNewGuess = () => {
    const newGuess = Math.floor((low + high) / 2);
    setGuess(newGuess);
  };

  const handleFeedback = (response) => {
    setAttempts(attempts + 1);

    if (response === 'correct') {
      setFeedback(`Computer guessed your number ${guess} in ${attempts + 1} attempts!`);
      setGameOver(true);
    } else if (response === 'too high') {
      setHigh(guess - 1);
      getNewGuess();
    } else if (response === 'too low') {
      setLow(guess + 1);
      getNewGuess();
    }
  };

  if (guess === null && !gameOver) {
    getNewGuess();
  }

  return (
    <div className="computer-guessing-game">
      <h1>Computer Guessing Game</h1>
      <p>Think of a number between 1 and 100 and let the computer guess it!</p>
      <p>Computer's current guess: {guess}</p>
      {gameOver ? (
        <button onClick={() => window.location.reload()}>Play Again</button>
      ) : (
        <div>
          <button onClick={() => handleFeedback('correct')}>Correct</button>
          <button onClick={() => handleFeedback('too high')}>Too High</button>
          <button onClick={() => handleFeedback('too low')}>Too Low</button>
        </div>
      )}
      <p>{feedback}</p>
      <p>Attempts: {attempts}</p>
    </div>
  );
};

export default ComputerGuessingGame;
