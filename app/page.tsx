import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeBuilding from "@/components/WhatWeBuilding";
import VideoSection from "@/components/VideoSection";
import Levels from "@/components/Levels";
import LifeSkills from "@/components/LifeSkills";
import LocalClubs from "@/components/LocalClubs";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Navbar />
        <Hero />
        <WhatWeBuilding />
        <VideoSection />
        <Levels />
        <LifeSkills />
        <LocalClubs />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}
