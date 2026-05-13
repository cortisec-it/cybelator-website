import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import StatsBar from '../components/StatsBar';
import CurriculumSection from '../components/CurriculumSection';
import PricingSection from '../components/PricingSection';
import RolesGrid from '../components/RolesGrid';
import CertSection from '../components/CertSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function AcademyHero() {
  return (
    <section
      className="pt-24 pb-16 text-white"
      style={{
        background: 'linear-gradient(180deg, #0a0d12 0%, #0e1520 100%)',
        borderBottom: '1px solid #1c2438',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors no-underline"
          style={{ color: '#5a6478' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6478')}
        >
          ← Back to Cybelator
        </Link>

        {/* Founding batch banner */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl"
          style={{ background: '#faeeda', border: '0.5px solid #ef9f27' }}
        >
          <Star className="w-3.5 h-3.5 shrink-0" style={{ color: '#ba7517' }} />
          <p className="text-sm" style={{ color: '#633806' }}>
            <strong>Founding Batch Open</strong> — 20 seats only · Batch 1 starts{' '}
            <span style={{ color: '#ba7517', fontWeight: 700 }}>15 June</span> · Guwahati
          </p>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span
            className="inline-flex items-center font-mono text-[10px] px-3 py-1 rounded-full mb-5"
            style={{
              background: 'rgba(0,212,255,0.10)',
              border: '1px solid rgba(0,212,255,0.30)',
              color: '#00D4FF',
              letterSpacing: '0.12em',
            }}
          >
            CYBELATOR ACADEMY
          </span>

          {/* Headline */}
          <h1
            className="font-display font-bold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', letterSpacing: '-0.02em' }}
          >
            20-Week Job-Ready<br />Cybersecurity Program
          </h1>

          {/* Subtext */}
          <p className="text-base max-w-xl leading-relaxed" style={{ color: '#8a96a8' }}>
            For freshers and career switchers — zero cybersecurity experience required.
            Hands-on training on live enterprise tools, real operational workflows, and
            industry-grade lab environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <AcademyHero />
      <StatsBar />
      <CurriculumSection />
      <PricingSection />
      <RolesGrid />
      <CertSection />
      <ContactSection />
      <Footer />
    </>
  );
}
