"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import WaitlistForm from "../components/WaitlistForm";
import FloatingDots from "../components/FloatingDots";
import HomeButtonLogo from "../components/HomeButtonLogo";

/* ─── types ─── */
type Feature = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  accent: string;
};

const FEATURES: Feature[] = [
  {
    title: "Turn nights out into a game",
    subtitle: "Challenges · Streaks · Drops",
    description:
      "OutSpot turns restaurants, bars, rooftops, and hidden cafes into playable spots. Complete challenges, keep streaks alive, and earn rewards for actually going out.",
    icon: "🎯",
    accent: "#ff2d7b",
  },
  {
    title: "See where the energy is",
    subtitle: "Live city layer",
    description:
      "A live layer on top of your city shows where people are checking in, dropping moments, and getting spotted — right now, not last week.",
    icon: "🗺️",
    accent: "#a855f7",
  },
  {
    title: "Be early. Be seen.",
    subtitle: "Spots · Clout · Progress",
    description:
      "Get credit for discovering places earlier than everyone else. Build a profile that shows where you've been, what you've unlocked, and how you move.",
    icon: "🔥",
    accent: "#ff6b2b",
  },
  {
    title: "Real engagement for venues",
    subtitle: "Beyond impressions",
    description:
      "OutSpot is built to drive foot traffic, not just likes. Venues can plug into challenges and drops that bring people in, again and again.",
    icon: "🏙️",
    accent: "#e040fb",
  },
];

