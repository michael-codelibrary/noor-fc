export default function VideoSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "90vh" }}
    >
      {/* Background video — autoplay, muted, looping */}
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
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      />

      {/* Content placeholder — replace with actual section content */}
      <div
        className="relative flex items-center justify-center"
        style={{ minHeight: "90vh", zIndex: 10 }}
      >
      </div>
    </section>
  );
}
