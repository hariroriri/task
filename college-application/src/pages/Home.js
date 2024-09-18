import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Home.css';

// Sample image URLs and captions for the carousel
const carouselItems = [
  { imgSrc: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Explore Our Campus' },
  { imgSrc: 'https://media.istockphoto.com/id/1461631424/photo/group-of-college-students-showing-victory-sign-or-gesture-by-looking-at-camera-while-standing.jpg?s=1024x1024&w=is&k=20&c=FKLQ8PmoPpA8NfkCM8VPeuTcG3buLVojZdfC8wbyumw=', caption: 'Student Success Stories' },
  { imgSrc: 'https://plus.unsplash.com/premium_photo-1680807988328-7ba28ad24d9f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Innovative Programs' },
  { imgSrc: 'https://images.unsplash.com/photo-1464582920526-52639da1ce12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Community Events' },
  { imgSrc: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Join Us Today' },
];

const Home = () => {
  return (
    <div className="home">
      <Carousel className="carousel" controls={true} indicators={true} interval={3000}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-image"
              src={item.imgSrc}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption className="carousel-caption">
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="welcome-message">
        <h1>Welcome to NEOZ College</h1>
        <p>Learn, Explore, and Grow with us. Join our world-class educational programs.</p>
        <img src="college.jpg" alt="College" className="college-image" />
        
        {/* New Section: Recent News */}
        <section className="recent-news">
          <h2>Recent News</h2>
          <ul>
            <li>
              <a href="/news/1">New Campus Building Opening</a> - Join us for the grand opening of our new state-of-the-art campus building.
            </li>
            <li>
              <a href="/news/2">Student Achievements</a> - Celebrating our students' recent achievements and awards.
            </li>
            <li>
              <a href="/news/3">Upcoming Workshops</a> - Check out our upcoming workshops and seminars.
            </li>
          </ul>
        </section>

        {/* New Section: Upcoming Events */}
        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <ul>
            <li>
              <strong>Open House:</strong> September 20, 2024 - Discover our campus and meet faculty.
            </li>
            <li>
              <strong>Career Fair:</strong> October 5, 2024 - Connect with potential employers and explore career opportunities.
            </li>
            <li>
              <strong>Guest Lecture:</strong> November 12, 2024 - Attend a lecture by a renowned industry expert.
            </li>
          </ul>
        </section>

        {/* New Section: Testimonials */}
        <section className="testimonials">
          <h2>What Our Students Say</h2>
          <blockquote>
            <p>"NEOZ College has provided me with the tools and knowledge to succeed in my career. The support from faculty and the community has been exceptional."</p>
            <footer>- Alex Johnson, Class of 2023</footer>
          </blockquote>
          <blockquote>
            <p>"The programs at NEOZ are top-notch and have prepared me well for the professional world. The practical approach to learning is invaluable."</p>
            <footer>- Jessica Lee, Class of 2024</footer>
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default Home;
