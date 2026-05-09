import React from 'react';
import { motion } from 'framer-motion';
import { Target, Briefcase, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

const features = [
  {
    Icon: Target,
    title: 'Enterprise-Grade Training',
    desc: 'Real-world labs, multi-vendor environments, production-level scenarios.',
  },
  {
    Icon: Briefcase,
    title: 'Industry-Led Curriculum',
    desc: 'Designed by practicing security engineers, not academic theorists.',
  },
  {
    Icon: Award,
    title: 'Career Placement',
    desc: 'Direct pathways to cybersecurity roles in enterprise organizations.',
  },
];

function AcademyPromoSection() {
  return (
    <section
      id="academy"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0B1222 0%, #0D2137 50%, #111D2E 100%)',
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(255,107,53,0.12)', color: '#FF6B35' }}
          >
            Ready for the Next Level?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
            CortiSec Academy
          </h2>
          <p className="text-sm text-slate-400 mb-4">by CortiSec Technologies</p>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            When you're ready to go deeper, CortiSec Academy offers enterprise-grade, hands-on cybersecurity training built for the real world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 text-center flex flex-col items-center gap-4 hover:border-brand-teal/40 transition-all duration-200"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(255,107,53,0.1)', color: '#FF6B35' }}
              >
                <f.Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://cortisec.com/academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold rounded-xl px-7 py-3.5 text-white transition-all duration-200 hover:opacity-90"
            style={{ background: '#FF6B35' }}
          >
            Explore CortiSec Academy <ArrowRight className="w-4 h-4" />
          </a>
          <div className="flex gap-6 justify-center flex-wrap mt-5">
            {['Practical', 'Enterprise-Ready', 'Industry-Led'].map((tag, i) => (
              <span key={i} className="text-sm font-semibold text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AcademyPromoSection;
