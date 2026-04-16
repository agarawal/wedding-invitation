'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EnvelopeReveal from '@/components/EnvelopeReveal';
import HeroSection from '@/components/HeroSection';
import SaveTheDate from '@/components/SaveTheDate';
import Countdown from '@/components/Countdown';
import OurStory from '@/components/OurStory';
import EventDay from '@/components/EventDay';
import Venue from '@/components/Venue';
import RSVPForm from '@/components/RSVPForm';
import ClosingSection from '@/components/ClosingSection';
import { config } from '@/lib/wedding-config';

function Divider() {
  return (
    <div className="flex items-center gap-4 px-10 py-2">
      <div className="h-px flex-1 bg-sage/12" />
      <span className="text-gold/35 text-sm">✦</span>
      <div className="h-px flex-1 bg-sage/12" />
    </div>
  );
}

export default function Home() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <>
      <EnvelopeReveal onOpen={() => setEnvelopeOpened(true)} isOpen={envelopeOpened} />

      <motion.main
        className="bg-cream min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: envelopeOpened ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <Divider />

        <SaveTheDate />
        <Divider />

        <Countdown />
        <Divider />

        <OurStory />
        <Divider />

        {/* Events header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-14 pb-2 px-6"
        >
          <p className="font-sans text-[9px] tracking-[0.35em] text-sage-dark/60 uppercase mb-2">
            Celebrations
          </p>
          <h2 className="font-script text-sage-dark text-5xl">Sacred Ceremonies</h2>
        </motion.div>

        {config.events.map((day, i) => (
          <div key={day.day}>
            <EventDay event={day} />
            {i < config.events.length - 1 && <Divider />}
          </div>
        ))}

        <Divider />
        <Venue />
        <Divider />

        <RSVPForm />
        <Divider />

        <ClosingSection />

        {/* Footer */}
        <footer className="text-center py-8 px-6 text-sage-dark/30 font-serif italic text-xs">
          <p>Made with love · Deepak & Salomi · July 5–6, 2026 · Jamshedpur</p>
        </footer>
      </motion.main>
    </>
  );
}
