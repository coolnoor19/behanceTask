import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import BrandSection from "./sections/BrandSection";
import Supporters from "./sections/Supporter";
import FeatureCards from "./sections/FeatureCard";
import Footer from "./components/Footer";
import MeetTars from "./sections/MeetTars";
import NeonFeatureSection from "./components/NeonFeatureSection";

export default function Home() {
  return (
    <div>    
      <Hero />
      <BrandSection/>    
      <MeetTars/>
      <NeonFeatureSection />
      <FeatureCards/>
      <Supporters/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
