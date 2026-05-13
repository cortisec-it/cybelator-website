import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, FlaskConical, Clock, CheckCircle2, ChevronsDown, ChevronsUp } from 'lucide-react';
import { modules, phases } from '../data/modules';

const phaseColors = {
  1: '#0D9488',
  2: '#6366F1',
  3: '#FF6B35',
  4: '#14B8A6',
};

const INITIAL_SHOW = 4;

function ModuleCard({ mod, isOpen, onToggle }) {
  const color = phaseColors[mod.phase];
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        background: isOpen ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${isOpen ? color + '45' : 'rgba(255,255,255,0.08)'}`,
      }}
    >
      <button onClick={onToggle} className="w-full flex items-start gap-4 p-5 text-left">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 font-mono text-sm font-bold"
          style={{ background: color + '15', color }}
        >
          {String(mod.id).padStart(2, '0')}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-base font-bold text-white">{mod.title}</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: color + '12', color }}>
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
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color }} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{ background: color + '0C', border: `1px solid ${color}22` }}
              >
                <FlaskConical className="w-4 h-4 mt-0.5 shrink-0" style={{ color }} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color }}>Lab Included</p>
                  <p className="text-sm text-slate-400">{mod.lab}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CurriculumSection() {
  const [openId, setOpenId] = useState(null);
  const [activePhase, setActivePhase] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const allFiltered = activePhase === 0 ? modules : modules.filter((m) => m.phase === activePhase);
  const filtered = showAll ? allFiltered : allFiltered.slice(0, INITIAL_SHOW);

  return (
    <section id="training" className="py-20 md:py-28 bg-[#060d18]">
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
            className="inline-flex items-center gap-1.5 font-mono text-[10px] px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.3)', letterSpacing: '0.12em' }}
          >
            CYBELATOR ACADEMY
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            20-Week Job-Ready Cybersecurity Program
          </h2>
          <p className="text-sm text-slate-400 text-center mt-2 mb-6">
            For freshers, B.Tech / MCA / BCA / B.Sc. IT graduates & career switchers — zero cybersecurity experience required.
          </p>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Industry-led curriculum built by practicing cybersecurity engineers — hands-on training on live enterprise tools, real operational workflows, and industry-grade lab environments.
          </p>
        </motion.div>

        {/* Phase timeline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {phases.map((ph, i) => (
            <motion.div
              key={ph.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="rounded-xl p-4 border"
              style={{ borderColor: ph.color + '28', background: ph.color + '07' }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: ph.color }} />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wide" style={{ color: ph.color }}>{ph.label}</span>
              </div>
              <p className="text-sm font-semibold text-white">{ph.name}</p>
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3" /> {ph.weeks}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Phase filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => { setActivePhase(0); setShowAll(false); setOpenId(null); }}
            className="px-4 py-2 rounded-xl font-mono text-xs transition-all"
            style={activePhase === 0
              ? { background: '#0D9488', color: '#fff' }
              : { background: 'rgba(255,255,255,0.05)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            ALL MODULES
          </button>
          {phases.map((ph) => (
            <button
              key={ph.id}
              onClick={() => { setActivePhase(ph.id); setShowAll(false); setOpenId(null); }}
              className="px-4 py-2 rounded-xl font-mono text-xs transition-all"
              style={activePhase === ph.id
                ? { background: ph.color, color: '#fff' }
                : { background: 'rgba(255,255,255,0.05)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {ph.label.toUpperCase()}: {ph.name.toUpperCase()}
            </button>
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
              transition={{ duration: 0.18 }}
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

          {allFiltered.length > INITIAL_SHOW && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center pt-2">
              <button
                onClick={() => { setShowAll(!showAll); setOpenId(null); }}
                className="inline-flex items-center gap-2 font-mono text-xs px-6 py-3 rounded-xl border transition-all hover:bg-white/5"
                style={{ borderColor: '#0D9488', color: '#0D9488', letterSpacing: '0.06em' }}
              >
                {showAll
                  ? <><ChevronsUp className="w-4 h-4" /> SHOW FEWER</>
                  : <><ChevronsDown className="w-4 h-4" /> SHOW ALL {allFiltered.length} MODULES</>}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
