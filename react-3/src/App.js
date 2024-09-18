import React from 'react';
import MultiStepForm from './components/MultiStepForm';
import HoverEffects from './components/HoverEffects';
import ImageZoom from './components/ImageZoom';
import GridLayout from './components/GridLayout';
import FlexboxLayout from './components/FlexboxLayout';
import './App.css'; // Import global CSS

function App() {
  return (
    <div className="App">
      <MultiStepForm />
      <HoverEffects />
      <ImageZoom />
      <GridLayout />
      <FlexboxLayout />
    </div>
  );
}

export default App;
