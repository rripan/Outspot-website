"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // subtle parallax; adjust multiplier if you want it stronger/weaker
      setParallaxOffset(window.scrollY * 0.15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background image + gradient overlay with parallax */}
      <div
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${parallaxOffset * -1}px)`,
        }}
      >
        <div className="h-full w-full bg-[url('/outspot-bg.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#15001f]/85 to-[#ff6a3d]/40" />
      </div>

      {/* Page content */}
      <div className="relative z-10 flex min-h-screen flex-col px-3 pt-4 md:px-8 md:pt-6">
        <Navbar />

        <main className="flex flex-1 items-center justify-center">
          <section className="mt-10 w-full max-w-5xl rounded-3xl bg-black/70 p-6 text-left shadow-[0_0_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl md:mt-16 md:p-10">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-semibold tracking-[0.22em] text-gray-300 uppercase">
                What is OutSpot?
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-4 hero-title-animate bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl lg:text-5xl">
              Turning nights out into something you can actually play.
            </h1>

            {/* Subtext */}
            <p className="hero-body-animate mt-4 text-sm leading-relaxed text-gray-200 md:text-base">
              OutSpot is a social discovery app built for people who actually go
              out — not just scroll. Instead of swiping through endless reviews,
              you explore your city through live activity, challenges, and
              moments from real people at real spots.
            </p>

            {/* Two-column story */}
            <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
              {/* Left: Story / vision */}
              <div className="space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-400">
                  The idea
                </h2>
                <p className="text-sm leading-relaxed text-gray-200 md:text-[15px]">
                  We&apos;re building a layer on top of your city where every
                  visit, challenge, and check-in feels like progress. You earn
                  points, build streaks, and get credit for being early to the
                  spots that later become impossible to get into.
                </p>
                <p className="text-sm leading-relaxed text-gray-300 md:text-[15px]">
                  For venues, OutSpot is a way to drive{" "}
                  <span className="font-semibold text-purple-200">
                    real engagement
                  </span>{" "}
                  — people walking through the door, not just impressions on
                  another feed. For people, it&apos;s a way to see where the
                  energy is right now and make every night feel like a mission.
                </p>
              </div>

              {/* Right: Who it's for */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Built for
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-100 md:text-[15px]">
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-lg">🧭</span>
                    <div>
                      <p className="font-semibold">Explorers</p>
                      <p className="text-gray-300">
                        People who want to find rooftops, dives, and hidden
                        gems before everyone else.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-lg">🏙️</span>
                    <div>
                      <p className="font-semibold">Venues</p>
                      <p className="text-gray-300">
                        Restaurants, bars, and clubs who care about repeat
                        guests and live buzz — not bots and fake reviews.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-lg">🗺️</span>
                    <div>
                      <p className="font-semibold">Cities</p>
                      <p className="text-gray-300">
                        Neighborhoods that feel alive when people are out,
                        moving, and discovering what&apos;s around the corner.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom stats / cards */}
            <div className="mt-10 grid gap-4 text-sm sm:grid-cols-3 md:gap-6">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-pink-400/60 hover:bg-white/10">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-orange-400/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  The vibe
                </p>
                <p className="mt-2 text-[15px] font-semibold text-white">
                  Less scrolling. More stories you were actually there for.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-white/10">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-emerald-400/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  What you do
                </p>
                <p className="mt-2 text-[15px] font-semibold text-white">
                  Drop in, complete challenges, get spotted, and level up your
                  nightlife.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-orange-400/60 hover:bg-white/10">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-400/10 via-pink-500/5 to-yellow-300/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Where we&apos;re going
                </p>
                <p className="mt-2 text-[15px] font-semibold text-white">
                  A map that feels alive — powered by the people actually out in
                  the city tonight.
                </p>
              </div>
            </div>

            {/* Marquee strip */}
            {/* Full-width marquee */}
<div className="mt-16 w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden border-t border-b border-white/10 bg-white/5 py-3">
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
        </main>
      </div>
    </div>
  );
}
