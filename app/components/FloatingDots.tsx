export default function FloatingDots() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-40">
      {/* Dot 1 */}
      <span className="absolute left-10 top-20 h-4 w-4 rounded-full bg-pink-500 blur-[2px] animate-pulse" />

      {/* Dot 2 */}
      <span className="absolute right-16 top-60 h-5 w-5 rounded-full bg-purple-400 blur-[2px] animate-pulse" />

      {/* Dot 3 */}
      <span className="absolute left-1/3 top-1/2 h-3 w-3 rounded-full bg-orange-400 blur-[2px] animate-pulse" />

      {/* Dot 4 */}
      <span className="absolute right-1/4 bottom-32 h-4 w-4 rounded-full bg-blue-400 blur-[2px] animate-pulse" />

      {/* Dot 5 */}
      <span className="absolute left-20 bottom-20 h-6 w-6 rounded-full bg-pink-400 blur-[3px] animate-pulse" />
    </div>
  );
}
