import React from 'react';
import { ExternalLink, ShieldCheck, Newspaper, AlertOctagon } from 'lucide-react';
import { SOURCE_LINKS_VISIBLE } from '@/config/sourceLinksConfig';

function SourceAttribution({ source, date, url, type = 'news' }) {

  const getIcon = () => {
    switch (type.toLowerCase()) {
      case 'cert':
      case 'official':
        return <ShieldCheck className="w-3 h-3" />;
      case 'vendor':
        return <AlertOctagon className="w-3 h-3" />;
      case 'news':
      default:
        return <Newspaper className="w-3 h-3" />;
    }
  };

  const getBadgeStyle = () => {
    switch (type.toLowerCase()) {
      case 'cert':
      case 'official':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'vendor':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const shouldShowLink = SOURCE_LINKS_VISIBLE && url;

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mt-2">
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border ${getBadgeStyle()}`}>
        {getIcon()}
        <span className="font-medium">{source}</span>
      </span>
      {date && (
        <>
          <span>•</span>
          <span>{date}</span>
        </>
      )}
      {shouldShowLink && (
        <>
          <span>•</span>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-brand-accent hover:text-cyan-700 hover:underline transition-colors"
          >
            Read Original <ExternalLink className="w-3 h-3" />
          </a>
        </>
      )}
    </div>
  );
}

export default SourceAttribution;