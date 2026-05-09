import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { pricing, targetRoles } from '../data/modules';

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function PricingSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ background: '#F0FDFA', color: '#0D9488', border: '1px solid #99f6e4' }}
          >
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Transparent, EMI-Friendly Fees
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            No hidden costs. Training, lab access, and study materials are all included. Exam fees paid separately to the vendor.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-2xl p-7 flex flex-col"
              style={{
                background: plan.highlight ? '#0B1222' : '#fff',
                border: plan.highlight ? '2px solid #14B8A6' : '1px solid #e2e8f0',
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: '#0D9488' }}
                >
                  <Star className="w-3 h-3" /> {plan.badge}
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-3 ${plan.highlight ? 'text-white' : 'text-slate-800'}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-extrabold mb-1 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {plan.price}
                </div>
                <div className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                  or {plan.emi} EMI
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: plan.highlight ? '#14B8A6' : '#0D9488' }}
                    />
                    <span className={plan.highlight ? 'text-slate-300' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={plan.highlight
                  ? { background: '#14B8A6', color: '#fff' }
                  : { background: '#f1f5f9', color: '#0D9488', border: '1px solid #0D9488' }}
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Target roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-slate-800 text-center mb-8">Roles You Can Target After This Program</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {targetRoles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="bg-white rounded-xl p-4 border border-slate-200 text-center"
              >
                <p className="text-sm font-bold text-slate-800 mb-1">{role.title}</p>
                <p className="text-xs text-slate-400 mb-2 font-medium">{role.level}</p>
                <p className="text-sm font-bold" style={{ color: '#0D9488' }}>{role.salary}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
