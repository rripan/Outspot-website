"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomeButtonLogo() {
  return (
    <Link
      href="/"
      className="fixed top-4 left-4 z-50 flex items-center gap-2 p-2 
                 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10
                 hover:bg-black/70 transition shadow-lg shadow-black/50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl 
                      bg-gradient-to-br from-pink-500 to-purple-500 p-[2px] 
                      shadow-lg shadow-pink-500/40">
        <Image
          src="/outspot-logo.png"
          alt="OutSpot Logo"
          width={32}
          height={32}
          className="rounded-xl"
        />
      </div>

      <span className="hidden sm:block bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 
                       bg-clip-text text-lg font-semibold text-transparent">
        OutSpot
      </span>
    </Link>
  );
}
