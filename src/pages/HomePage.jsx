import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Heart, Compass, ArrowRight, Send, Play, Calendar, Award, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

import TrustBar from '@/components/TrustBar';
import PillarsSection from '@/components/PillarsSection';
import VictimSupportCTA from '@/components/VictimSupportCTA';
import AwarenessHub from '@/components/AwarenessHub';
import CareerRoadmap from '@/components/CareerRoadmap';
import CareerQuiz from '@/components/CareerQuiz';
import WhoIsThisFor from '@/components/WhoIsThisFor';
import LearningHub from '@/components/LearningHub';
import TelegramSubscriptionCTA from '@/components/TelegramSubscriptionCTA';
import WorkshopCTA from '@/components/WorkshopCTA';
import AcademyPromoSection from '@/components/AcademyPromoSection';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import TrustReassuranceStatement from '@/components/TrustReassuranceStatement';
import ExpertConsultationModal from '@/components/ExpertConsultationModal';
import { currentThreatsData } from '@/data/currentThreatsData';

function HomePage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const criticalCount = currentThreatsData.filter(t => t.severity === 'Critical').length;

  const heroCards = [
    {
      Icon: Shield,
      color: '#0D9488',
      bg: 'rgba(13,148,136,0.12)',
      title: 'Cyber Awareness',
      desc: 'Latest threats, scam alerts & safety practices',
    },
    {
      Icon: Heart,
      color: '#F43F5E',
      bg: 'rgba(244,63,94,0.12)',
      title: 'Fraud Assistance',
      desc: 'Guidance & support for cyber crime victims',
    },
    {
      Icon: Compass,
      color: '#6366F1',
      bg: 'rgba(99,102,241,0.12)',
      title: 'Career Discovery',
      desc: 'Explore pathways into cybersecurity',
    },
  ];

  const communityStats = [
    { val: '5,000+', label: 'Community Members' },
    { val: '500+', label: 'Telegram Subscribers' },
    { val: '12+', label: 'Workshops Conducted' },
  ];

  const communityFeatures = [
    {
      Icon: Play,
      title: 'Monthly Webinars',
      desc: 'Live sessions with industry experts and security practitioners.',
    },
    {
      Icon: Calendar,
      title: 'Free Workshops',
      desc: 'Hands-on cybersecurity workshops every month — completely free.',
    },
    {
      Icon: Award,
      title: 'Awareness Campaigns',
      desc: 'Community-led digital safety awareness across Northeast India.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cybelator — India's Cyber Awareness & Career Discovery Platform</title>
        <meta name="description" content="Stay safe online, learn cybersecurity for free, and discover your career path. Cybelator is India's trusted cyber awareness platform backed by CortiSec Technologies." />
      </Helmet>

      {/* ── Critical Alert Banner ── */}
      {criticalCount > 0 && (
        <div className="bg-brand-alert text-white text-sm font-medium py-2.5 px-4 text-center relative z-50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className="font-bold">CRITICAL ALERT:</span>
            <span>{criticalCount} active critical threats.</span>
            <Link to="/current-threats" className="underline hover:text-red-100 font-bold ml-1 sm:ml-2">
              View Now →
            </Link>
          </div>
        </div>
      )}

      {/* ── 1. HERO ── */}
      <section
        className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden text-white"
        style={{
          background: [
            'radial-gradient(ellipse at 25% 110%, rgba(13,148,136,0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 10%, rgba(99,102,241,0.07) 0%, transparent 45%)',
            'linear-gradient(180deg, #0B1222 0%, #111D2E 100%)',
          ].join(', '),
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            ].join(', '),
            backgroundSize: '64px 64px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-8"
              style={{ background: 'rgba(13,148,136,0.12)', color: '#14B8A6', border: '1px solid rgba(13,148,136,0.25)' }}
            >
              <Shield className="w-3.5 h-3.5" /> India's Cyber Safety Platform
            </span>

            <h1
              className="font-extrabold tracking-tight mb-5 leading-none"
              style={{ fontSize: 'clamp(36px, 6vw, 62px)', letterSpacing: '-0.03em' }}
            >
              Stay Safe. Learn Smart.<br />
              <span style={{ color: '#14B8A6' }}>Go Further.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Free cyber safety tools, expert guidance for fraud victims, and career pathways into cybersecurity — all in one trusted platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
              <Button asChild
                className="font-bold rounded-xl h-12 px-7 text-base text-white flex items-center gap-2"
                style={{ background: '#0D9488', border: 'none' }}
              >
                <Link to="/current-threats">
                  Explore Platform <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                onClick={() => setConsultationOpen(true)}
                className="border border-white/20 bg-transparent text-white hover:bg-white/8 rounded-xl h-12 px-7 text-base font-semibold flex items-center gap-2 transition-all"
              >
                <UserCheck className="w-5 h-5" /> Get Help Now
              </Button>
            </div>

            {/* Three hero cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {heroCards.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 p-5 rounded-2xl text-left border border-white/[0.07]"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: c.bg, color: c.color }}
                  >
                    <c.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">{c.title}</div>
                    <div className="text-xs text-slate-400 leading-snug">{c.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Trust Bar (animated counters) ── */}
      <TrustBar />

      {/* ── 3. Three Pillars ── */}
      <PillarsSection />

      {/* ── 4. Victim Support CTA ── */}
      <section className="bg-slate-50 py-16 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VictimSupportCTA />
        </div>
      </section>

      {/* ── 5. Awareness Hub (filterable) ── */}
      <AwarenessHub />

      {/* ── 6. Career Discovery ── */}
      <CareerRoadmap />

      {/* ── 7. Career Quiz ── */}
      <CareerQuiz />

      {/* ── 8. Who Is This For ── */}
      <WhoIsThisFor />

      {/* ── 9. Learning Hub ── */}
      <LearningHub />

      {/* ── 10. Community / Telegram ── */}
      <section
        className="py-20 md:py-28 text-white"
        id="community"
        style={{ background: '#0B1222' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(13,148,136,0.12)', color: '#14B8A6', border: '1px solid rgba(13,148,136,0.2)' }}
            >
              Community
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Northeast India's Cyber<br />Awareness Community
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
              Join thousands of students, professionals, and cyber-aware citizens learning and growing together.
            </p>
          </motion.div>

          {/* Telegram CTA box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-10 text-center mb-12 border"
            style={{
              background: 'linear-gradient(135deg, rgba(13,148,136,0.12) 0%, rgba(99,102,241,0.08) 100%)',
              borderColor: 'rgba(13,148,136,0.2)',
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgba(13,148,136,0.15)', color: '#14B8A6' }}
            >
              <Send className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Join Our Telegram Channel</h3>
            <p className="text-slate-400 text-base mb-6 max-w-md mx-auto">
              Get instant scam warnings, daily cyber tips, career updates — 1–2 important alerts per day. No spam.
            </p>
            <a
              href="https://t.me/cybelatoralerts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold rounded-xl px-7 py-3.5 text-white text-base transition-all hover:opacity-90"
              style={{ background: '#14B8A6' }}
            >
              <Send className="w-5 h-5" /> Join Telegram Community
            </a>
            {/* TODO: update member count when channel grows */}
            <p className="mt-4 text-sm text-slate-500">500+ members already staying safe with daily cyber alerts</p>
          </motion.div>

          {/* Community stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {communityStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center rounded-2xl p-7 border border-white/[0.07]"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="text-3xl font-extrabold mb-1" style={{ color: '#14B8A6' }}>{s.val}</div>
                <div className="text-sm text-slate-400 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Community features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {communityFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl p-6 border border-white/[0.07]"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(13,148,136,0.12)', color: '#14B8A6' }}
                >
                  <f.Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{f.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Workshop ── */}
      <WorkshopCTA />

      {/* ── 12. CortiSec Academy ── */}
      <AcademyPromoSection />

      {/* ── 13. Newsletter ── */}
      <section className="bg-slate-50 py-20 md:py-28 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <NewsletterSubscription className="shadow-card mx-auto" />
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
