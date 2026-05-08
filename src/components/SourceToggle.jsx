import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { SOURCE_LINKS_VISIBLE } from '@/config/sourceLinksConfig';

function SourceToggle({ source, url }) {
  const [showSource, setShowSource] = useState(false);

  // If source links are visible globally, we show attribution + link directly.
  // If not, we still show the attribution text, but no link.
  
  // Logic: 
  // If global config is TRUE: Render the box with the link.
  // If global config is FALSE: Render the box WITHOUT the link (static text), or just hidden?
  // Use case: Without links, the "Toggle" functionality (Show Source) is less useful if it just shows "Source: CERT-In" which is already known.
  // However, NewsCard often truncates details. 
  // Let's assume we show the static source attribution always if links are hidden, 
  // or provide a simple non-link display.

  // To be safe and consistent:
  // If visible: Button to toggle (or always visible depending on parent usage).
  // The original component had a toggle button.
  
  const hasLink = SOURCE_LINKS_VISIBLE && url;

  return (
    <div className="mt-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowSource(!showSource)}
        className="text-slate-500 hover:text-[#06B6D4] h-auto p-0 text-xs font-medium flex items-center gap-1 transition-colors"
      >
        {showSource ? (
          <>
            <ChevronUp className="w-3 h-3" /> Hide Source Info
          </>
        ) : (
          <>
            <ChevronDown className="w-3 h-3" /> Show Source Info
          </>
        )}
      </Button>

      <AnimatePresence>
        {showSource && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-2 p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-600 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <LinkIcon className="w-3 h-3 text-slate-400" />
                <span>Source: <span className="font-semibold text-slate-800">{source}</span></span>
              </div>
              {hasLink && (
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-[#06B6D4] hover:text-cyan-700 font-medium whitespace-nowrap"
                >
                  Visit Link <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SourceToggle;