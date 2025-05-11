import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative md:min-h-screen min-h-fit w-full bg-[#f7e135] overflow-hidden flex">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center md:items-start px-6 md:px-16 py-16 md:py-20 text-center md:text-left">
          <span className="bg-black text-[#f7e135] px-3 py-1 text-sm font-semibold w-fit mb-4">
            #FIXMYHAIR
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black mb-4">
            World’s Most Patient Centred Hair Clinic
          </h1>
          <p className="text-black font-medium text-base md:text-lg mb-6">
            Winner of Multiple Awards 🏆🏆🏆
          </p>
          <Link
            href="/booknow"
            className="bg-white w-fit text-black font-bold text-sm px-6 py-3 rounded shadow-md border-2 border-black hover:bg-black hover:text-white transition"
          >
            BOOK NOW
          </Link>

          {/* Mobile Image */}
          <div className="relative w-full h-[350px] bg-[#f7e135] mt-6 md:hidden">
            <Image
              src="/hero_page_model.png"
              alt="Hair Model"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* Desktop Image */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src="/hero_page_model.png"
            alt="Hair Model"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
