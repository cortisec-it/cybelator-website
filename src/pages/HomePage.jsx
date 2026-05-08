import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, AlertTriangle, ArrowRight, UserCheck, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DailyActionPanel from '@/components/DailyActionPanel';
import LastUpdatedBadge from '@/components/LastUpdatedBadge';
import VictimSupportCTA from '@/components/VictimSupportCTA';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import ExpertConsultationModal from '@/components/ExpertConsultationModal';
import TelegramSubscriptionCTA from '@/components/TelegramSubscriptionCTA';
import TrustedDataSources from '@/components/TrustedDataSources';
import TrustReassuranceStatement from '@/components/TrustReassuranceStatement';
import AudienceEntryStrip from '@/components/AudienceEntryStrip';
import StatsStrip from '@/components/StatsStrip';
import CareerDiscoveryTeaser from '@/components/CareerDiscoveryTeaser';
import CareerRoadmap from '@/components/CareerRoadmap';
import WhoIsThisFor from '@/components/WhoIsThisFor';
import LearningHub from '@/components/LearningHub';
import WorkshopCTA from '@/components/WorkshopCTA';
import SocialProof from '@/components/SocialProof';
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
    "Back up your critical photos and documents today",
  ];

  return (
    <>
      <Helmet>
        <title>Cybelator — India's Cyber Awareness & Career Discovery Platform</title>
        <meta name="description" content="Stay safe online, learn cybersecurity for free, and discover your career path. Cybelator is India's trusted cyber awareness platform backed by CortiSec Technologies." />
      </Helmet>

      {/* ── 0. Urgent Alert Banner ── */}
      {criticalCount > 0 && (
        <div className="bg-brand-alert text-white text-sm font-medium py-2.5 px-4 text-center relative z-50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 fill-white text-brand-alert shrink-0" />
              <span className="font-bold">CRITICAL ALERT:</span> {criticalCount} active critical threats.
            </div>
            <Link to="/current-threats" className="underline hover:text-red-100 font-bold ml-1 sm:ml-2">
              View Now &rarr;
            </Link>
          </div>
        </div>
      )}

      {/* ── 1. HERO ── */}
      <section className="bg-brand-darker text-white pt-12 pb-6 md:pt-20 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* Left */}
            <div className="flex-1 pt-2 lg:pt-6">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full mb-6 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-xs font-medium text-slate-300">Live Monitoring • Updated Daily • India Focus</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight text-white">
                  Are You Safe Online<br className="hidden sm:block" /> Right Now?
                </h1>

                <p className="text-xl lg:text-2xl text-brand-accent font-bold mb-4">
                  Stay safe. Learn for free. Discover your career.
                </p>

                <p className="text-base text-slate-400 mb-8 max-w-xl leading-relaxed">
                  Cybelator is India's cyber awareness and career discovery platform — helping you stay protected today and build a cybersecurity career for tomorrow.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-brand-accent text-brand-dark font-bold rounded-full h-12 px-7 text-base hover:shadow-glow transition-all duration-200 w-full sm:w-auto">
                    <Link to="/current-threats" className="flex items-center justify-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-dark opacity-50" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-dark/70" />
                      </span>
                      Current Scams & Online Fraud
                    </Link>
                  </Button>
                  <Button
                    onClick={() => setConsultationOpen(true)}
                    className="border-2 border-slate-600 bg-transparent text-white hover:border-brand-accent rounded-full h-12 px-7 text-base font-semibold flex items-center justify-center gap-2 transition-all duration-200 w-full sm:w-auto"
                  >
                    <UserCheck className="w-5 h-5" /> Talk to a Cyber Safety Expert
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right — threat dashboard */}
            <div className="w-full lg:w-[420px] xl:w-[450px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-5 md:p-6 text-brand-dark shadow-glowStrong"
              >
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="text-lg font-bold flex items-center gap-2">
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
                  <div className="bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="font-medium text-slate-600 text-sm">Global Threat Level</span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold border border-orange-200">
                      High / Elevated
                    </span>
                  </div>

                  <Link to="/current-threats" className="block group">
                    <div className="bg-red-50 p-3 md:p-4 rounded-xl border border-red-100 flex justify-between items-center group-hover:shadow-card transition-all">
                      <div>
                        <span className="block font-medium text-red-900 text-sm">Active Critical Alerts</span>
                        <span className="text-xs text-red-700">Immediate action required</span>
                      </div>
                      <div className="bg-brand-alert text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold shadow-sm">
                        {criticalCount}
                      </div>
                    </div>
                  </Link>

                  <div className="border-t border-slate-100 pt-3 mt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Trending in India</span>
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

                <div className="mt-5">
                  <DailyActionPanel actions={dailyActions} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Audience Entry Cards ── */}
      <AudienceEntryStrip />

      {/* ── 3. Stats Strip ── */}
      <StatsStrip />

      {/* ── 4. Career Discovery Teaser ── */}
      <CareerDiscoveryTeaser />

      {/* ── 5. Career Roadmap ── */}
      <CareerRoadmap />

      {/* ── 6. Who Is This For? ── */}
      <WhoIsThisFor />

      {/* ── 7. Free Learning Hub ── */}
      <LearningHub />

      {/* ── 8. Telegram / Community CTA ── */}
      <section className="bg-brand-navy py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <TelegramSubscriptionCTA />
          </motion.div>
        </div>
      </section>

      {/* ── 9. Trusted Authorities ── */}
      <TrustedDataSources />

      {/* ── 10. Free Workshop CTA ── */}
      <WorkshopCTA />

      {/* ── 11. Victim Support / Cyber Assistance ── */}
      <section className="bg-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VictimSupportCTA />
        </div>
      </section>

      {/* ── 12. Social Proof ── */}
      <SocialProof />

      {/* ── 13. Newsletter ── */}
      <section className="bg-slate-50 py-14 md:py-20 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <NewsletterSubscription className="shadow-card mx-auto" />
            <div className="text-center mt-6 text-slate-500 text-sm flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              <span>Already following us on Telegram? Check back daily for updates.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 14. Privacy Protected ── */}
      <TrustReassuranceStatement />

      <ExpertConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </>
  );
}

export default HomePage;
