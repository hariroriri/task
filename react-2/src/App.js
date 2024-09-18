import React from 'react';
import './App.css';
import ExpandableSearchBar from './components/ExpandableSearchBar';
import CollapsibleSections from './components/CollapsibleSections';
import BreadcrumbNavigation from './components/BreadcrumbNavigation';
import ResponsiveVideoEmbed from './components/ResponsiveVideoEmbed';
import CustomCheckboxRadio from './components/CustomCheckboxRadio';

function App() {
  return (
    <div className="App">
      <BreadcrumbNavigation />
      <ExpandableSearchBar />
      <CollapsibleSections title="Web Development" content="Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites." />
      <CollapsibleSections title="App Development" content="App development refers to the process of creating software applications for various platforms, such as mobile devices, desktops, or web browsers. It involves a range of activities, including planning, designing, coding, testing, and deploying applications to meet specific user needs or business objectives." />
      <ResponsiveVideoEmbed videoSrc="https://www.youtube.com/embed/AiD6SOOBKZI?si=H8bEI9atlUQsj2N2" />
      <CustomCheckboxRadio />
    </div>
  );
}

export default App;
