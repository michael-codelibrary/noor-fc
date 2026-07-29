import Navbar from "./Navbar";

const subscriptionFeatures = [
  "20+ Training Sessions",
  "Access To Pro Fields",
  "Performance Tracking",
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      {/* Background image — replace URL with your actual photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80')",
        }}
      />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="flex items-end justify-between px-10 pb-14 gap-8">
          {/* Left: text block */}
          <div
            className="max-w-xl"
            style={{ animation: "fade-up 0.75s ease-out 0.25s both" }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-white/55 text-xs tracking-[0.2em] uppercase font-body">
                Step Into The World Of Champions
              </span>
            </div>

            <h1 className="font-display font-bold uppercase leading-[0.88] text-white mb-7 tracking-tight"
              style={{ fontSize: "clamp(4rem, 7vw, 6rem)" }}
            >
              Master Your
              <br />
              Football Game
            </h1>

            <p className="text-white/55 text-sm leading-relaxed max-w-[300px] font-body font-light">
              Sharpen Your Skills, Boost Your Fitness, And Learn Winning
              Strategies Through Professional, Guided Training Sessions.
            </p>
          </div>

          {/* Right: subscription card */}
          <div
            className="bg-white rounded-2xl p-6 shrink-0 min-w-[268px]"
            style={{ animation: "fade-in 0.8s ease-out 0.55s both" }}
          >
            <p className="text-[10px] text-zinc-400 uppercase tracking-[0.18em] font-body mb-5">
              Subscription
            </p>

            <div className="flex items-start justify-between gap-5">
              {/* Price */}
              <div>
                <p className="text-[11px] text-zinc-400 font-body mb-1">Monthly</p>
                <div className="flex items-start leading-none">
                  <span className="text-zinc-800 font-display font-bold text-5xl">
                    $99
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-body mt-1">/ Month</p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 pt-0.5">
                {subscriptionFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-[12px] text-zinc-600 font-body"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
