import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, AlertTriangle, FileText, Lock } from 'lucide-react';

const cards = [
  {
    icon: MessageCircle,
    title: 'Talk to a Cyber Expert',
    body: 'Get free guidance on any online threat, scam, or suspicious activity. Our team helps you understand the risk and take the right action immediately.',
    cta: 'Get Help →',
    to: '/victim-support',
    iconBg: 'bg-[#06B6D4]/10',
    iconColor: 'text-[#06B6D4]',
    border: 'border-[#06B6D4]/20',
  },
  {
    icon: AlertTriangle,
    title: 'Report a Cyber Incident',
    body: 'Report phishing, fraud, account compromise, or data theft. We help you document and escalate to I4C, CERT-In, and other relevant authorities.',
    cta: 'Report Now →',
    to: '/victim-support',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    border: 'border-red-100',
  },
  {
    icon: FileText,
    title: 'Recovery Guidance',
    body: 'Been a victim of cyber fraud? We provide step-by-step recovery guidance — securing accounts, recovering data, and preventing further damage.',
    cta: 'Get Recovery Guide →',
    to: '/guides',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    border: 'border-green-100',
  },
  {
    icon: Lock,
    title: 'Privacy & DPDP Rights',
    body: "Understand your rights under India's Digital Personal Data Protection (DPDP) Act and take control of your personal data online.",
    cta: 'Know Your Rights →',
    to: '/guides',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    border: 'border-purple-100',
  },
];

function CyberAssistanceSection() {
  return (
    <section id="cyber-assistance" className="bg-slate-50 py-12 md:py-20 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
            Free Cyber Assistance for Everyone
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you are facing an online scam, a data breach, or account compromise — Cybelator provides free guidance, step-by-step recovery support, and direct escalation to the right authorities.
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
              <div className={`bg-white border ${card.border} rounded-xl shadow-sm p-6 flex flex-col gap-4 h-full hover:shadow-md transition-all duration-200`}>
                <div className={`${card.iconBg} p-3 rounded-xl w-fit`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
                </div>
                <Link
                  to={card.to}
                  className="inline-flex items-center text-[#06B6D4] hover:text-cyan-700 font-semibold text-sm transition-colors duration-200"
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
