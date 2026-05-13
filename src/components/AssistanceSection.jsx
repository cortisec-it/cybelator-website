import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Phone } from 'lucide-react';
import GuidedFlow from './GuidedFlow';

export default function AssistanceSection() {
  return (
    <section id="assistance" className="py-20 md:py-28" style={{ background: '#060d18' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span
            className="inline-flex items-center gap-1.5 font-mono text-[10px] px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', border: '1px solid rgba(16,185,129,0.3)', letterSpacing: '0.12em' }}
          >
            CYBER ASSISTANCE
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Were You a Cybercrime Victim?
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#8a96a8' }}>
            Free step-by-step guidance on what to do right now — which authorities to contact, what evidence to preserve, and how to protect yourself from further damage.
          </p>
        </motion.div>

        {/* Mandatory disclaimer — first thing, before any interaction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 max-w-2xl mx-auto mb-8 p-4 rounded-xl"
          style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)' }}
        >
          <Shield className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#60a5fa' }} />
          <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
            Cortisec Technologies provides this as a voluntary public service. We are not a law enforcement agency.
            We do not store your information. This tool gives guidance only — not legal advice.
          </p>
        </motion.div>

        {/* 1930 emergency banner */}
        <motion.a
          href="tel:1930"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 max-w-2xl mx-auto mb-10 p-5 rounded-2xl no-underline transition-all"
          style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(239,68,68,0.12)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(239,68,68,0.08)')}
        >
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(239,68,68,0.15)' }}>
            <Phone className="w-5 h-5" style={{ color: '#f87171' }} />
          </div>
          <div>
            <p className="font-display text-4xl font-bold leading-none" style={{ color: '#f87171' }}>1930</p>
            <p className="font-mono text-[10px] tracking-widest mt-1" style={{ color: '#fca5a5', letterSpacing: '0.1em' }}>
              NATIONAL CYBERCRIME HELPLINE · 24×7 · CALL NOW IF MONEY WAS LOST
            </p>
          </div>
        </motion.a>

        {/* Urgent panel — above incident selection */}
        <div
          className="flex flex-col gap-1 max-w-2xl mx-auto mb-6 p-4 rounded-xl"
          style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}
        >
          <p className="text-red-400 font-bold text-sm">💸 Lost money in the last 24 hours?</p>
          <p className="text-red-300 text-sm mt-1">Call 1930 immediately — every hour matters.</p>
        </div>

        {/* Guided flow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <GuidedFlow />
        </motion.div>
      </div>
    </section>
  );
}
