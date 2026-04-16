'use client';

import { motion } from 'framer-motion';
import { config } from '@/lib/wedding-config';

export default function Venue() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6"
    >
      <div className="max-w-sm mx-auto space-y-6">
        <div className="text-center">
          <p className="font-sans text-[9px] tracking-[0.35em] text-sage-dark/60 uppercase mb-2">
            Venue
          </p>
          <h2 className="font-script text-sage-dark text-5xl">{config.venue.name}</h2>
          <p className="font-serif italic text-sage-dark/70 text-sm mt-2">{config.venue.address}</p>
        </div>

        <div className="flex justify-center">
          <a
            href={config.venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-sage text-white px-8 py-3 rounded-full font-sans text-[11px] tracking-widest uppercase hover:bg-sage-dark active:scale-95 transition-all shadow-sm"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            View on Map
          </a>
        </div>

        {/* Map embed */}
        <div
          className="rounded-2xl overflow-hidden shadow-md border border-sage/12"
          style={{ height: '220px' }}
        >
          <iframe
            src={config.venue.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue location"
          />
        </div>
      </div>
    </motion.section>
  );
}
