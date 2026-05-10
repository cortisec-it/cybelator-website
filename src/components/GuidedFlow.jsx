import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { incidentTypes, timingOptions, faqs } from '../data/assistanceFlows';
import ActionChecklist from './ActionChecklist';
import ResourceCards from './ResourceCards';

const STEP_LABELS = ['What happened?', 'When?', 'Your action plan', 'Get help', 'FAQs'];

const BLUE = '#3b82f6';
const BLUE_DARK = '#0c447c';
const BLUE_BG = '#e6f1fb';
const BORDER_LIGHT = '#e2e8f0';

function StepIndicator({ current, total }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <React.Fragment key={i}>
          <div
            className="flex items-center justify-center w-7 h-7 rounded-full font-mono text-xs font-bold transition-all"
            style={{
              background: i < current ? BLUE_DARK : i === current ? BLUE_BG : '#f1f5f9',
              color: i < current ? '#fff' : i === current ? BLUE_DARK : '#94a3b8',
              border: i === current ? `1px solid #b5d4f4` : 'none',
            }}
          >
            {i < current ? '✓' : i + 1}
          </div>
          {i < total - 1 && (
            <div className="flex-1 h-px" style={{ background: i < current ? BLUE_DARK : BORDER_LIGHT }} />
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
    <div className="rounded-2xl border p-6 md:p-8 bg-white" style={{ borderColor: BORDER_LIGHT }}>
      <StepIndicator current={step} total={TOTAL} />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
            <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#1a1a2e' }}>{STEP_LABELS[0]}</h3>
            <p className="text-sm mb-6" style={{ color: '#6b7280' }}>Select the type of incident you experienced.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {incidentTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setIncident(t.id); next(); }}
                  className="flex items-start gap-3 p-4 rounded-xl border text-left transition-all"
                  style={{
                    background: incident === t.id ? '#eff6ff' : '#fff',
                    borderColor: incident === t.id ? BLUE : BORDER_LIGHT,
                  }}
                  onMouseEnter={(e) => { if (incident !== t.id) { e.currentTarget.style.background = BLUE_BG; e.currentTarget.style.borderColor = '#b5d4f4'; } }}
                  onMouseLeave={(e) => { if (incident !== t.id) { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = BORDER_LIGHT; } }}
                >
                  <span className="text-xl shrink-0">{t.icon}</span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#1a1a2e' }}>{t.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>{t.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
            <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#1a1a2e' }}>{STEP_LABELS[1]}</h3>
            <p className="text-sm mb-6" style={{ color: '#6b7280' }}>When did this happen? Timing affects what actions are still possible.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {timingOptions.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setTiming(t.id); next(); }}
                  className="flex items-start gap-3 p-4 rounded-xl border text-left transition-all"
                  style={{
                    background: timing === t.id ? '#eff6ff' : '#fff',
                    borderColor: timing === t.id ? BLUE : BORDER_LIGHT,
                  }}
                  onMouseEnter={(e) => { if (timing !== t.id) { e.currentTarget.style.background = BLUE_BG; e.currentTarget.style.borderColor = '#b5d4f4'; } }}
                  onMouseLeave={(e) => { if (timing !== t.id) { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = BORDER_LIGHT; } }}
                >
                  <span className="text-lg shrink-0">{t.icon}</span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#1a1a2e' }}>{t.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>{t.note}</p>
                  </div>
                </button>
              ))}
            </div>
            <button onClick={prev} className="flex items-center gap-1.5 font-mono text-xs transition-colors" style={{ color: '#94a3b8' }}>
              <ChevronLeft className="w-4 h-4" /> BACK
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
            <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#1a1a2e' }}>{STEP_LABELS[2]}</h3>
            <p className="text-sm mb-6" style={{ color: '#6b7280' }}>Check off each action as you complete it.</p>
            <ActionChecklist incidentId={incident} />
            <div className="flex items-center justify-between mt-6">
              <button onClick={prev} className="flex items-center gap-1.5 font-mono text-xs transition-colors" style={{ color: '#94a3b8' }}>
                <ChevronLeft className="w-4 h-4" /> BACK
              </button>
              <button
                onClick={next}
                className="flex items-center gap-1.5 font-mono text-xs px-4 py-2.5 rounded-lg transition-all"
                style={{ background: BLUE_DARK, color: '#fff' }}
              >
                WHERE TO REPORT <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
            <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#1a1a2e' }}>{STEP_LABELS[3]}</h3>
            <p className="text-sm mb-6" style={{ color: '#6b7280' }}>Official channels and expert help available to you.</p>
            <ResourceCards />
            <div className="flex items-center justify-between mt-6">
              <button onClick={prev} className="flex items-center gap-1.5 font-mono text-xs transition-colors" style={{ color: '#94a3b8' }}>
                <ChevronLeft className="w-4 h-4" /> BACK
              </button>
              <button
                onClick={next}
                className="flex items-center gap-1.5 font-mono text-xs px-4 py-2.5 rounded-lg border transition-all"
                style={{ background: '#fff', color: '#64748b', borderColor: BORDER_LIGHT }}
              >
                FAQs <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
            <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#1a1a2e' }}>{STEP_LABELS[4]}</h3>
            <p className="text-sm mb-6" style={{ color: '#6b7280' }}>Common questions about cybercrime reporting in India.</p>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="rounded-xl border group bg-white" style={{ borderColor: BORDER_LIGHT }}>
                  <summary className="flex items-center gap-3 p-4 cursor-pointer list-none">
                    <span className="font-mono text-xs font-bold" style={{ color: BLUE_DARK }}>Q{i + 1}</span>
                    <span className="text-sm font-semibold flex-1" style={{ color: '#1a1a2e' }}>{faq.q}</span>
                    <ChevronRight className="w-4 h-4 shrink-0 group-open:rotate-90 transition-transform" style={{ color: '#94a3b8' }} />
                  </summary>
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
            <div className="flex items-center justify-between mt-6">
              <button onClick={prev} className="flex items-center gap-1.5 font-mono text-xs transition-colors" style={{ color: '#94a3b8' }}>
                <ChevronLeft className="w-4 h-4" /> BACK
              </button>
              <button
                onClick={reset}
                className="font-mono text-xs px-4 py-2.5 rounded-lg border transition-all"
                style={{ background: '#fff', color: '#64748b', borderColor: BORDER_LIGHT }}
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
