"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function SuccessfulTransplants() {
  const transplants = [
    {
      before: "/successfultransplat/before1.png",
      after: "/successfultransplat/after1.png",
      procedure: "FUE hair transplant",
      grafts: "1,720",
      months: "12",
      doctor: "Dr. John Hair Transplant Surgeon",
      avatar: "/successfultransplat/doctor.png",
    },
    {
      before: "/successfultransplat/before2.png",
      after: "/successfultransplat/after2.png",
      procedure: "FUE hair transplant",
      grafts: "1,720",
      months: "12",
      doctor: "Dr. John Hair Transplant Surgeon",
      avatar: "/successfultransplat/doctor.png",
    },
    {
      before: "/successfultransplat/before3.png",
      after: "/successfultransplat/after3.png",
      procedure: "FUE hair transplant",
      grafts: "1,720",
      months: "12",
      doctor: "Dr. John Hair Transplant Surgeon",
      avatar: "/successfultransplat/doctor.png",
    },
    {
      before: "/successfultransplat/before4.png",
      after: "/successfultransplat/after4.png",
      procedure: "FUE hair transplant",
      grafts: "1,720",
      months: "12",
      doctor: "Dr. John Hair Transplant Surgeon",
      avatar: "/successfultransplat/doctor.png",
    },
    {
      before: "/successfultransplat/before5.png",
      after: "/successfultransplat/after5.png",
      procedure: "FUE hair transplant",
      grafts: "1,720",
      months: "12",
      doctor: "Dr. John Hair Transplant Surgeon",
      avatar: "/successfultransplat/doctor.png",
    },
    {
      before: "/successfultransplat/before6.png",
      after: "/successfultransplat/after6.png",
      procedure: "FUE hair transplant",
      grafts: "1,720",
      months: "12",
      doctor: "Dr. John Hair Transplant Surgeon",
      avatar: "/successfultransplat/doctor.png",
    },
    {
      before: "/successfultransplat/before7.png",
      after: "/successfultransplat/after7.png",
      procedure: "FUE hair transplant",
      grafts: "1,720",
      months: "12",
      doctor: "Dr. John Hair Transplant Surgeon",
      avatar: "/successfultransplat/doctor.png",
    },
    {
      before: "/successfultransplat/before8.png",
      after: "/successfultransplat/after8.png",
      procedure: "FUE hair transplant",
      grafts: "1,720",
      months: "12",
      doctor: "Dr. John Hair Transplant Surgeon",
      avatar: "/successfultransplat/doctor.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2.5);
  const cardWidth = 384; // px
  const cardGap = 24; // gap between cards (mr-6 = 1.5rem = 24px)

  const totalSlides = transplants.length;

  // Dynamically adjust visible cards based on screen width
  useEffect(() => {
    const calculateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCards(1);
      else if (width < 1024) setVisibleCards(1.5);
      else setVisibleCards(2.5);
    };

    calculateVisibleCards();
    window.addEventListener("resize", calculateVisibleCards);
    return () => window.removeEventListener("resize", calculateVisibleCards);
  }, []);

  // Autoplay (every 4s)
  useEffect(() => {
    const interval = setInterval(() => {
      const maxIndex = totalSlides - Math.ceil(visibleCards);
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [visibleCards, totalSlides]);

  const prev = () => {
    const maxIndex = totalSlides - Math.ceil(visibleCards);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    const maxIndex = totalSlides - Math.ceil(visibleCards);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-16 bg-white text-black">
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Heading + Controls */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Successful transplants
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 border border-black bg-white hover:bg-gray-100 rounded-md flex items-center justify-center"
              aria-label="Previous"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-black bg-yellow-400 hover:bg-yellow-500 rounded-md flex items-center justify-center"
              aria-label="Next"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (cardWidth + cardGap)
              }px)`,
              width: `${totalSlides * (cardWidth + cardGap)}px`,
            }}
          >
            {transplants.map((item, i) => (
              <div
                key={i}
                className="w-96 flex-shrink-0 bg-white border border-black/10 shadow rounded-xl overflow-hidden mr-6"
              >
                <div className="grid grid-cols-2 gap-2 p-2">
                  {/* Before */}
                  <div className="relative">
                    <Image
                      src={item.before}
                      alt="Before"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <span className="absolute bottom-2 left-2 px-2 py-1 bg-yellow-400 text-xs font-semibold rounded">
                      Before
                    </span>
                  </div>

                  {/* After */}
                  <div className="relative">
                    <Image
                      src={item.after}
                      alt="After"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <span className="absolute bottom-2 left-2 px-2 py-1 bg-yellow-400 text-xs font-semibold rounded">
                      After
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 py-4 space-y-2 border-t border-gray-200">
                  <p className="text-sm font-semibold">
                    Procedure:{" "}
                    <span className="text-gray-600 font-normal">
                      {item.procedure}
                    </span>
                  </p>
                  <p className="text-sm font-semibold">
                    Grafts:{" "}
                    <span className="text-gray-600 font-normal">
                      {item.grafts}
                    </span>
                  </p>
                  <p className="text-sm font-semibold">
                    Time post transplant:{" "}
                    <span className="text-gray-600 font-normal">
                      {item.months} months
                    </span>
                  </p>
                  <div className="flex items-center pt-2">
                    <Image
                      src={item.avatar}
                      alt="Doctor"
                      width={32}
                      height={32}
                      className="rounded-full border mr-2"
                    />
                    <span className="text-sm font-medium">{item.doctor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-10 flex justify-center gap-2">
          {transplants.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-8 rounded-full border border-black transition-all ${
                i === currentIndex ? "bg-black" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
