import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'scams', label: 'Scam Alerts' },
  { id: 'tips', label: 'Safety Tips' },
  { id: 'threats', label: 'Threat Intel' },
];

const alerts = [
  {
    cat: 'scams',
    title: 'UPI Payment Scam',
    desc: 'Fraudsters posing as bank officials requesting UPI PIN. Never share your PIN with anyone — not even your bank.',
    tag: 'Active Threat',
    color: '#F43F5E',
    colorBg: 'rgba(244,63,94,0.08)',
  },
  {
    cat: 'scams',
    title: 'Job Offer Fraud',
    desc: 'Fake job offers asking for registration fees. Legitimate companies never charge candidates upfront.',
    tag: 'Trending',
    color: '#F43F5E',
    colorBg: 'rgba(244,63,94,0.08)',
  },
  {
    cat: 'tips',
    title: 'Two-Factor Authentication',
    desc: 'Enable 2FA on all your accounts. It blocks 99% of automated attacks — takes 2 minutes to set up.',
    tag: 'Essential',
    color: '#10B981',
    colorBg: 'rgba(16,185,129,0.08)',
  },
  {
    cat: 'tips',
    title: 'Password Hygiene',
    desc: 'Use unique passwords for every account. A free password manager like Bitwarden makes this effortless.',
    tag: 'Best Practice',
    color: '#0D9488',
    colorBg: 'rgba(13,148,136,0.08)',
  },
  {
    cat: 'threats',
    title: 'Phishing via WhatsApp',
    desc: 'Malicious links disguised as delivery updates and bank alerts. Verify the sender before clicking any link.',
    tag: 'Active Threat',
    color: '#F43F5E',
    colorBg: 'rgba(244,63,94,0.08)',
  },
  {
    cat: 'scams',
    title: 'OTP Fraud Alert',
    desc: 'Never share your OTP with anyone — banks, police, or customer care will never ask for it.',
    tag: 'Common Scam',
    color: '#F59E0B',
    colorBg: 'rgba(245,158,11,0.08)',
  },
];

const authorities = [
  'Cybercrime.gov.in', 'CERT-In', 'RBI Fraud Alerts',
  'NPCI Security', 'Microsoft Security', 'Google Threat Analysis',
];

function AwarenessHub() {
  const [activeTab, setActiveTab] = useState('all');
  const filtered = activeTab === 'all' ? alerts : alerts.filter(a => a.cat === activeTab);

  return (
    <section className="bg-white py-20 md:py-28" id="awareness">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 bg-brand-teal-50 text-brand-teal font-semibold text-xs px-4 py-1.5 rounded-full mb-4">
            Cyber Awareness
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight mb-4">
            Stay Ahead of Digital Threats
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Latest scam alerts, safety practices, and threat intelligence — verified by experts and trusted sources.
          </p>
        </motion.div>

        {/* Tab filters */}
        <div className="flex gap-2 justify-center flex-wrap mb-10">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeTab === t.id
                  ? 'bg-brand-teal text-white border-brand-teal'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-brand-teal hover:text-brand-teal'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all duration-200 cursor-pointer relative"
              >
                <div className="h-0.5" style={{ background: a.color }} />
                <div className="p-6">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block"
                    style={{ background: a.colorBg, color: a.color }}
                  >
                    {a.tag}
                  </span>
                  <h3 className="text-base font-bold text-brand-dark mb-2">{a.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Verified sources bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-slate-50 border border-slate-100 rounded-2xl p-7 text-center"
        >
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <CheckCircle2 className="w-4 h-4 text-brand-success" />
            <span className="text-xs font-bold text-brand-success uppercase tracking-widest">Verified Sources</span>
          </div>
          <p className="text-sm text-slate-500 mb-5">All content is cross-checked with trusted Indian and global authorities</p>
          <div className="flex gap-2 flex-wrap justify-center">
            {authorities.map((a, i) => (
              <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500">
                {a}
              </span>
            ))}
          </div>
          <div className="mt-5">
            <Link
              to="/current-threats"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal hover:underline"
            >
              View all active threats →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AwarenessHub;
