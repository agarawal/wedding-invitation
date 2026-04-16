'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScratchCardProps {
  label: string;
  value: string;
}

function ScratchCard({ label, value }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [justRevealed, setJustRevealed] = useState(false);
  const drawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Rich gradient scratch layer
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#5d7a55');
    grad.addColorStop(1, '#3d5238');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle dot texture
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    for (let x = 8; x < canvas.width; x += 12) {
      for (let y = 8; y < canvas.height; y += 12) {
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Hint text
    ctx.fillStyle = 'rgba(255,255,255,0.65)';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦  SCRATCH  ✦', canvas.width / 2, canvas.height / 2 + 4);
  }, [revealed]);

  const doScratch = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !drawing.current) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparent = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 10) transparent++;
    }
    if (transparent / (data.length / 4) > 0.48) {
      setRevealed(true);
      setJustRevealed(true);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-2.5">
      <span className="font-sans text-[9px] tracking-[0.3em] text-sage-dark/60 uppercase">
        {label}
      </span>
      <div className="relative w-[110px] h-[100px] rounded-2xl bg-white overflow-hidden shadow-md border border-sage/10">
        {/* Value underneath */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <span className="font-script text-sage-dark text-4xl leading-none">{value}</span>
            </motion.div>
          )}
          {!revealed && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-script text-sage-dark text-4xl leading-none">{value}</span>
            </div>
          )}
        </AnimatePresence>

        {/* Scratch canvas */}
        {!revealed && (
          <canvas
            ref={canvasRef}
            width={110}
            height={100}
            className="absolute inset-0 w-full h-full cursor-pointer touch-none"
            onMouseDown={() => { drawing.current = true; }}
            onMouseUp={() => { drawing.current = false; }}
            onMouseLeave={() => { drawing.current = false; }}
            onMouseMove={(e) => doScratch(e.clientX, e.clientY)}
            onTouchStart={(e) => { e.preventDefault(); drawing.current = true; }}
            onTouchEnd={() => { drawing.current = false; }}
            onTouchMove={(e) => {
              e.preventDefault();
              doScratch(e.touches[0].clientX, e.touches[0].clientY);
            }}
          />
        )}

        {/* Reveal sparkle */}
        {justRevealed && (
          <motion.div
            className="absolute inset-0 bg-gold/15 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </div>
    </div>
  );
}

export default function SaveTheDate() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F0EDE5 0%, #EBF2E7 100%)' }}
    >
      {/* Background monogram */}
      <div
        className="absolute -right-4 -top-4 font-script text-sage/8 select-none pointer-events-none"
        style={{ fontSize: '18rem', lineHeight: 1 }}
        aria-hidden
      >
        D
      </div>

      <div className="max-w-sm mx-auto space-y-10 relative">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-10 bg-sage-dark/25" />
            <span className="font-sans text-[9px] tracking-[0.4em] text-sage-dark/60 uppercase">
              The Date
            </span>
            <div className="h-px w-10 bg-sage-dark/25" />
          </div>
          <h2 className="font-script text-sage-dark text-6xl">Save the Date</h2>
          <p className="font-serif italic text-sage-dark/65 text-sm">
            Scratch each tile to reveal our wedding date
          </p>
        </div>

        {/* Scratch cards */}
        <div className="flex gap-3 justify-center">
          <ScratchCard label="Month" value="July" />
          <ScratchCard label="Day" value="5 & 6" />
          <ScratchCard label="Year" value="2026" />
        </div>

        {/* Venue teaser */}
        <div className="text-center space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-14 bg-sage-dark/20" />
            <svg className="w-4 h-4 text-sage-dark/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <div className="h-px w-14 bg-sage-dark/20" />
          </div>
          <p className="font-serif italic text-sage-dark/70 text-sm">
            Alcor Hotel · Bistupur, Jamshedpur
          </p>
          <p className="font-sans text-[9px] tracking-[0.25em] text-sage/60 uppercase">
            Jharkhand, India
          </p>
        </div>
      </div>
    </motion.section>
  );
}
