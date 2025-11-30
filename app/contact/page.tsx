import Navbar from "../components/Navbar";
import Footer from "../components/footer";


export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background image + gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[url('/outspot-bg.png')] bg-cover bg-center opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#15001f]/85 to-[#ff6a3d]/40" />
      </div>

      {/* Page content */}
      <div className="relative z-10 flex min-h-screen flex-col px-3 pt-4 md:px-8 md:pt-6">
        <Navbar />

        <main className="flex flex-1 items-center justify-center">
          <section className="mt-10 w-full max-w-xl rounded-3xl bg-black/60 p-6 text-left shadow-xl shadow-black/40 backdrop-blur-xl md:mt-16 md:p-8">
            <h1 className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Contact Us
            </h1>

            <p className="mt-3 text-sm text-gray-200 md:text-base">
              Got feedback, want to partner, or curious about early access?
              Drop us a message and we’ll get back to you soon.
            </p>

            <form className="mt-6 space-y-4 text-sm">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
                  placeholder="Tell us what you're thinking..."
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-orange-400/40 hover:brightness-110 transition"
              >
                Send Message
              </button>
            </form>

            <p className="mt-4 text-xs text-gray-400">
              Prefer email? Reach us at{" "}
              <span className="text-purple-200">team@outspot.app</span>
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
