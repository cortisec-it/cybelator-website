import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, ArrowRight, AlertTriangle } from 'lucide-react';
import { pricing } from '../data/modules';

const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Founding batch banner */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2.5 max-w-2xl mx-auto mb-10 px-4 py-2.5 rounded-xl"
          style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)' }}
        >
          <Star className="w-4 h-4 shrink-0 text-amber-400" />
          <p className="text-sm text-amber-400">
            <strong>Founding Batch Open</strong> — 20 seats only. Applications close once batch is full.
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
            style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.3)', letterSpacing: '0.12em' }}
          >
            PRICING
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Transparent, Affordable Fees
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
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
                background: plan.highlight ? 'rgba(6,182,212,0.08)' : 'rgba(255,255,255,0.03)',
                border: plan.highlight ? '2px solid rgba(6,182,212,0.4)' : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                  style={{ background: plan.highlight ? '#22d3ee' : '#d97706', color: plan.highlight ? '#000' : '#fff' }}
                >
                  <Star className="w-3 h-3" /> {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3 text-white">
                  {plan.name}
                </h3>
                <div
                  className={`font-display text-4xl font-bold mb-1 ${plan.highlight ? 'text-cyan-400' : 'text-white'}`}
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: plan.highlight ? '#22d3ee' : '#0D9488' }}
                    />
                    <span className={plan.highlight ? 'text-slate-300' : 'text-slate-400'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={plan.highlight
                  ? { background: '#22d3ee', color: '#000' }
                  : { background: 'transparent', color: '#22d3ee', border: '1px solid #22d3ee' }}
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
            <span className="font-semibold text-slate-400">Placement disclaimer: </span>
            CortiSec does not guarantee placement. Placement support is provided on a best-effort basis.
            Outcomes depend on individual performance, market conditions, and employer decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
