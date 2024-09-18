import React from 'react';
import '../styles/Home.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="home">
      {/* Bootstrap Carousel Section */}
      <section className="carousel-section">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1364432191/photo/travel-concept-background-luggage-at-airport.jpg?s=1024x1024&w=is&k=20&c=RDYYmnh6n-1Q522iGW9X6aRXNErS9Eyht-WNFEi1aUs="
              alt="Luxury Flights"
            />
            <Carousel.Caption>
              <h3>Luxury Flights</h3>
              <p>Experience world-class comfort on our luxury flights!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/504009730/photo/air-travel-international-flight.jpg?s=1024x1024&w=is&k=20&c=tE8Pss9wW8R7jg1JR55WRLTe0QF5Z8ktd_PUFLJ5MlU="
              alt="Affordable Fares"
            />
            <Carousel.Caption>
              <h3>Affordable Fares</h3>
              <p>Fly to your favorite destinations at unbeatable prices!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1541674162775-15fd6b6802e3?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="International Flights"
            />
            <Carousel.Caption>
              <h3>International Flights</h3>
              <p>Explore the world with our reliable international flight options.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <h2>Our Flight Services</h2>
        <div className="cards-container">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/667787320/photo/dog-in-airport-terminal-on-vacation.jpg?s=1024x1024&w=is&k=20&c=UPby2Ngn6Vym3KSPixISRu0IuS4OXNpbibAR5MZmpGg="
              alt="Domestic Flights"
            />
            <h3>Domestic Flights</h3>
            <p>Enjoy hassle-free domestic travel across the country.</p>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1504723246034-0977641ea907?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="International Flights"
            />
            <h3>International Flights</h3>
            <p>Fly across continents with our premium international flight services.</p>
          </div>
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1387110847/photo/a-beautiful-businesswoman-reading-her-notes-while-travelling-by-plane.jpg?s=1024x1024&w=is&k=20&c=pKotjhaQHqc_dwswohVtsBYK_lYla5EUS7v_oXSDmig="
              alt="Business Class"
            />
            <h3>Business Class</h3>
            <p>Travel in style and comfort with our exclusive business class packages.</p>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="subscription-section">
        <h2>Stay Updated on Flight Deals</h2>
        <p>Subscribe to our newsletter for the latest flight offers and updates.</p>
        <form className="subscription-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
