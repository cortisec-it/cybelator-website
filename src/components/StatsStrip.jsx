import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function CountUp({ target, prefix = '', suffix = '', decimals = 0, duration = 1.8 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setValue(decimals ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration, decimals]);

  const display = decimals ? value.toFixed(decimals) : value.toLocaleString('en-IN');
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const stats = [
  {
    prefix: '₹',
    target: 11333,
    suffix: ' Cr',
    decimals: 0,
    label: 'Lost to cyber fraud in India in 2024',
    source: 'MHA Annual Report',
  },
  {
    prefix: '',
    target: 7,
    suffix: ' Lakh+',
    decimals: 0,
    label: 'Cyber complaints filed in India in 2024',
    source: 'I4C, Ministry of Home Affairs',
  },
  {
    prefix: '',
    target: 1.5,
    suffix: ' Lakh+',
    decimals: 1,
    label: 'Cybersecurity jobs unfilled in India',
    source: 'NASSCOM 2024',
  },
  {
    prefix: '',
    target: 16,
    suffix: ' Weeks',
    decimals: 0,
    label: 'To become job-ready with CortiSec Academy',
    source: 'Guwahati Training Centre',
  },
];

function StatsStrip() {
  return (
    <section className="bg-[#0F172A] py-12 md:py-16 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#06B6D4] mb-2">
                <CountUp
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="text-sm text-slate-300 leading-snug mb-1">{stat.label}</p>
              <p className="text-xs text-slate-500">{stat.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsStrip;
