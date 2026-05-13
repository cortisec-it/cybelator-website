import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import AwarenessSection from '../components/AwarenessSection';
import Footer from '../components/Footer';

function AwarenessHero() {
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center font-mono text-[10px] px-3 py-1 rounded-full mb-5"
            style={{
              background: 'rgba(59,130,246,0.10)',
              border: '1px solid rgba(59,130,246,0.30)',
              color: '#60a5fa',
              letterSpacing: '0.12em',
            }}
          >
            CYBER AWARENESS
          </span>

          {/* Headline */}
          <h1
            className="font-display font-bold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', letterSpacing: '-0.02em' }}
          >
            Stay{' '}
            <span style={{ color: '#60a5fa' }}>Safe</span>
            {' '}Online
          </h1>

          {/* Subtext */}
          <p className="text-base max-w-xl leading-relaxed" style={{ color: '#8a96a8' }}>
            Daily scam alerts, threat warnings, and practical protection guides — completely
            free for everyone. No jargon. No login required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function AwarenessPage() {
  return (
    <>
      <Navbar />
      <AwarenessHero />
      <AwarenessSection />
      <Footer />
    </>
  );
}
