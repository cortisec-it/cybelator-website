import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Network, Shield, Monitor, Mail, Cloud, Globe, Eye, Key, MapPin, Users, CheckCircle2, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/30 px-4 py-1.5 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-brand-accent" />
              <span className="text-brand-accent text-xs font-semibold tracking-wide">CortiSec Academy · Guwahati</span>
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

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-accent to-brand-accentDark py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Ready to Start?</h2>
            <p className="text-brand-dark/70 mb-10 text-base leading-relaxed">
              Seats are limited per batch. Apply early to secure your spot at the Guwahati Training Centre.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-brand-dark text-white font-bold h-12 px-8 rounded-full text-base hover:bg-brand-darker transition-all duration-200 shadow-lg"
              >
                <a href="mailto:careers@cortisec.com?subject=CortiSec Academy Application" target="_blank" rel="noopener noreferrer">
                  Apply for Next Batch
                </a>
              </Button>
              <Button
                asChild
                className="bg-white text-brand-dark font-semibold h-12 px-8 rounded-full text-base hover:bg-slate-100 transition-all duration-200 shadow-lg"
              >
                <a href="mailto:careers@cortisec.com?subject=Academy Enquiry" target="_blank" rel="noopener noreferrer">
                  Talk to an Advisor
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-brand-dark/60">
              CortiSec Academy is an initiative of{' '}
              <a href="https://cortisec.com" target="_blank" rel="noopener noreferrer" className="text-brand-dark font-semibold hover:underline">
                CortiSec Technologies Private Limited
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AcademyPage;
