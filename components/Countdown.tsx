'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { config } from '@/lib/wedding-config';

interface TimeLeft {
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

function getTimeLeft(): TimeLeft {
  const diff = config.weddingDate.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    setTime(getTimeLeft());
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'DAYS', value: time.days },
    { label: 'HOURS', value: time.hours },
    { label: 'MINS', value: time.mins },
    { label: 'SECS', value: time.secs },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 px-6"
    >
      <div className="max-w-sm mx-auto">
        <div className="bg-white rounded-3xl px-6 py-10 shadow-sm border border-sage/12 text-center space-y-6">
          <div>
            <p className="font-sans text-[9px] tracking-[0.38em] text-sage-dark/55 uppercase mb-2">Counting Down To</p>
            <h2 className="font-script text-sage-dark text-5xl mt-2">The Big Day</h2>
            <p className="font-serif italic text-sage-dark/55 text-sm mt-1">A lifetime begins with one sacred step</p>
          </div>

          <div className="flex justify-center gap-4">
            {units.map(({ label, value }) => (
              <div key={label} className="flex flex-col items-center min-w-[3.2rem]">
                <motion.span
                  key={value}
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="font-serif text-4xl text-sage-dark font-light tabular-nums"
                >
                  {String(value).padStart(2, '0')}
                </motion.span>
                <span className="font-sans text-[9px] tracking-widest text-sage-dark/55 uppercase mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <p className="font-sans text-[9px] tracking-[0.25em] text-sage-dark/55 uppercase">
            July 5–6, 2026 · Alcor, Jamshedpur
          </p>
        </div>
      </div>
    </motion.section>
  );
}
