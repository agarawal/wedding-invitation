'use client';

import { motion } from 'framer-motion';
import { config } from '@/lib/wedding-config';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
      {/* Soft radial bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 55% at 50% 40%, rgba(83,122,73,0.1) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="space-y-8 max-w-xs mx-auto relative"
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-gold/40" />
          <span className="font-sans text-[9px] tracking-[0.42em] text-sage-dark/60 uppercase">
            Together Forever
          </span>
          <div className="h-px w-12 bg-gold/40" />
        </motion.div>

        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45 }}
        >
          <h1 className="font-script text-sage-dark text-[5.5rem] leading-none">
            {config.groom.name}
          </h1>
          <p className="font-sans text-[10px] tracking-[0.22em] text-sage-dark/65 mt-1.5 uppercase">
            {config.groom.parentsLine}
          </p>
        </motion.div>

        {/* Ampersand divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gold/35" />
          <span className="font-serif text-gold text-4xl italic font-light">&</span>
          <div className="h-px flex-1 bg-gold/35" />
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.9 }}
        >
          <h1 className="font-script text-sage-dark text-[5.5rem] leading-none">
            {config.bride.name}
          </h1>
          <p className="font-sans text-[10px] tracking-[0.22em] text-sage-dark/65 mt-1.5 uppercase">
            {config.bride.parentsLine}
          </p>
        </motion.div>

        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col items-center gap-3 pt-1"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full" style={{ background: 'rgba(200,145,46,0.08)', border: '1px solid rgba(200,145,46,0.3)' }}>
            <span className="font-sans text-[9px] tracking-[0.28em] text-gold-dark uppercase">July 5–6, 2026</span>
            <span className="text-gold/50 text-xs">·</span>
            <span className="font-sans text-[9px] tracking-[0.2em] text-gold-dark/80 uppercase">Jamshedpur</span>
          </div>
          <p className="font-serif italic text-sage-deep/65 text-sm leading-relaxed">
            "Two souls, one heart — beginning the most beautiful chapter of their lives."
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col items-center gap-1 pt-2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
          >
            <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-sage-dark/35">Scroll</p>
            <div className="w-px h-7 bg-gradient-to-b from-sage/30 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
