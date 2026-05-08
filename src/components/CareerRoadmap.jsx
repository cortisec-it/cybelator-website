import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, BookOpen, Terminal, Shield, Briefcase } from 'lucide-react';

const stages = [
  {
    icon: Eye,
    label: 'Stage 1',
    title: 'Awareness',
    body: 'Understand today\'s cyber threats, scams, and how attackers think.',
    tag: 'You are here on Cybelator',
    tagClass: 'bg-brand-accent/20 text-brand-dark border-brand-accent/30',
    iconClass: 'text-brand-accent',
    ringClass: 'ring-brand-accent',
    active: true,
  },
  {
    icon: BookOpen,
    label: 'Stage 2',
    title: 'Fundamentals',
    body: 'Learn networking basics, security concepts, and how the internet actually works.',
    tag: 'Free on Cybelator',
    tagClass: 'bg-blue-100 text-blue-700 border-blue-200',
    iconClass: 'text-blue-600',
    ringClass: 'ring-blue-400',
    active: true,
  },
  {
    icon: Terminal,
    label: 'Stage 3',
    title: 'Hands-On Labs',
    body: 'Practice on real enterprise security tools in a safe lab environment.',
    tag: 'CortiSec Academy',
    tagClass: 'bg-purple-100 text-purple-700 border-purple-200',
    iconClass: 'text-purple-500',
    ringClass: 'ring-purple-300',
    active: false,
  },
  {
    icon: Shield,
    label: 'Stage 4',
    title: 'Enterprise Skills',
    body: 'Master the platforms enterprises actually deploy — firewalls, EDR, cloud security, SOC.',
    tag: 'CortiSec Academy',
    tagClass: 'bg-orange-100 text-orange-700 border-orange-200',
    iconClass: 'text-orange-500',
    ringClass: 'ring-orange-300',
    active: false,
  },
  {
    icon: Briefcase,
    label: 'Stage 5',
    title: 'Job Ready',
    body: 'Get placed through CortiSec\'s enterprise network with a portfolio of real-world skills.',
    tag: 'CortiSec Placement',
    tagClass: 'bg-green-100 text-green-700 border-green-200',
    iconClass: 'text-green-600',
    ringClass: 'ring-green-300',
    active: false,
  },
];

function CareerRoadmap() {
  return (
    <section id="roadmap" className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-brand-dark">Your Cybersecurity Journey Starts Here</h2>
          <div className="w-12 h-0.5 bg-brand-accent mx-auto mt-3 rounded-full mb-4" />
          <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
            From zero knowledge to job-ready — here's how the path looks.
          </p>
        </motion.div>

        {/* Roadmap — horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-4">
          <div className="flex items-start gap-0 min-w-[720px] md:min-w-0">
            {stages.map((stage, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex-1 flex flex-col items-center text-center px-3"
                >
                  {/* Icon circle */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ring-2 ${stage.ringClass} ${stage.active ? 'bg-white shadow-card' : 'bg-slate-100 opacity-70'}`}>
                    <stage.icon className={`w-6 h-6 ${stage.iconClass}`} />
                  </div>

                  {/* Card */}
                  <div className={`w-full rounded-2xl p-4 border ${stage.active ? 'bg-white shadow-card border-slate-100' : 'bg-slate-100/60 border-slate-200 opacity-75'}`}>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{stage.label}</p>
                    <h3 className="text-base font-bold text-brand-dark mb-2">{stage.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">{stage.body}</p>
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${stage.tagClass}`}>
                      {stage.tag}
                    </span>
                  </div>
                </motion.div>

                {/* Connector */}
                {i < stages.length - 1 && (
                  <div className="flex items-start pt-7 shrink-0 w-6">
                    <div className="w-full border-t-2 border-dashed border-brand-accent/40 mt-0" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Transition CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-slate-500 mb-2">
            Stages 3–5 are covered at CortiSec Academy with hands-on enterprise training.
          </p>
          <Link to="/academy" className="text-brand-accent font-semibold text-sm hover:underline">
            Want hands-on enterprise training? Explore CortiSec Academy →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default CareerRoadmap;
