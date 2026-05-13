import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { certifications, levelColors, vendors } from '../data/certifications';

function CertCard({ cert }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all flex flex-col border border-white/10 hover:border-white/20"
      style={{ background: 'rgba(255,255,255,0.03)' }}
    >
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-mono text-xs font-bold"
            style={{ background: cert.vendorBg, color: cert.vendorColor }}
          >
            {cert.vendorCode}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-white leading-snug">{cert.title}</h3>
            <p className="text-xs text-slate-400 mt-0.5">{cert.shortTitle} &nbsp;·&nbsp; {cert.examCode}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <span
            className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}
          >
            {cert.level}
          </span>
          <span
            className="text-xs px-2.5 py-0.5 rounded-full font-mono text-slate-400"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            {cert.track}
          </span>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed">{cert.desc}</p>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <p className="font-mono text-[9px] text-slate-400 uppercase tracking-wider mb-1">Training</p>
            <p className="text-base font-bold text-white">{cert.trainingFee}</p>
          </div>
          <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <p className="font-mono text-[9px] text-slate-400 uppercase tracking-wider mb-1">Exam</p>
            <p className="text-base font-bold text-white">{cert.examFee}</p>
            <p className="text-[10px] text-slate-400 mt-0.5">{cert.examBody}</p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 font-mono text-[10px] font-medium transition-colors"
          style={{ color: cert.vendorColor, letterSpacing: '0.06em' }}
        >
          <FlaskConical className="w-3.5 h-3.5" />
          {expanded ? 'HIDE LABS' : 'VIEW LABS INCLUDED'}
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-1.5 overflow-hidden"
            >
              {cert.labs.map((lab, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: cert.vendorColor }} />
                  {lab}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
        <span className="font-mono text-[10px] text-slate-400">{cert.vendor}</span>
        <span className="text-xs text-slate-400 flex items-center gap-1">
          <Clock className="w-3 h-3" /> {cert.validity}
        </span>
      </div>
    </div>
  );
}

export default function CertSection() {
  const [activeVendor, setActiveVendor] = useState('All');

  const filtered = activeVendor === 'All'
    ? certifications
    : certifications.filter((c) => c.vendor === activeVendor);

  return (
    <section id="certifications" className="py-20 md:py-28 bg-[#060d18]">
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
            style={{ background: 'rgba(99,102,241,0.1)', color: '#818CF8', border: '1px solid rgba(99,102,241,0.3)', letterSpacing: '0.12em' }}
          >
            CERTIFICATION CATALOGUE
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            9 Certifications Across 5 Vendor Platforms
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Training fees cover instruction, lab access, and study materials. Exam fees are paid separately to the vendor at booking.
          </p>
        </motion.div>

        {/* Vendor filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {vendors.map((v) => (
            <button
              key={v}
              onClick={() => setActiveVendor(v)}
              className="px-4 py-2 rounded-xl font-mono text-xs transition-all"
              style={activeVendor === v
                ? { background: '#6366F1', color: '#fff' }
                : { background: 'rgba(255,255,255,0.04)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {v.toUpperCase()}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeVendor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((cert) => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl p-5"
          style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)' }}
        >
          <p className="text-sm text-amber-400">
            <strong>Pricing note:</strong> Training fees are CortiSec's program fees covering instruction, lab environment, and study materials.
            Exam fees are approximate INR conversions of vendor USD pricing and are paid directly to the exam body at booking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
