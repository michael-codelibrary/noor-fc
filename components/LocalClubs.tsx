"use client";

import { useEffect, useRef, useState } from "react";

export default function LocalClubs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white flex flex-col items-center justify-center text-center px-6 lg:px-[120px]"
      style={{ minHeight: "90vh", paddingTop: "140px", paddingBottom: "140px" }}
    >
      {/* Headline */}
      <h2
        className="font-display font-bold uppercase leading-[0.88] tracking-tight text-black mb-7"
        style={{
          fontSize: "clamp(3.2rem, 8.5vw, 10rem)",
          opacity: inView ? 1 : 0,
          animation: inView ? "fade-up 0.9s ease-out 0.1s both" : "none",
        }}
      >
        Built with local clubs,
        <br />
        Not{" "}
        <span style={{ color: "#D4A800" }}>against them</span>
      </h2>

      {/* Sub-headline */}
      <div
        className="font-display font-bold uppercase text-black mb-6"
        style={{
          fontSize: "clamp(0.75rem, 1.1vw, 1rem)",
          letterSpacing: "0.1em",
          maxWidth: "680px",
          lineHeight: 1.6,
          opacity: inView ? 1 : 0,
          animation: inView ? "fade-up 0.9s ease-out 0.3s both" : "none",
        }}
      >
        A network, not a rival — with one badge in the middle of it.
      </div>

      {/* Body */}
      <p
        className="font-body text-black/60 leading-relaxed"
        style={{
          maxWidth: "560px",
          opacity: inView ? 1 : 0,
          animation: inView ? "fade-up 0.9s ease-out 0.5s both" : "none",
        }}
      >
        Noor FC isn&rsquo;t building a rival club — we&rsquo;re building a network with one
        badge in the middle of it.
      </p>
    </section>
  );
}
