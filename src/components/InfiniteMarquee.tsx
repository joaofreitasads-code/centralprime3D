import React from 'react';
import { CarouselItem } from '../data/pageData';

interface InfiniteMarqueeProps {
  items: CarouselItem[];
  direction?: 'left' | 'right';
  speedSeconds?: number;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  items,
  direction = 'left',
  speedSeconds = 38,
}) => {
  // Duplicate array 3 times to ensure uninterrupted infinite flow on any screen size
  const duplicatedItems = [...items, ...items, ...items];

  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div className="relative w-full overflow-hidden py-2 select-none group">
      {/* Soft gradient edge masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-l from-black to-transparent" />

      <div
        className="flex gap-4 w-max group-hover:[animation-play-state:paused] gpu-layer"
        style={{
          animation: `${animationName} ${speedSeconds}s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="w-[240px] sm:w-[260px] md:w-[280px] flex-shrink-0"
          >
            <div
              className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col h-full"
              style={{
                border: '1.5px solid #0066ff',
                boxShadow: '0 0 15px rgba(0, 102, 255, 0.25)',
                backgroundColor: '#1a1c1f',
              }}
            >
              {/* Image container: fills space completely with no gaps and no overflowing */}
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-900 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  width="280"
                  height="280"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center block"
                />
              </div>

              {/* Title label underneath */}
              <div className="p-3 text-center text-xs md:text-sm font-black tracking-wide text-white uppercase truncate">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
