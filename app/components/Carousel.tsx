"use client";

import React, { useState, ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0
        ? React.Children.count(children) - 1
        : currentSlide - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === React.Children.count(children) - 1
        ? 0
        : currentSlide + 1,
    );
  };

  return (
    <div className="relative mx-auto flex w-full items-center">
      <button
        onClick={prevSlide}
        className="mr-4 rounded-full bg-gradient-to-b from-cyan-500 to-cyan-950 p-2 text-white transition duration-300 hover:from-cyan-950 hover:to-cyan-500"
      >
        {"<-"}
      </button>
      <div className="relative overflow-hidden">
        <div
          className="flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="ml-4 rounded-full bg-gradient-to-b from-cyan-500 to-cyan-950 p-2 text-white transition duration-300 hover:from-cyan-950 hover:to-cyan-500"
      >
        {"->"}
      </button>
    </div>
  );
};

export default Carousel;
