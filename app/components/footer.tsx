export default function footer() {
  return (
    <footer className="mt-10 w-full border-t border-white/10 bg-black/40 py-4 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs text-gray-400 md:flex-row md:text-sm">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} OutSpot. All rights reserved.
        </p>
        <p className="text-center md:text-right">
          Built for explorers, foodies, and night owls.
        </p>
      </div>
    </footer>
  );
}

