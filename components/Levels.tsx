"use client";

import { useEffect, useRef, useState } from "react";

function TouchIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="13" stroke="white" strokeWidth="1.5" />
      <line x1="17" y1="4" x2="17" y2="30" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="4" y1="17" x2="30" y2="17" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <circle cx="17" cy="17" r="2.5" fill="white" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path d="M17 28 L17 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 14 L17 8 L23 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="29" r="2" fill="white" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path
        d="M17 3 L4 8.5 L4 18 C4 24.5 10 29.5 17 32 C24 29.5 30 24.5 30 18 L30 8.5 Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path
        d="M17 4 L20.5 13.5 L30.5 13.8 L23 19.8 L25.6 29.5 L17 24 L8.4 29.5 L11 19.8 L3.5 13.8 L13.5 13.5 Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const levels = [
  { name: "FIRST TOUCH",     desc: "Never played, or not for years",      color: "#484848", Icon: TouchIcon,  bg: "/col-1.png", bgPos: "left center" },
  { name: "DEVELOPMENT",     desc: "Plays a bit, wants to get better",    color: "#2e2e2e", Icon: ArrowIcon,  bg: "/col-2.png", bgPos: "35% center" },
  { name: "MATCH SQUAD",     desc: "Competitive league football",          color: "#1a1a1a", Icon: ShieldIcon, bg: "/col-3.png", bgPos: "right center" },
  { name: "WHISTLE & BADGE", desc: "Coach or referee instead of playing", color: "#0a0a0a", Icon: StarIcon,   bg: "/col-4.png", bgPos: "right center" },
];

export default function Levels() {
  const sectionRef    = useRef<HTMLElement>(null);
  const [inView, setInView]           = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

      {/* Four band columns — each a full-height container */}
      <div className="absolute inset-0 flex" style={{ zIndex: 0 }}>
        {levels.map(({ color, name, desc, Icon, bg, bgPos }, i) => {
          const isActive    = hoveredIndex === i;
          const isCollapsed = hoveredIndex !== null && !isActive;
          const bandWidth   = hoveredIndex === null ? "25%" : isActive ? "70%" : "10%";

          const bgImage = bg
            ? `linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.28) 60%, rgba(0,0,0,0.1) 100%), url('${bg}')`
            : undefined;

          return (
            <div
              key={i}
              className="flex flex-col justify-end overflow-hidden"
              style={{
                width: bandWidth,
                flexShrink: 0,
                backgroundColor: color,
                backgroundImage: bgImage,
                backgroundSize: "cover",
                backgroundPosition: bgPos,
                transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                paddingBottom: "52px",
                paddingLeft:  i === 0 ? "120px" : "28px",
                paddingRight: i === levels.length - 1 ? "120px" : "28px",
                cursor: "default",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon — always visible */}
              <div style={{ marginBottom: "16px" }}>
                <Icon />
              </div>

              {/* Text — only visible when this band is hovered */}
              <div
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.25s ease",
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  className="font-display font-bold uppercase text-white"
                  style={{ fontSize: "1.5rem", letterSpacing: "0.06em", marginBottom: "8px" }}
                >
                  {name}
                </div>
                <div
                  className="font-body text-white/55"
                  style={{ fontSize: "1rem", lineHeight: 1.5 }}
                >
                  {desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Headline + paragraphs — float above the bands */}
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
