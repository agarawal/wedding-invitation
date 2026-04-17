'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { config } from '@/lib/wedding-config';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function RSVPForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('2');
  const [selectedEvents, setSelectedEvents] = useState<string[]>(['varmala', 'phera']);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const toggleEvent = (id: string) => {
    setSelectedEvents((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitState('submitting');

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      guests,
      events: config.rsvpEvents
        .filter((ev) => selectedEvents.includes(ev.id))
        .map((ev) => `${ev.label} (${ev.date})`)
        .join(', '),
      timestamp: new Date().toLocaleString('en-IN'),
    };

    const sheetsUrl = process.env.NEXT_PUBLIC_SHEETS_URL;
    try {
      if (sheetsUrl) {
        await fetch(sheetsUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  };

  if (submitState === 'success') {
    return (
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-sm mx-auto space-y-5"
        >
          <div className="w-20 h-20 rounded-full bg-sage/12 flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-script text-sage-dark" style={{ fontSize: '2.4rem' }}>We Can't Wait!</h2>
          <p className="font-serif italic text-sage-dark/70 leading-relaxed">
            Thank you, {name}! Your RSVP has been received.
            <br />
            We look forward to celebrating with you.
          </p>
          <p className="font-sans text-[9px] tracking-widest text-sage-dark/50 uppercase">
            July 5–6, 2026 · Alcor, Jamshedpur
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-6"
    >
      <div className="max-w-sm mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <p className="font-sans text-[9px] tracking-[0.35em] text-sage-dark/60 uppercase mb-2">
            Join the Celebration
          </p>
          <h2 className="font-script text-sage-dark" style={{ fontSize: '2.4rem' }}>RSVP</h2>
          <p className="font-serif italic text-sage-dark/65 text-sm mt-2">
            Kindly respond by {config.rsvpDeadline}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="font-sans text-[9px] tracking-[0.28em] text-sage-dark/65 uppercase">
              Your Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-sage/25 bg-white font-serif italic text-sage-dark placeholder:text-sage-dark/30 focus:outline-none focus:border-sage/55 transition-colors text-base"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="font-sans text-[9px] tracking-[0.28em] text-sage-dark/65 uppercase">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-sage/25 bg-white font-serif italic text-sage-dark placeholder:text-sage-dark/30 focus:outline-none focus:border-sage/55 transition-colors text-base"
            />
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="font-sans text-[9px] tracking-[0.28em] text-sage-dark/65 uppercase">
              Number of Guests
            </label>
            <div className="relative">
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-sage/25 bg-white font-serif italic text-sage-dark focus:outline-none focus:border-sage/55 transition-colors appearance-none text-base"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sage-dark/40 pointer-events-none text-sm">
                ▾
              </span>
            </div>
          </div>

          {/* Events */}
          <div className="space-y-2">
            <label className="font-sans text-[9px] tracking-[0.28em] text-sage-dark/65 uppercase">
              Events You Will Join
            </label>
            <div className="bg-white rounded-xl border border-sage/15 divide-y divide-sage/8 overflow-hidden">
              {config.rsvpEvents.map((ev) => {
                const checked = selectedEvents.includes(ev.id);
                return (
                  <label
                    key={ev.id}
                    className="flex items-center gap-3 px-4 py-3.5 cursor-pointer hover:bg-sage/5 transition-colors"
                    onClick={() => toggleEvent(ev.id)}
                  >
                    <div
                      className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-colors ${
                        checked ? 'bg-sage border-sage' : 'bg-white border-sage/30'
                      }`}
                    >
                      {checked && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="font-sans text-xs text-sage-dark uppercase tracking-wider">
                        {ev.label}
                      </span>
                      <span className="font-serif italic text-sage-dark/55 text-xs ml-2">
                        — {ev.date}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitState === 'submitting'}
            className="w-full bg-sage text-white py-4 rounded-full font-sans text-xs tracking-widest uppercase hover:bg-sage-dark active:scale-95 transition-all shadow-sm disabled:opacity-60"
          >
            {submitState === 'submitting' ? 'Sending…' : 'Confirm Attendance'}
          </button>

          {submitState === 'error' && (
            <p className="text-center text-red-400 font-serif italic text-sm">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
}
