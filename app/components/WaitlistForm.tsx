"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setEmail("");
      setName("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 w-full max-w-md rounded-2xl bg-black/60 p-4 text-left shadow-lg shadow-black/40 backdrop-blur-xl"
    >
      <p className="mb-2 text-xs font-medium text-gray-300">
        Get early access when OutSpot launches.
      </p>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-black/70 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
        />
        <div className="flex gap-2">
          <input
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-xl border border-white/15 bg-black/70 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-xl bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 px-4 py-2 text-xs font-semibold text-black shadow-md shadow-orange-400/40 hover:brightness-110 disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Notify me"}
          </button>
        </div>
      </div>

      {status === "success" && (
        <p className="mt-2 text-xs text-emerald-300">
          You’re in! We’ll email you when OutSpot is ready.
        </p>
      )}

      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">
          {errorMsg || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  );
}
