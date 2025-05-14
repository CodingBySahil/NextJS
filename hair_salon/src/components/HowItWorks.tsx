"use client";
import Image from "next/image";

const steps = [
  {
    title: "Surgeon-Led Consultation",
    description:
      "Meet with our expert surgeons for a face-to-face consultation, including advanced blood tests, genetic profiling, and a full assessment of your hair and health.",
    icon: "/howitworks/surgon.png",
  },
  {
    title: "Precision Surgery",
    description:
      "Our surgeons use cutting-edge methods to perform minimally invasive procedures for natural, lasting results.",
    icon: "/howitworks/HairTrimmed.png",
  },
  {
    title: "Holistic Aftercare",
    description:
      "Enjoy a tailored aftercare plan with regular follow-ups to ensure your hair continues to grow and thrive.",
    icon: "/howitworks/baldHeaded.png",
  },
  {
    title: "Check-up appointments",
    description:
      "At the 3-month, 6-month and 12-month marks to monitor your progress and ensure everything is on track.",
    icon: "/howitworks/HairLosing.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-10 px-4 lg:py-14 lg:px-16 overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50 pointer-events-none">
        <Image
          src="/howitworks/fixmyhairLogo.png"
          alt="Fix My Hair Watermark"
          fill
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black mb-10 sm:mb-16 relative z-10">
        How It Works at <br className="sm:hidden" /> Fix My Hair
      </h2>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Vertical Timeline Line (Desktop only) */}
        <div className="hidden sm:block absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-black z-0" />

        {/* Steps */}
        <div className="flex flex-col gap-12 sm:gap-20 relative">
          {steps.map((step, index) => {
            const isRight = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row ${
                  isRight ? "" : "sm:flex-row-reverse"
                } items-center sm:items-start gap-4 sm:gap-6`}
              >
                {/* Content */}
                <div
                  className={`w-full sm:w-1/2 flex flex-col items-center sm:items-${
                    isRight ? "end" : "start"
                  } text-center sm:text-${
                    isRight ? "right" : "left"
                  } px-6 lg:px-10`}
                >
                  <div className="inline-block p-2 bg-yellow-300 border border-black rounded-md mb-3">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={36}
                      height={36}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Timeline Bullet (Desktop only) */}
                <div className="hidden sm:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <div className="absolute w-5 h-5 bg-white border border-black rounded-full z-10" />
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full z-20" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
