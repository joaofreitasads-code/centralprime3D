import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHECKOUT_URLS } from '../data/pageData';

interface SpecialOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecialOfferModal: React.FC<SpecialOfferModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="basicModal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
            style={{
              border: '2px solid #ff003c',
              boxShadow: '0 0 50px rgba(255, 0, 60, 0.5), 0 0 20px rgba(255, 0, 60, 0.3)',
              background: 'linear-gradient(180deg, #1a1c1f, rgba(255, 0, 60, 0.15))',
            }}
          >
            <button
              type="button"
              aria-label="Fechar"
              id="modalClose"
              onClick={onClose}
              className="absolute top-3 right-4 text-white/60 hover:text-white text-2xl transition cursor-pointer p-1"
            >
              ✕
            </button>

            <h3 className="text-2xl font-black uppercase text-center text-white">
              ESPERA!{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ff003c, #ff3366)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                OFERTA ESPECIAL
              </span>
            </h3>

            <p className="mt-4 text-center text-white/80 text-sm md:text-base">
              Antes de escolher o básico, leve o <b>plano completo</b> com todos os bônus por um preço único:
            </p>

            <div className="mt-6 text-center">
              <div className="text-sm line-through text-white/50">DE R$ 39,90</div>
              <div className="mt-1 text-5xl font-black">
                <span
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #ff003c, #ff3366)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  R$ 21,90
                </span>
              </div>
              <div className="text-xs text-white/70 mt-1">Pagamento único • Acesso vitalício</div>
            </div>

            <ul className="mt-6 space-y-1 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <span style={{ color: '#ff003c' }} className="font-bold">✓</span> +150.000 modelos STL
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: '#ff003c' }} className="font-bold">✓</span> Todos os 14 bônus inclusos
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: '#ff003c' }} className="font-bold">✓</span> Garantia de 14 dias
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={CHECKOUT_URLS.specialOfferDiscount}
                target="_blank"
                rel="noreferrer"
                className="block text-center w-full py-3.5 rounded-full font-black text-black uppercase text-sm tracking-wide shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #00ff66, #00e64d)',
                  boxShadow: '0 0 28px rgba(0, 255, 102, 0.75)',
                  color: '#000000',
                }}
              >
                SIM! QUERO O COMPLETO POR R$ 21,90
              </a>
              <a
                href={CHECKOUT_URLS.basicCheckout}
                target="_blank"
                rel="noreferrer"
                className="block text-center w-full py-3 rounded-full font-bold text-white uppercase text-xs tracking-wide hover:brightness-110 active:scale-95 transition"
                style={{ backgroundColor: '#ff003c', boxShadow: '0 8px 25px -5px rgba(255, 0, 60, 0.5)' }}
              >
                NÃO, PREFIRO O BÁSICO
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
