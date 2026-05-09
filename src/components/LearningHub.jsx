import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Lock, Eye, Shield, Zap, Target, ChevronRight } from 'lucide-react';

const resources = [
  {
    Icon: Globe,
    iconBg: 'bg-brand-teal-50',
    iconColor: 'text-brand-teal',
    title: 'Network Security Basics',
    desc: 'Understand how networks work and how to protect them from common attacks.',
    level: 'Beginner',
    count: '12 Lessons',
  },
  {
    Icon: Lock,
    iconBg: 'bg-brand-indigo-50',
    iconColor: 'text-brand-indigo',
    title: 'Password & Account Safety',
    desc: 'Strong passwords, password managers, and two-factor authentication explained.',
    level: 'Beginner',
    count: '8 Lessons',
  },
  {
    Icon: Eye,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    title: 'SOC Fundamentals',
    desc: 'Learn how Security Operations Centres detect and respond to cyber threats.',
    level: 'Intermediate',
    count: '10 Lessons',
  },
  {
    Icon: Shield,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    title: 'Cyber Hygiene',
    desc: 'Daily practices to keep your digital life safe and your devices secure.',
    level: 'Everyone',
    count: '6 Lessons',
  },
  {
    Icon: Zap,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    title: 'Phishing & Scam Detection',
    desc: 'Recognize phishing attempts, fake job offers, and online fraud patterns.',
    level: 'Beginner',
    count: '9 Lessons',
  },
  {
    Icon: Target,
    iconBg: 'bg-brand-teal-50',
    iconColor: 'text-brand-teal',
    title: 'Cloud Security Basics',
    desc: 'Securing cloud infrastructure — AWS, Azure, and GCP for beginners.',
    level: 'Intermediate',
    count: '11 Lessons',
  },
];

const levelColors = {
  Beginner: 'bg-green-50 text-green-700',
  Intermediate: 'bg-amber-50 text-amber-700',
  Everyone: 'bg-brand-teal-50 text-brand-teal-dark',
};

function LearningHub() {
  return (
    <section id="learning-hub" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 bg-brand-teal-50 text-brand-teal font-semibold text-xs px-4 py-1.5 rounded-full mb-4">
            Learning Hub
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight mb-4">
            Free Cybersecurity Resources
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Curated learning paths for beginners and aspiring professionals. Start anywhere, go at your own pace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.08 }}
            >
              <Link
                to="/guides"
                className="group block bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 h-full hover:shadow-card hover:border-brand-teal hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${r.iconBg}`}>
                    <r.Icon className={`w-5 h-5 ${r.iconColor}`} />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${levelColors[r.level]}`}>
                    {r.level}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-brand-dark mb-1.5 group-hover:text-brand-teal transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{r.desc}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-slate-400 font-medium">{r.count}</span>
                  <span className="text-sm font-semibold text-brand-teal flex items-center gap-0.5">
                    Start <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 border border-brand-teal text-brand-teal font-semibold rounded-xl px-6 py-3 text-sm hover:bg-brand-teal hover:text-white transition-all duration-200"
          >
            Explore All Resources
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default LearningHub;
