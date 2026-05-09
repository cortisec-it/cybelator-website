import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, FlaskConical, Clock, CheckCircle2 } from 'lucide-react';
import { modules, phases } from '../data/modules';

const phaseColors = {
  1: '#0D9488',
  2: '#6366F1',
  3: '#FF6B35',
  4: '#14B8A6',
};

function ModuleCard({ mod, isOpen, onToggle }) {
  return (
    <div
      className="border rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        borderColor: isOpen ? phaseColors[mod.phase] + '50' : '#e2e8f0',
        background: isOpen ? '#fafffe' : '#fff',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 text-left"
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 font-mono text-sm font-bold"
          style={{ background: phaseColors[mod.phase] + '18', color: phaseColors[mod.phase] }}
        >
          {String(mod.id).padStart(2, '0')}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-base font-bold text-slate-800">{mod.title}</span>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: phaseColors[mod.phase] + '15', color: phaseColors[mod.phase] }}
            >
              {mod.weeks}
            </span>
          </div>
        </div>
        <div className="shrink-0 text-slate-400 mt-0.5">
          {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Topics</p>
                <ul className="space-y-1.5">
                  {mod.topics.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: phaseColors[mod.phase] }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{ background: phaseColors[mod.phase] + '0D', border: `1px solid ${phaseColors[mod.phase]}25` }}
              >
                <FlaskConical className="w-4 h-4 mt-0.5 shrink-0" style={{ color: phaseColors[mod.phase] }} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: phaseColors[mod.phase] }}>Lab Included</p>
                  <p className="text-sm text-slate-600">{mod.lab}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TrainingSection() {
  const [openId, setOpenId] = useState(null);
  const [activePhase, setActivePhase] = useState(0);

  const filtered = activePhase === 0 ? modules : modules.filter((m) => m.phase === activePhase);

  return (
    <section id="training" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ background: '#F0FDFA', color: '#0D9488', border: '1px solid #99f6e4' }}
          >
            Training Institute
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            20-Week Enterprise Cybersecurity Program
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Industry-led curriculum built by practicing security engineers. Real labs, real tools, real-world scenarios.
          </p>
        </motion.div>

        {/* Phase tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button
            onClick={() => setActivePhase(0)}
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
            style={activePhase === 0 ? { background: '#0D9488', color: '#fff' } : { background: '#f1f5f9', color: '#64748b' }}
          >
            All Modules
          </button>
          {phases.map((ph) => (
            <button
              key={ph.id}
              onClick={() => setActivePhase(ph.id)}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={activePhase === ph.id
                ? { background: ph.color, color: '#fff' }
                : { background: '#f1f5f9', color: '#64748b' }}
            >
              {ph.label}: {ph.name}
            </button>
          ))}
        </div>

        {/* Phase timeline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {phases.map((ph, i) => (
            <motion.div
              key={ph.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="rounded-xl p-4 border"
              style={{ borderColor: ph.color + '30', background: ph.color + '08' }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: ph.color }} />
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ph.color }}>{ph.label}</span>
              </div>
              <p className="text-sm font-semibold text-slate-800">{ph.name}</p>
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3" /> {ph.weeks}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Module accordion */}
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {filtered.map((mod) => (
                <ModuleCard
                  key={mod.id}
                  mod={mod}
                  isOpen={openId === mod.id}
                  onToggle={() => setOpenId(openId === mod.id ? null : mod.id)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
