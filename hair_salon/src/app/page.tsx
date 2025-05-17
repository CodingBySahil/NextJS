import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import FeaturesSection from "@/components/FeaturesSection";
import BloodAnalysisSection from "@/components/BloodAnalysisSection";
import Image from "next/image";
import HairTransplantCarousel from "@/components/HairTransplantCarousel";
import SuccessfulTransplat from "@/components/SuccessfulTransplat";
import HowItWorks from "@/components/HowItWorks";
import ComparisonTable from "@/components/ComparisonTable";


export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="">
        {" "}
        {/* Push content down below navbar height */}
        <Hero />
      </main>
      <Image
        src="/ScrollLoop.png"
        alt="Background"
        className="w-full h-[100px] object-cover"
        width={0}
        height={0}
        sizes="100vw"
      />
      <FeaturesSection />
      <BloodAnalysisSection />
      <HairTransplantCarousel />
      <SuccessfulTransplat/>
      <HowItWorks/>
      <ComparisonTable/>
    </div>
  );
}
