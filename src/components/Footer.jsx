import React from 'react';
import { Shield, ExternalLink } from 'lucide-react';

const links = [
  { label: 'Training', href: '#training' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Awareness', href: '#awareness' },
  { label: 'Assistance', href: '#assistance' },
  { label: 'Contact', href: '#contact' },
];

const scrollTo = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{ background: '#060D18', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(13,148,136,0.2)' }}>
              <Shield className="w-5 h-5" style={{ color: '#14B8A6' }} />
            </div>
            <div>
              <div className="font-extrabold text-white text-lg leading-none">Cybelator</div>
              <div className="text-xs text-slate-500 mt-0.5">by CortiSec Technologies</div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-1 justify-center">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* External */}
          <a
            href="https://cortisec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
          >
            cortisec.com <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div
          className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p className="text-xs text-slate-500">
            © 2026 CortiSec Technologies. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-slate-500">Guwahati · Noida</span>
            <a href="tel:1930" className="text-xs text-slate-400 hover:text-white transition-colors font-semibold">
              Cyber Crime: 1930
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
