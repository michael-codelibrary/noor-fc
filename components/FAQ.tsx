"use client";

import { useEffect, useRef, useState } from "react";

const categories = [
  {
    label: "Joining & Getting Started",
    items: [
      {
        q: "Do I need any experience to join?",
        a: "No. Noor FC is built for players at every level, from complete beginners to those who've played competitively before. You'll start at the level that's right for you.",
      },
      {
        q: "Do I need to register before turning up to a session?",
        a: "We'd recommend registering first so we know to expect you and can make sure we have the right coach-to-player ratio.",
      },
      {
        q: "What are the costs involved?",
        a: "It's £5 per session, and you can pay when you come to the session.",
      },
    ],
  },
  {
    label: "Ages, Levels & Format",
    items: [
      {
        q: "Is there a pathway to competitive football?",
        a: "Yes — players who want to progress into Match Squad and beyond can move into more structured, competitive fixtures.",
      },
    ],
  },
  {
    label: "Logistics",
    items: [
      {
        q: "What do I need to bring to my first session?",
        a: "Just trainers or boots and something comfortable to move in. We'll let you know if anything else is needed once you're signed up.",
      },
    ],
  },
  {
    label: "Ongoing Commitment",
    items: [
      {
        q: "What if I miss a few weeks or want to stop?",
        a: "There's no penalty and no pressure. Come back whenever you're ready — your spot in the pathway stays open.",
      },
      {
        q: "Can I try a session before fully committing?",
        a: "Of course — come along to a session and see if it's right for you before signing up properly.",
      },
    ],
  },
  {
    label: "About the Club",
    items: [
      {
        q: "How can I support or volunteer with the club?",
        a: "Get in touch via the Support Us page — we're always glad of extra hands, sponsorship, or donations.",
      },
    ],
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);

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

  const toggle = (key: string) =>
    setOpenKey(prev => (prev === key ? null : key));

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="bg-zinc-950 px-6 md:px-12 lg:px-[120px] py-28"
    >
      <div className="flex flex-col lg:flex-row lg:gap-20">

        {/* Left — heading */}
        <div
          className="shrink-0 lg:w-[36%] mb-14 lg:mb-0"
          style={{
            opacity: inView ? undefined : 0,
            animation: inView ? "fade-up 0.9s ease-out 0.1s both" : "none",
          }}
        >
          <div
            className="font-display font-bold uppercase mb-5"
            style={{ fontSize: "0.72rem", letterSpacing: "0.18em", color: "#D4A800" }}
          >
            FAQ
          </div>
          <h2
            className="font-display font-bold uppercase text-white leading-[0.88] tracking-tight mb-8"
            style={{
              fontSize: "clamp(2.8rem, 4.5vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Good<br />questions.
          </h2>
          <p
            className="font-body text-white/50 leading-relaxed"
            style={{ maxWidth: "340px" }}
          >
            The short version: show up. Everything else is sorted once
            you&rsquo;re through the door.
          </p>
        </div>

        {/* Right — accordion */}
        <div
          className="flex-1"
          style={{
            opacity: inView ? undefined : 0,
            animation: inView ? "fade-up 0.9s ease-out 0.3s both" : "none",
          }}
        >
          {categories.map((cat, ci) => (
            <div key={ci} className="mb-10 last:mb-0">

              {/* Category label */}
              <div
                className="font-display font-bold uppercase mb-4"
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.22em",
                  color: "#D4A800",
                }}
              >
                {cat.label}
              </div>

              {/* Items */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                {cat.items.map((item, ii) => {
                  const key = `${ci}-${ii}`;
                  const isOpen = openKey === key;

                  return (
                    <div
                      key={ii}
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-start justify-between text-left"
                        style={{ padding: "18px 0", gap: "20px" }}
                        aria-expanded={isOpen}
                      >
                        <span
                          className="font-display font-bold uppercase"
                          style={{
                            fontSize: "clamp(0.82rem, 1.3vw, 1rem)",
                            letterSpacing: "0.05em",
                            lineHeight: 1.25,
                            color: isOpen ? "#D4A800" : "white",
                            transition: "color 0.2s ease",
                          }}
                        >
                          {item.q}
                        </span>
                        <span
                          className="font-display font-bold shrink-0"
                          style={{
                            fontSize: "1.4rem",
                            color: "#D4A800",
                            lineHeight: 1,
                            marginTop: "1px",
                            display: "inline-block",
                            transition: "transform 0.25s ease",
                            transform: isOpen ? "rotate(45deg)" : "none",
                          }}
                        >
                          +
                        </span>
                      </button>

                      {/* Answer */}
                      <div
                        style={{
                          overflow: "hidden",
                          maxHeight: isOpen ? "300px" : "0",
                          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <p
                          className="font-body text-white/55 leading-relaxed"
                          style={{ paddingBottom: "18px", maxWidth: "600px" }}
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
