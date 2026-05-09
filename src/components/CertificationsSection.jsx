import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Clock, ExternalLink } from 'lucide-react';
import { certifications, levelColors, vendors } from '../data/certifications';

const levelPill = (levelColor) => {
  const c = levelColors[levelColor] || { bg: '#f1f5f9', text: '#64748b' };
  return (
    <span
      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
      style={{ background: c.bg, color: c.text }}
    />
  );
};

function CertCard({ cert }) {
  const [expanded, setExpanded] = useState(false);
  const lc = levelColors[cert.levelColor] || { bg: '#f1f5f9', text: '#64748b' };

  return (
    <motion.div
      layout
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-200 hover:border-slate-300 flex flex-col"
    >
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Top row */}
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold font-mono"
            style={{ background: cert.vendorBg, color: cert.vendorColor }}
          >
            {cert.vendorCode}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-slate-800 leading-snug">{cert.title}</h3>
            <p className="text-xs text-slate-400 mt-0.5">{cert.shortTitle}</p>
          </div>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-500">{cert.examCode}</span>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: lc.bg, color: lc.text }}>
            {cert.level}
          </span>
        </div>

        {/* Desc */}
        <p className="text-xs text-slate-500 leading-relaxed">{cert.desc}</p>

        {/* Pricing */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-xs text-slate-400 font-mono uppercase tracking-wide mb-1">Training fee</p>
            <p className="text-base font-bold text-slate-800">{cert.trainingFee}</p>
            <p className="text-xs text-slate-400 mt-0.5">{cert.trainingEmi}</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-xs text-slate-400 font-mono uppercase tracking-wide mb-1">Exam fee</p>
            <p className="text-base font-bold text-slate-800">{cert.examFee}</p>
            <p className="text-xs text-slate-400 mt-0.5">{cert.examBody}</p>
          </div>
        </div>

        {/* Labs toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
          style={{ color: cert.vendorColor }}
        >
          <FlaskConical className="w-3.5 h-3.5" />
          {expanded ? 'Hide labs' : 'View labs included'}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-1 overflow-hidden"
            >
              {cert.labs.map((lab, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: cert.vendorColor }} />
                  {lab}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-400">{cert.vendor}</span>
        <span className="text-xs text-slate-400 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> {cert.validity}
        </span>
      </div>
    </motion.div>
  );
}

export default function CertificationsSection() {
  const [activeVendor, setActiveVendor] = useState('All');

  const filtered = activeVendor === 'All' ? certifications : certifications.filter((c) => c.vendor === activeVendor);

  return (
    <section id="certifications" className="py-20 md:py-28 bg-white">
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
            style={{ background: '#EEF2FF', color: '#6366F1', border: '1px solid #c7d2fe' }}
          >
            Certification Catalogue
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            10 Vendor Certifications Across 5 Platforms
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Training fees cover instruction, lab access, and study materials. Exam fees are paid separately to the respective vendor at booking.
          </p>
        </motion.div>

        {/* Vendor filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {vendors.map((v) => (
            <button
              key={v}
              onClick={() => setActiveVendor(v)}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={activeVendor === v
                ? { background: '#6366F1', color: '#fff' }
                : { background: '#f1f5f9', color: '#64748b' }}
            >
              {v}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVendor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((cert) => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 rounded-2xl p-5 bg-amber-50 border border-amber-200"
        >
          <p className="text-sm text-amber-800">
            <strong>Pricing note:</strong> Training fees are Cortisec's program fees covering instruction, lab environment, and study materials. Exam fees are approximate INR conversions of vendor USD pricing and are paid directly to the exam body at booking. EMI available via Razorpay — no-cost 3-month installments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
