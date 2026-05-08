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
    tagClass: 'bg-brand-accent/20 text-brand-accent border-brand-accent/30',
    iconClass: 'text-brand-dark',
    circleClass: 'bg-brand-accent shadow-glow ring-brand-accent',
    active: true,
  },
  {
    icon: BookOpen,
    label: 'Stage 2',
    title: 'Fundamentals',
    body: 'Learn networking basics, security concepts, and how the internet actually works.',
    tag: 'Free on Cybelator',
    tagClass: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    iconClass: 'text-brand-dark',
    circleClass: 'bg-brand-accent shadow-glow ring-brand-accent',
    active: true,
  },
  {
    icon: Terminal,
    label: 'Stage 3',
    title: 'Hands-On Labs',
    body: 'Practice on real enterprise security tools in a safe lab environment.',
    tag: 'CortiSec Academy',
    tagClass: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    iconClass: 'text-purple-400',
    circleClass: 'bg-slate-700 border-dashed border-2 border-slate-600',
    active: false,
  },
  {
    icon: Shield,
    label: 'Stage 4',
    title: 'Enterprise Skills',
    body: 'Master the platforms enterprises actually deploy — firewalls, EDR, cloud security, SOC.',
    tag: 'CortiSec Academy',
    tagClass: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    iconClass: 'text-orange-400',
    circleClass: 'bg-slate-700 border-dashed border-2 border-slate-600',
    active: false,
  },
  {
    icon: Briefcase,
    label: 'Stage 5',
    title: 'Job Ready',
    body: 'Get placed through CortiSec\'s enterprise network with a portfolio of real-world skills.',
    tag: 'CortiSec Placement',
    tagClass: 'bg-green-500/20 text-green-400 border-green-500/30',
    iconClass: 'text-green-400',
    circleClass: 'bg-slate-700 border-dashed border-2 border-slate-600',
    active: false,
  },
];

function CareerRoadmap() {
  return (
    <section id="roadmap" className="bg-brand-darker py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Your Cybersecurity Journey Starts Here</h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-3 rounded-full mb-6" />
          <p className="text-base text-slate-400 max-w-2xl mx-auto text-center leading-relaxed">
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
                  className={`flex-1 flex flex-col items-center text-center px-3 ${!stage.active ? 'opacity-75' : ''}`}
                >
                  {/* Icon circle */}
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ring-2 ${stage.circleClass}`}>
                    <stage.icon className={`w-8 h-8 ${stage.iconClass}`} />
                  </div>

                  {/* Card */}
                  <div className={`w-full rounded-2xl p-4 border ${stage.active ? 'bg-slate-800/80 shadow-card border-slate-700' : 'bg-slate-800/40 border-slate-700/50'}`}>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{stage.label}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-3 max-w-[160px] mx-auto">{stage.body}</p>
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${stage.tagClass}`}>
                      {stage.tag}
                    </span>
                  </div>
                </motion.div>

                {/* Connector */}
                {i < stages.length - 1 && (
                  <div className="flex items-start pt-10 shrink-0 w-6">
                    <div className="w-full border-t-2 border-dashed border-brand-accent/40" />
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
          <p className="text-sm text-slate-400 mb-2">
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
