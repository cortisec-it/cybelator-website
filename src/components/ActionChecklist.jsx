import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { checklists } from '../data/assistanceFlows';

const BLUE_DARK = '#0c447c';
const BLUE_BG = '#e6f1fb';
const BORDER = '#e2e8f0';

export default function ActionChecklist({ incidentId }) {
  const data = checklists[incidentId];
  const [checked, setChecked] = useState({});

  if (!data) return null;

  const toggle = (n) => setChecked((prev) => ({ ...prev, [n]: !prev[n] }));
  const doneCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="space-y-4">
      {data.urgencyNote && (
        <div className="flex items-start gap-2.5 p-4 rounded-xl" style={{ background: BLUE_BG, border: `0.5px solid #b5d4f4` }}>
          <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: BLUE_DARK }} />
          <p className="text-sm leading-relaxed" style={{ color: BLUE_DARK }}>{data.urgencyNote}</p>
        </div>
      )}

      <div className="flex items-center justify-between mb-1">
        <p className="font-mono text-[10px] tracking-widest" style={{ color: '#94a3b8' }}>ACTION CHECKLIST</p>
        <span className="font-mono text-[10px]" style={{ color: doneCount === data.steps.length ? '#0D9488' : '#94a3b8' }}>
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
                background: done ? '#f0fdf4' : '#fff',
                borderColor: done ? '#86efac' : BORDER,
              }}
            >
              <div className="shrink-0 mt-0.5">
                {done
                  ? <CheckCircle2 className="w-5 h-5" style={{ color: '#16a34a' }} />
                  : <Circle className="w-5 h-5" style={{ color: '#cbd5e1' }} />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full font-mono text-[10px] font-bold shrink-0"
                    style={{ background: done ? '#dcfce7' : BLUE_BG, color: done ? '#16a34a' : BLUE_DARK }}
                  >
                    {step.n}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: '#374151' }}>{step.title}</span>
                </div>
                <p className="text-xs leading-relaxed pl-7" style={{ color: '#6b7280' }}>{step.detail}</p>
              </div>
            </button>
          );
        })}
      </div>

      {doneCount === data.steps.length && (
        <div className="p-4 rounded-xl text-center" style={{ background: '#f0fdf4', border: '1px solid #86efac' }}>
          <p className="text-sm font-semibold" style={{ color: '#16a34a' }}>
            All steps completed. Scroll down to contact our team for further assistance.
          </p>
        </div>
      )}
    </div>
  );
}
