import React from 'react';
import { CheckCircle2 } from 'lucide-react';

function DailyActionPanel({ actions }) {
  // Simple rotation based on day of month to simulate dynamic content
  const day = new Date().getDate();
  const rotatedActions = [
    ...actions.slice(day % actions.length),
    ...actions.slice(0, day % actions.length)
  ].slice(0, 3);

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-6">
      <h3 className="text-xl font-bold text-brand-dark mb-4">What You Should Do Today</h3>
      <div className="space-y-3">
        {rotatedActions.map((action, idx) => (
          <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-green-100">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
            <span className="text-sm text-gray-700 font-medium">{action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyActionPanel;