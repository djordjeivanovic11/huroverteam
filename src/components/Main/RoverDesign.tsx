"use client";
import React, { useState } from "react";
import Image from "next/image";

const designImages = [
  "/images/designs/Arm.jpeg",
  "/images/designs/ArmMount.jpeg",
  "/images/designs/ArmTopView.jpeg",
  "/images/designs/Auger.jpeg",
  "/images/designs/AugerMount.jpeg",
  "/images/designs/DriveCloseUp.jpeg",
  "/images/designs/Suspension.jpeg",
  "/images/designs/FullRover.jpeg",
];

const DesignSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = designImages.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goToSlide = (index: number) => setCurrent(index);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#0f0f0f] overflow-hidden px-4 py-8">
      {/* Decorative Element */}
      <div className="absolute w-72 h-72 rounded-full bg-[#A51C30] opacity-40 blur-3xl -bottom-20 -left-20 z-0" />

      {/* Title */}
      <div className="z-20 w-full text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
          Our Design Gallery
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative z-10 w-full max-w-4xl h-[600px] mx-auto flex items-center justify-center">
        {designImages.map((img, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            } flex items-center justify-center w-full`}
          >
            {/* Fixed container with consistent max-width and max-height */}
            <div className="relative w-[600px] h-[400px]">
              <Image
                src={img}
                alt={`Design ${index + 1}`}
                fill
                objectFit="contain"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl focus:outline-none z-20"
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl focus:outline-none z-20"
          aria-label="Next Slide"
        >
          &#10095;
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {designImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              title={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                index === current ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignSlider;
