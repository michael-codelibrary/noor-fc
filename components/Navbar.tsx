"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "About Us",     id: "about"  },
  { label: "Levels",       id: "levels" },
  { label: "Partnerships", id: "partnerships" },
  { label: "Support Us",   id: ""            },
];

export default function Navbar() {
  const [visible, setVisible]   = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 80 || y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-110%)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Logo badge — desktop only */}
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <img
          src="/noor-fc-logo.png"
          alt="Noor FC"
          style={{
            height: "184px",
            width: "auto",
            display: "block",
            filter: "drop-shadow(0 6px 24px rgba(0,0,0,0.6))",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </div>

      {/* Nav row */}
      <nav className="flex items-center justify-between px-6 lg:px-[120px]" style={{ height: "74px" }}>

        {/* Desktop: nav links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(({ label, id }) => (
            <button
              key={label}
              onClick={() => scrollTo(id)}
              className="px-4 py-2 text-sm text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-200 font-body tracking-wide bg-transparent cursor-pointer"
              style={{ border: "none", textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile: NOOR FC wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="lg:hidden font-display font-bold text-white text-xl tracking-wider bg-transparent cursor-pointer"
          style={{ border: "none", textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
        >
          NOOR FC
        </button>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollTo("join")}
            className="hidden sm:flex items-center gap-2.5 hover:bg-white/10 transition-colors rounded-full px-4 py-2 cursor-pointer group bg-transparent border-none"
          >
            <span
              className="text-sm text-white/70 group-hover:text-white/90 transition-colors font-body tracking-wide"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
            >
              Join Us Now
            </span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          <button
            onClick={() => setMenuOpen(o => !o)}
            className="w-9 h-9 hover:bg-white/10 transition-colors rounded-full flex items-center justify-center"
          >
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
              <rect width="16" height="1.5" rx="0.75" fill="white" fillOpacity="0.8" />
              <rect y="4.75" width="11" height="1.5" rx="0.75" fill="white" fillOpacity="0.8" />
              <rect y="9.5" width="16" height="1.5" rx="0.75" fill="white" fillOpacity="0.8" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-sm" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {navLinks.map(({ label, id }) => (
            <button
              key={label}
              onClick={() => scrollTo(id)}
              className="w-full text-left px-6 py-4 text-white/80 hover:text-white hover:bg-white/5 font-body text-base transition-colors bg-transparent cursor-pointer"
              style={{ border: "none", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              {label}
            </button>
          ))}
          <div className="px-6 py-4">
            <button
              onClick={() => scrollTo("join")}
              className="w-full py-3 bg-white text-black font-body text-sm font-medium rounded-xl hover:bg-white/90 transition-colors"
            >
              Join Us Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
