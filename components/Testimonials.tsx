"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "My son had never played on a team before and was nervous about fitting in. Within a few weeks he was going every week without me having to ask. It’s given him something to look forward to.",
    attribution: "Parent of a First Touch player",
  },
  {
    quote: "I didn’t think I was good enough to join a proper club. Turns out that didn’t matter here — I just needed to show up. Now I’ve got mates I train with every week.",
    attribution: "Development squad player",
  },
  {
    quote: "What stands out is that nobody gets left out. You see kids who’ve never kicked a ball standing next to lads who play competitively, and everyone gets a game.",
    attribution: "Noor FC coach",
  },
  {
    quote: "It’s rare to see a club built this deliberately around inclusion rather than performance. The badge means the same thing whether you’re just starting out or playing competitive fixtures.",
    attribution: "Local partner",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-12 lg:px-[120px] py-28"
      style={{ backgroundColor: "#1d6b35" }}
    >
      {/* Eyebrow */}
      <div
        className="font-display font-bold uppercase mb-14"
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.45)",
          opacity: inView ? undefined : 0,
          animation: inView ? "fade-up 0.9s ease-out 0.1s both" : "none",
        }}
      >
        Heard on the touchline
      </div>

      {/* 2×2 quote grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col"
            style={{
              borderLeft: "2px solid #D4A800",
              paddingLeft: "28px",
              opacity: inView ? undefined : 0,
              animation: inView ? `fade-up 0.9s ease-out ${0.15 + i * 0.1}s both` : "none",
            }}
          >
            <p
              className="font-body leading-relaxed"
              style={{
                flex: 1,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <div
              className="font-display font-bold uppercase mt-6"
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                color: "#D4A800",
              }}
            >
              {t.attribution}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
