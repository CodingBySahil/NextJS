import Image from "next/image";

const features = [
  {
    title: "SURGEON-LED CARE",
    description:
      "From consultation to treatment, only expert surgeons handle your case.",
    badge: {
      text: "#1 Patients Choice Award",
      img: "/badge1Icon.png",
    },
  },
  {
    title: "HOLISTIC APPROACH",
    description:
      "We use blood tests, genetics, and counseling for long-lasting results.",
    badge: {
      text: "Voted #1 Best Hair Transplant Clinics",
      img: "/badge2Icon.png",
    },
  },
  {
    title: "MODERN TECHNOLOGY & METHODS",
    description:
      "We use the latest tools and techniques for superior results, unlike other clinics.",
    badge: {
      text: "Top ranked #1 Hair Transplant Techniques.",
      img: "/badge3Icon.png",
    },
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-10 px-4 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
  key={index}
  className={`relative rounded-xl border border-black shadow-lg p-6 pt-0 bg-white ${
    index === 1 ? "md:mt-8" : ""
  } mb-16 md:mb-0`} // 👈 Add margin bottom on mobile only
>

            {/* Title */}
            <div className="w-full bg-black text-yellow-400 rounded-b-xl px-4 py-3 text-center font-bold text-sm sm:text-base mt-4">

              {item.title}
            </div>

            {/* Description */}
            <p className="text-center text-black text-sm sm:text-base mt-6 mb-20 min-h-[72px]">
              {item.description}
            </p>

            {/* Badge — Half Outside Bottom */}
            <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 z-10 w-[90%] bg-yellow-300 rounded-lg flex items-center gap-3 px-4 py-4 shadow-md">
              <div className="flex items-center justify-center w-12 h-12">
                <Image
                  src={item.badge.img}
                  alt={item.badge.text}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="text-black font-bold text-sm">{item.badge.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
