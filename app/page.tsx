import Hero from "@/components/Hero";
import WhatWeBuilding from "@/components/WhatWeBuilding";
import VideoSection from "@/components/VideoSection";
import Levels from "@/components/Levels";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WhatWeBuilding />
      <VideoSection />
      <Levels />
    </main>
  );
}
