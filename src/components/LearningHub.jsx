import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Shield, Monitor, Globe, Cloud, BarChart2, Mail, Compass } from 'lucide-react';

const topics = [
  { icon: Activity,  title: 'What is a SOC?',            teaser: 'The nerve centre of every enterprise security team.' },
  { icon: Shield,    title: 'How Firewalls Work',        teaser: 'The first line of defence between you and attackers.' },
  { icon: Monitor,   title: 'What is EDR?',              teaser: 'How modern devices detect and stop threats in real time.' },
  { icon: Globe,     title: 'How VPN Protects You',      teaser: 'Why a VPN matters and when you actually need one.' },
  { icon: Cloud,     title: 'What is Cloud Security?',   teaser: 'Keeping your data safe when it lives on the internet.' },
  { icon: BarChart2, title: 'How SIEM Works',            teaser: 'Collecting logs from everything to catch the bad guys.' },
  { icon: Mail,      title: 'What is Phishing?',         teaser: 'The #1 attack method targeting Indians every day.' },
  { icon: Compass,   title: 'Cybersecurity Career Guide',teaser: 'Your complete roadmap from beginner to hired.' },
];

function LearningHub() {
  return (
    <section id="learning-hub" className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-dark">Free Cybersecurity Learning Hub</h2>
          <div className="w-12 h-0.5 bg-brand-accent mx-auto mt-3 rounded-full mb-4" />
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Beginner-friendly guides written for everyone — no technical background needed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <Link
                to="/guides"
                className="group block bg-slate-50 hover:bg-white hover:shadow-card rounded-xl p-5 border border-slate-100 hover:border-slate-200 transition-all duration-200 h-full"
              >
                <topic.icon className="w-6 h-6 text-brand-accent mb-3" />
                <h3 className="text-sm font-bold text-brand-dark mb-1 group-hover:text-brand-accent transition-colors">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{topic.teaser}</p>
                <span className="text-xs font-semibold text-brand-accent">Read Guide →</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-10 text-sm text-slate-500"
        >
          More guides coming weekly —{' '}
          <a
            href="https://t.me/cybelatoralerts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent font-semibold hover:underline"
          >
            follow us on Telegram for updates
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default LearningHub;
