import React, { useState } from 'react';
import { FAQS } from '../data/pageData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="px-4 py-20 max-w-3xl mx-auto perf-section">
      <h2 className="text-3xl md:text-5xl font-black text-center uppercase text-white">
        DÚVIDAS{' '}
        <span
          style={{
            backgroundImage: 'linear-gradient(135deg, #ff003c, #ff3366)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          FREQUENTES
        </span>
      </h2>

      <div className="mt-10 space-y-3">
        {FAQS.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className="p-5 rounded-xl cursor-pointer transition-all duration-200"
              style={{
                border: '1.5px solid #ff003c',
                boxShadow: isOpen
                  ? '0 0 20px rgba(255, 0, 60, 0.35)'
                  : '0 0 10px rgba(255, 0, 60, 0.18)',
                backgroundColor: '#1a1c1f',
              }}
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="font-bold text-sm flex justify-between items-center select-none text-white">
                <span>{faq.question}</span>
                <span
                  className={`text-xl transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#ff003c', textShadow: '0 0 8px #ff003c' }}
                >
                  ⌄
                </span>
              </div>
              {isOpen && (
                <p className="mt-3 text-sm text-white/70 leading-relaxed border-t border-white/10 pt-3">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
