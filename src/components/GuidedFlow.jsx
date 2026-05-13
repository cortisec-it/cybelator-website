import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { incidentTypes, timingOptions, faqs } from '../data/assistanceFlows';
import ActionChecklist from './ActionChecklist';
import ResourceCards from './ResourceCards';

const STEP_LABELS = ['What happened?', 'When?', 'Your action plan', 'Get help', 'FAQs'];

const GREEN = '#34d399';
const BORDER_DARK = 'rgba(255,255,255,0.08)';

function StepIndicator({ current, total }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <React.Fragment key={i}>
          <div
            className="flex items-center justify-center w-7 h-7 rounded-full font-mono text-xs font-bold transition-all"
            style={{
              background: i < current ? GREEN : i === current ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.05)',
              color: i < current ? '#000' : i === current ? GREEN : '#5a6478',
              border: i === current ? '1px solid rgba(52,211,153,0.35)' : 'none',
            }}
          >
            {i < current ? '✓' : i + 1}
          </div>
          {i < total - 1 && (
            <div className="flex-1 h-px" style={{ background: i < current ? GREEN : BORDER_DARK }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function GuidedFlow() {
  const [step, setStep] = useState(0);
  const [incident, setIncident] = useState(null);
  const [timing, setTiming] = useState(null);

  const TOTAL = 5;

  const next = () => setStep((s) => Math.min(s + 1, TOTAL - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const reset = () => { setStep(0); setIncident(null); setTiming(null); };

  return (
    <div
      className="rounded-2xl border p-6 md:p-8"
      style={{ background: 'rgba(255,255,255,0.03)', borderColor: BORDER_DARK }}
    >
      <StepIndicator current={step} total={TOTAL} />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
            <h3 className="font-display text-xl font-bold mb-1 text-white">{STEP_LABELS[0]}</h3>
            <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>Select the type of incident you experienced.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {incidentTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setIncident(t.id); next(); }}
                  className="flex items-start gap-3 p-4 rounded-xl border text-left transition-all"
                  style={{
                    background: incident === t.id ? 'rgba(52,211,153,0.08)' : 'rgba(255,255,255,0.03)',
                    borderColor: incident === t.id ? 'rgba(52,211,153,0.4)' : BORDER_DARK,
                  }}
                  onMouseEnter={(e) => { if (incident !== t.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(52,211,153,0.2)'; } }}
                  onMouseLeave={(e) => { if (incident !== t.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = BORDER_DARK; } }}
                >
                  <span className="text-xl shrink-0">{t.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#94a3b8' }}>{t.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
            <h3 className="font-display text-xl font-bold mb-1 text-white">{STEP_LABELS[1]}</h3>
            <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>When did this happen? Timing affects what actions are still possible.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {timingOptions.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setTiming(t.id); next(); }}
                  className="flex items-start gap-3 p-4 rounded-xl border text-left transition-all"
                  style={{
                    background: timing === t.id ? 'rgba(52,211,153,0.08)' : 'rgba(255,255,255,0.03)',
                    borderColor: timing === t.id ? 'rgba(52,211,153,0.4)' : BORDER_DARK,
                  }}
                  onMouseEnter={(e) => { if (timing !== t.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(52,211,153,0.2)'; } }}
                  onMouseLeave={(e) => { if (timing !== t.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = BORDER_DARK; } }}
                >
                  <span className="text-lg shrink-0">{t.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#94a3b8' }}>{t.note}</p>
                  </div>
                </button>
              ))}
            </div>
            <button onClick={prev} className="flex items-center gap-1.5 font-mono text-xs transition-colors" style={{ color: '#5a6478' }}>
              <ChevronLeft className="w-4 h-4" /> BACK
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
            <h3 className="font-display text-xl font-bold mb-1 text-white">{STEP_LABELS[2]}</h3>
            <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>Check off each action as you complete it.</p>
            <ActionChecklist incidentId={incident} />
            <div className="flex items-center justify-between mt-6">
              <button onClick={prev} className="flex items-center gap-1.5 font-mono text-xs transition-colors" style={{ color: '#5a6478' }}>
                <ChevronLeft className="w-4 h-4" /> BACK
              </button>
              <button
                onClick={next}
                className="flex items-center gap-1.5 font-mono text-xs px-4 py-2.5 rounded-lg transition-all"
                style={{ background: GREEN, color: '#000' }}
              >
                WHERE TO REPORT <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
            <h3 className="font-display text-xl font-bold mb-1 text-white">{STEP_LABELS[3]}</h3>
            <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>Official channels and expert help available to you.</p>
            <ResourceCards />
            <div className="flex items-center justify-between mt-6">
              <button onClick={prev} className="flex items-center gap-1.5 font-mono text-xs transition-colors" style={{ color: '#5a6478' }}>
                <ChevronLeft className="w-4 h-4" /> BACK
              </button>
              <button
                onClick={next}
                className="flex items-center gap-1.5 font-mono text-xs px-4 py-2.5 rounded-lg border transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8', borderColor: 'rgba(255,255,255,0.15)' }}
              >
                FAQs <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
            <h3 className="font-display text-xl font-bold mb-1 text-white">{STEP_LABELS[4]}</h3>
            <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>Common questions about cybercrime reporting in India.</p>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-xl border group"
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: BORDER_DARK }}
                >
                  <summary className="flex items-center gap-3 p-4 cursor-pointer list-none">
                    <span className="font-mono text-xs font-bold" style={{ color: GREEN }}>Q{i + 1}</span>
                    <span className="text-sm font-semibold flex-1" style={{ color: '#e2e8f0' }}>{faq.q}</span>
                    <ChevronRight className="w-4 h-4 shrink-0 group-open:rotate-90 transition-transform" style={{ color: '#5a6478' }} />
                  </summary>
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
            <div className="flex items-center justify-between mt-6">
              <button onClick={prev} className="flex items-center gap-1.5 font-mono text-xs transition-colors" style={{ color: '#5a6478' }}>
                <ChevronLeft className="w-4 h-4" /> BACK
              </button>
              <button
                onClick={reset}
                className="font-mono text-xs px-4 py-2.5 rounded-lg border transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8', borderColor: 'rgba(255,255,255,0.15)' }}
              >
                START OVER
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
