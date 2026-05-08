import React, { useState } from 'react';
import { AlertCircle, Shield, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import SeverityBadge from '@/components/SeverityBadge';
import SourceAttribution from '@/components/SourceAttribution';
import SourceToggle from '@/components/SourceToggle';
import { Button } from '@/components/ui/button';
import { SOURCE_LINKS_VISIBLE } from '@/config/sourceLinksConfig';

function NewsCard({ news }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-2xl transition-all h-full flex flex-col">
      {/* TL;DR Section - Always Visible */}
      {news.tldr && (
        <div className="bg-slate-50 border-l-4 border-[#06B6D4] p-3 mb-4 rounded-r-lg">
          <span className="font-bold text-[#0F172A] text-[10px] md:text-xs uppercase tracking-wider block mb-1">TL;DR</span>
          <p className="text-sm text-gray-700 font-medium leading-relaxed">{news.tldr}</p>
        </div>
      )}

      {/* Header Info - Always Visible */}
      <div className="flex flex-wrap items-start justify-between mb-4 gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
            <SeverityBadge level={news.severity} />
            <span className="text-xs font-semibold text-gray-400 uppercase">{news.type}</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Verified
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-2 leading-tight">{news.headline}</h3>
          
          {/* Collapsible on Mobile */}
          <div className={`${isExpanded ? 'block' : 'hidden md:block'} transition-all duration-300`}>
             <SourceAttribution 
               source={news.source} 
               date={news.date} 
               url={news.sourceUrl}
               type={news.source === 'CERT-In' ? 'cert' : 'news'} 
             />
          </div>
        </div>
      </div>

      {/* Brief Summary - Always Visible */}
      <p className={`text-gray-700 mb-4 flex-grow text-sm md:text-base leading-relaxed ${isExpanded ? '' : 'line-clamp-3 md:line-clamp-none'}`}>
        {news.summary}
      </p>

      {/* Priority Sections - "Who this affects" & "Protection" - Optimized for Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Who This Affects - Always Visible but compact on mobile */}
        <div className="bg-orange-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <AlertCircle className="w-4 h-4 text-orange-600" />
            <span className="font-semibold text-orange-900 text-sm">Affected Users</span>
          </div>
          <p className="text-sm text-orange-800 font-medium">{news.affectedUsers}</p>
        </div>

        {/* Impact - Collapsible on Mobile */}
        <div className={`bg-red-50 rounded-lg p-3 ${isExpanded ? 'block' : 'hidden md:block'}`}>
          <div className="flex items-center gap-2 mb-1">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span className="font-semibold text-red-900 text-sm">Potential Impact</span>
          </div>
          <p className="text-sm text-red-800">{news.impact}</p>
        </div>
      </div>

      {/* Protection Steps - Always Visible */}
      <div className="bg-green-50 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-5 h-5 text-green-600" />
          <h4 className="font-semibold text-green-900 text-sm md:text-base">Protection Steps</h4>
        </div>
        <ul className="space-y-2">
          {news.protectionSteps.map((step, index) => (
            <li key={index} className="text-sm text-green-800 flex items-start gap-2 leading-relaxed">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              {step}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden text-center mt-2 mb-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#06B6D4] hover:text-cyan-700 hover:bg-cyan-50 w-full flex items-center justify-center gap-1 font-medium"
        >
          {isExpanded ? (
            <>Show Less <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>Show Full Details <ChevronDown className="w-4 h-4" /></>
          )}
        </Button>
      </div>

      {/* Bottom Footer - Collapsible on Mobile */}
      <div className={`mt-auto border-t border-gray-100 pt-2 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        <SourceToggle source={news.source} url={news.sourceUrl} />
      </div>
    </div>
  );
}

export default NewsCard;