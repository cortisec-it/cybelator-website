import React from 'react';

const severityConfig = {
  Critical: { 
    color: 'bg-red-100 text-red-800 border-red-200', 
    dotColor: 'bg-red-600'
  },
  High: { 
    color: 'bg-orange-100 text-orange-800 border-orange-200', 
    dotColor: 'bg-orange-600' 
  },
  Medium: { 
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200', 
    dotColor: 'bg-yellow-600' 
  },
  Low: { 
    color: 'bg-green-100 text-green-800 border-green-200', 
    dotColor: 'bg-green-600' 
  }
};

function SeverityBadge({ level, showDot = true }) {
  const config = severityConfig[level] || severityConfig.Medium;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${config.color}`}>
      {showDot && <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`}></span>}
      {level}
    </span>
  );
}

export default SeverityBadge;