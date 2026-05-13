import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { checklists } from '../data/assistanceFlows';

export default function ActionChecklist({ incidentId }) {
  const data = checklists[incidentId];
  const [checked, setChecked] = useState({});

  if (!data) return null;

  const toggle = (n) => setChecked((prev) => ({ ...prev, [n]: !prev[n] }));
  const doneCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="space-y-4">
      {data.urgencyNote && (
        <div className="flex items-start gap-2.5 p-4 rounded-xl" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}>
          <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#60a5fa' }} />
          <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{data.urgencyNote}</p>
        </div>
      )}

      <div className="flex items-center justify-between mb-1">
        <p className="font-mono text-[10px] tracking-widest" style={{ color: '#94a3b8' }}>ACTION CHECKLIST</p>
        <span className="font-mono text-[10px]" style={{ color: doneCount === data.steps.length ? '#34d399' : '#94a3b8' }}>
          {doneCount}/{data.steps.length} DONE
        </span>
      </div>

      <div className="space-y-2.5">
        {data.steps.map((step) => {
          const done = !!checked[step.n];
          return (
            <button
              key={step.n}
              onClick={() => toggle(step.n)}
              className="w-full flex items-start gap-3 p-4 rounded-xl border text-left transition-all"
              style={{
                background: done ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.03)',
                borderColor: done ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)',
              }}
            >
              <div className="shrink-0 mt-0.5">
                {done
                  ? <CheckCircle2 className="w-5 h-5" style={{ color: '#4ade80' }} />
                  : <Circle className="w-5 h-5" style={{ color: '#4b5563' }} />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full font-mono text-[10px] font-bold shrink-0"
                    style={{
                      background: done ? 'rgba(16,185,129,0.15)' : 'rgba(52,211,153,0.1)',
                      color: done ? '#4ade80' : '#34d399',
                    }}
                  >
                    {step.n}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: '#e2e8f0' }}>{step.title}</span>
                </div>
                <p className="text-xs leading-relaxed pl-7" style={{ color: '#94a3b8' }}>{step.detail}</p>
              </div>
            </button>
          );
        })}
      </div>

      {doneCount === data.steps.length && (
        <div className="p-4 rounded-xl text-center" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.3)' }}>
          <p className="text-sm font-semibold" style={{ color: '#4ade80' }}>
            All steps completed. Scroll down to contact our team for further assistance.
          </p>
        </div>
      )}
    </div>
  );
}
