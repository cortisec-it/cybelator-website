import React from 'react';
import { motion } from 'framer-motion';

function CareerDiscoveryTeaser() {
  const handleScrollToRoadmap = (e) => {
    e.preventDefault();
    document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-brand-accent py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-brand-dark/60 mb-3">
              Career Opportunity
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 leading-tight">
              Cybersecurity is India's Fastest Growing Career
            </h2>
            <p className="text-brand-dark/75 text-base leading-relaxed mb-6 max-w-lg">
              Over 1.5 lakh cybersecurity jobs are unfilled in India right now. Cybelator helps you discover if this is the right career for you — for free.
            </p>
            <a
              href="#roadmap"
              onClick={handleScrollToRoadmap}
              className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold rounded-full px-6 py-3 text-sm hover:bg-brand-darker transition-all duration-200 shadow-md"
            >
              Explore Career Path →
            </a>
          </motion.div>

          {/* Right — 3 quick stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-row md:flex-col gap-4 md:gap-3 shrink-0"
          >
            {[
              { value: '₹6–12 LPA', label: 'Entry-level salary range' },
              { value: '1.5L+', label: 'Open jobs in India' },
              { value: '16 Weeks', label: 'To get job-ready' },
            ].map((stat, i) => (
              <div key={i} className="bg-brand-dark/10 rounded-2xl px-6 py-4 text-center min-w-[120px]">
                <p className="text-2xl font-black text-brand-dark">{stat.value}</p>
                <p className="text-xs text-brand-dark/70 mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default CareerDiscoveryTeaser;
