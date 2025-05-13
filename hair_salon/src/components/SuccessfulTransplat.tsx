"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/successfultransplat/successfultransplat1.png",
  "/successfultransplat/successfultransplat2.png",
  "/successfultransplat/successfultransplat3.png",
  "/successfultransplat/successfultransplat4.png",
  "/successfultransplat/successfultransplat5.png",
  "/successfultransplat/successfultransplat6.png",
  "/successfultransplat/successfultransplat7.png",
  "/successfultransplat/successfultransplat8.png",
];

const CARD_WIDTH_PERCENT = 45; // Two full cards (45 + 45), remaining 10% to show third one partially

const SuccessfulTransplat = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % slides.length
      );
    }, 4000);
    return () => clearInterval(autoplay);
  }, []);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % slides.length
    );
  };

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-black mb-10">
          Successful transplants
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-black p-2 rounded-md hover:bg-yellow-300 transition"
          >
            &#8592;
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-yellow-300 border border-black p-2 rounded-md hover:bg-white transition"
          >
            &#8594;
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (CARD_WIDTH_PERCENT + 2)}%)`,
                width: `${slides.length * (CARD_WIDTH_PERCENT + 2)}%`,
              }}
            >
              {slides.map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0"
                  style={{
                    width: `${CARD_WIDTH_PERCENT}%`,
                    marginRight: "2%", // spacing between cards
                  }}
                >
                  <div className="rounded-xl overflow-hidden shadow-md border">
                    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px]">
                      <Image
                        src={src}
                        alt={`Slide ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessfulTransplat;
