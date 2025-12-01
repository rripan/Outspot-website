"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import WaitlistForm from "./components/WaitlistForm";
import FloatingDots from "./components/FloatingDots";


type Feature = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: "Turn nights out into a game",
    subtitle: "Challenges • Streaks • Drops",
    description:
      "OutSpot turns restaurants, bars, rooftops, and hidden cafés into playable spots. Complete challenges, keep streaks alive, and earn rewards for actually going out.",
    icon: "🎯",
  },
  {
    title: "See where the energy is",
    subtitle: "Live city layer",
    description:
      "A live layer on top of your city shows where people are checking in, dropping moments, and getting spotted — right now, not last week.",
    icon: "🗺️",
  },
  {
    title: "Be early. Be seen.",
    subtitle: "Spots • Clout • Progress",
    description:
      "Get credit for discovering places earlier than everyone else. Build a profile that shows where you’ve been, what you’ve unlocked, and how you move.",
    icon: "🔥",
  },
  {
    title: "Real engagement for venues",
    subtitle: "Beyond impressions",
    description:
      "OutSpot is built to drive foot traffic, not just likes. Venues can plug into challenges and drops that bring people in, again and again.",
    icon: "🏙️",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rounded-3xl border border-white/10 bg-black/70 p-5 md:p-6 shadow-[0_0_40px_rgba(0,0,0,0.7)] backdrop-blur-xl feature-hidden ${
        visible ? "feature-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-lg shadow-md shadow-pink-500/40">
          {feature.icon}
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            {feature.subtitle}
          </p>
          <h3 className="mt-1 text-base md:text-lg font-semibold text-white">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-gray-300">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
       <FloatingDots />
      {/* Floating dots */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-10 top-40 h-4 w-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 blur-[1px] animate-pulse" />
        <span className="absolute right-24 top-32 h-5 w-5 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 blur-[1px] animate-pulse" />
        <span className="absolute left-20 bottom-36 h-3 w-3 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 blur-[1px] animate-pulse" />
        <span className="absolute right-16 bottom-20 h-4 w-4 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 blur-[1px] animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col px-3 pt-4 md:px-8 md:pt-6">
        <Navbar />

        <main className="flex-1">
          {/* HERO – full screen */}
          <section className="relative flex min-h-screen w-full flex-col items-center justify-center text-center px-3 overflow-hidden">

  {/* Background image ONLY for hero */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="h-full w-full bg-[url('/outspot-bg.png')] bg-cover bg-center opacity-40" />
    <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#15001f]/85 to-[#ff6a3d]/45" />
  </div>
            {/* Title with glow + animation */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-pink-500/40 via-purple-500/30 to-orange-400/40 blur-3xl" />
              <h1 className="relative hero-title-animate bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl">
                OutSpot
              </h1>
            </div>

            {/* Tagline */}
            <p className="mt-5 text-xl font-medium text-gray-100 md:text-2xl hero-body-animate">
              <span>Spot</span> <span className="text-gray-400">and</span>{" "}
              <span className="text-emerald-300">be Spotted</span>
            </p>

            {/* Scroll hint */}
            <button
              onClick={() => scrollToSection("what-is-outspot")}
              className="mt-16 inline-flex flex-col items-center gap-1 text-xs font-medium text-gray-300 hover:text-white transition"
            >
              <span>Scroll to learn what OutSpot is</span>
              <span className="animate-bounce text-lg">⌄</span>
            </button>
          </section>

          {/* SECTION 2 – What is OutSpot */}
          <section
            id="what-is-outspot"
            className="w-full py-24 px-4 md:px-8 flex justify-center"
          >
            <div className="w-full max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-semibold tracking-[0.22em] text-gray-300 uppercase">
                  What is OutSpot?
                </span>
              </div>

              <h2 className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-3xl md:text-4xl font-bold text-transparent">
                Your city, turned into a playable map.
              </h2>

              <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-200">
                <p>
                  OutSpot is a social discovery app for people who don&apos;t
                  want to waste nights doom-scrolling through review apps. It
                  turns the city into a playground of spots, streaks, and
                  challenges that reward you for actually showing up.
                </p>
                <p>
                  Instead of static lists and star ratings, OutSpot shows you
                  where things are happening right now — the rooftops, bars,
                  clubs, and hidden corners that are actually alive tonight.
                </p>
                <p>
                  Every check-in, challenge, and moment you drop builds a story
                  of where you&apos;ve been and how you move through your city.
                </p>
              </div>

              {/* Second scroll hint */}
              <button
                onClick={() => scrollToSection("features-section")}
                className="mt-6 inline-flex flex-col items-start gap-1 text-xs font-medium text-gray-300 hover:text-white transition"
              >
                <span>Scroll to see how it works</span>
                <span className="animate-bounce text-lg">⌄</span>
              </button>
            </div>
          </section>

          {/* SECTION 3 – Features (stacked boxes) */}
          <section
            id="features-section"
            className="w-full py-24 px-4 md:px-8 flex justify-center"
          >
            <div className="w-full max-w-3xl space-y-10">
              <div className="space-y-3 text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                  Features
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  How OutSpot turns going out into an experience.
                </h2>
                <p className="text-sm md:text-[15px] text-gray-300 max-w-xl">
                  Scroll through the pillars of the app — each one is designed
                  to make your next night out feel less random and way more
                  intentional.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                {FEATURES.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    feature={feature}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3.5 – Full-width marquee */}
          <section className="w-full">
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden border-t border-b border-white/10 bg-white/5 py-3">
              <div className="marquee flex items-center gap-16 whitespace-nowrap text-[11px] md:text-sm font-semibold uppercase tracking-[0.35em] text-gray-200">
                <span>Challenges • Streaks • Drops • Stories</span>
                <span>Spot • Be Spotted • Level Up • Repeat</span>
                <span>Real Places • Real People • Real Nights</span>
                <span>Challenges • Streaks • Drops • Stories</span>
                <span>Spot • Be Spotted • Level Up • Repeat</span>
                <span>Real Places • Real People • Real Nights</span>
              </div>
            </div>
          </section>

          {/* SECTION 4 – Waitlist at the bottom */}
          <section
            id="waitlist-section"
            className="w-full pb-24 pt-12 px-4 md:px-8 flex justify-center"
          >
            <div className="w-full max-w-2xl">
              <WaitlistForm />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
