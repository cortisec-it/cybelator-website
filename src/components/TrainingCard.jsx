import React from 'react';
import { Clock, BarChart, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function TrainingCard({ title, description, level, duration, targetAudience, onCtaClick, ctaLabel = "Enquire Now" }) {
  const getLevelColor = (lvl) => {
    switch (lvl.toLowerCase()) {
      case 'beginner': return 'text-green-600 bg-green-50';
      case 'intermediate': return 'text-blue-600 bg-blue-50';
      case 'advanced': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all h-full flex flex-col">
      <div className="flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(level)}`}>
            {level}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-3 h-3 mr-1" />
            {duration}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-[#0F172A] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Target Audience</p>
          <p className="text-sm text-[#0F172A] bg-slate-50 p-2 rounded-lg">{targetAudience}</p>
        </div>
      </div>

      <Button 
        onClick={onCtaClick}
        className="w-full bg-[#0F172A] hover:bg-slate-800 text-white flex items-center justify-center gap-2 group"
      >
        {ctaLabel}
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}

export default TrainingCard;