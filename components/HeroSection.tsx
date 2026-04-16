'use client';

import { motion } from 'framer-motion';
import { config } from '@/lib/wedding-config';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden">
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% 40%, rgba(200,219,189,0.3) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="space-y-8 max-w-xs mx-auto relative"
      >
        {/* Top flourish */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-14 bg-sage/40" />
          <span className="text-sage-dark/55 font-sans text-[10px] tracking-[0.35em] uppercase">
            Together Forever
          </span>
          <div className="h-px w-14 bg-sage/40" />
        </div>

        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gold/35" />
          <span className="font-serif text-gold text-4xl italic font-light">&</span>
          <div className="h-px flex-1 bg-gold/35" />
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h1 className="font-script text-sage-dark text-[5.5rem] leading-none">
            {config.bride.name}
          </h1>
          <p className="font-sans text-[10px] tracking-[0.22em] text-sage-dark/65 mt-1.5 uppercase">
            {config.bride.parentsLine}
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="pt-1"
        >
          <p className="font-serif italic text-sage-deep/65 text-sm leading-relaxed">
            "Two souls, one heart — beginning the most beautiful chapter of their lives."
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-1 text-sage-dark/35 pt-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <p className="text-[9px] tracking-widest uppercase font-sans">Scroll to Explore</p>
            <p className="text-center text-sm mt-1">↓</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
