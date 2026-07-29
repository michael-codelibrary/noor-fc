"use client";

import { useEffect, useRef, useState } from "react";

const levels = [
  { name: "FIRST TOUCH",     desc: "Never played, or not for years",      color: "#484848" },
  { name: "DEVELOPMENT",     desc: "Plays a bit, wants to get better",    color: "#2e2e2e" },
  { name: "MATCH SQUAD",     desc: "Competitive league football",          color: "#1a1a1a" },
  { name: "WHISTLE & BADGE", desc: "Coach or referee instead of playing", color: "#0a0a0a" },
];

export default function Levels() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ minHeight: "90vh" }}>

      {/* Four band columns — full-height containers holding the level labels */}
      <div className="absolute inset-0 flex" style={{ zIndex: 0 }}>
        {levels.map(({ color, name, desc }, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col justify-end"
            style={{
              backgroundColor: color,
              paddingBottom: "52px",
              paddingLeft:  i === 0 ? "120px" : "28px",
              paddingRight: i === levels.length - 1 ? "120px" : "28px",
            }}
          >
            <div
              className="font-display font-bold uppercase text-white"
              style={{
                fontSize: "1rem",
                letterSpacing: "0.08em",
                marginBottom: "6px",
                opacity: inView ? undefined : 0,
                animation: inView ? `fade-up 0.8s ease-out ${0.45 + i * 0.1}s both` : "none",
              }}
            >
              {name}
            </div>
            <div
              className="font-body text-white/55"
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.4,
                opacity: inView ? undefined : 0,
                animation: inView ? `fade-up 0.8s ease-out ${0.52 + i * 0.1}s both` : "none",
              }}
            >
              {desc}
            </div>
          </div>
        ))}
      </div>

      {/* Headline + paragraphs float above the bands */}
      <div
        className="relative flex items-start"
        style={{ paddingTop: "96px", paddingLeft: "120px", paddingRight: "120px", zIndex: 10 }}
      >
        <h2
          className="font-display font-bold uppercase text-white leading-[0.88] tracking-tight shrink-0"
          style={{
            width: "50%",
            fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
            letterSpacing: "-0.02em",
            opacity: inView ? undefined : 0,
            animation: inView ? "fade-up 0.9s ease-out 0.2s both" : "none",
          }}
        >
          THERE&rsquo;S NO
          <br />
          TRIAL YOU
          <br />
          CAN FAIL
        </h2>

        <div style={{ width: "50%", paddingLeft: "48px" }}>
          <p
            className="font-body text-white/80 leading-relaxed"
            style={{
              opacity: inView ? undefined : 0,
              animation: inView ? "fade-up 0.9s ease-out 0.4s both" : "none",
            }}
          >
            No trials. No cuts. Nobody released. Everyone gets minutes, every week.
            It&rsquo;s free to start, with no subs for the first month — beginners
            and borrowed boots are welcome.
          </p>
          <p
            className="font-body text-white/60 leading-relaxed"
            style={{
              marginTop: "20px",
              opacity: inView ? undefined : 0,
              animation: inView ? "fade-up 0.9s ease-out 0.55s both" : "none",
            }}
          >
            You get placed, not judged — and you can move between groups whenever you like.
          </p>
        </div>
      </div>

    </section>
  );
}
