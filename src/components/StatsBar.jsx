import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: 20, suffix: '', label: 'Weeks Program', sub: 'Full curriculum duration' },
  { value: 11, suffix: '', label: 'Modules', sub: 'Across 4 phases' },
  { value: 9, suffix: '', label: 'Certifications', sub: 'From top vendors' },
  { value: 8, suffix: '+', label: 'Target Roles', sub: 'Mapped to industry JDs' },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else { setCount(Math.floor(current)); }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString('en-IN')}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <section id="stats" className="border-y border-slate-800/50" style={{ background: '#0d1f35' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold mb-1 text-cyan-400" style={{ letterSpacing: '-0.02em' }}>
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm font-semibold text-slate-400 mb-0.5">{s.label}</div>
              <div className="text-xs text-slate-500">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
