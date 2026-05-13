import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Shield, HeartHandshake } from 'lucide-react';

const CARDS = [
  {
    Icon: GraduationCap,
    title: 'Cyber Academy',
    body: 'Job-ready cybersecurity training for freshers and career switchers. Hands-on labs, enterprise tools, industry certifications.',
    tags: ['20 Weeks', 'Guwahati', '9 Certifications'],
    cta: 'Explore Academy →',
    to: '/academy',
    topAccent: '#22d3ee',
    hoverBorderColor: 'rgba(6,182,212,0.3)',
    hoverBoxShadow: '0 20px 60px rgba(6,182,212,0.15)',
    iconBg: 'bg-cyan-400/10',
    iconColor: 'text-cyan-400',
    tagClass: 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20',
    btnClass: 'bg-cyan-500 hover:bg-cyan-400 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]',
  },
  {
    Icon: Shield,
    title: 'Cyber Awareness',
    body: 'Daily scam alerts, threat warnings, and protection guides. Stay informed and stay safe online — for everyone, completely free.',
    tags: ['Daily Alerts', 'Free', 'India-focused'],
    cta: 'Stay Protected →',
    to: '/awareness',
    topAccent: '#3b82f6',
    hoverBorderColor: 'rgba(59,130,246,0.3)',
    hoverBoxShadow: '0 20px 60px rgba(59,130,246,0.15)',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    tagClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    btnClass: 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]',
  },
  {
    Icon: HeartHandshake,
    title: 'Cyber Assistance',
    body: 'Been scammed or hacked? Free expert guidance to report the incident, recover your accounts, and protect yourself.',
    tags: ['Free Help', 'Report', 'Recovery'],
    cta: 'Get Help Now →',
    to: '/assistance',
    topAccent: '#22c55e',
    hoverBorderColor: 'rgba(16,185,129,0.3)',
    hoverBoxShadow: '0 20px 60px rgba(16,185,129,0.15)',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
    tagClass: 'bg-green-500/10 text-green-400 border border-green-500/20',
    btnClass: 'bg-green-600 hover:bg-green-500 text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]',
  },
];

const DELAYS = [0.2, 0.35, 0.5];

export default function LandingPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{
        backgroundImage: [
          'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          'radial-gradient(ellipse at top center, #0d1f35 0%, #060d18 60%, #000000 100%)',
        ].join(', '),
        backgroundSize: '32px 32px, auto',
        backgroundColor: '#000000',
      }}
    >
      {/* ── Top section: logo + tagline ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        {/* Logo */}
        <p className="font-display font-black tracking-tight text-white text-5xl md:text-6xl">
          Cybelator
        </p>
        <p className="font-mono text-xs mt-2" style={{ color: '#5a6478', letterSpacing: '0.06em' }}>
          by{' '}
          <span style={{ color: 'rgba(6,182,212,0.8)', textShadow: '0 0 20px rgba(6,182,212,0.4)' }}>
            CortiSec Technologies
          </span>
        </p>

        {/* Tagline */}
        <h1 className="font-display font-black tracking-tight leading-tight text-white text-5xl md:text-7xl mt-6 mb-4">
          Learn.&nbsp; Stay Safe.&nbsp;{' '}
          <span className="text-green-400">Get Help.</span>
        </h1>

        {/* Subtext */}
        <p className="text-slate-500 text-base max-w-lg mx-auto leading-relaxed text-center">
          A CortiSec Technologies initiative — cybersecurity training, public awareness, and
          victim support in one platform.
        </p>
      </motion.div>

      {/* ── Three option cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mt-16 mb-8 px-6">
        {CARDS.map(({ Icon, title, body, tags, cta, to, topAccent, hoverBorderColor, hoverBoxShadow, iconBg, iconColor, tagClass, btnClass }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, delay: DELAYS[i] }}
          >
            <Link
              to={to}
              className="rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 no-underline"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: `2px solid ${topAccent}`,
                height: '440px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = `1px solid ${hoverBorderColor}`;
                e.currentTarget.style.borderTop = `2px solid ${topAccent}`;
                e.currentTarget.style.boxShadow = hoverBoxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
                e.currentTarget.style.borderTop = `2px solid ${topAccent}`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon with background pill */}
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                <Icon className={`${iconColor} w-6 h-6`} />
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-white mb-3 mt-3">{title}</h2>

              {/* Body */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{body}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span key={tag} className={`text-xs font-medium px-3 py-1 rounded-full ${tagClass}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className={`w-full py-3.5 rounded-xl text-base font-semibold text-center transition-all duration-200 mt-auto ${btnClass}`}>
                {cta}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ── Helper text below cards ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Link
          to="/awareness"
          className="text-slate-600 text-sm text-center mt-8 hover:text-slate-400 transition block"
        >
          Not sure where to start? Cyber Awareness is for everyone →
        </Link>
      </motion.div>

      {/* ── Bottom text ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-slate-700 text-xs text-center mt-12 mb-8"
      >
        A{' '}
        <a
          href="https://cortisec.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-slate-500"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          CortiSec Technologies
        </a>
        {' '}initiative
      </motion.p>
    </div>
  );
}
