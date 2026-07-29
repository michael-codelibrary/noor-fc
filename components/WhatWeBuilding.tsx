const stats = ["ONE CLUB", "ONE BADGE", "FOUR LEVELS", "0 BARRIERS"];

function ShieldIcon() {
  return (
    <svg
      width="22"
      height="27"
      viewBox="0 0 22 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L1.5 5V13.5C1.5 20 6 24.5 11 26C16 24.5 20.5 20 20.5 13.5V5L11 1Z"
        fill="white"
      />
    </svg>
  );
}

export default function WhatWeBuilding() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Giant NOOR FC watermark — sits behind everything */}
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
          }}
        >
          NOOR FC
        </span>
      </div>

      {/* Main three-column content */}
      <div
        className="relative flex items-stretch"
        style={{ minHeight: "560px", zIndex: 10 }}
      >
        {/* Left: stacked headline, anchored to bottom */}
        <div
          className="flex flex-col justify-end pb-14 shrink-0"
          style={{ width: "34%", paddingLeft: "120px" }}
        >
          <h2
            className="font-display font-bold uppercase text-white leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}
          >
            WHAT
            <br />
            WE&rsquo;RE
            <br />
            BUILDING
          </h2>
        </div>

        {/* Center: cut-out player photo, anchored to bottom */}
        <div className="flex-1 relative flex items-end justify-center" style={{ zIndex: 20 }}>
          {/* Drop /player.png (a cut-out PNG) into public/ to populate this */}
          <img
            src="/player.png"
            alt="Noor FC player"
            className="w-auto object-contain object-bottom"
            style={{
              height: "540px",
              filter: "drop-shadow(-30px 0 50px rgba(0,0,0,1))",
            }}
          />
        </div>

        {/* Right: body text, vertically centered */}
        <div
          className="flex flex-col justify-center gap-5 py-16 shrink-0"
          style={{
            width: "32%",
            paddingRight: "120px",
            paddingLeft: "36px",
            zIndex: 10,
          }}
        >
          <p className="text-white text-[0.875rem] leading-relaxed font-body">
            Noor FC is a football club for young people who would otherwise be
            priced out, overlooked, or simply never asked.
          </p>
          <p className="text-white/70 text-[0.875rem] leading-relaxed font-body">
            We&rsquo;re open to kids from Noor Homes and kids from the
            surrounding streets &mdash; most from less privileged backgrounds
            &mdash; and there&rsquo;s no barrier over money, kit, or ability. We
            run four levels so every player gets a proper game at their own
            pace, build life skills into the way every session runs, and bring
            local clubs and the professional game alongside our players.
          </p>
          <p className="text-white/70 text-[0.875rem] leading-relaxed font-body">
            This is not a profit-making venture. It&rsquo;s a community being
            built, and football is how we do it.
          </p>
        </div>
      </div>

      {/* Dark green stats bar */}
      <div
        className="relative flex items-center justify-between px-[120px] py-5"
        style={{ backgroundColor: "#1d6b35", zIndex: 10 }}
      >
        {stats.map((stat) => (
          <div key={stat} className="flex items-center gap-3">
            <ShieldIcon />
            <span
              className="font-display font-bold uppercase text-white tracking-widest"
              style={{ fontSize: "1rem", letterSpacing: "0.1em" }}
            >
              {stat}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
