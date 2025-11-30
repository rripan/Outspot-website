"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import WaitlistForm from "./components/WaitlistForm";

type Feature = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: "Live City Map",
    subtitle: "See where the energy is",
    description:
      "Watch your city light up with real-time activity from people going out — rooftops, bars, hidden cafés, and more.",
    icon: "🗺️",
  },
  {
    title: "Challenges & Drops",
    subtitle: "Make going out a game",
    description:
      "Complete location-based challenges, unlock rewards, and level up your profile every time you step out.",
    icon: "🎯",
  },
  {
    title: "Spots, Streaks & Clout",
    subtitle: "Be everywhere they aren’t",
    description:
      "Get credit for being early, consistent, and active. Build streaks, collect spots, and climb leaderboards.",
    icon: "🔥",
  },
  {
    title: "For the Real Ones",
    subtitle: "No fake vibes",
    description:
      "OutSpot is built for people who actually go out — not just scroll. Your nights out turn into stories that matter.",
    icon: "💫",
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
      className={`feature-card rounded-3xl border border-white/10 bg-black/60 p-5 md:p-6 
                  shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-xl 
                  ${visible ? "feature-visible" : "feature-hidden"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-lg shadow-md shadow-pink-500/40">
          {feature.icon}
        </div>
        <div className="text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
            {feature.subtitle}
          </p>
          <h3 className="text-base md:text-lg font-semibold text-white">
            {feature.title}
          </h3>
        </div>
      </div>
      <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-gray-300">
        {feature.description}
      </p>
    </div>
  );
}

export default function HomePage() {
  const handleScrollToFeatures = () => {
    const section = document.getElementById("features-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background image + gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[url('/outspot-bg.png')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#15001f]/85 to-[#ff6a3d]/45" />
      </div>

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
         {/* HERO */}
<section className="flex min-h-screen w-full flex-col items-center justify-center text-center px-3">
  {/* Title with glow + big animation */}
  <div className="relative">
  {/* Static glowing background */}
  <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-pink-500/40 via-purple-500/30 to-orange-400/40 opacity-70 blur-3xl" />

  {/* OutSpot animated text */}
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
    onClick={handleScrollToFeatures}
    className="mt-16 inline-flex flex-col items-center gap-1 text-xs font-medium text-gray-300 hover:text-white transition"
  >
    <span>Scroll to explore OutSpot</span>
    <span className="animate-bounce text-lg">⌄</span>
  </button>
</section>


          {/* FEATURES SECTION */}
          <section
            id="features-section"
            className="relative z-10 mx-auto mt-4 w-full max-w-5xl px-2 pb-8 pt-10 md:px-4 md:pb-16 md:pt-16"
          >
            <div className="mx-auto max-w-2xl text-center mb-8 md:mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                How OutSpot works
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
                Turn your nights out into a game.
              </h2>
              <p className="mt-3 text-sm md:text-[15px] text-gray-300">
                OutSpot is built around real movement, real places, and real
                people. You explore, complete challenges, and get seen in the
                spots that matter.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              {FEATURES.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* WAITLIST SECTION at bottom */}
          <section
            id="waitlist-section"
            className="relative z-10 w-full px-4 pb-16 pt-8 md:pb-24 md:pt-10 flex justify-center"
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
