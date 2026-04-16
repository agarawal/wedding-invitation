'use client';

import { motion } from 'framer-motion';
import type { DayEvent } from '@/lib/wedding-config';

interface Props {
  event: DayEvent;
}

export default function EventDay({ event }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      className="py-16 px-6"
    >
      <div className="max-w-sm mx-auto">
        {/* Day header */}
        <div className="text-center mb-10">
          <p className="font-sans text-[9px] tracking-[0.35em] text-sage-dark/55 uppercase">
            {event.label} · {event.dateShort} · {event.dayOfWeek}
          </p>
          <h2 className="font-script text-sage-dark text-4xl mt-1">{event.date}</h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-[14px] top-4 bottom-4 w-px bg-sage/20" />

          {event.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.13 }}
              className="relative mb-6 last:mb-0"
            >
              {/* Dot */}
              <div
                className="absolute -left-[18px] top-[18px] w-3 h-3 rounded-full border-2 border-cream shadow-sm"
                style={{ backgroundColor: event.dotColor }}
              />

              {/* Card */}
              <div className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-sage/8">
                <p className="font-sans text-[10px] text-sage tracking-widest uppercase mb-0.5">
                  {item.time}
                </p>
                <h3 className="font-script text-sage-dark text-3xl leading-tight">{item.name}</h3>
                <p className="font-serif italic text-sage-dark/70 text-sm mt-1 leading-snug">
                  {item.description}
                </p>
                {item.theme && (
                  <div className="mt-3 inline-block px-3 py-1 bg-gold/12 rounded-full border border-gold/20">
                    <span className="font-sans text-[9px] tracking-widest text-gold-dark uppercase">
                      {item.theme}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
