export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen 
                    bg-gradient-to-br from-black via-[#0a0015] to-[#150022] 
                    text-center px-4">
      {/* Gradient Text Header */}
      <h1 className="text-6xl font-extrabold mb-4 
                     bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 
                     text-transparent bg-clip-text">
        Welcome to My Website
      </h1>

      {/* Subtext */}
      <p className="text-lg text-gray-300 max-w-xl mb-6">
        A minimal, modern design with a dark aesthetic and vibrant color accents.
      </p>

      {/* Button */}
      <button className="px-8 py-3 rounded-full font-semibold
                         bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
                         text-black hover:opacity-90 transition">
        Get Started
      </button>
    </div>
  );
}
