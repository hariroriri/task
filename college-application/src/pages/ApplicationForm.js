import React, { useState } from 'react';
import '../styles/ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to local storage for now
    localStorage.setItem('application', JSON.stringify(formData));
    alert('Application submitted successfully!');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="application-form">
      <h2>Apply Now</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <select name="course" onChange={handleChange}>
          <option value="">Select Course</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
        </select>
        <textarea name="message" placeholder="Why do you want to join?" onChange={handleChange} />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
