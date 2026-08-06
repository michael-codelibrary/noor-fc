"use client";

import { useEffect, useRef, useState } from "react";

const clubs = [
  { name: "Millwall FC",        abbr: "MFC",  color: "#1c3564" },
  { name: "Leyton Orient",      abbr: "LO",   color: "#D4A800" },
  { name: "Charlton Athletic",  abbr: "CAFC", color: "#cc2200" },
  { name: "AFC Wimbledon",      abbr: "AFCW", color: "#003087" },
  { name: "Dulwich Hamlet",     abbr: "DH",   color: "#1a1a1a" },
  { name: "Barnet FC",          abbr: "BFC",  color: "#D4A800" },
  { name: "Bromley FC",         abbr: "BFC",  color: "#1c3564" },
  { name: "Cray Wanderers",     abbr: "CW",   color: "#1a1a1a" },
  { name: "Corinthian-Casuals", abbr: "CC",   color: "#5c3a1e" },
  { name: "Clapton FC",         abbr: "CFC",  color: "#cc2200" },
  { name: "Tooting & Mitcham",  abbr: "T&M",  color: "#1d6b35" },
  { name: "Wealdstone FC",      abbr: "WFC",  color: "#1a1a1a" },
];

function ShieldBadge({ abbr, color }: { abbr: string; color: string }) {
  return (
    <svg viewBox="0 0 80 92" width="128" height="148" aria-hidden="true">
      <path
        d="M40 3 L77 17 L77 50 C77 70 61 84 40 89 C19 84 3 70 3 50 L3 17 Z"
        fill={color}
      />
      <text
        x="40" y="58"
        textAnchor="middle"
        fill="white"
        fontWeight="800"
        fontSize={abbr.length > 3 ? "11" : "13"}
        fontFamily="Arial, sans-serif"
        letterSpacing="0.5"
      >
        {abbr}
      </text>
    </svg>
  );
}

export default function LocalClubs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // 4 copies → translateX(-50%) loops cleanly through 2 copies
  const carouselItems = [...clubs, ...clubs, ...clubs, ...clubs];

  return (
    <section
      ref={sectionRef}
      className="bg-white flex flex-col overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Carousel — fills upper portion */}
      <div
        className="flex-1 flex items-center overflow-hidden"
        style={{
          minHeight: "320px",
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex items-center"
          style={{ width: "max-content", animation: "marquee 48s linear infinite" }}
        >
          {carouselItems.map((club, i) => (
            <div
              key={i}
              className="flex flex-col items-center shrink-0"
              style={{ paddingLeft: "80px", paddingRight: "80px" }}
            >
              <ShieldBadge abbr={club.abbr} color={club.color} />
              <span
                className="font-body font-semibold text-black/50 mt-3 whitespace-nowrap"
                style={{ fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                {club.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Text content — lower portion */}
      <div className="flex flex-col items-center text-center px-6 lg:px-[120px] pb-20 pt-10">
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
      </div>
    </section>
  );
}
