import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Shield, HeartHandshake } from 'lucide-react';

const CARDS = [
  {
    accent: '#06B6D4',
    Icon: GraduationCap,
    iconColor: '#00D4FF',
    title: 'Cyber Academy',
    body: 'Job-ready cybersecurity training for freshers and career switchers. Hands-on labs, enterprise tools, industry certifications.',
    tags: ['20 Weeks', 'Guwahati', '9 Certifications'],
    tagBg: 'rgba(0, 212, 255, 0.10)',
    tagColor: '#00D4FF',
    cta: 'Explore Academy →',
    ctaBg: '#00D4FF',
    ctaColor: '#0A0F1E',
    to: '/academy',
  },
  {
    accent: '#3B82F6',
    Icon: Shield,
    iconColor: '#60a5fa',
    title: 'Cyber Awareness',
    body: 'Daily scam alerts, threat warnings, and protection guides. Stay informed and stay safe online — for everyone, completely free.',
    tags: ['Daily Alerts', 'Free', 'India-focused'],
    tagBg: 'rgba(59, 130, 246, 0.10)',
    tagColor: '#60a5fa',
    cta: 'Stay Protected →',
    ctaBg: '#2563EB',
    ctaColor: '#fff',
    to: '/awareness',
  },
  {
    accent: '#10B981',
    Icon: HeartHandshake,
    iconColor: '#34d399',
    title: 'Cyber Assistance',
    body: 'Been scammed or hacked? Free expert guidance to report the incident, recover your accounts, and protect yourself.',
    tags: ['Free Help', 'Report Incident', 'Recovery Support'],
    tagBg: 'rgba(16, 185, 129, 0.10)',
    tagColor: '#34d399',
    cta: 'Get Help Now →',
    ctaBg: '#059669',
    ctaColor: '#fff',
    to: '/assistance',
  },
];

export default function LandingPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ background: '#050A14' }}
    >
      {/* ── Top section: logo + tagline ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        {/* Logo */}
        <p
          className="font-display font-bold text-white"
          style={{ fontSize: '2.4rem', letterSpacing: '0.04em' }}
        >
          Cybelator
        </p>
        <p className="font-mono text-xs mt-1" style={{ color: '#5a6478', letterSpacing: '0.06em' }}>
          by CortiSec Technologies
        </p>

        {/* Tagline */}
        <h1
          className="font-display font-bold text-white mt-8 mb-3"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', letterSpacing: '-0.01em' }}
        >
          Learn.&nbsp; Stay Safe.&nbsp;{' '}
          <span style={{ color: '#00D4FF' }}>Get Help.</span>
        </h1>

        {/* Subtext */}
        <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          A CortiSec Technologies initiative — cybersecurity training, public awareness, and
          victim support in one platform.
        </p>
      </motion.div>

      {/* ── Three option cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {CARDS.map(({ accent, Icon, iconColor, title, body, tags, tagBg, tagColor, cta, ctaBg, ctaColor, to }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: `0 0 32px ${accent}28` }}
          >
            <Link
              to={to}
              className="block rounded-2xl p-8 border border-slate-700 transition-all duration-200 no-underline"
              style={{
                background: '#0A0F1E',
                borderTop: `4px solid ${accent}`,
                display: 'flex',
                flexDirection: 'column',
                minHeight: '360px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = accent)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#334155')}
            >
              {/* Icon */}
              <Icon className="w-12 h-12 mb-5 shrink-0" style={{ color: iconColor }} />

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>

              {/* Body */}
              <p className="text-slate-400 text-sm mb-5 leading-relaxed flex-1">{body}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs rounded-full px-2 py-1 font-medium"
                    style={{ background: tagBg, color: tagColor }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div
                className="w-full py-3 rounded-xl text-sm font-bold text-center"
                style={{ background: ctaBg, color: ctaColor }}
              >
                {cta}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ── Bottom text ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-slate-500 text-xs text-center mt-12"
      >
        A{' '}
        <a
          href="https://cortisec.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-slate-300"
          style={{ color: '#5a6478', textDecoration: 'none' }}
        >
          CortiSec Technologies
        </a>
        {' '}initiative
      </motion.p>
    </div>
  );
}
