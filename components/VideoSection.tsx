export default function VideoSection() {
  const paragraphs = [
    "Noor FC brings together our homes, the local community, and partner clubs under a single badge — one properly constituted club that anybody local can join, not a scheme attached to a care company.",
    "Same shirt, same coaches, same rules, wherever a player happens to live. Nobody watching from the touchline can tell who lives where. That's deliberate.",
    "What players get: a game every week, life skills taught alongside the football, and somewhere to belong.",
  ];

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "90vh" }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background2.mp4" type="video/mp4" />
      </video>

      {/* 40% black mask */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.4)" }} />

      {/* Content — top-centred */}
      <div
        className="relative flex flex-col items-center text-center"
        style={{ minHeight: "90vh", zIndex: 10, paddingTop: "96px", paddingLeft: "120px", paddingRight: "120px" }}
      >
        <h2
          className="font-display font-bold uppercase text-white leading-[0.9] tracking-tight mb-10"
          style={{
            fontSize: "clamp(3.5rem, 7vw, 7rem)",
            letterSpacing: "-0.02em",
            textShadow: "0 2px 40px rgba(0,0,0,0.5)",
          }}
        >
          One Club,
          <br />
          One Badge
        </h2>

        {/* Thin green divider */}
        <div className="mb-10" style={{ width: "48px", height: "2px", backgroundColor: "#1d6b35" }} />

        <div className="flex flex-col gap-6" style={{ maxWidth: "620px" }}>
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="font-body text-base leading-relaxed"
              style={{
                color: i === 0 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.65)",
                textShadow: "0 1px 12px rgba(0,0,0,0.6)",
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
