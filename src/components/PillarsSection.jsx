import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Heart, Compass, ArrowRight } from 'lucide-react';

const pillars = [
  {
    Icon: Shield,
    iconBg: 'bg-brand-teal-50',
    iconColor: 'text-brand-teal',
    badge: 'AWARENESS',
    badgeColor: 'text-brand-teal',
    title: 'Cyber Awareness',
    desc: 'Stay informed with latest scam alerts, threat intelligence, safety tips, and cyber hygiene practices. Verified by trusted sources.',
    cta: 'Explore Threats',
    to: '/current-threats',
    hoverBorder: 'hover:border-brand-teal',
  },
  {
    Icon: Heart,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    badge: 'ASSISTANCE',
    badgeColor: 'text-red-500',
    title: 'Fraud Assistance',
    desc: "Been affected by cyber fraud? Get immediate guidance — report incidents, secure accounts, and find recovery pathways.",
    cta: 'Get Help Now',
    to: '/victim-support',
    hoverBorder: 'hover:border-red-400',
  },
  {
    Icon: Compass,
    iconBg: 'bg-brand-indigo-50',
    iconColor: 'text-brand-indigo',
    badge: 'CAREERS',
    badgeColor: 'text-brand-indigo',
    title: 'Career Discovery',
    desc: 'Explore cybersecurity careers from scratch. Free workshops, learning roadmaps, and a pathway to professional training.',
    cta: 'Discover Paths',
    to: '/guides',
    hoverBorder: 'hover:border-brand-indigo',
  },
];

function PillarsSection() {
  return (
    <section className="bg-white py-20 md:py-28" id="pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 bg-brand-teal-50 text-brand-teal font-semibold text-xs px-4 py-1.5 rounded-full mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight mb-4">
            One Platform. Three Missions.
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to stay safe online, get help when affected, and discover your career in cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={p.to}
                className={`block bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-5 h-full hover:shadow-card transition-all duration-200 ${p.hoverBorder} hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${p.iconBg}`}>
                  <p.Icon className={`w-6 h-6 ${p.iconColor}`} />
                </div>
                <div className="flex-1">
                  <span className={`text-xs font-bold uppercase tracking-widest ${p.badgeColor} block mb-2`}>{p.badge}</span>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${p.iconColor} mt-auto`}>
                  {p.cta} <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PillarsSection;
