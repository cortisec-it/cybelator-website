import React, { useState, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Globe, Activity, TrendingUp, AlertCircle, ExternalLink, Shield, Map, Radio } from 'lucide-react';
import { threatMapsData } from '@/data/threatMapsData';
import { Button } from '@/components/ui/button';

// Lazy load the modal
const ThreatMapModal = lazy(() => import('@/components/ThreatMapModal'));

const insights = [
  {
    title: 'What are these maps?',
    content: 'Cyber threat maps visualize attacks happening globally, aggregated from security sensors, honeypots, and threat intelligence networks maintained by leading security vendors worldwide.'
  },
  {
    title: 'How to read threat data',
    content: 'Maps show attack origins (source), targets (destination), attack types (malware, DDoS, etc.), and intensity levels. Bright colors indicate high activity.'
  },
  {
    title: 'Key metrics explained',
    content: 'Attack vectors include malware infections, DDoS attacks, exploit attempts, phishing campaigns, and ransomware deployments. Regional hotspots indicate vulnerable infrastructure.'
  }
];

const statsData = [
  { label: 'Attack Types', items: ['Malware: 35%', 'DDoS: 28%', 'Exploits: 22%', 'Phishing: 15%'] },
  { label: 'Top Regions', items: ['Asia: 42%', 'N. America: 28%', 'Europe: 20%', 'Others: 10%'] }
];

// Helper to get icon based on provider
const getProviderIcon = (provider) => {
  const p = provider.toLowerCase();
  if (p.includes('fortinet')) return Shield;
  if (p.includes('check point')) return Activity;
  if (p.includes('radware')) return Radio;
  if (p.includes('bitdefender')) return Globe;
  return Map;
};

// Helper to get color based on provider
const getProviderColor = (provider) => {
  const p = provider.toLowerCase();
  if (p.includes('fortinet')) return 'text-red-600 bg-red-50 border-red-100';
  if (p.includes('check point')) return 'text-pink-600 bg-pink-50 border-pink-100';
  if (p.includes('radware')) return 'text-green-600 bg-green-50 border-green-100';
  if (p.includes('bitdefender')) return 'text-blue-600 bg-blue-50 border-blue-100';
  return 'text-slate-600 bg-slate-50 border-slate-100';
};

function ThreatMapsPage() {
  const [selectedMapIndex, setSelectedMapIndex] = useState(null);
  const isModalOpen = selectedMapIndex !== null;

  const openModal = (index) => setSelectedMapIndex(index);
  const closeModal = () => setSelectedMapIndex(null);

  return (
    <>
      <Helmet>
        <title>Cyber Attack Maps - Cybelator</title>
        <meta name="description" content="Explore interactive cyber attack maps from leading security providers. Visualize global attacks, vulnerabilities, and threat trends." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden bg-brand-darker">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-darker" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 backdrop-blur-sm border border-brand-accent/30 px-4 py-2 rounded-full mb-6">
              <Globe className="w-5 h-5 text-brand-accent" />
              <span className="text-brand-accent font-medium">Global Threat Intelligence</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Global Cyber Threat Landscape
            </h1>

            <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto px-4">
              Visualize cyber attacks happening worldwide. Select a provider below to launch their interactive map.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Threat Maps Grid */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Cyber Attack Maps</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {threatMapsData.map((map, index) => {
                  const Icon = getProviderIcon(map.provider);
                  const colorClass = getProviderColor(map.provider);

                  return (
                    <motion.div
                      key={map.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group flex flex-col h-full"
                    >
                      <div 
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer group-hover:border-blue-200"
                        onClick={() => openModal(index)}
                      >
                         {/* Header / Icon Area */}
                         <div className={`p-6 border-b border-gray-100 flex items-center justify-between ${colorClass.split(' ')[1]} bg-opacity-30`}>
                            <div className={`p-3 rounded-lg ${colorClass.split(' ')[1]} ${colorClass.split(' ')[0]}`}>
                              <Icon className="w-8 h-8" />
                            </div>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm">
                               <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                               <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">LIVE</span>
                            </div>
                         </div>
                         
                         <div className="p-6 flex-1 flex flex-col">
                            <div className="mb-4">
                               <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-accent transition-colors mb-1">
                                 {map.name}
                               </h3>
                               <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                 {map.provider}
                               </p>
                            </div>
                            
                            <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-1 leading-relaxed">
                              {map.description}
                            </p>
                            
                            <Button 
                              variant="outline" 
                              className="w-full mt-auto h-11 border-slate-200 hover:border-brand-accent hover:bg-brand-accent hover:text-white transition-all duration-300 group-hover:border-brand-accent text-slate-700"
                            >
                               Launch Map <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                         </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Insights */}
                <div className="bg-brand-dark rounded-xl p-6 text-white shadow-lg">
                  <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-brand-accent" />
                    Understanding Data
                  </h3>
                  <div className="space-y-5">
                    {insights.map((insight, index) => (
                      <div key={index} className="relative pl-4 border-l-2 border-brand-accent">
                        <h4 className="font-semibold text-sm mb-1 text-white">{insight.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{insight.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-dark mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-brand-accent" />
                    Attack Distribution
                  </h3>
                  <div className="space-y-4">
                    {statsData.map((stat, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-sm text-brand-dark mb-2">{stat.label}</h4>
                        <ul className="space-y-2">
                          {stat.items.map((item, i) => (
                            <li key={i} className="text-xs text-slate-600 flex items-center gap-2 bg-slate-50 p-2 rounded-lg">
                              <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trend Info */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-5 text-white shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <h3 className="text-lg font-bold">Current Trend</h3>
                  </div>
                  <p className="text-sm font-medium opacity-90 leading-relaxed">
                    Ransomware attacks have increased by 45% in Q1 2026. 
                    DDoS campaigns targeting financial institutions remain a top concern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Map Modal */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <ThreatMapModal 
            isOpen={isModalOpen}
            onClose={closeModal}
            initialIndex={selectedMapIndex || 0}
            maps={threatMapsData}
          />
        </Suspense>
      )}
    </>
  );
}

export default ThreatMapsPage;