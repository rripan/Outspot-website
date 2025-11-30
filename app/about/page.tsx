// app/about/page.tsx
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background image + gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[url('/outspot-bg.png')] bg-cover bg-center opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#15001f]/85 to-[#ff6a3d]/40" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col px-3 pt-4 md:px-8 md:pt-6">
        <Navbar />

        <main className="flex flex-1 items-center justify-center">
          <section className="mt-10 w-full max-w-3xl rounded-3xl bg-black/60 p-6 text-left shadow-xl shadow-black/40 backdrop-blur-xl md:mt-16 md:p-8">
            <h1 className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              About OutSpot
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-gray-200 md:text-base">
              OutSpot is a social discovery app that turns dining out and
              nightlife into a game. Instead of endlessly scrolling through
              reviews, you explore your city through challenges, drops, and
              live activity from real people.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-300 md:text-base">
              We want restaurants, bars, and clubs to get{" "}
              <span className="font-semibold text-purple-200">
                real engagement
              </span>{" "}
              — not just impressions. And we want people to feel like every
              night out is a chance to level up, get spotted, and discover
              something new.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold text-gray-400">
                  For Explorers
                </p>
                <p className="mt-1 text-sm text-gray-100">
                  Complete challenges, unlock badges, and climb leaderboards in
                  your city.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold text-gray-400">
                  For Venues
                </p>
                <p className="mt-1 text-sm text-gray-100">
                  Create experiences that bring people in, not just likes on a
                  post.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold text-gray-400">
                  For Cities
                </p>
                <p className="mt-1 text-sm text-gray-100">
                  Turn the map into an interactive layer of live moments and
                  stories.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
