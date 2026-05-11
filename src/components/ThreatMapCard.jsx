import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ThreatMapCard({ map }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-brand-dark mb-2">{map.name}</h3>
          <p className="text-gray-600">{map.provider}</p>
        </div>
        <div className={`w-3 h-3 rounded-full ${map.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
      </div>

      <p className="text-gray-700 mb-6">{map.description}</p>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <h4 className="font-semibold text-brand-dark mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {map.features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="text-brand-accent">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button 
        asChild
        className="w-full bg-brand-accent hover:bg-cyan-600 text-white"
      >
        <a href={map.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
          <ExternalLink className="w-4 h-4" />
          View Live Map
        </a>
      </Button>
    </div>
  );
}

export default ThreatMapCard;