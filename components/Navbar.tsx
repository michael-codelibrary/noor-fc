export default function Navbar() {
  const navLinks = ["About Us", "Offer", "Faculties", "Membership"];

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50"
      style={{ animation: "fade-down 0.6s ease-out both" }}
    >
      {/* Inverted trapezoid — straight sides, rounded bottom corners */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="relative" style={{ width: "200px", height: "86px" }}>
          {/* SVG trapezoid: straight slants, Q-bezier only at the two bottom corners */}
          <svg
            width="200"
            height="86"
            viewBox="0 0 200 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0 5px 18px rgba(0,0,0,0.28))" }}
          >
            <path
              d="M30,0 H170 Q200,0 186,22 L140,68 Q132,78 120,78 H80 Q68,78 60,68 L14,22 Q0,0 30,0 Z"
              fill="white"
            />
          </svg>

          {/* Black circular logo — centered in the white area */}
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-center"
            style={{ height: "78px" }}
          >
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-md">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.4" />
                <path
                  d="M12 2C12 2 8.5 6.5 8.5 12C8.5 17.5 12 22 12 22"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M12 2C12 2 15.5 6.5 15.5 12C15.5 17.5 12 22 12 22"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M2.5 9H21.5"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M2.5 15H21.5"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Transparent nav row */}
      <nav
        className="flex items-center justify-between px-[120px]"
        style={{ height: "78px" }}
      >
        {/* Left: nav links */}
        <div className="flex items-center gap-0.5">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 text-sm text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-200 font-body tracking-wide"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Search + hamburger */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2.5 hover:bg-white/10 transition-colors rounded-full px-4 py-2 cursor-pointer group">
            <span
              className="text-sm text-white/70 group-hover:text-white/90 transition-colors font-body tracking-wide"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
            >
              Search Here
            </span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <button className="w-9 h-9 hover:bg-white/10 transition-colors rounded-full flex items-center justify-center">
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="16" height="1.5" rx="0.75" fill="white" fillOpacity="0.8" />
              <rect y="4.75" width="11" height="1.5" rx="0.75" fill="white" fillOpacity="0.8" />
              <rect y="9.5" width="16" height="1.5" rx="0.75" fill="white" fillOpacity="0.8" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
