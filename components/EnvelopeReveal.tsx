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
    setTimeout(() => onOpen(), 1000);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer no-callout select-none"
      style={{ background: 'linear-gradient(160deg, #F7F0E6 0%, #F0E8D8 50%, #EAE0CC 100%)' }}
      onClick={handleTap}
      animate={tapped ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => { if (tapped) onOpen(); }}
    >
      {/* Thin gold border frame */}
      <div className="absolute inset-5 pointer-events-none" style={{ border: '1px solid rgba(200,145,46,0.35)', borderRadius: '2px' }} />
      <div className="absolute inset-8 pointer-events-none" style={{ border: '1px solid rgba(200,145,46,0.15)', borderRadius: '2px' }} />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="flex flex-col items-center gap-7 px-10"
      >
        {/* Label */}
        <div className="flex items-center gap-3">
          <div className="h-px w-8" style={{ background: 'rgba(200,145,46,0.5)' }} />
          <span className="font-sans text-[9px] tracking-[0.45em] uppercase" style={{ color: 'rgba(138,98,24,0.8)' }}>
            Wedding Invitation
          </span>
          <div className="h-px w-8" style={{ background: 'rgba(200,145,46,0.5)' }} />
        </div>

        {/* Gold wax seal */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.65, ease: [0.34, 1.4, 0.64, 1] }}
          className="relative flex items-center justify-center rounded-full shadow-xl"
          style={{
            width: '92px',
            height: '92px',
            background: 'radial-gradient(circle at 36% 32%, #E8C96A, #A07818)',
            boxShadow: '0 8px 28px rgba(160,120,24,0.35), 0 2px 6px rgba(0,0,0,0.12)',
          }}
        >
          <div className="absolute inset-0 rounded-full" style={{ border: '2px solid rgba(255,255,255,0.22)' }} />
          <span className="font-script text-white font-light" style={{ fontSize: '1.1rem', letterSpacing: '0.12em' }}>D & S</span>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.75 }}
          className="text-center space-y-1"
        >
          <p className="font-script leading-none" style={{ fontSize: '4.8rem', color: '#2A4D26' }}>Deepak</p>
          <p className="font-script" style={{ fontSize: '1.4rem', color: 'rgba(200,145,46,0.8)', letterSpacing: '0.05em' }}>&</p>
          <p className="font-script leading-none" style={{ fontSize: '4.8rem', color: '#2A4D26' }}>Salomi</p>
        </motion.div>

        {/* Date & venue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="text-center space-y-2"
        >
          <p className="font-script text-sm" style={{ color: 'rgba(42,77,38,0.7)' }}>
            Wedding Celebrations
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="font-sans text-[9px] tracking-[0.3em] uppercase" style={{ color: 'rgba(138,98,24,0.75)' }}>
              July 5–6, 2026
            </span>
            <span style={{ color: 'rgba(200,145,46,0.5)' }}>·</span>
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase" style={{ color: 'rgba(138,98,24,0.75)' }}>
              Jamshedpur
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Tap to Reveal */}
      <motion.div
        className="absolute bottom-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: tapped ? 0 : 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="px-8 py-2.5 rounded-full"
          style={{
            background: 'rgba(42,77,38,0.07)',
            border: '1px solid rgba(42,77,38,0.25)',
          }}
        >
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase" style={{ color: 'rgba(42,77,38,0.75)' }}>
            Tap to Reveal
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
