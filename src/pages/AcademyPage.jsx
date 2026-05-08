import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Network, Shield, Monitor, Mail, Cloud, Globe, Eye, Key, MapPin, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const domains = [
  {
    icon: Network,
    title: 'Networking & Security Fundamentals',
    body: 'TCP/IP, routing, switching, network architecture, firewalling concepts, and security protocols — the foundation every cybersecurity engineer must master.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Shield,
    title: 'Firewall & Network Security',
    body: 'Hands-on configuration and management of next-gen firewalls, security policies, VPN, and threat prevention on Check Point Quantum and other leading platforms.',
    iconBg: 'bg-[#06B6D4]/10',
    iconColor: 'text-[#06B6D4]',
  },
  {
    icon: Monitor,
    title: 'Endpoint Detection & Response',
    body: 'Real-world EDR training covering threat prevention, anti-ransomware, incident response, and endpoint security management on enterprise EDR platforms.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Mail,
    title: 'Email & Collaboration Security',
    body: 'Protecting Microsoft 365 and Google Workspace against phishing, BEC, malware, and account takeover using enterprise email security platforms.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    body: 'Cloud security across AWS, Azure, and GCP — covering CSPM, workload protection, CASB, DLP, and cloud-native security operations.',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    icon: Globe,
    title: 'SASE & Zero Trust',
    body: 'Modern network security including Secure Access Service Edge, Zero Trust Network Access, and SD-WAN on Cato Networks and leading platforms.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Eye,
    title: 'SOC, SIEM & Threat Exposure',
    body: 'Security Operations Centre workflows, log analysis, threat detection, SIEM operations, SOAR automation, and External Risk Management for analyst roles.',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    icon: Key,
    title: 'Identity, Access & Observability',
    body: 'Identity and Access Management, Privileged Access Management, Single Sign-On, MFA, and infrastructure observability for enterprise environments.',
    iconBg: 'bg-purple-50',
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
      <section className="bg-[#0F172A] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#06B6D4]/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#06B6D4]/20 border border-[#06B6D4]/30 px-4 py-1.5 rounded-full mb-6">
              <Shield className="w-4 h-4 text-[#06B6D4]" />
              <span className="text-[#06B6D4] text-sm font-semibold">CortiSec Academy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Launch Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-cyan-400">
                Cybersecurity Career
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              CortiSec Academy trains freshers at our Guwahati Training Centre on real enterprise cybersecurity platforms — the same tools deployed for enterprise clients. Build real skills. Get certified. Get hired.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#06B6D4]" /> Training Centre: Guwahati, Assam
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#06B6D4]" /> Batch-based enrollment
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#06B6D4]" /> Limited seats per batch
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Domain Cards */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
              8 Core Security Domains
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
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
              >
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex flex-col gap-4 h-full hover:shadow-md hover:border-slate-300 transition-all duration-200">
                  <div className={`${domain.iconBg} p-3 rounded-xl w-fit`}>
                    <domain.icon className={`w-6 h-6 ${domain.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-2 leading-snug">
                      {domain.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{domain.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Journey */}
      <section className="bg-white py-12 md:py-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3">
              Your 16-Week Journey
            </h2>
            <p className="text-slate-500 text-base">From zero to job-ready in four structured phases.</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-stretch gap-0">
            {journeySteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex-1 flex flex-col md:flex-row items-center"
              >
                <div className="flex flex-col items-center text-center flex-1 px-4 py-6 md:py-0">
                  <div className="w-12 h-12 rounded-full bg-[#06B6D4] text-white font-bold text-lg flex items-center justify-center mb-3 shadow-md shadow-cyan-200">
                    {s.step}
                  </div>
                  <p className="font-bold text-[#0F172A] text-base">{s.label}</p>
                  <p className="text-xs text-slate-400 mt-1">{s.weeks}</p>
                </div>
                {i < journeySteps.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <ArrowRight className="w-5 h-5 text-[#06B6D4]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="bg-[#0F172A] py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start?
            </h2>
            <p className="text-slate-400 mb-8 text-base leading-relaxed">
              Seats are limited per batch. Apply early to secure your spot at the Guwahati Training Centre.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#06B6D4] hover:bg-cyan-600 text-white font-bold h-12 px-8 rounded-xl text-base shadow-lg shadow-cyan-900/30 transition-all"
              >
                <a
                  href="mailto:careers@cortisec.com?subject=CortiSec Academy Application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply for Next Batch
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4]/10 hover:text-[#06B6D4] font-semibold h-12 px-8 rounded-xl text-base transition-all"
              >
                <a
                  href="mailto:careers@cortisec.com?subject=Academy Enquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk to an Advisor
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-slate-400">
              CortiSec Academy is an initiative of{' '}
              <a
                href="https://cortisec.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06B6D4] hover:underline"
              >
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
