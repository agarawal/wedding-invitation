'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'framer-motion';
import { config } from '@/lib/wedding-config';

const rotations = [-4, 3, -2];
// 2 screens of scroll per photo so it never flies past
const SCREENS_PER_PHOTO = 2;

function PhotoFrame({ src, caption, rotate }: { src: string; caption: string; rotate: number }) {
  return (
    <div
      className="bg-white shadow-2xl"
      style={{ transform: `rotate(${rotate}deg)`, width: '260px', padding: '12px 12px 48px 12px' }}
    >
      <div className="relative overflow-hidden" style={{ width: '236px', height: '280px' }}>
        <Image
          src={src}
          alt={caption}
          fill
          sizes="236px"
          quality={95}
          className="object-cover"
          priority
        />
      </div>
      <div className="flex items-center justify-center" style={{ height: '36px' }}>
        <span className="font-script text-sage-dark text-xl">{caption}</span>
      </div>
    </div>
  );
}

export default function OurStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const stories = config.story;
  const totalScreens = stories.length * SCREENS_PER_PHOTO;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Each photo occupies an equal slice of scroll progress
    const idx = Math.min(
      Math.floor(latest * stories.length),
      stories.length - 1
    );
    setActiveIndex((prev) => {
      if (idx !== prev) setPrevIndex(prev);
      return idx;
    });
  });

  const isScrollingForward = activeIndex >= prevIndex;

  return (
    <section ref={containerRef} style={{ height: `${totalScreens * 100}vh` }} className="relative">
      {/* Preload all images so they're ready before the user scrolls to them */}
      <div className="hidden">
        {stories.map((entry, i) => (
          <Image key={i} src={entry.photo} alt="" fill sizes="1px" priority />
        ))}
      </div>

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-8 overflow-hidden bg-cream px-6 py-8">
        <div className="text-center shrink-0">
          <p className="font-sans text-[9px] tracking-[0.35em] text-sage-dark/60 uppercase mb-1">
            Captured Moments
          </p>
          <h2 className="font-script text-sage-dark text-5xl">Our Photos</h2>
        </div>

        {/* Photo counter */}
        <p className="font-sans text-[9px] tracking-widest text-sage-dark/40 uppercase -mb-4 shrink-0">
          {activeIndex + 1} / {stories.length}
        </p>

        {/* Photo frame */}
        <div className="relative shrink-0" style={{ width: '300px', height: '360px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ y: isScrollingForward ? '80%' : '-80%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: isScrollingForward ? '-80%' : '80%', opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <PhotoFrame
                src={stories[activeIndex].photo}
                caption={stories[activeIndex].caption}
                rotate={rotations[activeIndex]}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 items-center shrink-0">
          {stories.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 24 : 6,
                height: 6,
                backgroundColor: i === activeIndex ? '#7A9B6E' : '#C8DBBD',
              }}
            />
          ))}
        </div>

        {activeIndex < stories.length - 1 && (
          <motion.p
            className="font-sans text-[9px] tracking-widest text-sage-dark/45 uppercase shrink-0"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
          >
            Scroll for more ↓
          </motion.p>
        )}
      </div>
    </section>
  );
}
