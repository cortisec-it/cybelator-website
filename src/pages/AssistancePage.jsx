import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertOctagon, ArrowUp, MessageCircle, Mail } from 'lucide-react';
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

function AssistanceContactSection() {
  return (
    <section className="py-16" style={{ background: '#0a1628' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white font-bold text-2xl text-center mb-6">Need Immediate Help?</h2>
        <div
          className="max-w-lg mx-auto rounded-2xl p-8"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Card header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(239,68,68,0.2)' }}>
              <AlertOctagon className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-snug">I need help with a cybercrime</h3>
              <p className="text-slate-400 text-sm mt-1">Talk to a CortiSec volunteer directly</p>
            </div>
          </div>

          {/* Row 1 — Reporting guide */}
          <button
            onClick={() => document.querySelector('#assistance')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full flex items-center gap-4 p-4 rounded-xl border text-left cursor-pointer transition-all mb-3"
            style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-slate-700">
              <ArrowUp className="w-5 h-5 text-slate-300" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Use the reporting guide ↑</p>
              <p className="text-slate-500 text-xs mt-0.5">Step-by-step action checklist — scroll to Cyber Assistance above</p>
            </div>
          </button>

          {/* Row 2 — WhatsApp */}
          <a
            href="https://wa.me/917289054028?text=I%20need%20help%20with%20a%20cybercrime"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-4 p-4 rounded-xl border text-left no-underline transition-all mb-3 block"
            style={{ background: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.25)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(16,185,129,0.13)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(16,185,129,0.08)')}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(16,185,129,0.2)' }}>
              <MessageCircle className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-green-400 font-semibold text-sm">WhatsApp a volunteer →</p>
              <p className="text-slate-400 text-xs mt-0.5">+91 72890 54028 · Speak directly to a CortiSec team member</p>
            </div>
          </a>

          {/* Row 3 — Email */}
          <a
            href="mailto:contact@cybelator.com?subject=Cybercrime%20Assistance%20Request"
            className="w-full flex items-center gap-4 p-4 rounded-xl border text-left no-underline transition-all block"
            style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(99,102,241,0.2)' }}>
              <Mail className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Email us →</p>
              <p className="text-slate-500 text-xs mt-0.5">contact@cybelator.com · We respond within 24 hours</p>
            </div>
          </a>
        </div>
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
      <AssistanceContactSection />
      <Footer />
    </div>
  );
}
