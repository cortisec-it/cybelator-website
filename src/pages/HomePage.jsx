import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, AlertTriangle, GraduationCap, ArrowRight, UserCheck, Clock, Send, CheckCircle2 } from 'lucide-react';
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
import StatsStrip from '@/components/StatsStrip';
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
      <section className="bg-brand-dark text-white pt-10 pb-4 md:pt-16 md:pb-24 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
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
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight tracking-tight text-white">
                  Are You Safe Online?
                </h1>

                <p className="text-xl lg:text-2xl text-brand-accent font-bold mb-5">
                  Real threats. Real scams. Real help. Right now.
                </p>

                <p className="text-base lg:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                  Cybelator gives you live cyber threat alerts, free expert assistance if you've been scammed, and a clear path to a cybersecurity career — all in one place.
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
                className="bg-white rounded-2xl p-5 md:p-6 text-brand-dark shadow-2xl border border-slate-700/50"
              >
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="text-lg md:text-xl font-bold flex items-center gap-2">
                      <Activity className="w-5 h-5 text-brand-accent" />
                      Today's Risk Snapshot
                    </h2>
                    <LastUpdatedBadge date={new Date().toISOString()} />
                  </div>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 pl-0.5">
                    <Clock className="w-3 h-3 text-brand-accent" />
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
                        <h4 className="font-bold text-sm text-brand-dark line-clamp-1">{trendingThreat.name}</h4>
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

      {/* Stats Strip */}
      <StatsStrip />

      {/* Telegram Subscription Section */}
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

      {/* Trusted Data Sources Section */}
      <TrustedDataSources />

      {/* Mobile Quick Access Grid */}
      <div className="pb-10 md:pb-16 pt-0">
        <MobileQuickAccess />
      </div>

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

      {/* Academy Teaser — CortiSec Academy */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-dark to-brand-accent py-14 md:py-20">
        <div className="absolute inset-0 bg-brand-dark/50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Left */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
                  CORTISEC ACADEMY · GUWAHATI
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Turn Your Passion for Tech<br className="hidden md:block" /> Into a Cybersecurity Career
                </h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Train on real enterprise tools — Check Point, Cato, Netskope & more',
                    'Hands-on labs. No theory-only classroom training.',
                    "Job placement support through CortiSec's enterprise network",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-white text-brand-dark hover:bg-slate-100 font-bold h-12 px-8 rounded-xl text-base shadow-lg">
                  <Link to="/academy">Apply for Next Batch →</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right — 2×2 stat grid */}
            <div className="w-full lg:w-[360px]">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { num: '16 Weeks', sub: 'Job-ready program' },
                  { num: '8 Domains', sub: 'Security skills' },
                  { num: '100% Hands-On', sub: 'Real lab access' },
                  { num: 'Guwahati', sub: 'Training Centre' },
                ].map((box, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/20">
                    <p className="text-white font-bold text-lg leading-snug">{box.num}</p>
                    <p className="text-white/60 text-xs mt-1">{box.sub}</p>
                  </div>
                ))}
              </motion.div>
            </div>

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