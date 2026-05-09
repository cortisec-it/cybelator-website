import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Shield, Brain, ExternalLink } from 'lucide-react';
import { threats, categories, authorities } from '../data/awarenessData';

const categoryIcons = {
  'Scam Alert': AlertTriangle,
  'Safety Tip': Shield,
  'Threat Intel': Brain,
};

const severityStyle = {
  Critical: { bg: '#FEF2F2', border: '#fca5a5', badge: '#DC2626' },
  High: { bg: '#FFFBEB', border: '#fcd34d', badge: '#D97706' },
  Medium: { bg: '#EFF6FF', border: '#93c5fd', badge: '#2563EB' },
};

export default function AwarenessSection() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? threats : threats.filter((t) => t.category === active);

  return (
    <section id="awareness" className="py-20 md:py-28 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ background: '#FEF2F2', color: '#DC2626', border: '1px solid #fca5a5' }}
          >
            Cyber Awareness
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Current Threats & Safety Advisories
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Verified alerts from CERT-In, RBI, and MHA. Updated regularly to keep you informed and protected.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => {
            const Icon = cat !== 'All' ? categoryIcons[cat] : null;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                style={active === cat
                  ? { background: '#DC2626', color: '#fff' }
                  : { background: '#fff', color: '#64748b', border: '1px solid #e2e8f0' }}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Threat cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
          >
            {filtered.map((threat, i) => {
              const sv = severityStyle[threat.severity] || severityStyle.Medium;
              const Icon = categoryIcons[threat.category] || Shield;
              return (
                <motion.div
                  key={threat.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (i % 3) * 0.07 }}
                  className="bg-white rounded-2xl overflow-hidden border flex flex-col"
                  style={{ borderColor: sv.border }}
                >
                  {/* Colored top strip */}
                  <div className="h-1" style={{ background: threat.color }} />
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{ background: threat.bg, color: threat.color }}
                      >
                        <Icon className="w-3 h-3" /> {threat.category}
                      </span>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ background: sv.badge }}
                      >
                        {threat.severity}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 leading-snug">{threat.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1">{threat.desc}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="text-xs font-mono text-slate-400">{threat.source}</span>
                      <span className="text-xs text-slate-400">{threat.date}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Authority bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-white border border-slate-200 p-6"
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 text-center">
            Verified Sources & Reporting Authorities
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {authorities.map((auth, i) => (
              <span
                key={i}
                className="text-sm font-semibold px-4 py-2 rounded-xl bg-slate-50 text-slate-600 border border-slate-200"
              >
                {auth}
              </span>
            ))}
          </div>
          <div className="mt-5 text-center">
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: '#DC2626' }}
            >
              Report Cyber Crime at cybercrime.gov.in <ExternalLink className="w-4 h-4" />
            </a>
            <span className="mx-3 text-slate-300">·</span>
            <span className="text-sm font-bold text-slate-700">Call 1930 for financial fraud</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
