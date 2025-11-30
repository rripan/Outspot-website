// app/page.tsx
import Link from "next/link";
import Navbar from "./components/Navbar";
import WaitlistForm from "./components/WaitlistForm";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background image + gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[url('/outspot-bg.png')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#15001f]/85 to-[#ff6a3d]/45" />
      </div>

      {/* Floating dots */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-10 top-40 h-4 w-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 blur-[1px]" />
        <span className="absolute right-24 top-32 h-5 w-5 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 blur-[1px]" />
        <span className="absolute left-20 bottom-36 h-3 w-3 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 blur-[1px]" />
        <span className="absolute right-16 bottom-20 h-4 w-4 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col px-3 pt-4 md:px-8 md:pt-6">
        <Navbar />

        {/* HERO */}
        <main className="flex flex-1 items-center justify-center">
          <section className="mt-10 flex w-full flex-col items-center text-center md:mt-16">
            {/* Title */}
            <h1 className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              OutSpot
            </h1>

            {/* Tagline */}
            <p className="mt-3 text-lg font-medium text-gray-100 md:text-xl">
              <span>Spot</span> <span className="text-gray-400">and</span>{" "}
              <span className="text-emerald-300">be Spotted</span>
            </p>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">
              Spot and be Spotted in your city&apos;s best restaurants, bars,
              and clubs. OutSpot rivals, rack up points, level up. Be everywhere
              they aren&apos;t.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex w-full max-w-md flex-col gap-3">
              {/* Apple */}
              <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 hover:brightness-110 transition">
                <span className="text-lg"></span>
                <span>Continue with Apple</span>
              </button>

              {/* Google */}
              <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-black/80 px-6 py-3.5 text-sm font-semibold text-gray-100 shadow-lg shadow-black/60 ring-1 ring-white/15 hover:bg-black transition">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-800">
                  G
                </span>
                <span>Continue with Google</span>
              </button>

              {/* Get Started */}
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-orange-400/40 hover:brightness-110 transition">
                Get Started
              </button>
            </div>

              {/* Waitlist form */}
            <WaitlistForm />

            {/* Login text */}git 
            <p className="mt-5 text-xs text-gray-300 md:text-sm">
              Already have an account?{" "}
              <Link href="#" className="font-semibold text-purple-300 hover:text-purple-200">
                Log In
              </Link>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
