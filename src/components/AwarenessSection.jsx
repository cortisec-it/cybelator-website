import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, AlertCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { awarenessTopics, severityOrder } from '../data/awarenessTopics';

const SEVERITY_META = {
  Critical: { color: '#DC2626', bg: '#FEF2F2', border: '#fecaca', icon: AlertTriangle, label: 'CRITICAL' },
  High:     { color: '#D97706', bg: '#FFFBEB', border: '#fde68a', icon: AlertCircle, label: 'HIGH' },
  Medium:   { color: '#2563EB', bg: '#EFF6FF', border: '#bfdbfe', icon: Info, label: 'MEDIUM' },
};

const FILTERS = ['All', 'Critical', 'High', 'Medium'];

function TopicCard({ topic }) {
  const [open, setOpen] = useState(false);
  const meta = SEVERITY_META[topic.severity];
  const Icon = meta.icon;

  return (
    <div
      className="bg-white rounded-2xl border overflow-hidden transition-all"
      style={{ borderColor: open ? meta.border : '#e2e8f0' }}
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-start gap-3 p-5 text-left">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: meta.bg }}>
          <Icon className="w-4 h-4" style={{ color: meta.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-0.5">
            <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded tracking-widest" style={{ background: meta.bg, color: meta.color }}>
              {meta.label}
            </span>
          </div>
          <p className="text-sm font-bold text-slate-800">{topic.title}</p>
          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{topic.summary}</p>
        </div>
        <div className="shrink-0 text-slate-400 mt-1">
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
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: meta.color }} />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl p-4 flex items-start gap-2.5" style={{ background: meta.bg, border: `1px solid ${meta.border}` }}>
                <span className="font-mono text-[9px] font-bold px-2 py-1 rounded shrink-0" style={{ background: meta.color, color: '#fff', letterSpacing: '0.06em' }}>
                  TIP
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">{topic.tip}</p>
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
    <section id="awareness" className="py-20 md:py-28 bg-white">
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
            style={{ background: '#FEF2F2', color: '#DC2626', border: '1px solid #fecaca', letterSpacing: '0.12em' }}
          >
            CYBER AWARENESS
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Free Security Guides for Everyone
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Plain-language guides on the threats that actually affect people in India. No jargon. No login required.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FILTERS.map((f) => {
            const meta = f === 'All' ? null : SEVERITY_META[f];
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-4 py-2 rounded-xl font-mono text-xs transition-all"
                style={active
                  ? { background: meta ? meta.color : '#0f172a', color: '#fff' }
                  : { background: '#f1f5f9', color: '#64748b' }}
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
