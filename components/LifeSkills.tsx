"use client";

import { useEffect, useRef, useState } from "react";

export default function LifeSkills() {
  const sectionRef = useRef<HTMLElement>(null);
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

  return (
    <section
      ref={sectionRef}
      className="flex flex-col lg:flex-row overflow-hidden bg-white"
      style={{ minHeight: "90vh" }}
    >
      {/* Text — bottom on mobile, left on desktop */}
      <div
        className="order-2 lg:order-1 flex flex-col justify-center shrink-0 w-full lg:w-[55%] px-6 py-14 lg:pl-[120px] lg:pr-20 lg:py-0"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-28px)",
          transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
        }}
      >
        <div
          className="font-display font-bold uppercase text-black mb-5"
          style={{ fontSize: "0.72rem", letterSpacing: "0.18em" }}
        >
          The part that isn&rsquo;t about football
        </div>

        <h2
          className="font-display font-bold uppercase leading-[0.9] tracking-tight mb-8 text-black"
          style={{ fontSize: "clamp(2.6rem, 4.8vw, 5.2rem)" }}
        >
          What we teach on<br />
          the pitch shows up<br />
          <span style={{ color: "#D4A800" }}>everywhere else</span>
        </h2>

        <p className="font-body leading-relaxed text-black/65" style={{ maxWidth: "480px" }}>
          Every session is built to teach more than the game: timekeeping, for college, work and
          appointments; teamwork, for sharing a house with others; taking a bad decision well, for
          a boss, a tutor or a landlord; losing, for rejections and knock-backs; frustration, for
          most of adult life; and responsibility, for bills, keys and deadlines.
        </p>
      </div>

      {/* Photo — top on mobile, right on desktop */}
      <div
        className="order-1 lg:order-2 flex-1 relative overflow-hidden h-[300px] lg:h-auto"
      >
        <img
          src="/image-5.jpg"
          alt="Noor FC team celebrating"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "35% center" }}
        />
      </div>
    </section>
  );
}
