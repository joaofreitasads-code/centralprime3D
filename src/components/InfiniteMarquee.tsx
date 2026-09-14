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
  speedSeconds = 28,
}) => {
  // Duplicate array 2 times with equal padding for pixel-perfect seamless loop and 33% fewer DOM nodes
  const duplicatedItems = [...items, ...items];

  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div className="relative w-full overflow-hidden py-2 select-none group" style={{ contain: 'paint' }}>
      {/* Soft gradient edge masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10 bg-gradient-to-l from-black to-transparent" />

      <div
        className="flex gap-4 pr-4 w-max group-hover:[animation-play-state:paused] gpu-layer"
        style={{
          animation: `${animationName} ${speedSeconds}s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, idx) => {
          // Prioritize immediate loading for initial visible items, lazy load rest
          const isInitial = idx < 4;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="w-[220px] sm:w-[250px] md:w-[270px] flex-shrink-0"
              style={{ contain: 'layout paint' }}
            >
              <div
                className="relative rounded-2xl overflow-hidden transition-transform duration-200 hover:scale-[1.02] flex flex-col h-full"
                style={{
                  border: '1.5px solid #0066ff',
                  boxShadow: '0 0 15px rgba(0, 102, 255, 0.25)',
                  backgroundColor: '#1a1c1f',
                }}
              >
                {/* Image container: fills space completely with no gaps and zero CLS */}
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-900 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading={isInitial ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={isInitial ? 'high' : 'auto'}
                    width="270"
                    height="270"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center block"
                  />
                </div>

                {/* Title label underneath */}
                <div className="p-2.5 text-center text-xs md:text-sm font-black tracking-wide text-white uppercase truncate">
                  {item.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
