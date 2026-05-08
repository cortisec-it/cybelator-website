import React, { useState } from 'react';
import { MapPin, Flag, User, Bookmark, Info, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import SeverityBadge from '@/components/SeverityBadge';
import SourceAttribution from '@/components/SourceAttribution';
import LastUpdatedBadge from '@/components/LastUpdatedBadge';
import SourceToggle from '@/components/SourceToggle';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button } from '@/components/ui/button';
import { SOURCE_LINKS_VISIBLE } from '@/config/sourceLinksConfig';

function ThreatCard({ threat }) {
  const [bookmarks, setBookmarks] = useLocalStorage('cs_bookmarks', []);
  const [isExpanded, setIsExpanded] = useState(false);
  const isBookmarked = bookmarks.includes(threat.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarks(bookmarks.filter(id => id !== threat.id));
    } else {
      setBookmarks([...bookmarks, threat.id]);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group h-full flex flex-col">
      {/* Top Banner for High Impact */}
      {threat.isIndiaFocused && (
        <div className="bg-gradient-to-r from-orange-50 to-white border-b border-orange-100 px-4 md:px-6 py-2 flex items-center gap-2">
          <Flag className="w-3 h-3 text-orange-600 fill-orange-600" />
          <span className="text-xs font-bold text-orange-800 uppercase tracking-wider">High Impact in India</span>
        </div>
      )}

      <div className="p-5 md:p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <SeverityBadge level={threat.severity} />
              <span className="text-xs text-gray-500 flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full">
                <MapPin className="w-3 h-3" /> {threat.affectedRegions.join(', ')}
              </span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Verified
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] leading-tight group-hover:text-[#06B6D4] transition-colors">
              {threat.name}
            </h3>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleBookmark}
            className={isBookmarked ? "text-[#06B6D4]" : "text-gray-400 hover:text-[#06B6D4]"}
          >
            <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
          </Button>
        </div>

        <p className={`text-gray-600 mb-6 leading-relaxed flex-grow text-sm md:text-base ${isExpanded ? '' : 'line-clamp-3 md:line-clamp-none'}`}>
           {threat.description}
        </p>

        {/* Protection Steps - Always Visible & Prioritized */}
        <div className="bg-green-50 rounded-lg p-4 border border-green-100 mb-6">
            <h4 className="font-bold text-[#0F172A] mb-3 flex items-center gap-2 text-sm md:text-base">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              Protection Steps
            </h4>
            <ul className="space-y-2">
              {threat.protectionMeasures.map((step, idx) => (
                <li key={idx} className="text-sm text-green-800 flex gap-2 leading-relaxed">
                  <CheckCircle2 className="w-3 h-3 text-green-600 mt-1 shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-center mb-4">
            <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#06B6D4] hover:text-cyan-700 hover:bg-cyan-50 w-full flex items-center justify-center gap-1 font-medium"
            >
            {isExpanded ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
                <>Show Technical Details <ChevronDown className="w-4 h-4" /></>
            )}
            </Button>
        </div>

        {/* Collapsible Section: How it works & Details */}
        <div className={`${isExpanded ? 'block' : 'hidden md:block'} transition-all duration-300`}>
            {/* Detailed Sections Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* How it works */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 md:col-span-2 lg:col-span-1">
                <h4 className="font-bold text-[#0F172A] mb-3 flex items-center gap-2 text-sm">
                <Info className="w-4 h-4 text-blue-500" />
                How this attack works
                </h4>
                <ul className="space-y-2">
                {threat.howItWorks.map((step, idx) => (
                    <li key={idx} className="text-sm text-slate-700 flex gap-2 leading-relaxed">
                    <span className="font-bold text-blue-500 text-xs mt-0.5">{idx + 1}.</span>
                    <span>{step}</span>
                    </li>
                ))}
                </ul>
            </div>
            </div>

            {/* Footer Info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 mt-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg w-full md:w-auto">
                <User className="w-4 h-4 shrink-0" />
                <span className="font-medium shrink-0">Target:</span> 
                <span className="truncate">{threat.whoShouldWorry || threat.affectedUsers}</span>
            </div>
            
            <div className="text-right w-full md:w-auto flex flex-row md:flex-col justify-between md:justify-end items-center md:items-end">
                <LastUpdatedBadge date={threat.lastUpdated} />
                <div className="hidden md:block">
                     <SourceAttribution 
                        source={threat.source} 
                        url={threat.sourceUrl}
                        type="official"
                    />
                </div>
            </div>
            </div>
            
            <div className="mt-4">
                <SourceToggle source={threat.source} url={threat.sourceUrl} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default ThreatCard;