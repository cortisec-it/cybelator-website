import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

function VictimSupportCard({ title, description, icon: Icon, actionLabel, onAction, variant = 'default' }) {
  const isUrgent = variant === 'urgent';
  
  return (
    <div className={`h-full flex flex-col rounded-xl border transition-all duration-300 overflow-hidden ${
      isUrgent 
        ? 'bg-red-50/50 border-red-200 hover:shadow-red-100 hover:shadow-lg' 
        : 'bg-white border-gray-200 hover:shadow-lg hover:border-blue-200'
    }`}>
      <div className="p-8 flex-1 flex flex-col items-start">
        <div className={`p-4 rounded-xl mb-6 inline-flex ${
          isUrgent ? 'bg-red-100 text-red-600' : 'bg-blue-50 text-blue-600'
        }`}>
          <Icon className="w-8 h-8" />
        </div>
        
        <h3 className={`text-2xl font-bold mb-3 ${
          isUrgent ? 'text-red-900' : 'text-[#0F172A]'
        }`}>
          {title}
        </h3>
        
        <p className={`text-base leading-relaxed mb-8 flex-1 ${
          isUrgent ? 'text-red-800/80' : 'text-slate-600'
        }`}>
          {description}
        </p>

        <Button 
          onClick={onAction}
          variant={isUrgent ? "destructive" : "default"}
          size="lg"
          className={`w-full font-semibold transition-transform active:scale-[0.98] ${
            !isUrgent ? "bg-[#06B6D4] hover:bg-cyan-700 text-white shadow-md hover:shadow-lg" : "shadow-md hover:shadow-lg"
          }`}
        >
          {actionLabel} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default VictimSupportCard;