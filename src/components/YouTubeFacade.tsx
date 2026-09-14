import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

export const YouTubeFacade: React.FC<YouTubeFacadeProps> = ({ videoId, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="mt-8 aspect-video w-full rounded-2xl overflow-hidden shadow-2xl relative group bg-neutral-950"
      style={{
        border: '2px solid #0066ff',
        boxShadow: '0 0 45px rgba(0, 102, 255, 0.45), 0 0 15px rgba(0, 102, 255, 0.3)',
      }}
    >
      {isLoaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          aria-label={`Reproduzir vídeo: ${title}`}
          className="relative w-full h-full block cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
        >
          {/* High-quality poster thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            loading="lazy"
            decoding="async"
            width="1280"
            height="720"
            onError={(e) => {
              // Fallback to standard quality if maxres doesn't exist
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
            className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300 group-hover:scale-105"
          />

          {/* Vignette dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 group-hover:via-black/10 transition-all" />

          {/* Central Play Button with neon glow */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl"
              style={{
                backgroundColor: '#0066ff',
                boxShadow: '0 0 35px rgba(0, 102, 255, 0.8), 0 0 15px #00d4ff',
              }}
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
            </div>

            <span className="mt-4 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-black/70 backdrop-blur-md border border-[#0066ff80] shadow-lg group-hover:border-[#00d4ff] transition-colors">
              Clique para assistir ao tour (1 min)
            </span>
          </div>
        </button>
      )}
    </div>
  );
};
