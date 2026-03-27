import { useEffect, useState } from "react";
import "../css/Slideshow.css";
import SignatureRoast from "./SignatureRoast";
import Rewards from "./Rewards";
import Locations from "./Locations";

const Slideshow = () => {
  const slides = [
    <SignatureRoast></SignatureRoast>,
    <Rewards></Rewards>,
    <Locations></Locations>
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };


  return (
    <div className="slideshow">
      <button className="slideshow-btn left" onClick={goPrev} aria-label="Previous slide">
        ‹
      </button>

      <div className="slideshow-window">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            {slide}
          </div>
        ))}
      </div>

      <button className="slideshow-btn right" onClick={goNext} aria-label="Next slide">
        ›
      </button>
    </div>
  );
};

export default Slideshow;