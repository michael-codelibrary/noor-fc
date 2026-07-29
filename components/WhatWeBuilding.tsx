"use client";

import { useEffect, useRef, useState } from "react";

const stats = ["ONE CLUB", "ONE BADGE", "FOUR LEVELS", "0 BARRIERS"];

function ShieldIcon() {
  return (
    <svg width="18" height="22" viewBox="0 0 22 27" fill="none">
      <path
        d="M11 1L1.5 5V13.5C1.5 20 6 24.5 11 26C16 24.5 20.5 20 20.5 13.5V5L11 1Z"
        fill="white"
      />
    </svg>
  );
}

export default function WhatWeBuilding() {
  const sectionRef   = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const span    = watermarkRef.current;
      if (!section || !span) return;
      const rect    = section.getBoundingClientRect();
      const vh      = window.innerHeight;
      const sh      = section.offsetHeight;
      const raw     = (vh - rect.top) / (vh + sh);
      const clamped = Math.max(0, Math.min(1, raw));
      const vw      = window.innerWidth / 100;
      span.style.transform = `translateX(${(0.5 - clamped) * 40 * vw}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marqueeItems = [...stats, ...stats, ...stats, ...stats, ...stats, ...stats];

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/wwb-bg.png')" }} />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.62)" }} />

      {/* Watermark */}
      <div className="absolute top-0 inset-x-0 pointer-events-none select-none flex justify-center" style={{ zIndex: 1 }}>
        <span
          ref={watermarkRef}
          className="font-display font-bold uppercase whitespace-nowrap leading-[0.85]"
          style={{ fontSize: "20vw", color: "rgba(255,255,255,0.05)", letterSpacing: "-0.02em", willChange: "transform" }}
        >
          NOOR FC
        </span>
      </div>

      {/* Main content — three column on desktop, stacked on mobile */}
      <div className="relative flex flex-col lg:flex-row items-stretch" style={{ minHeight: "90vh", zIndex: 10 }}>

        {/* Headline */}
        <div className="flex flex-col justify-center shrink-0 px-6 pt-24 pb-4 lg:pt-0 lg:pb-0 lg:pl-[120px] lg:pr-0 w-full lg:w-[34%]">
          <h2
            className="font-display font-bold uppercase text-white leading-[0.88] tracking-tight"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
              opacity: inView ? undefined : 0,
              animation: inView ? "fade-up 0.9s ease-out 0.3s both" : "none",
            }}
          >
            WHAT
            <br />
            WE&rsquo;RE
            <br />
            BUILDING
          </h2>
        </div>

        {/* Player — desktop only */}
        <div className="hidden lg:flex flex-1 relative items-end justify-center" style={{ zIndex: 20 }}>
          <img
            src="/player.png"
            alt="Noor FC player"
            className="w-auto object-contain object-bottom"
            style={{ height: "85vh", filter: "drop-shadow(-30px 0 50px rgba(0,0,0,1))" }}
          />
        </div>

        {/* Body text */}
        <div
          className="flex flex-col justify-center gap-5 shrink-0 px-6 pb-36 lg:pb-0 lg:pr-[120px] lg:pl-9 w-full lg:w-[32%]"
          style={{ zIndex: 10 }}
        >
          {[
            { text: "Noor FC is a football club for young people who would otherwise be priced out, overlooked, or simply never asked.", delay: "0.5s", dim: false },
            { text: "We're open to kids from Noor Homes and kids from the surrounding streets — most from less privileged backgrounds — and there's no barrier over money, kit, or ability. We run four levels so every player gets a proper game at their own pace, build life skills into the way every session runs, and bring local clubs and the professional game alongside our players.", delay: "0.65s", dim: true },
            { text: "This is not a profit-making venture. It's a community being built, and football is how we do it.", delay: "0.8s", dim: true },
          ].map(({ text, delay, dim }) => (
            <p
              key={delay}
              className={`text-base leading-relaxed font-body ${dim ? "text-white/70" : "text-white"}`}
              style={{
                opacity: inView ? undefined : 0,
                animation: inView ? `fade-up 0.9s ease-out ${delay} both` : "none",
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div
        className="absolute left-0 right-0 overflow-hidden"
        style={{
          bottom: "100px",
          backgroundColor: "#1d6b35",
          zIndex: 30,
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          className="flex items-center py-4"
          style={{ width: "max-content", animation: "marquee 28s linear infinite" }}
        >
          {marqueeItems.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0" style={{ paddingLeft: "56px", paddingRight: "56px" }}>
              <ShieldIcon />
              <span className="font-display font-bold uppercase text-white whitespace-nowrap" style={{ fontSize: "0.9rem", letterSpacing: "0.12em" }}>
                {stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
