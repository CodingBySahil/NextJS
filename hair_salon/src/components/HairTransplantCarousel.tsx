"use client";
import { useState } from "react";
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

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-white px-4 sm:px-8 lg:px-20 h-screen flex flex-col justify-between py-10">
      {/* Header and Controls */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-black">
          Hair Transplant FUE & FUT
        </h2>

        <div className="flex gap-2 sm:gap-4">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-10 h-10 bg-white border border-black rounded-md text-xl hover:bg-black hover:text-white transition"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-10 h-10 bg-yellow-400 border border-black rounded-md text-xl hover:bg-black hover:text-white transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full max-w-6xl mx-auto flex-1 flex items-center justify-center overflow-hidden rounded-xl ">
        {/* Desktop Image */}
        <Image
          src={slides[index].desktop}
          alt={`Slide ${index + 1}`}
          width={1226}
          height={600}
          className="hidden sm:block w-full h-full object-contain"
          priority
        />
        {/* Mobile Image */}
        <Image
          src={slides[index].mobile}
          alt={`Slide ${index + 1} Mobile`}
          width={400}
          height={500}
          className="block sm:hidden w-full h-full object-contain"
          priority
        />

        {/* Slide Indicators */}
        <div className="absolute bottom-5 w-full px-4 sm:px-6">
          <div className="max-w-md mx-auto flex justify-center gap-3">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`w-8 sm:w-10 h-3 rounded-full border border-black transition-all duration-300 ${
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
