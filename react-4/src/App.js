// src/App.js
import React from 'react';
import FixedNavbar from './components/FixedNavbar';
import './App.css';
import StickySidebar from './components/StickySidebar';
import GridLayout from './components/GridLayout';
import SearchSuggestion from './components/SearchSuggestion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './components/Carousel';


const App = () => {
  return (
    <div className="app">
      <FixedNavbar />
      <StickySidebar />
      <GridLayout />
      <SearchSuggestion />
      <Carousel />
    </div>
  );
};

export default App;
