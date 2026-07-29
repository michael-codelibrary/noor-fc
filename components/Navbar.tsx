export default function Navbar() {
  const navLinks = ["About Us", "Offer", "Faculties", "Membership"];

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 px-5 pt-5"
      style={{ animation: "fade-down 0.6s ease-out both" }}
    >
      <nav className="relative flex items-center justify-between bg-zinc-950/90 backdrop-blur-md rounded-2xl px-3 py-2.5 border border-white/5">
        {/* Left: nav links */}
        <div className="flex items-center gap-0.5">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-xl hover:bg-white/8 transition-all duration-200 font-body tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Center: Logo (floats above navbar) */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-4">
          <div className="w-11 h-11 bg-zinc-950 rounded-full flex items-center justify-center border border-white/10 shadow-xl">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
              <path
                d="M12 2C12 2 8 7 8 12C8 17 12 22 12 22"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 2C12 2 16 7 16 12C16 17 12 22 12 22"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M2.5 9H21.5M2.5 15H21.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Right: Search + hamburger */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2.5 bg-white/6 hover:bg-white/10 transition-colors rounded-full px-4 py-2 cursor-pointer group">
            <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors font-body tracking-wide">
              Search Here
            </span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
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

          <button className="w-9 h-9 bg-white/6 hover:bg-white/10 transition-colors rounded-full flex items-center justify-center">
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
