import React, { useEffect, useCallback, useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Activity, Info, ShieldCheck, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Lazy loading doesn't make sense inside the modal for the modal itself, but we can lazy load heavy content if needed.
// However, task 4 requested lazy loading ThreatMapModal component itself in the parent usage, which we should do in ThreatMapsPage.
// Here we will optimize the iframe.

function ThreatMapModal({ isOpen, onClose, initialIndex = 0, maps = [] }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Update currentIndex when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % maps.length);
  }, [maps.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + maps.length) % maps.length);
  }, [maps.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowRight':
          handleNext();
          break;
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'Escape':
          if (isFullscreen) setIsFullscreen(false);
          else onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose, isFullscreen]);

  if (!isOpen) return null;

  const currentMap = maps[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/95 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className={`relative bg-[#0F172A] shadow-2xl flex flex-col transition-all duration-300 ${
            isFullscreen ? 'w-full h-full rounded-none' : 'w-full max-w-[95vw] h-[90vh] rounded-2xl border border-slate-700'
          }`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 bg-slate-900/90 backdrop-blur border-b border-slate-800 shrink-0 z-10">
             <div className="flex items-center gap-3">
                <div className="hidden sm:block">
                  <h2 className="text-lg font-bold text-white">{currentMap.name}</h2>
                  <p className="text-xs text-[#06B6D4]">{currentMap.provider}</p>
                </div>
                <div className="sm:hidden">
                   <h2 className="text-sm font-bold text-white line-clamp-1">{currentMap.name}</h2>
                </div>
             </div>
             
             <div className="flex items-center gap-2">
               <Button
                 variant="ghost"
                 size="icon"
                 onClick={() => setIsFullscreen(!isFullscreen)}
                 className="text-slate-400 hover:text-white hover:bg-slate-800 hidden sm:flex"
                 title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
               >
                 {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
               </Button>
               <button
                onClick={onClose}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors"
               >
                 <X className="w-5 h-5" />
               </button>
             </div>
          </div>

          {/* Map Content Area (Iframe) */}
          <div className="flex-1 bg-black relative w-full h-full overflow-hidden">
             {/* Loading State Placeholder could go here */}
             <iframe
               src={currentMap.url}
               title={currentMap.name}
               className="w-full h-full border-0"
               allowFullScreen
               loading="lazy"
               sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
               style={{ backgroundColor: 'black' }}
             />

             {/* Navigation Overlay Buttons */}
             <button
               onClick={handlePrev}
               className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-all border border-white/10 shadow-lg group"
               aria-label="Previous map"
             >
               <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
             </button>
            
             <button
               onClick={handleNext}
               className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-all border border-white/10 shadow-lg group"
               aria-label="Next map"
             >
               <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
             </button>
          </div>

          {/* Bottom Info Panel - Only visible if NOT fullscreen on desktop, or always on mobile if needed (adjust as per pref) */}
          {!isFullscreen && (
            <div className="bg-white p-4 shrink-0 border-t border-slate-200 overflow-y-auto max-h-[30vh]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                 <div className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-xl">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                       <Activity className="w-4 h-4" />
                    </div>
                    <div>
                       <p className="font-bold text-slate-900 text-xs uppercase mb-1">Key Takeaway</p>
                       <p className="text-slate-700 leading-snug">{currentMap.keyTakeaway}</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-3 p-3 bg-orange-50/50 rounded-xl">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600 shrink-0">
                       <Info className="w-4 h-4" />
                    </div>
                    <div>
                       <p className="font-bold text-slate-900 text-xs uppercase mb-1">Regional Impact</p>
                       <p className="text-slate-700 leading-snug">{currentMap.regionImpact}</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-3 p-3 bg-green-50/50 rounded-xl">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600 shrink-0">
                       <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                       <p className="font-bold text-slate-900 text-xs uppercase mb-1">Action Required</p>
                       <p className="text-slate-700 leading-snug">{currentMap.safetyAction}</p>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ThreatMapModal;