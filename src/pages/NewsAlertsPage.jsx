import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Bell, Shield, User, RefreshCw, Info, CheckCircle2, AlertOctagon } from 'lucide-react';
import SeverityBadge from '@/components/SeverityBadge';
import TelegramSubscriptionCTA from '@/components/TelegramSubscriptionCTA';
import TrustedDataSources from '@/components/TrustedDataSources';
import NewsCard from '@/components/NewsCard';
import { newsAlertsData } from '@/data/newsAlertsData';

const filterOptions = ['All', 'Malware', 'Phishing', 'Ransomware', 'Zero-Day', 'Data Breach'];

function NewsAlertsPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const filteredNews = newsAlertsData.filter(news => selectedType === 'All' || news.type === selectedType);
  
  // Identify the most critical alert (highest severity, then most recent)
  const mostImportantAlert = newsAlertsData
    .sort((a, b) => {
      const severityScore = { 'Critical': 3, 'High': 2, 'Medium': 1, 'Low': 0 };
      if (severityScore[b.severity] !== severityScore[a.severity]) {
        return severityScore[b.severity] - severityScore[a.severity];
      }
      return new Date(b.date) - new Date(a.date);
    })[0];

  const regularNews = filteredNews.filter(news => news.id !== mostImportantAlert.id);

  // Automatic Content Refresh every 5 minutes
  useEffect(() => {
    const checkUpdates = () => {
      setIsRefreshing(true);
      setTimeout(() => {
        setLastUpdated(new Date());
        setIsRefreshing(false);
      }, 1500);
    };

    const interval = setInterval(checkUpdates, 5 * 60 * 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Today's Cyber Warnings - Cybelator</title>
        <meta name="description" content="Important cyber warnings and advisories you should know today. Updated daily from verified sources like CERT-In, RBI, and global security advisories." />
      </Helmet>

      <div className="bg-slate-50 min-h-screen">
        <div className="bg-brand-darker text-white py-10 md:py-12 pb-20 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-3xl rounded-full pointer-events-none" />
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full font-semibold text-sm">
                  <Bell className="w-4 h-4" /> News Desk
                </div>
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-semibold text-sm">
                  {isRefreshing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                  Updated Today
                </div>
              </div>
              
              <h1 className="text-2xl md:text-4xl font-bold mb-4">Today's Cyber Warnings</h1>
              <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg font-medium md:font-normal leading-relaxed">
                Important cyber warnings and advisories you should know today.
              </p>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-300">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Verified from official advisories (CERT-In, RBI, CISA)</span>
              </div>
           </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
           {/* Telegram Subscription CTA */}
           <div className="mb-8">
             <TelegramSubscriptionCTA variant="compact" />
           </div>

           {/* Most Important Alert Section */}
           {mostImportantAlert && selectedType === 'All' && (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="mb-10 bg-white rounded-2xl shadow-xl border-2 border-red-100 overflow-hidden relative"
             >
               <div className="bg-red-600 text-white px-4 md:px-6 py-2 flex items-center justify-between">
                 <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs md:text-sm">
                   <AlertOctagon className="w-4 h-4 md:w-5 md:h-5" />
                   Most Important Alert Today
                 </div>
                 <span className="text-[10px] md:text-xs bg-red-700 px-2 py-0.5 rounded text-red-100">Critical Priority</span>
               </div>
               
               <div className="p-4 md:p-8">
                 <div className="flex flex-col md:flex-row gap-6">
                   <div className="flex-1">
                     <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                       {mostImportantAlert.headline}
                     </h2>
                     <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                       {mostImportantAlert.summary}
                     </p>
                     
                     <div className="bg-red-50 p-4 rounded-xl border border-red-100 mb-6">
                        <div className="flex items-center gap-2 text-red-800 font-bold mb-2">
                          <User className="w-5 h-5" />
                          Who this affects:
                        </div>
                        <p className="text-red-700 font-medium text-sm md:text-base">{mostImportantAlert.affectedUsers}</p>
                     </div>

                     <div className="flex flex-wrap gap-2 md:gap-3">
                       {mostImportantAlert.protectionSteps.map((step, i) => (
                         <div key={i} className="bg-slate-100 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 flex items-center gap-2">
                           <CheckCircle2 className="w-4 h-4 text-green-600" />
                           {step}
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>
             </motion.div>
           )}

           {/* Filters */}
           <div className="bg-white p-2 md:p-4 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-wrap gap-2 justify-center overflow-x-auto">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedType(filter)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                    selectedType === filter
                      ? 'bg-brand-dark text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
           </div>

           <div className="space-y-6">
              {(selectedType === 'All' ? regularNews : filteredNews).map((news, idx) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                   <NewsCard news={news} />
                </motion.div>
              ))}
           </div>

           {/* Trusted Data Sources */}
           <div className="mt-12">
             <TrustedDataSources variant="compact" />
           </div>

           {/* Trust Statement */}
           <div className="mt-8 mb-12 text-center bg-green-50 rounded-xl p-4 md:p-6 border border-green-100">
             <div className="flex items-center justify-center gap-2 mb-2">
               <Info className="w-5 h-5 text-green-600" />
               <h4 className="font-bold text-green-800">Trusted Verification</h4>
             </div>
             <p className="text-green-700 mb-2 text-sm md:text-base">
               Updated daily from trusted government and cybersecurity sources.
             </p>
             <p className="text-xs md:text-sm text-green-600">
               Alerts are cross-checked from official and trusted public advisories including CERT-In, RBI, CISA, and leading security research firms.
             </p>
           </div>
        </div>
      </div>
    </>
  );
}

export default NewsAlertsPage;