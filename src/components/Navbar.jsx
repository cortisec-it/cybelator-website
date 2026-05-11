import React, { useState, useEffect } from 'react';
import { Menu, X, LifeBuoy } from 'lucide-react';

const NAV = [
  { label: 'PROGRAM', href: '#training' },
  { label: 'PRICING', href: '#pricing' },
  { label: 'CERTS', href: '#certifications' },
  { label: 'AWARENESS', href: '#awareness' },
];

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const DARK = '#0a0d12';
const BORDER = '#1c2438';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const nav = (href) => { setOpen(false); scrollTo(href); };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,13,18,0.96)' : DARK,
        borderBottom: `1px solid ${scrolled ? BORDER : 'transparent'}`,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <div className="flex flex-col items-start leading-none gap-0.5">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-display font-bold text-white" style={{ fontSize: '1.25rem', letterSpacing: '0.04em' }}>
              Cybelator
            </span>
          </button>
          <a
            href="https://cortisec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] transition-colors"
            style={{ color: '#5a6478', letterSpacing: '0.04em', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#8a96a8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6478')}
          >
            by CortiSec Technologies
          </a>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map((n) => (
            <button
              key={n.href}
              onClick={() => nav(n.href)}
              className="font-mono text-[11px] px-3 py-2 rounded-lg transition-colors"
              style={{ color: '#5a6478', letterSpacing: '0.1em' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#8a96a8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6478')}
            >
              {n.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => nav('#assistance')}
            className="flex items-center gap-1.5 font-mono text-[11px] px-3 py-2 rounded-lg border transition-all"
            style={{ borderColor: 'rgba(248,113,113,0.3)', color: '#f87171', background: 'rgba(220,38,38,0.08)', letterSpacing: '0.08em' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(220,38,38,0.15)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(220,38,38,0.08)'; }}
          >
            <LifeBuoy className="w-3 h-3" /> GET HELP
          </button>
          <button
            onClick={() => nav('#contact')}
            className="font-mono text-[11px] px-4 py-2 rounded-lg transition-all"
            style={{ background: '#0D9488', color: '#fff', letterSpacing: '0.08em' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#0F766E')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#0D9488')}
          >
            APPLY NOW
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg" style={{ color: '#5a6478' }}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden px-4 pt-2 pb-4 flex flex-col gap-1" style={{ background: DARK, borderTop: `1px solid ${BORDER}` }}>
          {NAV.map((n) => (
            <button
              key={n.href}
              onClick={() => nav(n.href)}
              className="text-left font-mono text-[11px] py-3 px-3 rounded-lg"
              style={{ color: '#8a96a8', letterSpacing: '0.12em' }}
            >
              {n.label}
            </button>
          ))}
          <div className="flex gap-2 mt-2 pt-2" style={{ borderTop: `1px solid ${BORDER}` }}>
            <button
              onClick={() => nav('#assistance')}
              className="flex-1 flex items-center justify-center gap-1.5 font-mono text-[11px] py-2.5 rounded-lg border"
              style={{ borderColor: 'rgba(248,113,113,0.3)', color: '#f87171', background: 'rgba(220,38,38,0.08)' }}
            >
              <LifeBuoy className="w-3 h-3" /> GET HELP
            </button>
            <button
              onClick={() => nav('#contact')}
              className="flex-1 font-mono text-[11px] py-2.5 rounded-lg"
              style={{ background: '#0D9488', color: '#fff' }}
            >
              APPLY NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
