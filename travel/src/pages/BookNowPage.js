// src/pages/BookNowPage.js
import React, { useState } from 'react';
import '../styles/BookNowPage.css';

const BookNowPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelDate: '',
        packageType: '',
        specialRequests: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form data:', formData);
    };

    return (
        <div className="book-now-page">
            <section className="intro-section">
                <h1>Book Your Adventure</h1>
                <p>Embark on your next journey with TravelX. Choose from our curated travel packages or customize your own trip.</p>
            </section>

            <section className="travel-packages-section">
                <h2>Our Popular Packages</h2>
                <div className="travel-packages-container">
                    <div className="travel-package-item">
                        <img src='https://media.istockphoto.com/id/856468706/photo/sunset-over-beach-in-nha-trang-vietnam-seascape.jpg?s=1024x1024&w=is&k=20&c=BkbnvDMJD7381OwkBkjRBcu67Oq9FbSvV2tIi_RgYkE=' alt="Beach Escape" className="travel-package-image" />
                        <h3>Beach Escape</h3>
                        <p>Relax on pristine beaches with our all-inclusive beach escape package.</p>
                    </div>
                    <div className="travel-package-item">
                        <img src='https://plus.unsplash.com/premium_photo-1661929481923-e816b59b7b9b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Mountain Adventure" className="travel-package-image" />
                        <h3>Mountain Adventure</h3>
                        <p>Explore breathtaking mountain trails with our adventure package.</p>
                    </div>
                    <div className="travel-package-item">
                        <img src='https://media.istockphoto.com/id/901587332/photo/couple-visiting-new-york-with-manhattan-skyline-in-background.jpg?s=1024x1024&w=is&k=20&c=jNRNSQ0Gm21B6uNLSWf_76nzDMIehz8U0VzDIge-L-s=' alt="City Getaway" className="travel-package-image" />
                        <h3>City Getaway</h3>
                        <p>Discover vibrant city life with our curated city getaway package.</p>
                    </div>
                </div>
            </section>


            <section className="booking-form-section">
                <h2>Book Your Trip</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="destination">Destination</label>
                        <input
                            type="text"
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="travelDate">Travel Date</label>
                        <input
                            type="date"
                            id="travelDate"
                            name="travelDate"
                            value={formData.travelDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="packageType">Select Package</label>
                        <select
                            id="packageType"
                            name="packageType"
                            value={formData.packageType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a Package</option>
                            <option value="beachEscape">Beach Escape</option>
                            <option value="mountainAdventure">Mountain Adventure</option>
                            <option value="cityGetaway">City Getaway</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="specialRequests">Special Requests</label>
                        <textarea
                            id="specialRequests"
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleChange}
                            rows="4"
                        />
                    </div>

                    <button type="submit">Submit Booking</button>
                </form>
            </section>
        </div>
    );
};

export default BookNowPage;
