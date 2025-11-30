"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <div className="mx-auto w-full rounded-3xl border border-white/10 
                    bg-black/60 px-10 py-12 shadow-[0_0_50px_rgba(0,0,0,0.75)]
                    backdrop-blur-2xl text-center">

      {/* pill */}
      <div className="mx-auto inline-flex items-center gap-2 rounded-full 
                      bg-white/5 px-3 py-1">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="text-[12px] tracking-wide text-gray-300 uppercase">
          Coming soon
        </span>
      </div>

      {/* big heading */}
      <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-white">
        Get early access
      </h2>

      <p className="mt-3 max-w-xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed">
        Be among the first to experience OutSpot. Join the waitlist and we’ll
        notify you when we launch in your city.
      </p>

      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <input
          type="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:flex-1 rounded-2xl border border-white/10 bg-black/40 
                     px-5 py-4 text-base text-white placeholder:text-gray-500
                     focus:border-purple-400 focus:ring-purple-400 focus:ring-1 outline-none"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-2xl bg-gradient-to-r from-pink-400 via-orange-400 
                     to-yellow-400 px-8 py-4 text-base font-semibold text-black 
                     shadow-lg shadow-orange-400/40 hover:brightness-110 
                     transition disabled:opacity-60 whitespace-nowrap"
        >
          {status === "loading" ? "Joining…" : "Join waitlist"}
        </button>
      </form>

      {/* messages */}
      <div className="mt-3 h-5">
        {status === "idle" && (
          <p className="text-xs text-gray-400">
            No spam — only launch updates.
          </p>
        )}

        {status === "success" && (
          <p className="text-xs text-emerald-300">
            You’re in! We’ll notify you soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-xs text-red-400">
            {errorMsg || "Something went wrong. Try again."}
          </p>
        )}
      </div>
    </div>
  );
}
