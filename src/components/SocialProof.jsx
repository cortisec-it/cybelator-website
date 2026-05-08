import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const placeholders = [
  { caption: 'Cybersecurity Workshop · Guwahati · 2026' },
  { caption: 'Campus Awareness Session · Coming Soon' },
  { caption: 'Online SOC Bootcamp · Register Now' },
];

function SocialProof() {
  return (
    <section id="community" className="bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-dark">Building Northeast India's Cyber Awareness Community</h2>
          <div className="w-12 h-0.5 bg-brand-accent mx-auto mt-3 rounded-full mb-4" />
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Workshops, awareness sessions, and campus events — growing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {placeholders.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
            >
              <div className="bg-slate-100 h-48 flex flex-col items-center justify-center gap-3">
                <Camera className="w-10 h-10 text-slate-300" />
                <span className="text-xs text-slate-400 font-medium">Photo coming soon</span>
              </div>
              <div className="bg-white px-4 py-3">
                <p className="text-sm font-medium text-brand-dark">{item.caption}</p>
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
          <p className="text-slate-500 text-sm mb-4">
            Join <span className="font-bold text-brand-dark">1000+</span> members already learning cybersecurity with us
          </p>
          <a
            href="https://t.me/cybelatoralerts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark font-bold rounded-full px-6 py-3 text-sm hover:shadow-glow transition-all duration-200"
          >
            Join the Community →
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default SocialProof;
