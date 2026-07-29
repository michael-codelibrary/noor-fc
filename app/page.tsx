import Hero from "@/components/Hero";
import WhatWeBuilding from "@/components/WhatWeBuilding";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WhatWeBuilding />
      <About />
    </main>
  );
}
