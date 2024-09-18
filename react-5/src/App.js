// src/App.js
import React from 'react';
import DataFetching from './components/DataFetching';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Data Fetching with AJAX</h1>
      <DataFetching />
    </div>
  );
};

export default App;
