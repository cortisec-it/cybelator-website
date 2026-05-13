import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, AlertCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { awarenessTopics, severityOrder } from '../data/awarenessTopics';

const SEVERITY_META = {
  Critical: {
    color: '#f87171',
    bg: 'rgba(239,68,68,0.1)',
    border: 'rgba(239,68,68,0.2)',
    icon: AlertTriangle,
    label: 'CRITICAL',
  },
  High: {
    color: '#fb923c',
    bg: 'rgba(249,115,22,0.1)',
    border: 'rgba(249,115,22,0.2)',
    icon: AlertCircle,
    label: 'HIGH',
  },
  Medium: {
    color: '#60a5fa',
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.2)',
    icon: Info,
    label: 'MEDIUM',
  },
};

const FILTERS = ['All', 'Critical', 'High', 'Medium'];

function TopicCard({ topic }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const meta = SEVERITY_META[topic.severity];
  const Icon = meta.icon;

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${open ? meta.border : hovered ? 'rgba(59,130,246,0.3)' : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered && !open ? '0 8px 32px rgba(59,130,246,0.08)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-start gap-3 p-5 text-left group">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
          style={{ background: meta.bg }}
        >
          <Icon className="w-4 h-4" style={{ color: meta.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-0.5">
            <span
              className="font-mono text-[9px] font-bold px-2 py-0.5 rounded tracking-widest border"
              style={{ background: meta.bg, color: meta.color, borderColor: meta.border }}
            >
              {meta.label}
            </span>
          </div>
          <p className="text-sm font-semibold text-white mt-1">{topic.title}</p>
          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{topic.summary}</p>
        </div>
        <div className="shrink-0 text-slate-500 mt-1 group-hover:text-blue-400 transition-colors">
          {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4">
              <ul className="space-y-2">
                {topic.body.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: meta.color }} />
                    {point}
                  </li>
                ))}
              </ul>
              <div
                className="rounded-xl p-4 flex items-start gap-2.5"
                style={{ background: meta.bg, border: `1px solid ${meta.border}` }}
              >
                <span
                  className="font-mono text-[9px] font-bold px-2 py-1 rounded shrink-0"
                  style={{ background: meta.color, color: '#000', letterSpacing: '0.06em' }}
                >
                  TIP
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">{topic.tip}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AwarenessSection() {
  const [filter, setFilter] = useState('All');

  const visible = filter === 'All'
    ? [...awarenessTopics].sort((a, b) => severityOrder.indexOf(a.severity) - severityOrder.indexOf(b.severity))
    : awarenessTopics.filter((t) => t.severity === filter);

  return (
    <section id="awareness" className="py-20 md:py-28 bg-[#060d18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-1.5 font-mono text-[10px] px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(59,130,246,0.1)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.3)', letterSpacing: '0.12em' }}
          >
            CYBER AWARENESS
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Free Security Guides for Everyone
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Plain-language guides on the threats that actually affect people in India. No jargon. No login required.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FILTERS.map((f) => {
            const meta = f === 'All' ? null : SEVERITY_META[f];
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all ${
                  active
                    ? 'font-semibold text-white'
                    : 'border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
                }`}
                style={active ? { background: meta ? meta.color : '#3b82f6' } : {}}
              >
                {f.toUpperCase()}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            {visible.map((topic, i) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <TopicCard topic={topic} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
