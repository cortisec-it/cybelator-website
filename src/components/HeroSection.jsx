import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, LifeBuoy, ChevronDown, GraduationCap, BookOpen } from 'lucide-react';

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const PLATFORM_CARDS = [
  {
    icon: GraduationCap,
    label: 'CORTISEC ACADEMY',
    title: 'Enterprise Cybersecurity Training',
    desc: '20-week curriculum · Vendor certs · Real labs · Placement support',
    href: '#training',
    accent: '#0D9488',
  },
  {
    icon: BookOpen,
    label: 'CYBER AWARENESS',
    title: 'Free Public Safety Guides',
    desc: 'Phishing · UPI scams · Password safety · Privacy · And more',
    href: '#awareness',
    accent: '#6366F1',
  },
  {
    icon: LifeBuoy,
    label: 'CYBER ASSISTANCE',
    title: 'Help for Cybercrime Victims',
    desc: 'Guided action checklist · Report to 1930 · CortiSec expert help',
    href: '#assistance',
    accent: '#f87171',
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden text-white"
      style={{
        background: [
          'radial-gradient(ellipse at 15% 115%, rgba(0,229,255,0.06) 0%, transparent 55%)',
          'radial-gradient(ellipse at 85% 0%, rgba(99,102,241,0.07) 0%, transparent 50%)',
          'linear-gradient(180deg, #0a0d12 0%, #0e1520 100%)',
        ].join(', '),
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>

          {/* Micro-bar — full-width announcement strip */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] text-center mb-8 px-4 py-2 -mx-4 sm:rounded-xl"
            style={{ background: '#0f1a2e', color: '#8a96a8', letterSpacing: '0.04em' }}
          >
            CortiSec Academy is now open &nbsp;·&nbsp; Hands-on training at our Guwahati Training Centre &nbsp;·&nbsp;{' '}
            Delivered through{' '}
            <span style={{ color: '#00ffff' }}>Cybelator →</span>
          </motion.div>

          {/* Headline */}
          <h1
            className="font-display font-bold text-white leading-none mb-5"
            style={{ fontSize: 'clamp(42px, 8vw, 80px)', letterSpacing: '-0.02em' }}
          >
            Learn. Stay Safe.<br />
            <span style={{ color: '#00e5ff' }}>Get Help.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg mb-3 max-w-2xl mx-auto leading-relaxed" style={{ color: '#8a96a8' }}>
            Northeast India's enterprise cybersecurity platform — professional training,
            public awareness, and direct assistance for cybercrime victims.
          </p>
          <p className="font-mono text-xs mb-10" style={{ color: '#5a6478', letterSpacing: '0.1em' }}>
            Guwahati &nbsp;·&nbsp; Noida &nbsp;·&nbsp; Online
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <button
              onClick={() => scrollTo('#training')}
              className="inline-flex items-center justify-center gap-2 font-display font-bold rounded-xl px-8 py-3.5 text-base text-white transition-all"
              style={{ background: '#0D9488', fontSize: '1.05rem', letterSpacing: '0.02em' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#0F766E')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0D9488')}
            >
              Explore the Program <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#fff', background: 'rgba(255,255,255,0.04)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
            >
              Apply for Batch 1
            </button>
          </div>

          {/* Trust anchor — company attribution */}
          <p className="font-mono text-[11px] mb-6 mt-1" style={{ color: '#5a6478', letterSpacing: '0.04em' }}>
            A platform by{' '}
            <a
              href="https://cortisec.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: '#8a96a8', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8a96a8')}
            >
              Cortisec Technologies Pvt. Ltd. ↗
            </a>
            {' '}· Guwahati Training Centre · Noida Operations
          </p>

          {/* Help link */}
          <button
            onClick={() => scrollTo('#assistance')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors mb-12"
            style={{ color: '#f87171' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fca5a5')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#f87171')}
          >
            <LifeBuoy className="w-4 h-4" /> Need help with a cybercrime? Free guidance →
          </button>

          {/* Platform cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            {PLATFORM_CARDS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.button
                  key={c.label}
                  onClick={() => scrollTo(c.href)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                  className="text-left p-4 rounded-2xl border transition-all group"
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: '#1c2438' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = c.accent + '60'; e.currentTarget.style.background = 'rgba(255,255,255,0.055)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1c2438'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: c.accent + '18' }}>
                      <Icon className="w-3.5 h-3.5" style={{ color: c.accent }} />
                    </div>
                    <span className="font-mono text-[9px] font-medium tracking-widest" style={{ color: c.accent }}>
                      {c.label}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">{c.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#5a6478' }}>{c.desc}</p>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Cyan separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.25), transparent)' }} />

      {/* Scroll hint */}
      <motion.button
        onClick={() => scrollTo('#stats')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors"
        style={{ color: '#5a6478' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#8a96a8')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6478')}
      >
        <span className="font-mono text-[9px] tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
