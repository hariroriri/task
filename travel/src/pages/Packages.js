import React from 'react';
import '../styles/Packages.css';

const packages = [
  {
    id: 1,
    title: 'Beach Paradise',
    image: 'https://plus.unsplash.com/premium_photo-1719955781545-c60219441bfc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Relax on the most beautiful beaches with our all-inclusive beach paradise package.',
    price: '$799',
  },
  {
    id: 2,
    title: 'Adventure Awaits',
    image: 'https://media.istockphoto.com/id/2161772926/photo/view-onto-the-airfield-landing-field-of-the-hillary-tenzing-airport-lukla-airport-kongde-ri.jpg?s=1024x1024&w=is&k=20&c=PRg6UNOkQrwZsR2tOQVvSw6tFzmIB-g5QDsPAnbctWU=',
    description: 'Experience thrilling adventures with our exclusive adventure package.',
    price: '$999',
  },
  {
    id: 3,
    title: 'Cultural Journey',
    image: 'https://plus.unsplash.com/premium_photo-1718570256660-462115d86304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Immerse yourself in rich cultures with our cultural journey package.',
    price: '$1199',
  },
  {
    id: 4,
    title: 'Mountain Expedition',
    image: 'https://plus.unsplash.com/premium_photo-1661809977784-fde7d1d6c02e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Embark on a challenging mountain expedition with breathtaking views.',
    price: '$1299',
  },
  {
    id: 5,
    title: 'City Explorer',
    image: 'https://media.istockphoto.com/id/620963358/photo/tourist-couple-enjoying-sightseeing.jpg?s=1024x1024&w=is&k=20&c=R5bwNm07SzWymWsCy-wswLtQNKik8QrNZgFuHg_vlCY=',
    description: 'Discover the urban wonders and vibrant life of major cities with this package.',
    price: '$899',
  },
  {
    id: 6,
    title: 'Wildlife Safari',
    image: 'https://media.istockphoto.com/id/172488336/photo/safari.jpg?s=1024x1024&w=is&k=20&c=9a4D-wucIYiqBDqsrHWE6MorfsJiYog17l1v20SGhw4=',
    description: 'Experience the thrill of wildlife on a guided safari adventure.',
    price: '$1399',
  },
  {
    id: 7,
    title: 'Romantic Getaway',
    image: 'https://media.istockphoto.com/id/1311257901/photo/couple-hugging-at-the-edge-of-infinity-pool.jpg?s=1024x1024&w=is&k=20&c=6Et61Qu2eP8SWEldLfIjohkVKQLMqBQLHfoUn_KDf0k=',
    description: 'Enjoy a romantic escape with your loved one in a luxurious setting.',
    price: '$1199',
  },
  {
    id: 8,
    title: 'Desert Adventure',
    image: 'https://media.istockphoto.com/id/1061972196/photo/camel-safari-ride-caravan-in-hunder-desert-nubra-valley-leh-ladakh-india.jpg?s=1024x1024&w=is&k=20&c=Zwtp2xbbVJhQRbT3zOsQKEBomP4DEVi8YH95WXyD2U8=',
    description: 'Explore the vast desert landscapes with thrilling activities and unique experiences.',
    price: '$949',
  },
];


const Packages = () => {
  return (
    <div className="packages-page">
      <h1>Our Packages</h1>
      <div className="packages-container">
        {packages.map(pkg => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} className="package-image" />
            <div className="package-info">
              <h2>{pkg.title}</h2>
              <p>{pkg.description}</p>
              <p className="package-price">{pkg.price}</p>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
