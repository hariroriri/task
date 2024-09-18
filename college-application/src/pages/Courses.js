import React from 'react';
import '../styles/Courses.css';

const courses = [
  {
    title: 'Computer Science',
    image: 'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    description: 'Explore the world of algorithms, data structures, and software development in our Computer Science program. Gain hands-on experience with the latest technologies and prepare for a career in tech.',
  },
  {
    title: 'Business Administration',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    description: 'Our Business Administration course covers key concepts in management, marketing, and finance. Learn to lead and manage effectively in various business environments.',
  },
  {
    title: 'Mechanical Engineering',
    image: 'https://plus.unsplash.com/premium_photo-1664910842853-0d643f6db30c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    description: 'Dive into the principles of mechanical systems, thermodynamics, and materials science. Our Mechanical Engineering course prepares you for innovative engineering roles.',
  },
  {
    title: 'Electrical Engineering',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    description: 'Understand the fundamentals of electrical circuits, electronics, and electromagnetism. The Electrical Engineering program provides practical skills for designing and managing electrical systems.',
  },
  {
    title: 'Civil Engineering',
    image: 'https://plus.unsplash.com/premium_photo-1664474927853-900d5ee1fd80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    description: 'Learn about structural design, construction management, and urban planning in our Civil Engineering course. Equip yourself with the knowledge to contribute to infrastructure development.',
  },
];

const Courses = () => {
  return (
    <div className="courses">
      <h2>Our Courses</h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