/* ─── global animation styles ─── */
function GlobalStyles() {
  useEffect(() => {
    const id = "outspot-global-styles";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = [
      "@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;500;700;900&family=Syne:wght@400;500;600;700;800&display=swap');",
      ".hero-word { display:inline-block; opacity:0; transform:translateY(50px) rotateX(12deg); animation:wordReveal 0.9s cubic-bezier(0.16,1,0.3,1) forwards; }",
      ".hero-word:nth-child(1) { animation-delay:0.15s; }",
      ".hero-word:nth-child(2) { animation-delay:0.3s; }",
      "@keyframes wordReveal { to { opacity:1; transform:translateY(0) rotateX(0); } }",
      ".badge-enter { opacity:0; transform:translateY(16px); animation:fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s forwards; }",
      ".tagline-enter { opacity:0; transform:translateY(16px); animation:fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.55s forwards; }",
      ".cta-enter { opacity:0; transform:translateY(16px); animation:fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.75s forwards; }",
      ".scroll-hint-enter { opacity:0; animation:fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 1.1s forwards; }",
      "@keyframes fadeUp { to { opacity:1; transform:translateY(0); } }",
      "@keyframes pulseDot { 0%,100% { opacity:1; box-shadow:0 0 0 0 rgba(255,45,123,0.5); } 50% { opacity:0.6; box-shadow:0 0 0 6px rgba(255,45,123,0); } }",
      "@keyframes marqueeScroll { 0% { transform:translateX(0); } 100% { transform:translateX(-50%); } }",
      ".marquee-track { display:flex; width:max-content; animation:marqueeScroll 25s linear infinite; }",
      ".marquee-track:hover { animation-play-state:paused; }",
      "@keyframes linePulse { 0%,100% { opacity:0.25; transform:scaleY(1); } 50% { opacity:0.8; transform:scaleY(1.15); } }",
      "@keyframes streak { 0% { left:-20%; opacity:0; } 8% { opacity:0.7; } 92% { opacity:0.7; } 100% { left:120%; opacity:0; } }",
      ".noise::after { content:''; position:absolute; inset:0; background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\"); pointer-events:none; z-index:1; }",
      ".grid-overlay::before { content:''; position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px); background-size:72px 72px; mask-image:radial-gradient(ellipse 55% 45% at 50% 50%,black 15%,transparent 100%); pointer-events:none; z-index:1; }",
    ].join("\n");
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);
  return null;
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */
export default function HomePage() {
  const heroWrapRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLElement>(null);
  const cityTextRef = useRef<HTMLDivElement>(null);
  const featPinRef = useRef<HTMLDivElement>(null);
  const featTrackRef = useRef<HTMLDivElement>(null);
  const featBgRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouse = useCallback((e: MouseEvent) => {
    setMousePos({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [handleMouse]);

  /* ─── GSAP ScrollTrigger ─── */
  useEffect(() => {
    if (typeof window === "undefined") return;
    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      const gsap = gsapMod.default;
      const ScrollTrigger = stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        /* ── 1. HERO PIN ── */
        if (heroWrapRef.current && heroContentRef.current) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: heroWrapRef.current,
              start: "top top",
              end: "+=100%",
              scrub: 0.6,
              pin: true,
              pinSpacing: true,
            },
          });
          tl.to(heroContentRef.current, {
            y: -140, scale: 1.18, opacity: 0, filter: "blur(8px)", ease: "none",
          }, 0);
        }

        /* ── 2. DYNAMIC BACKGROUND (hero phase) ── */
        if (heroBgRef.current) {
          gsap.to(heroBgRef.current, {
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,45,123,0.14) 0%, rgba(168,85,247,0.06) 40%, #050508 100%)",
            scrollTrigger: { trigger: heroWrapRef.current, start: "top top", end: "bottom top", scrub: 1 },
          });

          const bgShifts = [
            { trigger: "#what-is-outspot", bg: "radial-gradient(ellipse 90% 50% at 50% 30%, rgba(168,85,247,0.06) 0%, #050508 100%)" },
            { trigger: "#waitlist-section", bg: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,45,123,0.08) 0%, #050508 100%)" },
          ];
          bgShifts.forEach((s) => {
            const el = document.querySelector(s.trigger);
            if (el) {
              gsap.to(heroBgRef.current!, {
                background: s.bg,
                scrollTrigger: { trigger: el, start: "top 60%", end: "top 20%", scrub: 1.5 },
              });
            }
          });
        }

        /* ── 3. ORB PARALLAX ── */
        [
          { ref: orb1Ref.current, y: -220, scale: 1.4, opacity: 0.12, scrub: 1.2 },
          { ref: orb2Ref.current, y: -160, x: 90, scale: 0.6, opacity: 0.08, scrub: 1.5 },
          { ref: orb3Ref.current, y: -110, x: -70, scale: 1.6, opacity: 0.18, scrub: 1 },
        ].forEach((o) => {
          if (o.ref) {
            gsap.to(o.ref, {
              y: o.y, x: o.x || 0, scale: o.scale, opacity: o.opacity,
              scrollTrigger: { trigger: heroWrapRef.current, start: "top top", end: "+=150%", scrub: o.scrub },
            });
          }
        });

        /* ── 4. CITY INTERLUDE ── */
        if (cityRef.current && cityTextRef.current) {
          gsap.fromTo(cityTextRef.current,
            { y: 70, opacity: 0, scale: 0.92 },
            { y: 0, opacity: 1, scale: 1, ease: "power3.out",
              scrollTrigger: { trigger: cityRef.current, start: "top 72%", end: "top 35%", scrub: 0.5 },
            }
          );
        }

        /* ── 5. WHAT IS OUTSPOT reveals ── */
        const whatSection = document.getElementById("what-is-outspot");
        if (whatSection) {
          gsap.fromTo(whatSection.querySelectorAll(".gsap-reveal"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: "power3.out",
              scrollTrigger: { trigger: whatSection, start: "top 75%", toggleActions: "play none none reverse" },
            }
          );
        }

        /* ── 6. HORIZONTAL FEATURES TIMELINE ── */
        if (featPinRef.current && featTrackRef.current && featBgRef.current) {
          const panels = featTrackRef.current.querySelectorAll<HTMLElement>(".feat-panel");
          const totalPanels = panels.length;

          /* Give generous scroll distance: 1.5x viewport per panel */
          const scrollLength = totalPanels * 1.5 * window.innerHeight;

          const horzTl = gsap.timeline({
            scrollTrigger: {
              trigger: featPinRef.current,
              start: "top top",
              end: () => `+=${scrollLength}`,
              scrub: 0.6,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
            },
          });

          /* slide the track horizontally */
          horzTl.to(featTrackRef.current, {
            x: () => -(featTrackRef.current!.scrollWidth - window.innerWidth),
            ease: "none",
            duration: 1,
          }, 0);

          /* backdrop: purple → black */
          horzTl.fromTo(
            featBgRef.current,
            { background: "linear-gradient(135deg, #1a0a2e 0%, #0d0416 40%, #050508 100%)" },
            { background: "linear-gradient(135deg, #050508 0%, #050508 40%, #050508 100%)", ease: "none", duration: 1 },
            0
          );

          /* Animate each panel's content.
             Panel 0 starts VISIBLE (it's already on screen when we pin).
             Panels 1-3 animate in as they slide into view. */
          panels.forEach((panel, i) => {
            const content = panel.querySelector(".feat-content");
            const number = panel.querySelector(".feat-number");
            const line = panel.querySelector(".feat-line");

            if (i === 0) {
              /* First panel: start fully visible, no entrance animation */
              if (content) gsap.set(content, { x: 0, opacity: 1, scale: 1 });
              if (number) gsap.set(number, { y: 0, opacity: 0.08 });
              if (line) gsap.set(line, { scaleX: 1 });
            } else {
              /* Calculate when this panel enters viewport center.
                 Each panel occupies (1/totalPanels) of the total horizontal travel.
                 Start the reveal slightly before the panel is centered. */
              const panelEnter = (i - 0.3) / totalPanels;

              if (content) {
                horzTl.fromTo(content,
                  { x: 100, opacity: 0, scale: 0.92 },
                  { x: 0, opacity: 1, scale: 1, duration: 0.15, ease: "power3.out" },
                  panelEnter
                );
              }
              if (number) {
                horzTl.fromTo(number,
                  { y: 40, opacity: 0 },
                  { y: 0, opacity: 0.08, duration: 0.12, ease: "power2.out" },
                  panelEnter - 0.02
                );
              }
              if (line) {
                horzTl.fromTo(line,
                  { scaleX: 0 },
                  { scaleX: 1, duration: 0.12, ease: "power2.inOut" },
                  panelEnter - 0.01
                );
              }
            }
          });
        }
      });
    };

    init();
    return () => { ctx?.revert(); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050508] text-white">
      <HomeButtonLogo />
      <FloatingDots />
      <GlobalStyles />

      {/* ─── DYNAMIC BACKGROUND ─── */}
      <div
        ref={heroBgRef}
        className="pointer-events-none fixed inset-0"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(255,45,123,0.06) 0%, rgba(168,85,247,0.03) 40%, #050508 100%)", zIndex: -1 }}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroWrapRef} className="noise grid-overlay relative flex min-h-screen items-center justify-center overflow-hidden">
        <div ref={orb1Ref} className="pointer-events-none absolute rounded-full blur-[130px] opacity-35"
          style={{ width: 550, height: 550, background: "radial-gradient(circle, #ff2d7b, transparent 70%)", top: "-12%", right: "-8%", transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 20}px)`, transition: "transform 0.4s ease-out" }} />
        <div ref={orb2Ref} className="pointer-events-none absolute rounded-full blur-[130px] opacity-30"
          style={{ width: 450, height: 450, background: "radial-gradient(circle, #ff6b2b, transparent 70%)", bottom: "-8%", left: "-8%", transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px)`, transition: "transform 0.4s ease-out" }} />
        <div ref={orb3Ref} className="pointer-events-none absolute rounded-full blur-[130px] opacity-25"
          style={{ width: 380, height: 380, background: "radial-gradient(circle, #a855f7, transparent 70%)", top: "38%", left: "45%", transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 12}px)`, transition: "transform 0.4s ease-out" }} />

        <div ref={heroContentRef} className="relative z-10 flex flex-col items-center text-center px-4" style={{ willChange: "transform, opacity, filter" }}>
          <div className="badge-enter mb-10 inline-flex items-center gap-2.5 rounded-full border border-pink-500/25 bg-pink-500/[0.06] px-5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" style={{ animation: "pulseDot 2s ease-in-out infinite" }} />
            <span className="text-xs font-medium tracking-wide text-pink-400/90">Your city. Your night. Your move.</span>
          </div>
          <h1 className="leading-[0.9] tracking-[-0.04em]" style={{ fontFamily: "'Unbounded', cursive", perspective: "600px" }}>
            <span className="hero-word block text-[clamp(4.5rem,14vw,11rem)] font-black text-white" style={{ textShadow: "0 0 80px rgba(255,255,255,0.06)" }}>Out</span>
            <span className="hero-word block text-[clamp(4.5rem,14vw,11rem)] font-black" style={{ background: "linear-gradient(135deg, #ff2d7b, #e040fb, #ff6b2b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 50px rgba(255, 45, 123, 0.25))" }}>Spot</span>
          </h1>
          <p className="tagline-enter mt-6 text-lg md:text-xl tracking-[0.12em] uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
            <span className="text-white/50">Spot</span>
            <span className="text-white/25 mx-2">and</span>
            <span className="font-semibold text-emerald-400">be Spotted</span>
          </p>
          <div className="cta-enter mt-12 flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollTo("waitlist-section")}
              className="group relative overflow-hidden rounded-full px-8 py-3.5 font-semibold text-sm uppercase tracking-wider text-white transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,45,123,0.35)]"
              style={{ fontFamily: "'Syne', sans-serif", background: "linear-gradient(135deg, #ff2d7b, #ff6b2b)" }}>
              <span className="relative z-10">Join the Waitlist</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </button>
            <button onClick={() => scrollTo("what-is-outspot")}
              className="rounded-full border border-white/10 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white/60 transition-all duration-400 hover:text-white hover:border-pink-500/30 hover:bg-pink-500/[0.05] hover:-translate-y-0.5"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Learn More
            </button>
          </div>
        </div>

        <div className="scroll-hint-enter absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/25">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-pink-500/60 to-transparent" style={{ animation: "linePulse 2.5s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ═══════════ CITY INTERLUDE ═══════════ */}
      <section ref={cityRef} className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-pink-500/[0.03] to-[#050508]" />
        {[
          { top: "22%", w: 180, color: "#ff2d7b", delay: "0s", dur: "4.5s" },
          { top: "50%", w: 140, color: "#ff6b2b", delay: "1.8s", dur: "5s" },
          { top: "72%", w: 210, color: "#a855f7", delay: "3.2s", dur: "4s" },
        ].map((s, i) => (
          <div key={i} className="absolute h-[2px] rounded-full pointer-events-none"
            style={{ top: s.top, width: s.w, background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`, animation: `streak ${s.dur} cubic-bezier(0.16,1,0.3,1) infinite ${s.delay}`, opacity: 0 }} />
        ))}
        <div ref={cityTextRef} className="relative z-10 text-center px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug text-white/80" style={{ fontFamily: "'Unbounded', cursive" }}>
            The nightlife is alive.<br />
            Find what&apos;s{" "}
            <span className="font-bold" style={{ background: "linear-gradient(135deg, #ff2d7b, #ff6b2b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>happening</span>
            ,<br />wherever you are.
          </h2>
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <section className="overflow-hidden border-y border-white/[0.06] bg-white/[0.02] py-5">
        <div className="marquee-track flex items-center gap-10">
          {[...Array(2)].map((_, rep) =>
            ["CLUBS", "BARS", "ROOFTOPS", "EVENTS", "NIGHTLIFE", "VIBES"].map((word, i) => (
              <span key={`${rep}-${i}`} className="flex items-center gap-10">
                <span className="whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-black tracking-tight transition-all duration-300 cursor-default hover:drop-shadow-[0_0_25px_rgba(255,45,123,0.4)]"
                  style={{ fontFamily: "'Unbounded', cursive", WebkitTextStroke: "1px rgba(255,255,255,0.1)", WebkitTextFillColor: "transparent" }}
                  onMouseEnter={(e) => { const t = e.target as HTMLSpanElement; t.style.webkitTextFillColor = "#ff2d7b"; t.style.webkitTextStrokeColor = "#ff2d7b"; }}
                  onMouseLeave={(e) => { const t = e.target as HTMLSpanElement; t.style.webkitTextFillColor = "transparent"; t.style.webkitTextStrokeColor = "rgba(255,255,255,0.1)"; }}>
                  {word}
                </span>
                <span className="text-2xl text-orange-500/30">&middot;</span>
              </span>
            ))
          )}
        </div>
      </section>

      {/* ═══════════ WHAT IS OUTSPOT ═══════════ */}
      <section id="what-is-outspot" className="flex w-full justify-center px-4 py-28 md:px-8">
        <div className="w-full max-w-3xl space-y-8">
          <div className="gsap-reveal inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">What is OutSpot?</span>
          </div>
          <h2 className="gsap-reveal text-3xl font-bold md:text-4xl"
            style={{ fontFamily: "'Unbounded', cursive", background: "linear-gradient(135deg, #ff2d7b, #a855f7, #ff6b2b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Your city, turned into a playable map.
          </h2>
          <div className="gsap-reveal space-y-5 text-[15px] leading-relaxed text-white/45">
            <p>OutSpot is a social discovery app for people who don&apos;t want to waste nights doom-scrolling through review apps. It turns the city into a playground of spots, streaks, and challenges that reward you for actually showing up.</p>
            <p>Instead of static lists and star ratings, OutSpot shows you where things are happening right now — the rooftops, bars, clubs, and hidden corners that are actually alive tonight.</p>
            <p>Every check-in, challenge, and moment you drop builds a story of where you&apos;ve been and how you move through your city.</p>
          </div>
          <button onClick={() => scrollTo("features-section")} className="gsap-reveal mt-4 inline-flex flex-col items-start gap-1 text-xs font-medium text-white/30 transition hover:text-white/60">
            <span>See how it works</span>
            <span className="animate-bounce text-base">&darr;</span>
          </button>
        </div>
      </section>

      {/* ═══════════ FEATURES: HORIZONTAL SCROLL TIMELINE ═══════════ */}
      <section id="features-section" ref={featPinRef} className="relative overflow-hidden" style={{ zIndex: 1 }}>
        {/* background layer that shifts purple → black */}
        <div
          ref={featBgRef}
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #0d0416 40%, #050508 100%)", zIndex: 0 }}
        />

        {/* horizontal track */}
        <div ref={featTrackRef} className="relative z-10 flex h-screen" style={{ width: `${FEATURES.length * 100}vw` }}>
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="feat-panel relative flex h-screen w-screen shrink-0 items-center justify-center px-6 md:px-16"
            >
              {/* giant background number */}
              <span
                className="feat-number pointer-events-none absolute select-none font-black opacity-[0.04]"
                style={{
                  fontFamily: "'Unbounded', cursive",
                  fontSize: "clamp(15rem, 35vw, 30rem)",
                  color: feature.accent,
                  right: "5%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* content card */}
              <div className="feat-content relative max-w-2xl">
                {/* accent line */}
                <div
                  className="feat-line mb-8 h-[2px] w-20 origin-left"
                  style={{ background: feature.accent }}
                />

                {/* subtitle */}
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: feature.accent }}>
                  {feature.subtitle}
                </p>

                {/* icon + title */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                    style={{ background: `${feature.accent}18`, boxShadow: `0 0 30px ${feature.accent}20` }}
                  >
                    {feature.icon}
                  </span>
                  <h3
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                    style={{ fontFamily: "'Unbounded', cursive" }}
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* description */}
                <p className="text-base md:text-lg leading-relaxed text-white/50 max-w-lg">
                  {feature.description}
                </p>

                {/* progress dots */}
                <div className="mt-10 flex items-center gap-3">
                  {FEATURES.map((_, j) => (
                    <div
                      key={j}
                      className="h-1.5 rounded-full transition-all duration-500"
                      style={{
                        width: j === i ? 32 : 8,
                        background: j === i ? feature.accent : "rgba(255,255,255,0.1)",
                        boxShadow: j === i ? `0 0 12px ${feature.accent}60` : "none",
                      }}
                    />
                  ))}
                  <span className="ml-3 text-xs font-medium text-white/20" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {String(i + 1).padStart(2, "0")} / {String(FEATURES.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ WAITLIST ═══════════ */}
      <section id="waitlist-section" className="relative flex w-full justify-center px-4 pb-28 pt-16 md:px-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[100px] opacity-10" style={{ background: "radial-gradient(circle, #ff2d7b, transparent 70%)" }} />
        <div className="relative z-10 w-full max-w-2xl">
          <WaitlistForm />
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-white/[0.05] px-6 py-8 text-center">
        <p className="text-xs tracking-wider text-white/20">
          &copy; 2026{" "}
          <span style={{ background: "linear-gradient(135deg, #ff2d7b, #ff6b2b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>OutSpot</span>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}