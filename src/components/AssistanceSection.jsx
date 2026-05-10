import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Phone } from 'lucide-react';
import GuidedFlow from './GuidedFlow';

export default function AssistanceSection() {
  return (
    <section id="assistance" className="py-20 md:py-28" style={{ background: '#f8f9fa' }}>
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
            style={{ background: '#e6f1fb', color: '#0c447c', border: '1px solid #b5d4f4', letterSpacing: '0.12em' }}
          >
            CYBER ASSISTANCE
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: '#1a1a2e' }}>
            Were You a Cybercrime Victim?
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#6b7280' }}>
            Free step-by-step guidance on what to do right now — which authorities to contact, what evidence to preserve, and how to protect yourself from further damage.
          </p>
        </motion.div>

        {/* Mandatory disclaimer — first thing, before any interaction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 max-w-2xl mx-auto mb-8 p-4 rounded-xl"
          style={{ background: '#e6f1fb', border: '0.5px solid #b5d4f4' }}
        >
          <Shield className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#0c447c' }} />
          <p className="text-sm leading-relaxed" style={{ color: '#0c447c' }}>
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
          style={{ background: '#e6f1fb', border: '1px solid #b5d4f4' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#d0e8f8')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#e6f1fb')}
        >
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#0c447c18' }}>
            <Phone className="w-5 h-5" style={{ color: '#0c447c' }} />
          </div>
          <div>
            <p className="font-display text-4xl font-bold leading-none" style={{ color: '#0c447c' }}>1930</p>
            <p className="font-mono text-[10px] tracking-widest mt-1" style={{ color: '#3b82f6', letterSpacing: '0.1em' }}>
              NATIONAL CYBERCRIME HELPLINE · 24×7 · CALL NOW IF MONEY WAS LOST
            </p>
          </div>
        </motion.a>

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
