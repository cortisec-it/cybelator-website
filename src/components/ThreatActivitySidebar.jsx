import React from 'react';
import { Activity, Shield, Info } from 'lucide-react';

function ActivityGauge({ level }) {
  const getWidth = () => {
    switch (level) {
      case 'critical': return 'w-full bg-red-500';
      case 'high': return 'w-3/4 bg-orange-500';
      case 'medium': return 'w-1/2 bg-yellow-500';
      case 'low': return 'w-1/4 bg-green-500';
      default: return 'w-1/2 bg-gray-300';
    }
  };

  return (
    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mt-1">
      <div className={`h-full rounded-full transition-all duration-500 ${getWidth()}`} />
    </div>
  );
}

function ThreatActivitySidebar({ activityLevels, recentIncidents, tips }) {
  return (
    <div className="space-y-6">
      {/* Activity Overview */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-[#06B6D4]" />
          Threat Activity
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Critical Threats</span>
              <span className="text-xs font-bold text-red-600">High</span>
            </div>
            <ActivityGauge level="high" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Fraud Attempts</span>
              <span className="text-xs font-bold text-orange-600">Moderate</span>
            </div>
            <ActivityGauge level="medium" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">System Attacks</span>
              <span className="text-xs font-bold text-green-600">Low</span>
            </div>
            <ActivityGauge level="low" />
          </div>
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#06B6D4]" />
          Recent Incidents
        </h3>
        <div className="space-y-4">
          {recentIncidents.map((incident, idx) => (
            <div key={idx} className="relative pl-4 border-l-2 border-[#06B6D4]">
              <span className="text-xs text-gray-500 block">{incident.date}</span>
              <h4 className="text-sm font-semibold text-slate-800">{incident.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-gradient-to-br from-[#06B6D4] to-cyan-700 rounded-xl p-6 text-white">
         <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
          <Info className="w-5 h-5" />
          Quick Tips
        </h3>
        <div className="text-sm opacity-90">
           <p className="italic">"{tips[0]}"</p>
        </div>
      </div>
    </div>
  );
}

export default ThreatActivitySidebar;