"use client";

import { useEffect, useRef, useState } from "react";

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "4px",
  padding: "14px 16px",
  color: "white",
  fontSize: "1rem",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

const labelBase: React.CSSProperties = {
  display: "block",
  fontSize: "0.65rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  fontWeight: "700",
  color: "rgba(255,255,255,0.4)",
  marginBottom: "8px",
};

function Field({ id, label, optional, children }: { id: string; label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} style={labelBase}>
        {label}{optional && <span style={{ color: "rgba(255,255,255,0.22)", fontWeight: 400 }}> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

export default function JoinUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView]       = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="join"
      className="bg-zinc-950 flex flex-col items-center px-6 lg:px-[120px] py-28"
      style={{ minHeight: "100vh" }}
    >
      {/* Headline */}
      <div
        className="text-center mb-14 w-full"
        style={{
          opacity: inView ? 1 : 0,
          animation: inView ? "fade-up 0.9s ease-out 0.1s both" : "none",
        }}
      >
        <h2
          className="font-display font-bold uppercase text-white leading-[0.88] tracking-tight mb-5"
          style={{ fontSize: "clamp(3rem, 6vw, 7rem)" }}
        >
          Come as you are
        </h2>
        <p className="font-body text-white/50 leading-relaxed" style={{ maxWidth: "460px", margin: "0 auto" }}>
          Fill this in and we&rsquo;ll be in touch within a week. The first session is always free — no kit, no trial, no pressure.
        </p>
      </div>

      {/* Form or confirmation */}
      {submitted ? (
        <div
          className="text-center"
          style={{
            opacity: 1,
            animation: "fade-up 0.6s ease-out both",
          }}
        >
          <div
            className="font-display font-bold uppercase text-white mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            We&rsquo;ve got your message.
          </div>
          <p className="font-body text-white/50 leading-relaxed" style={{ maxWidth: "380px", margin: "0 auto" }}>
            Expect to hear from us within a week. See you on the pitch.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-5"
          style={{
            maxWidth: "600px",
            opacity: inView ? 1 : 0,
            animation: inView ? "fade-up 0.9s ease-out 0.3s both" : "none",
          }}
        >
          {/* Name + Age */}
          <div className="flex gap-4">
            <div style={{ flex: 2 }}>
              <Field id="name" label="Full name">
                <input id="name" type="text" required placeholder="Your name" style={inputBase} />
              </Field>
            </div>
            <div style={{ flex: 1 }}>
              <Field id="age" label="Age">
                <input id="age" type="number" required placeholder="e.g. 14" min={6} max={25} style={inputBase} />
              </Field>
            </div>
          </div>

          {/* Email */}
          <Field id="email" label="Email address">
            <input id="email" type="email" required placeholder="you@example.com" style={inputBase} />
          </Field>

          {/* Phone */}
          <Field id="phone" label="Phone" optional>
            <input id="phone" type="tel" placeholder="+44 7700 000000" style={inputBase} />
          </Field>

          {/* Level */}
          <Field id="level" label="Which level interests you?">
            <select id="level" required defaultValue="" style={{ ...inputBase, cursor: "pointer", appearance: "none" }}>
              <option value="" disabled>Choose a level</option>
              <option value="first-touch">First Touch — never played, or not for years</option>
              <option value="development">Development — plays a bit, wants to improve</option>
              <option value="match-squad">Match Squad — competitive league football</option>
              <option value="whistle-badge">Whistle &amp; Badge — wants to coach or referee</option>
              <option value="not-sure">Not sure yet</option>
            </select>
          </Field>

          {/* Message */}
          <Field id="message" label="Anything else?" optional>
            <textarea
              id="message"
              rows={3}
              placeholder="Anything we should know before you come"
              style={{ ...inputBase, resize: "vertical" }}
            />
          </Field>

          {/* Submit */}
          <button
            type="submit"
            className="font-display font-bold uppercase tracking-widest"
            style={{
              width: "100%",
              padding: "16px",
              background: "#D4A800",
              color: "#000",
              border: "none",
              borderRadius: "4px",
              fontSize: "0.85rem",
              letterSpacing: "0.14em",
              cursor: "pointer",
              marginTop: "4px",
            }}
          >
            Send my interest
          </button>
        </form>
      )}
    </section>
  );
}
