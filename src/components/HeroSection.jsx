import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BookOpen, Heart, ArrowRight, ChevronDown } from 'lucide-react';

const pillars = [
  { Icon: BookOpen, color: '#14B8A6', bg: 'rgba(13,148,136,0.12)', label: 'Training Institute', href: '#training' },
  { Icon: Shield, color: '#818CF8', bg: 'rgba(99,102,241,0.12)', label: 'Cyber Awareness', href: '#awareness' },
  { Icon: Heart, color: '#F43F5E', bg: 'rgba(244,63,94,0.12)', label: 'Cyber Assistance', href: '#assistance' },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden text-white"
      style={{
        background: [
          'radial-gradient(ellipse at 20% 110%, rgba(13,148,136,0.14) 0%, transparent 50%)',
          'radial-gradient(ellipse at 80% 5%, rgba(99,102,241,0.08) 0%, transparent 45%)',
          'linear-gradient(180deg, #0B1222 0%, #111D2E 100%)',
        ].join(', '),
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-8"
            style={{ background: 'rgba(13,148,136,0.12)', color: '#14B8A6', border: '1px solid rgba(13,148,136,0.25)' }}
          >
            <Shield className="w-3.5 h-3.5" /> CortiSec Technologies · Guwahati & Noida
          </motion.span>

          <h1
            className="font-extrabold tracking-tight mb-6 text-white leading-none"
            style={{ fontSize: 'clamp(40px, 7vw, 76px)', letterSpacing: '-0.03em' }}
          >
            Learn. Stay Safe.
            <br />
            <span style={{ color: '#14B8A6' }}>Get Help.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Enterprise-grade cybersecurity training, real-time threat awareness, and expert assistance for fraud victims — all in one platform.
          </p>

          {/* Three pillar buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            {pillars.map((p, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                onClick={() => scrollTo(p.href)}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-200 cursor-pointer group"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: p.bg, color: p.color }}
                >
                  <p.Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                  {p.label}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
              </motion.button>
            ))}
          </div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-sm text-slate-500"
          >
            Trusted by 5,000+ learners · CERT-In affiliated · Northeast India's #1 cyber awareness platform
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#training')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
