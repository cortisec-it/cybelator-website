import React from 'react';
import { Shield } from 'lucide-react';

const DARK = '#0a0d12';
const BORDER = '#1c2438';

const LINKS = [
  { label: 'Program', href: '#training' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Awareness', href: '#awareness' },
  { label: 'Assistance', href: '#assistance' },
  { label: 'Contact', href: '#contact' },
];

const PARTNERS = ['Check Point', 'Cisco', 'Fortinet', 'CyberArk', 'SolarWinds'];

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <footer style={{ background: DARK, borderTop: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="space-y-2">
            <p className="font-display font-bold text-white" style={{ fontSize: '1.2rem', letterSpacing: '0.04em' }}>Cybelator</p>
            <p className="font-mono text-[10px]" style={{ color: '#5a6478', letterSpacing: '0.04em' }}>
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
            </p>
            <p className="text-xs max-w-xs leading-relaxed" style={{ color: '#5a6478' }}>
              Northeast India's cybersecurity platform — training, awareness, and victim assistance.
            </p>
            <p className="font-mono text-[9px]" style={{ color: '#5a6478', letterSpacing: '0.06em' }}>
              contact@cybelator.com
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-mono text-[10px] transition-colors"
                style={{ color: '#5a6478', letterSpacing: '0.1em' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#8a96a8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6478')}
              >
                {l.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Partner vendor row */}
        <div className="py-6 border-y flex flex-wrap items-center gap-x-8 gap-y-3" style={{ borderColor: BORDER }}>
          <p className="font-mono text-[9px] tracking-widest shrink-0" style={{ color: '#5a6478' }}>VENDOR PARTNERS</p>
          {PARTNERS.map((p) => (
            <span key={p} className="font-mono text-[10px] font-medium" style={{ color: '#8a96a8' }}>{p}</span>
          ))}
        </div>

        {/* Bottom — disclaimers */}
        <div className="pt-8 space-y-3">
          <p className="text-xs leading-relaxed" style={{ color: '#5a6478' }}>
            <span className="font-mono font-bold tracking-wider" style={{ color: '#8a96a8' }}>PLACEMENT: </span>
            CortiSec does not guarantee placement or employment. Placement support is provided on a best-effort basis.
            Outcomes depend on individual performance, market conditions, and employer decisions.
            Salary ranges displayed are indicative and sourced from publicly available job market data.
          </p>
          <p className="text-xs leading-relaxed" style={{ color: '#5a6478' }}>
            <span className="font-mono font-bold tracking-wider" style={{ color: '#8a96a8' }}>ASSISTANCE: </span>
            Cybelator Cyber Assistance is a voluntary public service. Cortisec Technologies Pvt. Ltd. does not
            store user data submitted through the assistance tool.
            Cybercrime guidance is informational only and does not constitute legal advice.
            CortiSec is not a law enforcement agency. For urgent financial cybercrime, call 1930 immediately.
          </p>
          <p className="text-xs leading-relaxed" style={{ color: '#5a6478' }}>
            <span className="font-mono font-bold tracking-wider" style={{ color: '#8a96a8' }}>CERTS: </span>
            Cisco, Check Point, Fortinet, CyberArk, and SolarWinds are registered trademarks of their respective owners.
            CortiSec is an independent training provider and is not affiliated with or endorsed by these vendors.
            Exam fees are indicative INR conversions of vendor USD pricing and may vary at time of booking.
          </p>

          {/* Bottom bar */}
          <div className="pt-4" style={{ borderTop: `1px solid ${BORDER}` }}>
            <p className="font-mono text-[9px] leading-relaxed" style={{ color: '#5a6478' }}>
              CIN: U70200UP2025PTC230788 &nbsp;·&nbsp; © 2026 Cortisec Technologies Pvt. Ltd. All rights reserved.
              &nbsp;·&nbsp; Cybelator Cyber Assistance is a voluntary public service. We do not store user data.
            </p>
            <div className="flex items-center gap-1.5 mt-2">
              <Shield className="w-3 h-3" style={{ color: '#5a6478' }} />
              <p className="font-mono text-[9px]" style={{ color: '#5a6478' }}>Guwahati · Noida · Online</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
