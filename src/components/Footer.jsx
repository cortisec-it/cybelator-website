import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const DARK   = '#030810';
const BORDER = '#1c2438';

const PLATFORM_LINKS = [
  { label: 'Academy',    to: '/academy'    },
  { label: 'Awareness',  to: '/awareness'  },
  { label: 'Assistance', to: '/assistance' },
];

const CORTISEC_LINKS = [
  { label: 'Enterprise Services', href: 'https://cortisec.com'         },
  { label: 'DPDP Compliance',     href: 'https://cortisec.com/dpdp'    },
  { label: 'Contact',             href: 'https://cortisec.com/contact'  },
];

const PARTNERS = ['Check Point', 'Cisco', 'Fortinet', 'CyberArk', 'SolarWinds'];

export default function Footer() {
  return (
    <footer style={{ background: DARK, borderTop: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ── Three-column grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Column 1 — Brand */}
          <div className="space-y-2">
            <Link to="/" className="no-underline">
              <p
                className="font-display font-bold text-white hover:text-slate-200 transition-colors"
                style={{ fontSize: '1.2rem', letterSpacing: '0.04em' }}
              >
                Cybelator
              </p>
            </Link>
            <a
              href="https://cortisec.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] block transition-colors"
              style={{ color: '#5a6478', letterSpacing: '0.04em', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#8a96a8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6478')}
            >
              by Cortisec Technologies Pvt. Ltd. ↗
            </a>
            <p className="text-xs max-w-xs leading-relaxed" style={{ color: '#5a6478' }}>
              India's cybersecurity training, awareness, and victim assistance platform.
            </p>
            <p className="font-mono text-[9px]" style={{ color: '#5a6478', letterSpacing: '0.06em' }}>
              contact@cybelator.com
            </p>
          </div>

          {/* Column 2 — Platform */}
          <div>
            <p className="font-mono text-[9px] tracking-widest mb-4" style={{ color: '#5a6478' }}>
              PLATFORM
            </p>
            <div className="space-y-2.5">
              {PLATFORM_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="block font-mono text-[11px] transition-colors no-underline"
                  style={{ color: '#5a6478', letterSpacing: '0.06em' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#8a96a8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6478')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 — CortiSec */}
          <div>
            <p className="font-mono text-[9px] tracking-widest mb-4" style={{ color: '#5a6478' }}>
              CORTISEC
            </p>
            <div className="space-y-2.5">
              {CORTISEC_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-[11px] transition-colors no-underline"
                  style={{ color: '#5a6478', letterSpacing: '0.06em' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#8a96a8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6478')}
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Vendor partner row ──────────────────────────────────────── */}
        <div
          className="py-6 border-y flex flex-wrap items-center gap-x-8 gap-y-3"
          style={{ borderColor: BORDER }}
        >
          <p className="font-mono text-[9px] tracking-widest shrink-0" style={{ color: '#5a6478' }}>
            CERTIFICATION PLATFORMS
          </p>
          {PARTNERS.map((p) => (
            <span key={p} className="font-mono text-[10px] font-medium" style={{ color: '#8a96a8' }}>
              {p}
            </span>
          ))}
        </div>

        {/* ── Disclaimers ─────────────────────────────────────────────── */}
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
            store user data submitted through the assistance tool. Cybercrime guidance is informational only and
            does not constitute legal advice. CortiSec is not a law enforcement agency. For urgent financial
            cybercrime, call 1930 immediately.
          </p>
          <p className="text-xs leading-relaxed" style={{ color: '#5a6478' }}>
            <span className="font-mono font-bold tracking-wider" style={{ color: '#8a96a8' }}>CERTS: </span>
            Cisco, Check Point, Fortinet, CyberArk, and SolarWinds are registered trademarks of their respective
            owners. CortiSec is an independent training provider and is not affiliated with or endorsed by these
            vendors. Exam fees are indicative INR conversions of vendor USD pricing and may vary at time of booking.
          </p>

          {/* ── Bottom bar ─────────────────────────────────────────────── */}
          <div className="pt-4" style={{ borderTop: `1px solid ${BORDER}` }}>
            <p className="font-mono text-[9px] leading-relaxed" style={{ color: '#5a6478' }}>
              CIN: U70200UP2025PTC230788 &nbsp;·&nbsp; © 2026 Cybelator · A CortiSec Technologies initiative.
              All rights reserved. &nbsp;·&nbsp; We do not store user data submitted through the assistance tool.
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
