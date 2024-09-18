import React, { useEffect, useRef, useState } from 'react';
import '../styles/Carousel.css';

const carouselItems = [
  { imgSrc: 'https://via.placeholder.com/1200x500?text=Welcome+to+Neoz+College', caption: 'Experience Excellence at Neoz College' },
  { imgSrc: 'https://via.placeholder.com/1200x500?text=Innovative+Education', caption: 'Innovative Education for Future Leaders' },
  { imgSrc: 'https://via.placeholder.com/1200x500?text=Join+Our+Community', caption: 'Join Our Thriving Community of Scholars' },
  { imgSrc: 'https://via.placeholder.com/1200x500?text=Explore+Our+Campus', caption: 'Explore Our Beautiful Campus' },
  { imgSrc: 'https://via.placeholder.com/1200x500?text=Apply+Now', caption: 'Apply Now for a Bright Future' },
];

const Carousel = () => {
  const trackRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % carouselItems.length;
        trackRef.current.style.transform = `translateX(-${nextIndex * 100}%)`;
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-track" ref={trackRef}>
        {carouselItems.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img
              className="carousel-image"
              src={item.imgSrc}
              alt={`Slide ${index + 1}`}
            />
            <div className="carousel-caption">
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
