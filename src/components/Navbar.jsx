import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// ── Section-page nav links ──────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Academy',    path: '/academy'    },
  { label: 'Awareness',  path: '/awareness'  },
  { label: 'Assistance', path: '/assistance' },
  { label: 'Contact',    path: null          }, // special: scroll or navigate
];

// ── Right-side CTA per section page ────────────────────────────────
const PAGE_CTA = {
  '/academy':    { label: 'Apply Now →',    bg: '#00D4FF', color: '#0A0F1E', isExternal: false, hash: 'contact'    },
  '/awareness':  { label: 'Join Telegram →', bg: '#2563EB', color: '#fff',   isExternal: true,  href: 'https://t.me/cybelator' },
  '/assistance': { label: 'Get Help →',      bg: '#10B981', color: '#fff',   isExternal: false, hash: 'assistance' },
};

const DARK   = '#0a0d12';
const BORDER = '#1c2438';

export default function Navbar() {
  const [open,    setOpen]    = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate  = useNavigate();

  const isLanding = location.pathname === '/';
  const cta = PAGE_CTA[location.pathname];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  // ── Landing page: no navbar (landing page owns its own logo) ──────
  if (isLanding) return null;

  // ── Scroll helper for in-page anchors ────────────────────────────
  const scrollToHash = (hash) =>
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });

  // ── Contact click: scroll if on academy page, else navigate there ─
  const handleContact = () => {
    setOpen(false);
    if (location.pathname === '/academy') {
      scrollToHash('contact');
    } else {
      navigate('/academy');
    }
  };

  // ── CTA click ────────────────────────────────────────────────────
  const handleCta = () => {
    setOpen(false);
    if (!cta) return;
    if (cta.isExternal) {
      window.open(cta.href, '_blank', 'noopener,noreferrer');
    } else {
      scrollToHash(cta.hash);
    }
  };

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

        {/* ── Logo ───────────────────────────────────────────────── */}
        <Link to="/" className="flex flex-col items-start leading-none gap-0.5 no-underline">
          <span
            className="font-display font-bold text-white"
            style={{ fontSize: '1.25rem', letterSpacing: '0.04em' }}
          >
            Cybelator
          </span>
          <span
            className="font-mono text-[10px] transition-colors"
            style={{ color: '#5a6478', letterSpacing: '0.04em' }}
          >
            by CortiSec Technologies
          </span>
        </Link>

        {/* ── Desktop nav links ───────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((n) => {
            const isActive = location.pathname === n.path;

            if (n.path === null) {
              // Contact — scroll / navigate
              return (
                <button
                  key="contact"
                  onClick={handleContact}
                  className="font-mono text-[11px] px-3 py-2 rounded-lg transition-colors"
                  style={{ color: '#5a6478', letterSpacing: '0.1em' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#8a96a8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6478')}
                >
                  CONTACT
                </button>
              );
            }

            return (
              <Link
                key={n.path}
                to={n.path}
                className="font-mono text-[11px] px-3 py-2 rounded-lg transition-colors no-underline"
                style={{
                  color: isActive ? '#00D4FF' : '#5a6478',
                  letterSpacing: '0.1em',
                  borderBottom: isActive ? '2px solid #00D4FF' : '2px solid transparent',
                  paddingBottom: '6px',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#8a96a8'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#5a6478'; }}
              >
                {n.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>

        {/* ── Desktop CTA (per-page) ──────────────────────────────── */}
        <div className="hidden md:flex items-center">
          {cta && (
            <button
              onClick={handleCta}
              className="font-semibold text-sm px-5 py-2 rounded-full transition-all"
              style={{ background: cta.bg, color: cta.color }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {cta.label}
            </button>
          )}
        </div>

        {/* ── Mobile toggle ────────────────────────────────────────── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg"
          style={{ color: '#5a6478' }}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile drawer ────────────────────────────────────────────── */}
      {open && (
        <div
          className="md:hidden px-4 pt-2 pb-4 flex flex-col gap-1"
          style={{ background: DARK, borderTop: `1px solid ${BORDER}` }}
        >
          {NAV_LINKS.map((n) => {
            const isActive = location.pathname === n.path;

            if (n.path === null) {
              return (
                <button
                  key="contact"
                  onClick={handleContact}
                  className="text-left font-mono text-[11px] py-3 px-3 rounded-lg"
                  style={{ color: '#8a96a8', letterSpacing: '0.12em' }}
                >
                  CONTACT
                </button>
              );
            }

            return (
              <Link
                key={n.path}
                to={n.path}
                onClick={() => setOpen(false)}
                className="text-left font-mono text-[11px] py-3 px-3 rounded-lg no-underline block"
                style={{ color: isActive ? '#00D4FF' : '#8a96a8', letterSpacing: '0.12em' }}
              >
                {n.label.toUpperCase()}
              </Link>
            );
          })}

          {cta && (
            <div className="mt-2 pt-2" style={{ borderTop: `1px solid ${BORDER}` }}>
              <button
                onClick={handleCta}
                className="w-full font-semibold text-sm py-2.5 rounded-full"
                style={{ background: cta.bg, color: cta.color }}
              >
                {cta.label}
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
