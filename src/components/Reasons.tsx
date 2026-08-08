import { Heart } from "lucide-react";
import { reasons } from "@/data/reasons";
import { relationship } from "@/data/relationship";
import Reveal from "./Reveal";

export default function Reasons() {
  return (
    <section id="razones" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-16 text-center sm:mb-20">
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold-400">
            capítulo cinco
          </span>
          <h2 className="mt-4 font-display text-4xl italic text-cream sm:text-5xl">
            {reasons.length} razones por las que te elegiría otra vez
          </h2>
          <p className="mt-4 text-sm text-mist sm:text-base">
            Y todavía se me quedan muchas afuera, {relationship.herName}.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={i} delay={(i % 9) * 55}>
              <div className="glass group flex h-full items-start gap-3 rounded-2xl px-5 py-5 transition-colors duration-300 hover:border-gold-400/30">
                <Heart
                  size={16}
                  className="mt-1 flex-shrink-0 text-rose-400 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  strokeWidth={0}
                />
                <p className="text-sm leading-relaxed text-cream/90 sm:text-[15px]">
                  {reason}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
