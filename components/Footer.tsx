"use client";

const navLinks = [
  { label: "About Us",     id: "about"        },
  { label: "Levels",       id: "levels"       },
  { label: "Partnerships", id: "partnerships" },
  { label: "Join Us",      id: "join"         },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer
      className="bg-zinc-950 px-6 md:px-12 lg:px-[120px] pt-12 pb-8"
      style={{ borderTop: "1px solid rgba(29,107,53,0.35)" }}
    >
      {/* Main row */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

        {/* Identity */}
        <div className="flex items-center gap-4 shrink-0">
          <img src="/noor-fc-logo.png" alt="Noor FC" style={{ height: "52px", width: "auto" }} />
          <div>
            <div
              className="font-display font-bold uppercase text-white"
              style={{ fontSize: "1rem", letterSpacing: "0.1em" }}
            >
              Noor FC
            </div>
            <div className="font-body text-white/35" style={{ fontSize: "0.7rem" }}>
              Not for profit · London · Est. 2024
            </div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-7 gap-y-2">
          {navLinks.map(({ label, id }) => (
            <button
              key={label}
              onClick={() => scrollTo(id)}
              className="font-body text-white/40 hover:text-white/75 transition-colors text-sm bg-transparent border-none cursor-pointer p-0"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Tagline */}
        <div
          className="font-display font-bold uppercase text-white/12 shrink-0"
          style={{ fontSize: "0.65rem", letterSpacing: "0.2em", lineHeight: 1.7 }}
        >
          Everyone<br />gets to play
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className="mt-10 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="font-body text-white/20" style={{ fontSize: "0.68rem" }}>
          © 2024 Noor FC. All rights reserved.
        </span>
        <span className="font-body text-white/15" style={{ fontSize: "0.68rem" }}>
          Built to last, not to profit.
        </span>
      </div>
    </footer>
  );
}
