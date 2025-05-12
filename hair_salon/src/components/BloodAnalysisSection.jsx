import Image from "next/image";

export default function BloodAnalysisSection() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <h2
            className="font-extrabold text-black leading-tight mb-6"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)", // Responsive from 28px to 48px
            }}
          >
            The Only Clinic That Unlocks Thriving Hair Through Blood{" "}
            <span className="text-red-500">🩸</span>
            Analysis
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            At Fix My Hair, we start from the inside out. Our detailed blood
            tests uncover deficiencies and imbalances, ensuring your body
            supports stronger, healthier hair growth. By addressing root causes,
            we improve growth rates, reduce thinning, and create customized
            treatment plans for lasting results. Unlock your hair’s full
            potential with us.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-xl mx-auto">
          <Image
            src="/blood_analysis_sample.png"
            alt="Blood Sample and Test List"
            layout="responsive"
            width={800}
            height={600}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
