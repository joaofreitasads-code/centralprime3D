import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsCarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  images,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Autoplay with visibility detection to preserve mobile battery and data
  useEffect(() => {
    if (isPaused || autoPlayInterval <= 0) return;

    let timer: NodeJS.Timeout | null = null;

    const startTimer = () => {
      if (document.hidden) return;
      if (!timer) {
        timer = setInterval(() => {
          nextSlide();
        }, autoPlayInterval);
      }
    };

    const stopTimer = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    startTimer();
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isPaused, autoPlayInterval, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (diff > minSwipeDistance) {
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative max-w-4xl mx-auto px-2 sm:px-4 py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container flex centralizado com setas laterais sempre visíveis e alinhadas */}
      <div className="relative flex items-center justify-center gap-1.5 sm:gap-4 md:gap-8">
        {/* SETA ESQUERDA */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Depoimento anterior"
          className="flex-shrink-0 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-black bg-white hover:bg-neutral-100 shadow-[0_0_20px_rgba(255,255,255,0.7),0_8px_20px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 -ml-0.5 text-black stroke-[2.5]" />
        </button>

        {/* CELULAR COM BORDA BRANCA BONITA */}
        <div className="relative w-full max-w-[270px] sm:max-w-[340px] md:max-w-[420px] select-none flex-shrink">
          {/* Brilho de fundo sutil */}
          <div
            className="absolute -inset-3 rounded-[54px] pointer-events-none opacity-40 blur-2xl"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4), transparent 70%)',
            }}
          />

          {/* CHASSI DO CELULAR - BORDA BRANCA DE DESTAQUE */}
          <div
            className="relative rounded-[40px] sm:rounded-[48px] md:rounded-[54px] p-2 sm:p-2.5 bg-white transition-all duration-300"
            style={{
              boxShadow:
                '0 0 30px rgba(255, 255, 255, 0.35), 0 25px 60px -10px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.8)',
            }}
          >
            {/* Alto-falante e câmera no topo da borda branca */}
            <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20 pointer-events-none">
              <div className="w-10 sm:w-14 h-1 sm:h-1.5 bg-neutral-300 rounded-full" />
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-neutral-400 border border-neutral-300" />
            </div>

            {/* TELA INTERNA - SEM ESPAÇO SOBRANDO, TOTALMENTE PREENCHIDA */}
            <div
              className="relative rounded-[32px] sm:rounded-[40px] md:rounded-[46px] overflow-hidden bg-black flex flex-col justify-center cursor-grab active:cursor-grabbing border border-neutral-200 aspect-[391/800]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slides dos depoimentos - Preenchimento total */}
              <div
                className="flex transition-transform duration-500 ease-out w-full h-full"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {images.map((imgUrl, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0 flex items-center justify-center p-0 m-0 bg-black"
                  >
                    <img
                      src={imgUrl}
                      alt={`Depoimento ${index + 1}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      width="391"
                      height="800"
                      referrerPolicy="no-referrer"
                      className="w-full h-full block object-cover select-none"
                    />
                  </div>
                ))}
              </div>

              {/* Barra inferior sutil de navegação (Home bar iOS) */}
              <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-1 bg-white/40 rounded-full pointer-events-none z-10" />
            </div>
          </div>
        </div>

        {/* SETA DIREITA */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Próximo depoimento"
          className="flex-shrink-0 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-black bg-white hover:bg-neutral-100 shadow-[0_0_20px_rgba(255,255,255,0.7),0_8px_20px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 -mr-0.5 text-black stroke-[2.5]" />
        </button>
      </div>

      {/* Indicadores de navegação (dots) */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          {images.map((_, dotIdx) => {
            const isActive = dotIdx === currentIndex;
            return (
              <button
                key={dotIdx}
                type="button"
                aria-label={`Ver depoimento ${dotIdx + 1}`}
                onClick={() => goToSlide(dotIdx)}
                className="h-2.5 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: isActive ? '32px' : '9px',
                  backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                  boxShadow: isActive ? '0 0 12px rgba(255, 255, 255, 0.8)' : 'none',
                }}
              />
            );
          })}
        </div>

        <span className="text-sm font-semibold text-white/70 tracking-wider">
          Depoimento {currentIndex + 1} de {total}
        </span>
      </div>
    </div>
  );
};
