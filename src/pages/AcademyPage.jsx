import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Network, Shield, Monitor, Mail, Cloud, Globe, Eye, Key, MapPin, Users, CheckCircle2, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TrainerSection from '@/components/TrainerSection';

const domains = [
  {
    icon: Network,
    title: 'Networking & Security Fundamentals',
    body: 'TCP/IP, routing, switching, network architecture, firewalling concepts, and security protocols — the foundation every cybersecurity engineer must master.',
    borderColor: 'border-t-blue-500',
    iconColor: 'text-blue-600',
  },
  {
    icon: Shield,
    title: 'Firewall & Network Security',
    body: 'Hands-on configuration and management of next-gen firewalls, security policies, VPN, and threat prevention on Check Point Quantum and other leading platforms.',
    borderColor: 'border-t-brand-accent',
    iconColor: 'text-brand-accent',
  },
  {
    icon: Monitor,
    title: 'Endpoint Detection & Response',
    body: 'Real-world EDR training covering threat prevention, anti-ransomware, incident response, and endpoint security management on enterprise EDR platforms.',
    borderColor: 'border-t-green-500',
    iconColor: 'text-green-600',
  },
  {
    icon: Mail,
    title: 'Email & Collaboration Security',
    body: 'Protecting Microsoft 365 and Google Workspace against phishing, BEC, malware, and account takeover using enterprise email security platforms.',
    borderColor: 'border-t-orange-500',
    iconColor: 'text-orange-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    body: 'Cloud security across AWS, Azure, and GCP — covering CSPM, workload protection, CASB, DLP, and cloud-native security operations.',
    borderColor: 'border-t-sky-500',
    iconColor: 'text-sky-600',
  },
  {
    icon: Globe,
    title: 'SASE & Zero Trust',
    body: 'Modern network security including Secure Access Service Edge, Zero Trust Network Access, and SD-WAN on Cato Networks and leading platforms.',
    borderColor: 'border-t-indigo-500',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Eye,
    title: 'SOC, SIEM & Threat Exposure',
    body: 'Security Operations Centre workflows, log analysis, threat detection, SIEM operations, SOAR automation, and External Risk Management for analyst roles.',
    borderColor: 'border-t-red-500',
    iconColor: 'text-red-500',
  },
  {
    icon: Key,
    title: 'Identity, Access & Observability',
    body: 'Identity and Access Management, Privileged Access Management, Single Sign-On, MFA, and infrastructure observability for enterprise environments.',
    borderColor: 'border-t-purple-500',
    iconColor: 'text-purple-600',
  },
];

const journeySteps = [
  { step: '01', label: 'Foundations', weeks: 'Weeks 1–4' },
  { step: '02', label: 'Hands-On Labs', weeks: 'Weeks 5–10' },
  { step: '03', label: 'SOC Simulation', weeks: 'Weeks 11–14' },
  { step: '04', label: 'Placement Prep', weeks: 'Weeks 15–16' },
];

const qualifications = ['10th', '12th', 'Diploma', 'BCA', 'BTech', 'MCA', 'BSc IT', 'Other Graduate', 'Working Professional'];
const backgrounds = ['Student', 'Fresher', 'IT Professional', 'Career Switcher', 'Other'];
const sources = ['Google', 'Cybelator', 'Social Media', 'Friend', 'CortiSec Website', 'Other'];

function BatchRegistrationForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', qualification: '', background: '', source: '', message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/training', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setSuccess(true);
    } catch (_) {
      setError('Something went wrong. Please email careers@cortisec.com directly.');
    }
    setSubmitting(false);
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 text-center">
        <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-500" />
        <p className="font-semibold">Application received!</p>
        <p className="text-sm mt-1">Our team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
          <input required name="name" value={form.name} onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
            placeholder="Pranjal Kumar" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
            placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number * (+91)</label>
        <input required name="phone" value={form.phone} onChange={handleChange}
          pattern="[6-9][0-9]{9}"
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
          placeholder="9876543210" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Highest Qualification *</label>
          <select required name="qualification" value={form.qualification} onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/40">
            <option value="">Select…</option>
            {qualifications.map((q) => <option key={q} value={q}>{q}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Current Background *</label>
          <select required name="background" value={form.background} onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/40">
            <option value="">Select…</option>
            {backgrounds.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">How did you hear about us? *</label>
        <select required name="source" value={form.source} onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/40">
          <option value="">Select…</option>
          {sources.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Message (optional)</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={3}
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/40 resize-none"
          placeholder="Any questions about the program?" />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <Button type="submit" disabled={submitting}
        className="w-full bg-brand-accent text-brand-dark font-bold rounded-full py-3 text-base hover:shadow-glow transition-all">
        {submitting ? 'Submitting…' : 'Submit Application →'}
      </Button>
    </form>
  );
}

function AcademyPage() {
  return (
    <>
      <Helmet>
        <title>CortiSec Academy — Cybersecurity Training in Guwahati | Cybelator</title>
        <meta name="description" content="CortiSec Academy trains freshers at our Guwahati Training Centre on real enterprise cybersecurity platforms. Build real skills. Get certified. Get hired." />
      </Helmet>

      {/* Hero */}
      <section className="bg-brand-darker text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Ownership banner */}
          <div className="bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm rounded-xl p-3 text-center mb-8">
            CortiSec Academy is an initiative of CortiSec Technologies Pvt. Ltd. For enterprise cybersecurity services,{' '}
            <a href="https://cortisec.com" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-brand-accentDark">
              visit cortisec.com →
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/30 px-4 py-1.5 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-brand-accent" />
              <span className="text-brand-accent text-xs font-semibold tracking-wide">CortiSec Academy (by CortiSec Technologies) · Guwahati</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Launch Your{' '}
              <span className="text-brand-accent">Career</span>{' '}
              in Cybersecurity
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              CortiSec Academy trains freshers at our Guwahati Training Centre on real enterprise cybersecurity platforms — the same tools deployed for enterprise clients. Build real skills. Get certified. Get hired.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400 mb-10">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-accent" /> Training Centre: Guwahati, Assam
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-accent" /> Batch-based enrollment
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-accent" /> Limited seats per batch
              </span>
            </div>

            <Button
              asChild
              className="bg-brand-accent text-brand-dark font-bold rounded-full h-12 px-8 text-base hover:shadow-glow transition-all duration-200"
            >
              <a href="mailto:careers@cortisec.com?subject=CortiSec Academy Application" target="_blank" rel="noopener noreferrer">
                Apply for Next Batch →
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Domain Cards */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-3">8 Core Security Domains</h2>
            <div className="w-12 h-0.5 bg-brand-accent mx-auto mt-3 rounded-full mb-4" />
            <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
              Every module is taught on enterprise platforms used by real security teams — not simulators or theory alone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {domains.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <div className={`bg-white border-t-4 ${domain.borderColor} rounded-2xl shadow-card p-6 flex flex-col gap-4 h-full hover:shadow-lg transition-all duration-200`}>
                  <domain.icon className={`w-8 h-8 ${domain.iconColor}`} />
                  <div>
                    <h3 className="text-base font-bold text-brand-dark mb-2 leading-snug">
                      {domain.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{domain.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Journey */}
      <section className="bg-brand-darker py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Your 16-Week Journey</h2>
            <div className="w-12 h-0.5 bg-brand-accent mx-auto mt-3 rounded-full mb-4" />
            <p className="text-slate-400 text-base">From zero to job-ready in four structured phases.</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-0">
            {journeySteps.map((s, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center flex-1 px-4 py-6 md:py-0"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-accent text-brand-dark font-black text-lg flex items-center justify-center mb-4 shadow-glow">
                    {s.step}
                  </div>
                  <p className="font-bold text-white text-base">{s.label}</p>
                  <p className="text-xs text-slate-400 mt-1">{s.weeks}</p>
                </motion.div>
                {i < journeySteps.length - 1 && (
                  <div className="hidden md:block flex-shrink-0 w-16 border-t-2 border-dashed border-brand-accent/40" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <TrainerSection />

      {/* Batch Registration Form */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-dark mb-3">Apply for CortiSec Academy</h2>
              <div className="w-12 h-0.5 bg-brand-accent mx-auto mt-3 rounded-full mb-4" />
              <p className="text-slate-500 text-base">
                Fill in your details and our team will contact you within 24 hours to discuss the next batch.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-card p-8">
              <BatchRegistrationForm />
            </div>
            <p className="mt-6 text-center text-sm text-slate-400">
              CortiSec Academy (by CortiSec Technologies) ·{' '}
              <a href="https://cortisec.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                cortisec.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AcademyPage;
