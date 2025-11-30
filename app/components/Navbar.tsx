"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="mx-auto w-full max-w-6xl">
      <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl md:px-6">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <Image
              src="/outspot-logo.png"
              alt="OutSpot Logo"
              width={44}
              height={44}
              className="rounded-xl object-cover shadow-lg shadow-pink-500/30"
            />
          </div>

          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-lg font-semibold text-transparent md:text-xl">
            OutSpot
          </span>
        </div>

        {/* Middle Menu */}
        <nav className="hidden items-center gap-1 rounded-full bg-white/5 px-1 py-1 text-sm text-gray-200 md:flex">
          <Link
            href="/"
            className={
              isActive("/")
                ? "flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-4 py-2 text-xs font-medium text-black shadow-sm md:text-sm"
                : "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-gray-300 hover:bg-white/10 transition md:text-sm"
            }
          >
            <span className="text-sm">🏠</span>
            Home
          </Link>

          <Link
            href="/about"
            className={
              isActive("/about")
                ? "rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white md:text-sm transition"
                : "rounded-full px-4 py-2 text-xs font-medium text-gray-300 hover:bg-white/10 md:text-sm transition"
            }
          >
            About
          </Link>

          <Link
            href="/contact"
            className={
              isActive("/contact")
                ? "rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white md:text-sm transition"
                : "rounded-full px-4 py-2 text-xs font-medium text-gray-300 hover:bg-white/10 md:text-sm transition"
            }
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-gray-200 hover:bg-white/15 transition md:flex">
            🔔
          </button>
          <button className="rounded-full border border-orange-400/80 px-4 py-1.5 text-xs font-semibold text-orange-200 hover:bg-orange-500/10 transition shadow-[0_0_0_1px_rgba(0,0,0,0.6)] md:px-5 md:text-sm">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
