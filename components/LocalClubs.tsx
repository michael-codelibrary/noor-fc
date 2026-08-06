"use client";

import { useEffect, useRef, useState } from "react";

const clubs = [
  { name: "Arsenal FC",        src: "/clubs/arsenal.png"        },
  { name: "Brentford FC",      src: "/clubs/brentford.svg"      },
  { name: "Chelsea FC",        src: "/clubs/chelsea.webp"       },
  { name: "Crystal Palace FC", src: "/clubs/crystal-palace.svg" },
  { name: "Fulham FC",         src: "/clubs/fulham.svg"         },
  { name: "Tottenham Hotspur", src: "/clubs/tottenham.webp"     },
  { name: "West Ham United",   src: "/clubs/west-ham.webp"      },
];

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
      id="partnerships"
      className="bg-white flex flex-col items-center justify-center overflow-hidden py-20"
      style={{ minHeight: "100vh" }}
    >
      {/* Carousel — upper portion */}
      <div
        className="w-full flex items-center overflow-hidden"
        style={{
          height: "280px",
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
              className="flex items-center justify-center shrink-0"
              style={{ paddingLeft: "64px", paddingRight: "64px" }}
            >
              <img
                src={club.src}
                alt={club.name}
                style={{ height: "148px", width: "auto", maxWidth: "148px", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text content — lower portion, tighter gap */}
      <div className="flex flex-col items-center text-center px-6 lg:px-[120px] pb-20 pt-6">
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
