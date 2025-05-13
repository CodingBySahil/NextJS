"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    desktop: "/carousel/slide1-desktop.png",
    mobile: "/carousel/slide1-mobile.png",
  },
  {
    desktop: "/carousel/slide2-desktop.png",
    mobile: "/carousel/slide2-mobile.png",
  },
  {
    desktop: "/carousel/slide3-desktop.png",
    mobile: "/carousel/slide3-mobile.png",
  },
  {
    desktop: "/carousel/slide4-desktop.png",
    mobile: "/carousel/slide4-mobile.png",
  },
];

export default function HairTransplantCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play every 6 seconds
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      className="bg-white px-4 sm:px-8 lg:px-20 py-8 sm:py-12 flex flex-col gap-6 sm:gap-10"
      aria-label="Hair Transplant Carousel"
    >
      {/* Header and Navigation */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-4xl font-bold text-black">
          Hair Transplant FUE & FUT
        </h2>

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-10 h-10 border border-black rounded-md text-xl hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-10 h-10 bg-yellow-400 border border-black rounded-md text-xl hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            ›
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className=" rounded-xl overflow-hidden">
          <Image
            src={slides[index].desktop}
            alt={`Slide ${index + 1}`}
            width={1226}
            height={600}
            className="hidden sm:block w-full h-full object-contain"
            priority
          />
          <Image
            src={slides[index].mobile}
            alt={`Slide ${index + 1} Mobile`}
            width={400}
            height={500}
            className="block sm:hidden w-full h-full object-contain"
            priority
          />
        </div>

        {/* Indicators Positioned Inside Image */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 px-4">
          <div className="flex justify-center gap-2 sm:gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-3 w-8 rounded-full border border-black transition-all duration-300 focus:outline-none ${
                  i === index ? "bg-black" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
