import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Video, Users } from 'lucide-react';

const placeholders = [
  {
    icon: Camera,
    label: 'Workshop Photos',
    sub: 'Coming — First Batch 2026',
    caption: 'Cybersecurity Workshop · Guwahati Training Centre',
    captionSub: 'CortiSec Academy · Batch 1',
  },
  {
    icon: Video,
    label: 'Student Testimonials',
    sub: 'After Batch 1 Completion',
    caption: 'What Our Students Say',
    captionSub: 'Testimonials coming soon',
  },
  {
    icon: Users,
    label: 'Campus Events',
    sub: 'Awareness Sessions · 2026',
    caption: 'Northeast India Cyber Awareness Tour',
    captionSub: 'Dates to be announced',
  },
];

function SocialProof() {
  return (
    <section id="community" className="bg-white py-20 md:py-28 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Building Northeast India's Cyber Awareness Community</h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-3 rounded-full mb-6" />
          <p className="text-base text-slate-500 max-w-2xl mx-auto text-center leading-relaxed">
            Workshops, awareness sessions, and campus events — growing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {placeholders.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-brand-darker border border-slate-700 rounded-2xl overflow-hidden"
            >
              <div className="bg-brand-navy min-h-[200px] flex flex-col items-center justify-center gap-3">
                <item.icon className="w-12 h-12 text-slate-600" />
                <span className="text-sm text-slate-500 font-medium">{item.label}</span>
                <span className="text-xs text-slate-600">{item.sub}</span>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-white">{item.caption}</p>
                <p className="text-xs text-slate-400 mt-1">{item.captionSub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-slate-400 text-sm mb-2">
            Be part of our first batch — and be featured here.
          </p>
          <Link
            to="/academy"
            className="text-brand-accent font-semibold text-sm hover:underline"
          >
            Apply Now →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default SocialProof;
