"use client";

import { useRef, useState } from "react";
import { Play, Pause, Music2 } from "lucide-react";

const TRACK_SRC = "/music/our-song.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || unavailable) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setUnavailable(true));
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8">
      <audio
        ref={audioRef}
        src={TRACK_SRC}
        loop
        preload="none"
        onError={() => setUnavailable(true)}
        onEnded={() => setIsPlaying(false)}
      />
      <button
        onClick={toggle}
        disabled={unavailable}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        title={unavailable ? "Agregá tu canción en /public/music/our-song.mp3" : undefined}
        className="glass flex h-12 w-12 items-center justify-center rounded-full text-cream shadow-glass transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 sm:h-14 sm:w-14"
      >
        {unavailable ? (
          <Music2 size={18} className="text-mist" />
        ) : isPlaying ? (
          <Pause size={18} className="text-gold-300" />
        ) : (
          <Play size={18} className="ml-0.5 text-gold-300" />
        )}
      </button>
    </div>
  );
}
