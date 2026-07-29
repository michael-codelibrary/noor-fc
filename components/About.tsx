export default function About() {
  const pillars = [
    { stat: "4", label: "Levels of play" },
    { stat: "£0", label: "Cost to start" },
    { stat: "None", label: "Trials required" },
  ];

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#070707" }}>
      {/* Atmospheric green radial glow behind the player */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-80px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(ellipse at center, rgba(29,107,53,0.18) 0%, transparent 68%)",
        }}
      />

      {/* Thin top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: "rgba(29,107,53,0.25)" }}
      />

      <div className="flex" style={{ minHeight: "680px" }}>
        {/* ── Left: editorial text ── */}
        <div
          className="relative flex flex-col justify-center py-24 shrink-0 z-10"
          style={{ width: "50%", paddingLeft: "120px", paddingRight: "64px" }}
        >
          {/* Section label */}
          <div className="flex items-center gap-5 mb-10">
            <span
              className="font-display uppercase text-xs tracking-[0.3em]"
              style={{ color: "#1d6b35" }}
            >
              About the club
            </span>
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "#1d6b35", opacity: 0.3 }}
            />
            <span
              className="font-display text-xs"
              style={{ color: "rgba(29,107,53,0.5)" }}
            >
              01
            </span>
          </div>

          {/* Headline */}
          <h2
            className="font-display font-bold uppercase text-white leading-[0.88] tracking-tight mb-8"
            style={{
              fontSize: "clamp(3rem, 4.8vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Open to
            <br />
            everyone.
            <br />
            <span style={{ color: "#1d6b35" }}>Always.</span>
          </h2>

          {/* Green rule */}
          <div className="w-10 h-0.5 mb-8" style={{ backgroundColor: "#1d6b35" }} />

          {/* Body copy */}
          <div className="space-y-5" style={{ maxWidth: "370px" }}>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.62)" }}
            >
              Noor FC is a not-for-profit community football club. We&rsquo;re
              open to anyone local who wants a game — from complete beginners to
              players who never got picked.
            </p>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              We run four levels so every member gets a proper game at their own
              pace. Real coaching. Life skills built into every session. Football
              that actually includes people.
            </p>
          </div>

          {/* Stat pillars */}
          <div
            className="flex items-start gap-10 mt-12 pt-12"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            {pillars.map(({ stat, label }) => (
              <div key={label}>
                <div
                  className="font-display font-bold text-white"
                  style={{ fontSize: "2rem", letterSpacing: "-0.03em" }}
                >
                  {stat}
                </div>
                <div
                  className="font-body text-[10px] mt-1.5 uppercase tracking-[0.14em]"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: player image ── */}
        <div className="flex-1 relative flex items-end justify-center overflow-hidden">
          {/* Decorative giant outlined "FC" in the corner */}
          <span
            className="absolute bottom-0 right-0 select-none pointer-events-none font-display font-bold"
            style={{
              fontSize: "clamp(130px, 20vw, 220px)",
              lineHeight: "0.8",
              color: "transparent",
              WebkitTextStroke: "1px rgba(29,107,53,0.1)",
              zIndex: 1,
            }}
          >
            FC
          </span>

          {/* Player image — tall, bottom-anchored, with deep drop shadow */}
          <img
            src="/player.png"
            alt="Noor FC player in action"
            className="relative"
            style={{
              height: "640px",
              width: "auto",
              objectFit: "contain",
              objectPosition: "bottom center",
              zIndex: 2,
              filter:
                "drop-shadow(-40px 0 80px rgba(0,0,0,0.95)) drop-shadow(0 -10px 40px rgba(0,0,0,0.5))",
            }}
          />
        </div>
      </div>

      {/* Thin bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      />
    </section>
  );
}
