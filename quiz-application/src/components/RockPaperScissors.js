import React, { useState } from 'react';
import './RockPaperScissors.css';

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const choices = ['rock', 'paper', 'scissors'];

  const playGame = (userSelection) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerSelection = choices[randomIndex];
    setUserChoice(userSelection);
    setComputerChoice(computerSelection);

    determineWinner(userSelection, computerSelection);
  };

  const determineWinner = (userSelection, computerSelection) => {
    if (userSelection === computerSelection) {
      setResult("It's a draw!");
    } else if (
      (userSelection === 'rock' && computerSelection === 'scissors') ||
      (userSelection === 'paper' && computerSelection === 'rock') ||
      (userSelection === 'scissors' && computerSelection === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  return (
    <div className="game-container">
      <h1>Rock, Paper, Scissors</h1>
      <div className="choices">
        <button onClick={() => playGame('rock')} className="choice-btn">
          Rock
        </button>
        <button onClick={() => playGame('paper')} className="choice-btn">
          Paper
        </button>
        <button onClick={() => playGame('scissors')} className="choice-btn">
          Scissors
        </button>
      </div>
      <div className="results">
        {userChoice && <p>Your Choice: <span>{userChoice}</span></p>}
        {computerChoice && <p>Computer's Choice: <span>{computerChoice}</span></p>}
        {result && <h2>{result}</h2>}
      </div>
    </div>
  );
};

export default RockPaperScissors;
