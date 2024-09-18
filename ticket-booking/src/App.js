import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Flights from './components/Flights';
import Events from './components/Events';
import Tickets from './components/Tickets';
import Contact from './components/Contact';
import BookingSummary from './components/BookingSummary';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/events" element={<Events />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
