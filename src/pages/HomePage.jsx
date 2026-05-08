import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, AlertTriangle, GraduationCap, ArrowRight, UserCheck, Shield, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DailyActionPanel from '@/components/DailyActionPanel';
import LastUpdatedBadge from '@/components/LastUpdatedBadge';
import VictimSupportCTA from '@/components/VictimSupportCTA';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import ExpertConsultationModal from '@/components/ExpertConsultationModal';
import MobileQuickAccess from '@/components/MobileQuickAccess';
import TelegramSubscriptionCTA from '@/components/TelegramSubscriptionCTA';
import TrustedDataSources from '@/components/TrustedDataSources';
import TrustReassuranceStatement from '@/components/TrustReassuranceStatement';
import AudienceEntryStrip from '@/components/AudienceEntryStrip';
import CyberAssistanceSection from '@/components/CyberAssistanceSection';
import { currentThreatsData } from '@/data/currentThreatsData';

function HomePage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const criticalCount = currentThreatsData.filter(t => t.severity === 'Critical').length;
  const trendingThreat = currentThreatsData.find(t => t.isIndiaFocused && t.severity === 'Critical') || currentThreatsData[0];
  
  const dailyActions = [
    "Check if your email has been breached on 'Have I Been Pwned'",
    "Update your browser to the latest version immediately",
    "Enable 2FA on your primary email account",
    "Review recent login activity on your social media",
    "Back up your critical photos and documents today"
  ];

  return (
    <>
      <Helmet>
        <title>Cybelator - The Cyber Warrior for the Digital Age</title>
        <meta name="description" content="Cybelator - The Cyber Warrior for the Digital Age. Your daily dashboard for real-time cyber threat updates, actionable security steps, and awareness training." />
      </Helmet>

      {/* Urgent Alert Banner */}
      {criticalCount > 0 && (
        <div className="bg-red-600 text-white text-sm font-medium py-3 px-4 text-center animate-in slide-in-from-top duration-500 relative z-50 shadow-md">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 fill-white text-red-600 shrink-0" />
              <span className="font-bold">CRITICAL ALERT:</span> {criticalCount} Active Critical Threats detected.
            </div>
            <span className="hidden sm:inline text-white/90 font-normal border-l border-red-400 pl-3 ml-1">
              Stay calm — follow the steps below to stay safe.
            </span>
            <Link to="/current-threats" className="underline hover:text-red-100 font-bold ml-1 sm:ml-2">
              View Threats &rarr;
            </Link>
          </div>
        </div>
      )}

      {/* Hero / Dashboard */}
      <section className="bg-[#0F172A] text-white pt-10 pb-4 md:pt-16 md:pb-24 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#06B6D4]/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Intro */}
            <div className="flex-1 pt-2 lg:pt-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-slate-300">System Online • Monitoring Active • Updated Daily</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight">
                  Know today's<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-cyan-400">
                    online dangers and exactly how to stay safe
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-[#06B6D4] font-semibold mb-3">
                  Cybelator — The Cyber Warrior for the Digital Age
                </p>

                <p className="text-sm text-slate-500 mb-4">
                  Real-time threat intelligence &middot; Free victim support &middot; CortiSec Academy career training
                </p>

                <p className="text-base lg:text-lg text-slate-400 mb-8 max-w-xl leading-[1.6] md:leading-relaxed font-medium md:font-normal">
                  Don't just read about threats—act on them. Get daily updates on scams, vulnerabilities, and protection steps tailored for you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20 text-white font-bold h-12 md:h-14 px-8 py-2 md:py-3 rounded-xl text-lg w-full sm:w-auto transition-all duration-300 group">
                     <Link to="/current-threats" className="flex items-center justify-center gap-2">
                        <span className="relative flex h-3 w-3 mr-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-white/80"></span>
                        </span>
                        <AlertTriangle className="w-5 h-5 fill-current" />
                        Current Scams & Online Fraud
                     </Link>
                  </Button>
                  <Button 
                    onClick={() => setConsultationOpen(true)}
                    variant="outline" 
                    className="border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700 hover:text-white h-12 md:h-14 px-8 py-2 md:py-3 rounded-xl text-base font-medium flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto"
                  >
                     <UserCheck className="w-5 h-5" /> Talk to a Cyber Safety Expert
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Risk Snapshot Card */}
            <div className="w-full lg:w-[420px] xl:w-[450px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-5 md:p-6 text-[#0F172A] shadow-2xl border border-slate-700/50"
              >
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="text-lg md:text-xl font-bold flex items-center gap-2">
                      <Activity className="w-5 h-5 text-[#06B6D4]" />
                      Today's Risk Snapshot
                    </h2>
                    <LastUpdatedBadge date={new Date().toISOString()} />
                  </div>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 pl-0.5">
                    <Clock className="w-3 h-3 text-[#06B6D4]" />
                    Updated daily • Takes less than 1 minute
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Global Level */}
                  <div className="bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="font-medium text-slate-600 text-sm md:text-base">Global Threat Level</span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs md:text-sm font-bold border border-orange-200">
                      High / Elevated
                    </span>
                  </div>

                  {/* Critical Alerts */}
                  <Link to="/current-threats" className="block group">
                    <div className="bg-red-50 p-3 md:p-4 rounded-xl border border-red-100 flex justify-between items-center group-hover:shadow-md transition-all">
                      <div>
                        <span className="block font-medium text-red-900 text-sm md:text-base">Active Critical Alerts</span>
                        <span className="text-xs text-red-700">Immediate action required</span>
                      </div>
                      <div className="bg-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold shadow-sm">
                        {criticalCount}
                      </div>
                    </div>
                  </Link>

                  {/* Trending Threat */}
                  <div className="border-t border-slate-100 pt-3 mt-1">
                    <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Trending in India</span>
                    <Link to="/current-threats" className="flex items-start gap-3 hover:bg-slate-50 p-2 -mx-2 rounded-lg transition-colors">
                      <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-sm text-[#0F172A] line-clamp-1">{trendingThreat.name}</h4>
                        <p className="text-xs text-slate-500 line-clamp-1">{trendingThreat.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 ml-auto mt-1" />
                    </Link>
                  </div>
                </div>

                {/* Daily Action */}
                <div className="mt-5">
                   <DailyActionPanel actions={dailyActions} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Entry Strip */}
      <AudienceEntryStrip />

      {/* Telegram Subscription Section (Main - High Priority) */}
      <section className="bg-white py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <TelegramSubscriptionCTA />
          </motion.div>
        </div>
      </section>

      {/* Mobile Quick Access Grid */}
      <div className="pb-10 md:pb-16 pt-0">
        <MobileQuickAccess />
      </div>

      {/* Trusted Data Sources Section */}
      <TrustedDataSources />

      {/* Subscription Section */}
      <section className="bg-slate-50 py-10 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <NewsletterSubscription className="shadow-2xl mx-auto" />
              
              {/* Soft Reminder for Telegram */}
              <div className="text-center mt-6 text-slate-500 text-sm flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                <span>Already following us on Telegram? Check back daily for updates.</span>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Victim Support CTA Section */}
      <section className="bg-white py-10 md:py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <VictimSupportCTA />
        </div>
      </section>

      {/* Cyber Assistance Section */}
      <CyberAssistanceSection />

      {/* Academy Teaser Banner */}
      <section className="bg-slate-50 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-2xl border border-[#06B6D4]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start md:items-center gap-5">
              <div className="bg-[#06B6D4]/10 p-4 rounded-xl shrink-0">
                <GraduationCap className="w-10 h-10 text-[#06B6D4]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-2">CortiSec Academy</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                  Launch your cybersecurity career at our Guwahati Training Centre. 16-week program on real enterprise platforms. Batch-based enrollment. Limited seats.
                </p>
              </div>
            </div>
            <Button asChild className="bg-[#06B6D4] hover:bg-cyan-600 text-white shrink-0 h-12 md:h-14 px-8 rounded-xl font-bold text-base w-full md:w-auto shadow-lg shadow-cyan-200 py-2 md:py-3">
              <Link to="/academy">Explore Academy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Reassurance Statement */}
      <TrustReassuranceStatement />

      <ExpertConsultationModal 
        isOpen={consultationOpen} 
        onClose={() => setConsultationOpen(false)} 
      />
    </>
  );
}

export default HomePage;