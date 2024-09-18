import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-text">
        <h1>About Us</h1>
        <p>Welcome to our college application. Learn more about us and our mission here.</p>
        <p>We are committed to providing quality education and resources for all students.</p>
      </div>

      <div className="about-image">
        <img src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" />
      </div>

      <section className="mission">
        <h2>Our Mission</h2>
        <div className="mission-content">
          <img src="https://media.istockphoto.com/id/143071446/photo/student-working-in-library-at-night.jpg?s=1024x1024&w=is&k=20&c=wacdMFJK_YwaABcHbzXMGaN7g9KHdqXAwfgqI3LrDDA=" alt="Mission" className="mission-image" />
          <p>Our mission is to foster a supportive and innovative learning environment that empowers students to achieve their full potential and make a positive impact on the world.</p>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-content">
          <img src="https://media.istockphoto.com/id/1461630701/photo/excited-group-of-students-shouting-by-holding-eachother-hands-after-exams-at-on-college.jpg?s=1024x1024&w=is&k=20&c=bt2-kPpQgIQ5YA77I7OD1ORQwRFEGgQNOTew_PmB-jU=" alt="Team" className="team-image" />
          <p>Our team of dedicated educators and staff are committed to providing exceptional support and guidance to our students. Meet the professionals who are passionate about shaping the future of education.</p>
        </div>
      </section>

      <section className="history">
        <h2>Our History</h2>
        <div className="history-content">
          <img src="https://media.istockphoto.com/id/185215276/photo/antique-books-in-a-library.jpg?s=1024x1024&w=is&k=20&c=Z6_uqte8_93hJW5RN5SoPR18o0OrNwEJlG34cpgxXqc=" alt="History" className="history-image" />
          <p>Founded in 1990, our institution has a rich history of excellence in education. From our humble beginnings, we have grown into a leading educational provider, continuously evolving to meet the needs of our students and the community.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
