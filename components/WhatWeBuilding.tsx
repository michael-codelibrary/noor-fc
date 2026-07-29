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
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // 6 repetitions for a dense, seamless marquee loop
  const marqueeItems = [...stats, ...stats, ...stats, ...stats, ...stats, ...stats];

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden">

      {/* NOOR FC watermark — fade-in + zoom on scroll entry */}
      <div
        className="absolute top-0 inset-x-0 pointer-events-none select-none flex justify-center"
        style={{ zIndex: 0 }}
      >
        <span
          className="font-display font-bold uppercase whitespace-nowrap leading-[0.85]"
          style={{
            fontSize: "20vw",
            color: "#1e1e1e",
            letterSpacing: "-0.02em",
            opacity: inView ? undefined : 0,
            animation: inView
              ? "watermark-reveal 1.6s cubic-bezier(0.16,1,0.3,1) 0.05s both"
              : "none",
          }}
        >
          NOOR FC
        </span>
      </div>

      {/* Main three-column content */}
      <div
        className="relative flex items-stretch"
        style={{ minHeight: "90vh", zIndex: 10 }}
      >
        {/* Left: headline — slide up on entry */}
        <div
          className="flex flex-col justify-center shrink-0"
          style={{ width: "34%", paddingLeft: "120px" }}
        >
          <h2
            className="font-display font-bold uppercase text-white leading-[0.88] tracking-tight"
            style={{
              fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
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

        {/* Center: player photo — bottom-anchored */}
        <div className="flex-1 relative flex items-end justify-center" style={{ zIndex: 20 }}>
          <img
            src="/player.png"
            alt="Noor FC player"
            className="w-auto object-contain object-bottom"
            style={{
              height: "85vh",
              filter: "drop-shadow(-30px 0 50px rgba(0,0,0,1))",
            }}
          />
        </div>

        {/* Right: body text — staggered slide up */}
        <div
          className="flex flex-col justify-center gap-5 shrink-0"
          style={{
            width: "32%",
            paddingRight: "120px",
            paddingLeft: "36px",
            zIndex: 10,
          }}
        >
          <p
            className="text-white text-[0.875rem] leading-relaxed font-body"
            style={{
              opacity: inView ? undefined : 0,
              animation: inView ? "fade-up 0.9s ease-out 0.5s both" : "none",
            }}
          >
            Noor FC is a football club for young people who would otherwise be
            priced out, overlooked, or simply never asked.
          </p>
          <p
            className="text-white/70 text-[0.875rem] leading-relaxed font-body"
            style={{
              opacity: inView ? undefined : 0,
              animation: inView ? "fade-up 0.9s ease-out 0.65s both" : "none",
            }}
          >
            We&rsquo;re open to kids from Noor Homes and kids from the
            surrounding streets &mdash; most from less privileged backgrounds
            &mdash; and there&rsquo;s no barrier over money, kit, or ability. We
            run four levels so every player gets a proper game at their own
            pace, build life skills into the way every session runs, and bring
            local clubs and the professional game alongside our players.
          </p>
          <p
            className="text-white/70 text-[0.875rem] leading-relaxed font-body"
            style={{
              opacity: inView ? undefined : 0,
              animation: inView ? "fade-up 0.9s ease-out 0.8s both" : "none",
            }}
          >
            This is not a profit-making venture. It&rsquo;s a community being
            built, and football is how we do it.
          </p>
        </div>
      </div>

      {/* Marquee strip — floating 100px from section bottom */}
      <div
        className="absolute left-0 right-0 overflow-hidden"
        style={{
          bottom: "100px",
          backgroundColor: "#1d6b35",
          zIndex: 30,
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          className="flex items-center py-4"
          style={{
            width: "max-content",
            animation: "marquee 28s linear infinite",
          }}
        >
          {marqueeItems.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 shrink-0"
              style={{ paddingLeft: "56px", paddingRight: "56px" }}
            >
              <ShieldIcon />
              <span
                className="font-display font-bold uppercase text-white whitespace-nowrap"
                style={{ fontSize: "0.9rem", letterSpacing: "0.12em" }}
              >
                {stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
