import { loveStory } from "@/data/loveStory";
import Reveal from "./Reveal";
import PhotoFrame from "./PhotoFrame";

export default function LoveStory() {
  return (
    <section id="historia" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-20 text-center sm:mb-28">
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold-400">
            capítulo uno
          </span>
          <h2 className="mt-4 font-display text-4xl italic text-cream sm:text-5xl">
            Nuestra historia
          </h2>
        </Reveal>

        <div className="relative">
          {/* el hilo que conecta cada momento */}
          <div className="divider-thread absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px sm:left-1/2 sm:-translate-x-1/2" />

          <ol className="space-y-16 sm:space-y-24">
            {loveStory.map((moment, i) => (
              <li key={moment.title} className="relative">
                <Reveal
                  delay={i * 60}
                  className={`relative flex flex-col gap-6 sm:flex-row sm:items-center ${
                    i % 2 === 1 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* punto sobre el hilo */}
                  <span className="absolute left-[9px] top-1 z-10 h-3 w-3 rounded-full bg-gold-300 shadow-glow sm:left-1/2 sm:-translate-x-1/2" />

                  <div className="pl-10 sm:w-1/2 sm:px-10 sm:pl-10">
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-rose-400">
                      {moment.date}
                    </span>
                    <h3 className="mt-3 font-display text-2xl text-cream sm:text-3xl">
                      {moment.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
                      {moment.description}
                    </p>
                  </div>

                  {moment.image ? (
                    <div className="glass relative ml-10 aspect-[4/3] w-[calc(100%-2.5rem)] overflow-hidden rounded-2xl sm:ml-0 sm:w-1/2">
                      <PhotoFrame src={moment.image} alt={moment.title} />
                    </div>
                  ) : (
                    <div className="hidden sm:block sm:w-1/2" />
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
