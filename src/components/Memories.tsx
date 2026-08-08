"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { memories } from "@/data/memories";
import Reveal from "./Reveal";
import PhotoFrame from "./PhotoFrame";

export default function Memories() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const prev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + memories.length) % memories.length));
  const next = () => setOpenIndex((i) => (i === null ? null : (i + 1) % memories.length));

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  const active = openIndex !== null ? memories[openIndex] : null;

  return (
    <section id="recuerdos" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center sm:mb-20">
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold-400">
            capítulo dos
          </span>
          <h2 className="mt-4 font-display text-4xl italic text-cream sm:text-5xl">
            Nuestros recuerdos
          </h2>
        </Reveal>

        <div className="columns-2 gap-4 sm:columns-3 sm:gap-5 [column-fill:balance]">
          {memories.map((memory, i) => (
            <Reveal key={memory.image} delay={(i % 6) * 70} className="mb-4 break-inside-avoid sm:mb-5">
              <button
                onClick={() => setOpenIndex(i)}
                className="glass group relative block w-full overflow-hidden rounded-2xl text-left transition-transform duration-500 hover:-translate-y-1 focus-visible:-translate-y-1"
                style={{ aspectRatio: i % 3 === 0 ? "3 / 4" : "4 / 5" }}
              >
                <PhotoFrame
                  src={memory.image}
                  alt={memory.title}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-5">
                  <span className="text-xs uppercase tracking-widest text-gold-300">{memory.date}</span>
                  <span className="mt-1 font-display text-lg italic text-cream">{memory.title}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md animate-fade-in sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            aria-label="Cerrar"
            className="absolute right-5 top-5 rounded-full p-2 text-cream/70 transition-colors hover:bg-white/10 hover:text-cream"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-cream/70 transition-colors hover:bg-white/10 hover:text-cream sm:left-6"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="relative flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl glass-strong"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/5] w-full">
              <PhotoFrame src={active.image} alt={active.title} />
            </div>
            <div className="p-6 text-center">
              <span className="text-xs uppercase tracking-widest text-gold-300">{active.date}</span>
              <h3 className="mt-2 font-display text-2xl italic text-cream">{active.title}</h3>
              <p className="mt-2 text-sm text-mist">{active.description}</p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-cream/70 transition-colors hover:bg-white/10 hover:text-cream sm:right-6"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
