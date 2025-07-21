import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import OurExpertise from "./components/OurExperts";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <OurExpertise />
    </div>
  );
}
