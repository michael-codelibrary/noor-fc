export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col justify-end">
        <div
          className="flex items-end justify-between px-6 md:px-12 lg:px-[120px] pb-14 gap-8"
          style={{ animation: "fade-up 0.75s ease-out 0.25s both" }}
        >
          {/* Left: text */}
          <div className="max-w-xl">
            <h1
              className="font-display font-bold uppercase leading-[0.88] text-white mb-7 tracking-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Everyone gets
              <br />
              to play
            </h1>

            <p className="text-white/60 text-base leading-relaxed max-w-[320px] font-body font-light">
              Noor FC is a not-for-profit community football club, open to
              anyone local who wants a game. No trials. No cuts. No cost to
              start.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
