import React from 'react';
import QuizApp from './QuizApp';
import './App.css'; 
import AgeCalculator from './components/AgeCalculator';
import TemperatureConverter from './components/TemperatureConverter';
import RandomCodeGenerator from './components/RandomCodeGenerator';
import RockPaperScissors from './components/RockPaperScissors';

function App() {
  return (
    <div className="App">
      <QuizApp />
      <AgeCalculator />
      <TemperatureConverter />
      <RandomCodeGenerator />
      <RockPaperScissors />
    </div>
  );
}

export default App;
