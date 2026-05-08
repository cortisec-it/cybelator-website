import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

function GuideCard({ guide, onDownload }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all">
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className={`bg-gradient-to-br ${guide.gradient} p-3 rounded-lg`}>
              <guide.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-brand-dark mb-2">{guide.title}</h3>
              <p className="text-gray-600">{guide.overview}</p>
            </div>
          </div>
          <button className="text-brand-dark hover:text-brand-accent transition-colors">
            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-6">
              {/* Steps */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-brand-dark mb-4 text-lg">Step-by-Step Instructions</h4>
                <div className="space-y-4">
                  {guide.steps.map((step, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-accent text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-brand-dark mb-1">{step.title}</h5>
                        <p className="text-sm text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Common Mistakes to Avoid
                </h4>
                <ul className="space-y-2">
                  {guide.commonMistakes.map((mistake, index) => (
                    <li key={index} className="text-sm text-red-800 flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best Practices */}
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Best Practices
                </h4>
                <ul className="space-y-2">
                  {guide.bestPractices.map((practice, index) => (
                    <li key={index} className="text-sm text-green-800 flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Button */}
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  onDownload();
                }}
                className="w-full bg-brand-accent hover:bg-cyan-600 text-white flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Checklist
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GuideCard;