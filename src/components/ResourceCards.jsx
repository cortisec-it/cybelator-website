import React from 'react';
import { Phone, Globe, Shield, AlertCircle, MessageCircle } from 'lucide-react';

const RESOURCES = [
  {
    icon: Phone,
    label: 'NATIONAL HELPLINE',
    title: '1930',
    desc: 'National Cybercrime Helpline — call immediately after any financial cybercrime. Available 24×7. Speed of reporting is critical for fund freeze.',
    href: 'tel:1930',
    accent: '#f87171',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.3)',
    prominent: true,
  },
  {
    icon: Globe,
    label: 'ONLINE PORTAL',
    title: 'cybercrime.gov.in',
    desc: 'National Cybercrime Reporting Portal — file a formal complaint online. Required for FIR, track complaint status, and escalation.',
    href: 'https://cybercrime.gov.in',
    accent: '#60a5fa',
    bg: 'rgba(59,130,246,0.06)',
    border: 'rgba(59,130,246,0.2)',
    prominent: false,
  },
  {
    icon: Shield,
    label: 'NATIONAL AGENCY',
    title: 'CERT-In',
    desc: 'Indian Computer Emergency Response Team — report phishing, website defacement, malware, and infrastructure attacks.',
    href: 'https://www.cert-in.org.in',
    accent: '#0D9488',
    bg: 'rgba(13,148,136,0.06)',
    border: 'rgba(13,148,136,0.25)',
    prominent: false,
  },
  {
    icon: AlertCircle,
    label: 'DECRYPTION TOOLS',
    title: 'No More Ransom',
    desc: 'Free ransomware decryption tools for over 150 ransomware families. Check here before paying any ransom.',
    href: 'https://www.nomoreransom.org',
    accent: '#d97706',
    bg: 'rgba(217,119,6,0.06)',
    border: 'rgba(217,119,6,0.25)',
    prominent: false,
  },
  {
    icon: MessageCircle,
    label: 'CORTISEC VOLUNTEER',
    title: 'Talk to a Cortisec volunteer',
    desc: 'WhatsApp a CortiSec security professional for hands-on guidance. +91 72890 54028 · Available for complex cases involving business systems or advanced threats.',
    href: 'https://wa.me/917289054028?text=Hi%2C%20I%20need%20help%20understanding%20a%20cybercrime%20that%20happened%20to%20me.',
    accent: '#25d366',
    bg: 'rgba(37,211,102,0.06)',
    border: 'rgba(37,211,102,0.2)',
    prominent: false,
  },
];

export default function ResourceCards() {
  return (
    <div className="space-y-3">
      <p className="font-mono text-[10px] tracking-widest mb-4" style={{ color: '#94a3b8' }}>WHERE TO GET HELP</p>
      {RESOURCES.map((r) => {
        const Icon = r.icon;
        const Tag = r.isAnchor ? 'button' : 'a';
        const props = r.isAnchor
          ? { onClick: () => document.querySelector(r.href)?.scrollIntoView({ behavior: 'smooth' }) }
          : { href: r.href, target: r.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' };

        return (
          <Tag
            key={r.title}
            {...props}
            className="w-full flex items-start gap-3 p-4 rounded-xl border text-left transition-all group"
            style={{ background: r.bg, borderColor: r.border }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: r.accent + '22' }}>
              <Icon className="w-4.5 h-4.5" style={{ color: r.accent }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <span className="font-mono text-[9px] tracking-widest font-bold" style={{ color: r.accent }}>{r.label}</span>
                {r.prominent && (
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded font-bold" style={{ background: r.accent, color: '#fff' }}>CALL NOW</span>
                )}
              </div>
              {r.prominent
                ? <p className="font-display text-3xl font-bold leading-none mb-0.5" style={{ color: r.accent }}>{r.title}</p>
                : <p className="text-sm font-bold mb-0.5" style={{ color: '#e2e8f0' }}>{r.title}</p>}
              <p className="text-xs leading-relaxed" style={{ color: '#94a3b8' }}>{r.desc}</p>
            </div>
            <span className="font-mono text-[10px] shrink-0 mt-1 transition-all group-hover:translate-x-0.5" style={{ color: r.accent }}>→</span>
          </Tag>
        );
      })}
    </div>
  );
}
