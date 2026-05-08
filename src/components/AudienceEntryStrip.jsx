import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldAlert, HeartHandshake, GraduationCap } from 'lucide-react';

const cards = [
  {
    icon: ShieldAlert,
    iconColor: 'text-red-400',
    borderClass: 'border-l-4 border-l-red-500',
    hookColor: 'text-red-400',
    hook: 'STAY PROTECTED',
    title: 'I want to stay safe online',
    body: 'Get live scam alerts, threat warnings, and daily protection tips before you become a target.',
    cta: "View Today's Threats →",
    ctaClass: 'bg-red-500 hover:bg-red-600 text-white',
    to: '/current-threats',
  },
  {
    icon: HeartHandshake,
    iconColor: 'text-amber-400',
    borderClass: 'border-l-4 border-l-amber-400',
    hookColor: 'text-amber-400',
    hook: "WE'RE HERE FOR YOU",
    title: "I've been scammed or hacked",
    body: "Don't panic. Get immediate step-by-step help, report the incident, and recover your accounts fast.",
    cta: 'Get Help Now →',
    ctaClass: 'bg-amber-500 hover:bg-amber-600 text-white',
    to: '/victim-support',
  },
  {
    icon: GraduationCap,
    iconColor: 'text-brand-accent',
    borderClass: 'border-l-4 border-l-brand-accent',
    hookColor: 'text-brand-accent',
    hook: 'START YOUR CAREER',
    title: 'I want a job in cybersecurity',
    body: 'Train on real enterprise tools at CortiSec Academy, Guwahati. 16 weeks. Job-ready. Real labs.',
    cta: 'Explore Academy →',
    ctaClass: 'bg-brand-accent hover:bg-brand-accentDark text-brand-dark',
    to: '/academy',
  },
];

function AudienceEntryStrip() {
  return (
    <section className="bg-brand-navy py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <div className={`bg-brand-dark rounded-2xl shadow-card p-6 ${card.borderClass} flex flex-col gap-4 h-full border border-slate-700/50`}>
                <card.icon className={`w-10 h-10 ${card.iconColor}`} />
                <div className="flex flex-col gap-2 flex-1">
                  <p className={`text-xs font-semibold uppercase tracking-widest ${card.hookColor}`}>
                    {card.hook}
                  </p>
                  <h3 className="text-lg font-semibold text-white leading-snug">{card.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{card.body}</p>
                </div>
                <Link
                  to={card.to}
                  className={`inline-flex items-center justify-center ${card.ctaClass} text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 w-full text-center`}
                >
                  {card.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AudienceEntryStrip;
