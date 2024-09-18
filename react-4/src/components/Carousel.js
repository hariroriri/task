// src/components/Carousel.js

import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Custom styles for carousel

const carouselItems = [
  { id: 1, img: 'https://images.unsplash.com/photo-1724093121148-ec407f45e44c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, img: 'https://images.unsplash.com/photo-1725652800358-ae3a752cfb68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, img: 'https://images.unsplash.com/photo-1720802616209-c174c23f6565?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, img: 'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust autoplay speed
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {carouselItems.map(item => (
          <div key={item.id}>
            <img src={item.img} alt={`Slide ${item.id}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
