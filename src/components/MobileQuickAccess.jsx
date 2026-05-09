import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Bell, ShieldCheck, GraduationCap, Globe } from 'lucide-react';

const quickLinks = [
  { icon: AlertTriangle, label: 'Current Scams & Fraud', path: '/current-threats', color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100' },
  { icon: Bell, label: "Today's Cyber Warnings", path: '/news-alerts', color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: ShieldCheck, label: 'Protection Guides', path: '/guides', color: 'text-teal-500', bg: 'bg-teal-50', border: 'border-teal-100' },
  /*{ icon: GraduationCap, label: 'Training', path: '/training', color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-100' },*/
  { icon: Globe, label: 'Attack Maps', path: '/threat-maps', color: 'text-cyan-500', bg: 'bg-cyan-50', border: 'border-cyan-100' },
];

function MobileQuickAccess() {
  return (
    <div className="md:hidden pt-8 pb-12 px-4 relative z-20">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {quickLinks.map((item, index) => (
          <Link 
            key={index} 
            to={item.path}
            className={`flex flex-col items-center justify-center p-4 rounded-xl border shadow-sm active:scale-95 transition-transform ${item.bg} ${item.border} ${index === 4 ? 'col-span-2' : ''}`}
          >
            <item.icon className={`w-6 h-6 mb-2 ${item.color}`} />
            <span className="text-xs font-bold text-slate-700 text-center leading-tight">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileQuickAccess;