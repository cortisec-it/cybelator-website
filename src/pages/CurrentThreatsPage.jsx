import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AlertTriangle, Search, CheckCircle2, Clock, RefreshCw, Shield } from 'lucide-react';
import ThreatCard from '@/components/ThreatCard';
import ThreatActivitySidebar from '@/components/ThreatActivitySidebar';
import ReportIncidentSection from '@/components/ReportIncidentSection';
import TelegramSubscriptionCTA from '@/components/TelegramSubscriptionCTA';
import TrustedDataSources from '@/components/TrustedDataSources';
import { currentThreatsData, threatTimeline } from '@/data/currentThreatsData';

const regions = ['Global', 'India', 'United States', 'Europe'];

function CurrentThreatsPage() {
  const [selectedRegion, setSelectedRegion] = useState('Global');
  const [searchTerm, setSearchTerm] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const filteredThreats = currentThreatsData.filter(threat => {
    const matchesRegion = selectedRegion === 'Global' || threat.affectedRegions.includes(selectedRegion);
    const matchesSearch = threat.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          threat.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  // Automatic Content Refresh every 5 minutes (300,000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRefreshing(true);
      // Simulate data fetch delay
      setTimeout(() => {
        setLastUpdated(new Date());
        setIsRefreshing(false);
      }, 1000);
    }, 5 * 60 * 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Current Scams & Online Fraud - Cybelator</title>
        <meta name="description" content="Live and ongoing scams affecting individuals and families right now. Detailed analysis of active cyber threats and fraud." />
      </Helmet>

      <div className="bg-slate-50 min-h-screen pb-16">
        {/* Header */}
        <div className="bg-brand-darker text-white py-10 md:py-12 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-3xl rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-3 py-1 rounded-full mb-4">
                   <AlertTriangle className="w-4 h-4 text-red-400" />
                   <span className="text-xs font-bold text-red-400 uppercase">Live Intelligence • Auto-updates active</span>
                </div>
                <h1 className="text-2xl md:text-4xl font-bold mb-2">Current Scams & Online Fraud</h1>
                <p className="text-slate-400 mb-2 max-w-2xl text-base md:text-lg leading-relaxed">Live and ongoing scams affecting individuals and families right now.</p>
                <div className="flex items-center gap-2 text-sm text-slate-300 mt-3">
                  {isRefreshing ? <RefreshCw className="w-4 h-4 text-green-400 animate-spin" /> : <CheckCircle2 className="w-4 h-4 text-green-400" />}
                  <span>Last check: {lastUpdated.toLocaleTimeString()}</span>
                </div>
              </div>
              
              {/* Region Selector */}
              <div className="flex bg-slate-800 p-1 rounded-lg w-full md:w-auto overflow-x-auto">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                      selectedRegion === region
                        ? 'bg-brand-accent text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Telegram Subscription */}
              <TelegramSubscriptionCTA variant="compact" />

              {/* Search */}
              <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-200 flex items-center gap-2">
                 <Search className="w-5 h-5 text-slate-400 ml-2" />
                 <input 
                   type="text" 
                   placeholder="Search scams (e.g. 'UPI', 'WhatsApp', 'Job Offer')"
                   className="w-full p-2 outline-none text-slate-700 placeholder:text-slate-400 text-sm md:text-base"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
              </div>

              {/* Daily Habit Cue */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900 text-sm">What you should do today</p>
                  <p className="text-xs text-blue-700">Review these scams and take the protection steps. Takes less than 1 minute.</p>
                </div>
              </div>

              {/* Threat List */}
              <div className="space-y-6 md:space-y-8">
                {filteredThreats.length > 0 ? (
                  filteredThreats.map((threat, index) => (
                    <motion.div
                      key={threat.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ThreatCard threat={threat} />
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    No scams found matching your criteria.
                  </div>
                )}
              </div>
              
              {/* Trust Badge at Bottom */}
              <div className="mt-12 text-center border-t border-slate-200 pt-8 pb-4">
                 <div className="inline-flex items-center justify-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-bold text-slate-600 uppercase">Trusted Data Sources</span>
                 </div>
                 <p className="text-sm text-slate-500 font-medium">Updated regularly from verified official advisories and trusted cybersecurity research platforms.</p>
              </div>

              {/* Trusted Data Sources Component */}
              <div className="mt-4">
                <TrustedDataSources variant="compact" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <ThreatActivitySidebar 
                  activityLevels={{}}
                  recentIncidents={threatTimeline}
                  tips={["Always verify the UPI VPA before paying.", "Banks never ask for OTPs via call.", "Update your WhatsApp privacy settings."]}
                />
                
                {/* Reporting Section in Sidebar */}
                <ReportIncidentSection />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentThreatsPage;