import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Users, ShieldAlert, ChevronDown, ChevronUp, Phone, ExternalLink } from 'lucide-react';
import { assistanceFlows, faqItems } from '../data/assistanceData';

const iconMap = { CreditCard, Users, ShieldAlert };

const flowColors = {
  financial: '#DC2626',
  social: '#6366F1',
  identity: '#D97706',
};

export default function AssistanceSection() {
  const [activeFlow, setActiveFlow] = useState('financial');
  const [openFaq, setOpenFaq] = useState(null);

  const currentFlow = assistanceFlows.find((f) => f.id === activeFlow);

  return (
    <section id="assistance" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Cyber Assistance
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Victim Support & Reporting Guide
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            If you've been targeted by cyber fraud, follow these steps immediately. Time is critical — especially for financial fraud.
          </p>
        </motion.div>

        {/* Emergency banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 justify-between"
          style={{ background: '#0B1222', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 shrink-0" style={{ color: '#14B8A6' }} />
            <div>
              <p className="text-sm font-bold text-white">Financial Fraud? Call Immediately</p>
              <p className="text-xs text-slate-400">National Cyber Crime Helpline — 24/7</p>
            </div>
          </div>
          <a
            href="tel:1930"
            className="flex items-center gap-2 font-black text-white text-2xl tracking-tight hover:opacity-80 transition-opacity"
            style={{ color: '#14B8A6' }}
          >
            1930
          </a>
        </motion.div>

        {/* Flow selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {assistanceFlows.map((flow) => {
            const Icon = iconMap[flow.icon];
            const isActive = activeFlow === flow.id;
            return (
              <button
                key={flow.id}
                onClick={() => setActiveFlow(flow.id)}
                className="flex items-start gap-3 p-5 rounded-2xl border-2 text-left transition-all"
                style={{
                  borderColor: isActive ? flow.color : '#e2e8f0',
                  background: isActive ? flow.bg : '#fff',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: flow.color + '15', color: flow.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{flow.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">{flow.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Step-by-step guide */}
        <AnimatePresence mode="wait">
          {currentFlow && (
            <motion.div
              key={activeFlow}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12"
            >
              {currentFlow.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm text-white"
                    style={{ background: flowColors[activeFlow] }}
                  >
                    {step.step}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-1">{step.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.detail}</p>
                  </div>
                </motion.div>
              ))}

              {/* Helplines */}
              <div
                className="md:col-span-2 rounded-2xl p-5 flex flex-wrap gap-4 items-center"
                style={{ background: flowColors[activeFlow] + '0D', border: `1px solid ${flowColors[activeFlow]}30` }}
              >
                <span className="text-sm font-semibold text-slate-700">Quick helplines:</span>
                {currentFlow.helplines.map((h, i) => (
                  <span key={i} className="flex items-center gap-2 text-sm font-bold" style={{ color: flowColors[activeFlow] }}>
                    {h.label}: <span className="font-black">{h.value}</span>
                  </span>
                ))}
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1.5 text-sm font-semibold underline"
                  style={{ color: flowColors[activeFlow] }}
                >
                  File Online <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-semibold text-slate-800">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
