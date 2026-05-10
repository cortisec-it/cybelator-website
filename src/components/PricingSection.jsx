import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, ArrowRight, AlertTriangle } from 'lucide-react';
import { pricing } from '../data/modules';

const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Founding batch banner */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2.5 max-w-2xl mx-auto mb-10 px-4 py-2.5 rounded-xl"
          style={{ background: '#faeeda', border: '0.5px solid #ef9f27' }}
        >
          <Star className="w-4 h-4 shrink-0" style={{ color: '#ba7517' }} />
          <p className="text-sm" style={{ color: '#633806' }}>
            <strong>Founding Batch</strong> — First 20 students receive priority mentorship and founding member recognition.
          </p>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-1.5 font-mono text-[10px] px-4 py-1.5 rounded-full mb-4"
            style={{ background: '#F0FDFA', color: '#0D9488', border: '1px solid #99f6e4', letterSpacing: '0.12em' }}
          >
            PRICING
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Transparent, EMI-Friendly Fees
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            No hidden costs. Training, lab access, and study materials are all included. Exam fees paid separately to the vendor.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap"
                  style={{ background: plan.highlight ? '#0D9488' : '#d97706' }}
                >
                  <Star className="w-3 h-3" /> {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-3 ${plan.highlight ? 'text-white' : 'text-slate-800'}`}>
                  {plan.name}
                </h3>
                <div className={`font-display text-4xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-slate-900'}`} style={{ letterSpacing: '-0.02em' }}>
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

        {/* Mandatory placement disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-start gap-2 max-w-2xl mx-auto mb-10 p-4 rounded-xl"
          style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.2)' }}
        >
          <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" />
          <p className="text-xs text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-600">Placement disclaimer: </span>
            CortiSec does not guarantee placement. Placement support is provided on a best-effort basis.
            Outcomes depend on individual performance, market conditions, and employer decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
