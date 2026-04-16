'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  onOpen: () => void;
  isOpen: boolean;
}

export default function EnvelopeReveal({ onOpen, isOpen }: Props) {
  const [tapped, setTapped] = useState(false);

  if (isOpen) return null;

  const handleTap = () => {
    if (tapped) return;
    setTapped(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream cursor-pointer no-callout overflow-hidden"
      onClick={handleTap}
      animate={tapped ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={() => {
        if (tapped) onOpen();
      }}
    >
      {/* Decorative double border */}
      <div className="absolute inset-4 border border-gold/50 rounded-sm pointer-events-none" />
      <div className="absolute inset-7 border border-gold/25 rounded-sm pointer-events-none" />

      {/* Corner ornaments */}
      {[
        'top-5 left-5',
        'top-5 right-5 -scale-x-100',
        'bottom-5 left-5 -scale-y-100',
        'bottom-5 right-5 scale-[-1]',
      ].map((pos, i) => (
        <span key={i} className={`absolute ${pos} text-gold/70 font-serif text-2xl select-none`}>
          ❧
        </span>
      ))}

      {/* Main content */}
      <div className="flex flex-col items-center gap-8 px-8">
        {/* Wax seal */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative w-32 h-32 rounded-full flex items-center justify-center shadow-xl"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #D4B75A, #9A7A1A)',
          }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-gold-light/30" />
          <div className="absolute inset-2 rounded-full border border-gold-light/20" />
          <span className="font-serif text-white text-3xl font-semibold tracking-widest">
            D&S
          </span>
        </motion.div>

        {/* Names & invite */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center space-y-3"
        >
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-10 bg-gold/30" />
            <span className="font-sans text-[10px] tracking-[0.3em] text-sage-dark/70 uppercase">
              You're Invited
            </span>
            <div className="h-px w-10 bg-gold/30" />
          </div>
          <p className="font-script text-sage-dark text-5xl leading-none">Deepak & Salomi</p>
          <p className="font-serif italic text-sage-dark/70 text-sm">Wedding Celebrations</p>
          <p className="font-sans text-[10px] tracking-widest text-sage-dark/60 uppercase">
            July 5–6, 2026 · Jamshedpur
          </p>
        </motion.div>
      </div>

      {/* Tap hint */}
      <motion.div
        className="absolute bottom-14 flex flex-col items-center gap-2"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <p className="font-serif italic text-sage-dark/60 text-sm tracking-widest">Tap to Reveal</p>
        <span className="text-gold text-base">↑</span>
      </motion.div>
    </motion.div>
  );
}
