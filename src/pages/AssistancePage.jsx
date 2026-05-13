import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import AssistanceSection from '../components/AssistanceSection';
import Footer from '../components/Footer';

function AssistanceHero() {
  return (
    <section
      className="pt-24 pb-16 text-white"
      style={{
        background: 'transparent',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center font-mono text-[10px] px-3 py-1 rounded-full mb-5"
            style={{
              background: 'rgba(16,185,129,0.10)',
              border: '1px solid rgba(16,185,129,0.30)',
              color: '#34d399',
              letterSpacing: '0.12em',
            }}
          >
            CYBER ASSISTANCE
          </span>

          {/* Headline */}
          <h1
            className="font-display font-bold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', letterSpacing: '-0.02em' }}
          >
            We're Here to{' '}
            <span style={{ color: '#34d399' }}>Help</span>
          </h1>

          {/* Subtext */}
          <p className="text-base max-w-xl leading-relaxed mb-4" style={{ color: '#8a96a8' }}>
            Free expert guidance for cybercrime victims — report the incident, recover your
            accounts, and protect yourself from further harm.
          </p>

          {/* Urgency note */}
          <p className="text-sm font-medium" style={{ color: '#34d399' }}>
            If you need immediate help, use the form below. We respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function AssistancePage() {
  return (
    <div style={{ background: 'radial-gradient(ellipse at top center, #0d1f35 0%, #060d18 60%, #000000 100%)', minHeight: '100vh' }}>
      <Navbar />
      <AssistanceHero />
      <AssistanceSection />
      <Footer />
    </div>
  );
}
