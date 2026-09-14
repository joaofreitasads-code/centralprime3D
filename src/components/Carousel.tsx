import React, { useRef, useState, useEffect, useCallback } from 'react';
import { CarouselItem } from '../data/pageData';

interface CarouselProps {
  id?: string;
  items: CarouselItem[];
  autoPlayInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  id,
  items,
  autoPlayInterval = 3500,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    if (!trackRef.current) return;
    const count = items.length;
    const normalizedIndex = (index + count) % count;
    setCurrentIndex(normalizedIndex);

    const child = trackRef.current.children[normalizedIndex] as HTMLElement;
    if (child) {
      trackRef.current.scrollTo({
        left: child.offsetLeft - trackRef.current.offsetLeft,
        behavior: 'smooth',
      });
    }
  }, [items.length]);

  const handleNext = () => scrollToIndex(currentIndex + 1);
  const handlePrev = () => scrollToIndex(currentIndex - 1);

  // Sync index on manual scroll/touch
  const handleScroll = () => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const children = Array.from(trackRef.current.children) as HTMLElement[];
    let closestIndex = 0;
    let minDiff = Infinity;

    children.forEach((child, idx) => {
      const diff = Math.abs(child.offsetLeft - trackRef.current!.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    if (closestIndex !== currentIndex) {
      setCurrentIndex(closestIndex);
    }
  };

  useEffect(() => {
    if (isHovered || autoPlayInterval <= 0) return;

    let interval: NodeJS.Timeout | null = null;

    const startTimer = () => {
      if (document.hidden) return;
      if (!interval) {
        interval = setInterval(() => {
          scrollToIndex(currentIndex + 1);
        }, autoPlayInterval);
      }
    };

    const stopTimer = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    startTimer();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentIndex, isHovered, autoPlayInterval, scrollToIndex]);

  return (
    <div
      id={id}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar gpu-layer"
      >
        {items.map((item, index) => {
          const isInitial = index < 3;
          return (
            <div
              key={`${item.name}-${index}`}
              className="snap-center flex-shrink-0 w-[70%] sm:w-[45%] md:w-[32%] lg:w-[22%]"
              style={{ contain: 'layout paint' }}
            >
              <div
                className="relative rounded-2xl overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
                style={{
                  border: '1.5px solid #0066ff',
                  boxShadow: '0 0 15px rgba(0, 102, 255, 0.25)',
                  backgroundColor: '#1a1c1f',
                }}
              >
                <div className="aspect-square overflow-hidden bg-neutral-900">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading={isInitial ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={isInitial ? 'high' : 'auto'}
                    width="400"
                    height="400"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black shadow-md border"
                  style={{
                    backgroundColor: '#000000dd',
                    color: '#0066ff',
                    borderColor: '#0066ff80',
                    boxShadow: '0 0 8px rgba(0, 102, 255, 0.4)',
                  }}
                >
                  {item.tag}
                </div>
                <div className="p-3 text-center text-sm font-bold tracking-wide text-white uppercase">
                  {item.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        type="button"
        aria-label="Anterior"
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white text-xl font-black backdrop-blur hover:scale-110 active:scale-95 transition cursor-pointer select-none"
        style={{
          backgroundColor: '#000000aa',
          border: '1.5px solid #0066ff',
          boxShadow: '0 0 12px rgba(0, 102, 255, 0.4)',
        }}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Próximo"
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white text-xl font-black backdrop-blur hover:scale-110 active:scale-95 transition cursor-pointer select-none"
        style={{
          backgroundColor: '#000000aa',
          border: '1.5px solid #0066ff',
          boxShadow: '0 0 12px rgba(0, 102, 255, 0.4)',
        }}
      >
        ›
      </button>

      {/* Dot Indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, dotIdx) => {
          const isActive = dotIdx === currentIndex;
          return (
            <button
              key={dotIdx}
              type="button"
              aria-label={`Ir para ${dotIdx + 1}`}
              onClick={() => scrollToIndex(dotIdx)}
              className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: isActive ? '24px' : '8px',
                backgroundColor: isActive ? '#0066ff' : 'rgba(255, 255, 255, 0.2)',
                boxShadow: isActive ? '0 0 8px #0066ff' : 'none',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
