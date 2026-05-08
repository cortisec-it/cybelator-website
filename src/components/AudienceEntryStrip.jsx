import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, HeartHandshake, GraduationCap } from 'lucide-react';

const cards = [
  {
    icon: Shield,
    label: 'I want to stay safe online',
    cta: 'View Today\'s Threats →',
    to: '/current-threats',
    iconBg: 'bg-[#06B6D4]/10',
    iconColor: 'text-[#06B6D4]',
  },
  {
    icon: HeartHandshake,
    label: "I've been a victim of cyber fraud",
    cta: 'Get Help Now →',
    to: '/victim-support',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    icon: GraduationCap,
    label: 'I want a cybersecurity career',
    cta: 'Explore CortiSec Academy →',
    to: '/academy',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
];

function AudienceEntryStrip() {
  return (
    <section className="bg-white py-8 md:py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bg-slate-50 border border-slate-200 rounded-xl shadow-sm p-6 flex flex-col items-start gap-4 h-full hover:shadow-md hover:border-slate-300 transition-all duration-200">
                <div className={`${card.iconBg} p-3 rounded-xl`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <p className="text-base font-semibold text-[#0F172A] leading-snug flex-1">
                  {card.label}
                </p>
                <Link
                  to={card.to}
                  className="inline-flex items-center bg-[#06B6D4] hover:bg-cyan-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
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
