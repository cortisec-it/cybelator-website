import React from 'react';
import { motion } from 'framer-motion';
import { User, Linkedin } from 'lucide-react';

function TrainerSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-brand-dark mb-3">
            Learn from Enterprise Security Professionals
          </h2>
          <div className="w-12 h-0.5 bg-brand-accent mx-auto mt-3 rounded-full mb-4" />
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Our trainers are active cybersecurity practitioners — not just instructors.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="bg-white border border-slate-100 rounded-2xl shadow-card p-8 max-w-sm w-full text-center">
            <div className="w-24 h-24 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-brand-accent" />
            </div>

            <h3 className="text-lg font-bold text-brand-dark">Pranjal Kumar Nath</h3>
            <p className="text-sm text-slate-500 mt-1 mb-4">
              Founding Director, CortiSec Technologies
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {['Check Point', 'Enterprise Security', '10+ Years Experience'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-slate-100 text-slate-600 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Active cybersecurity practitioner with enterprise deployment experience across firewall, SOC, IAM, and cloud security domains.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm text-brand-accent font-medium hover:underline"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-slate-400 text-center mt-8"
        >
          Additional industry trainers and OEM-certified instructors will be announced with each batch.
        </motion.p>
      </div>
    </section>
  );
}

export default TrainerSection;
