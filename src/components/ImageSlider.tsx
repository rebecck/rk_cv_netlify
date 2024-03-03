import { useState } from "react";
import { Slide } from "../types/SlideType";
import "../styles/slider.css";

interface Props {
  slides: Slide[];
}
export default function ImageSlider({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <h1>{slides[currentIndex].title}</h1>
      <img
        src="../../chevron-left.svg"
        className="arrow arrow-left"
        onClick={goToPrev}
      />
      <img
        src="../../chevron-right.svg"
        className="arrow arrow-right"
        onClick={goToNext}
      />
      {/* <div className="arrow "></div> */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="slide"
      ></div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <div
            key={index}
            // className="dot"
            className={`dot ${currentIndex === index ? "active-dot" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
