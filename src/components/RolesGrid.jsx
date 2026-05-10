import React from 'react';
import { motion } from 'framer-motion';
import { targetRoles } from '../data/modules';

export default function RolesGrid() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            Roles You Can Target After This Program
          </h3>
          <p className="text-sm text-slate-400">Mapped to real job descriptions across Indian enterprises and MSSPs</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {targetRoles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="bg-white rounded-xl p-4 border border-slate-200 text-center hover:border-teal-200 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-slate-800 mb-1">{role.title}</p>
              <p className="font-mono text-[10px] text-slate-400 mb-2 font-medium tracking-wide">{role.level}</p>
              <p className="text-sm font-bold" style={{ color: '#0D9488' }}>{role.salary}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          Salary ranges are indicative and sourced from Naukri, LinkedIn, and Glassdoor data for 2024–25. Actual offers vary.
        </p>
      </div>
    </section>
  );
}
