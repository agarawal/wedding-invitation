'use client';

import { motion } from 'framer-motion';
import { config } from '@/lib/wedding-config';

export default function ClosingSection() {
  return (
    <div>
      {/* Closing message */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #EBF2E7 0%, #F5F0E8 100%)' }}
      >
        <div className="max-w-sm mx-auto text-center space-y-7">
          {/* Decorative top */}
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-10 bg-gold/35" />
            <span className="text-gold/60 text-lg">✦</span>
            <div className="h-px w-10 bg-gold/35" />
          </div>

          {/* Couple message */}
          <div className="space-y-4">
            <p className="font-serif italic text-sage-dark/80 text-base leading-relaxed">
              "{config.closing.coupleMessage}"
            </p>
            <p className="font-script text-sage-dark text-4xl">Deepak & Salomi</p>
          </div>

          {/* Divider */}
          <div className="h-px bg-sage/20 mx-8" />

          {/* Family message */}
          <p className="font-serif italic text-sage-dark/65 text-sm leading-relaxed">
            {config.closing.familyMessage}
          </p>

          {/* Bottom flourish */}
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-10 bg-gold/35" />
            <span className="text-gold/60 text-lg">✦</span>
            <div className="h-px w-10 bg-gold/35" />
          </div>
        </div>
      </motion.section>

      {/* Contact info */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-14 px-6 bg-cream"
      >
        <div className="max-w-sm mx-auto space-y-5">
          <div className="text-center mb-6">
            <p className="font-sans text-[9px] tracking-[0.35em] text-sage-dark/60 uppercase mb-1">
              For Any Queries
            </p>
            <h3 className="font-serif text-sage-dark text-2xl font-light">Get in Touch</h3>
          </div>

          {config.contacts.map((contact, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl px-5 py-4 border border-sage/12 flex items-center gap-4 shadow-sm"
            >
              {/* Avatar */}
              <div className="w-11 h-11 rounded-full bg-sage/12 flex items-center justify-center shrink-0">
                <span className="font-script text-sage-dark text-2xl leading-none">
                  {contact.side === "Groom's Family" ? 'G' : 'B'}
                </span>
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <p className="font-sans text-[9px] tracking-[0.25em] text-sage/65 uppercase mb-0.5">
                  {contact.side}
                </p>
                <p className="font-serif text-sage-dark font-medium text-sm">{contact.name}</p>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="font-sans text-sage text-sm hover:text-sage-dark transition-colors"
                >
                  {contact.phone}
                </a>
              </div>

              {/* Call icon */}
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="w-9 h-9 rounded-full bg-sage/10 flex items-center justify-center hover:bg-sage/20 transition-colors shrink-0"
              >
                <svg className="w-4 h-4 text-sage-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
              </a>
            </div>
          ))}

          <p className="text-center font-sans text-[9px] tracking-widest text-sage/45 uppercase pt-2">
            We look forward to seeing you 🌿
          </p>
        </div>
      </motion.section>
    </div>
  );
}
