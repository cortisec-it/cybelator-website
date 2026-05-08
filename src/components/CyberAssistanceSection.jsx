import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, AlertTriangle, RefreshCw, BookOpen } from 'lucide-react';

const cards = [
  {
    icon: MessageCircle,
    iconColor: 'text-[#06B6D4]',
    iconBg: 'bg-[#06B6D4]/10',
    title: 'Talk to a Cyber Expert — Free',
    body: 'Confused about a scam or threat? Our experts guide you immediately.',
    cta: 'Chat Now →',
    ctaColor: 'text-[#06B6D4] hover:text-cyan-700',
    to: '/victim-support',
  },
  {
    icon: AlertTriangle,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50',
    title: 'Report the Crime',
    body: 'We help you file with I4C, CERT-In, and cybercrime portal in minutes.',
    cta: 'Report Now →',
    ctaColor: 'text-red-500 hover:text-red-700',
    to: '/victim-support',
  },
  {
    icon: RefreshCw,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    title: 'Recover Your Accounts',
    body: 'Step-by-step recovery for hacked email, social media, banking, and UPI.',
    cta: 'Get Recovery Steps →',
    ctaColor: 'text-green-600 hover:text-green-800',
    to: '/guides',
  },
  {
    icon: BookOpen,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    title: 'Know Your DPDP Rights',
    body: "India's new data privacy law protects you. Learn how to use it.",
    cta: 'Read the Guide →',
    ctaColor: 'text-purple-600 hover:text-purple-800',
    to: '/guides',
  },
];

function CyberAssistanceSection() {
  return (
    <section id="cyber-assistance" className="bg-white py-12 md:py-20 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
            Got Scammed? Hacked? We Help — Free.
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            You are not alone. Every day thousands of Indians lose money and data to cyber criminals. Cybelator gives you free, expert guidance to fight back.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bg-slate-50 rounded-xl p-6 flex flex-col gap-4 h-full hover:shadow-md transition-all duration-200">
                <div className={`${card.iconBg} p-3 rounded-xl w-fit`}>
                  <card.icon className={`w-8 h-8 ${card.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
                </div>
                <Link
                  to={card.to}
                  className={`inline-flex items-center font-semibold text-sm transition-colors duration-200 ${card.ctaColor}`}
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

export default CyberAssistanceSection;
