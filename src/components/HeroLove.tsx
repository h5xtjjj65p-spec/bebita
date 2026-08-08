"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Fireflies from "./Fireflies";

export default function HeroLove({ herName }: { herName: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* glow ambiental */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gold-400/10 blur-[120px]" />
      <Fireflies count={20} />

      <div
        className={`relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-mist">
          para el amor de mi vida
        </span>

        <h1 className="font-display text-5xl italic leading-[1.1] text-cream sm:text-6xl md:text-7xl">
          Para{" "}
          <span className="text-gradient-gold not-italic animate-shimmer">{herName}</span>
          <span className="align-super text-3xl text-rose-400 sm:text-4xl"> ❤</span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-balance text-base leading-relaxed text-mist sm:text-lg">
          Hay cosas que no sé decirte en persona, así que decidí hacerte un lugar
          donde pudiera decirte todo.
        </p>

        <a
          href="#historia"
          className="glass group mt-12 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium uppercase tracking-widest text-cream shadow-glow transition-all duration-300 hover:border-gold-400/40 hover:shadow-glow-rose"
        >
          Entrar a nuestra historia
          <ChevronDown size={16} className="text-gold-300 transition-transform group-hover:translate-y-1" />
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-mist/40">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
