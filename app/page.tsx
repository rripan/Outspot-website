"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import WaitlistForm from "./components/WaitlistForm";

export default function HomePage() {
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    // Trigger hero animation shortly after mount
    const timer = setTimeout(() => setAnimateHero(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

        {/* HERO */}
        <main className="flex flex-1 items-center justify-center">
          <section
            className={`mt-16 flex w-full flex-col items-center text-center hero-fade-up ${
              animateHero ? "animate" : ""
            }`}
          >
            {/* Title with glow */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-pink-500/40 via-purple-500/30 to-orange-400/40 blur-3xl" />
              <h1 className="relative bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl">
                OutSpot
              </h1>
            </div>

            {/* Tagline */}
            <p className="mt-5 text-xl font-medium text-gray-100 md:text-2xl">
              <span>Spot</span> <span className="text-gray-400">and</span>{" "}
              <span className="text-emerald-300">be Spotted</span>
            </p>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
              Spot and be Spotted in your city&apos;s best restaurants, bars,
              and clubs. OutSpot rivals, rack up points, level up. Be everywhere
              they aren&apos;t.
            </p>

            {/* BIG WAITLIST SECTION */}
            <div className="mt-14 w-full flex justify-center px-4">
              <div className="w-full max-w-2xl">
                <WaitlistForm />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
