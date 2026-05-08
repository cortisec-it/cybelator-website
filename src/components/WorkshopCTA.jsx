import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const TrainingRequestModal = lazy(() => import('@/components/TrainingRequestModal'));

const details = [
  { icon: Calendar, text: 'Every last Saturday of the month' },
  { icon: MapPin,   text: 'Guwahati Training Centre + Online' },
  { icon: Clock,    text: '2 hours · Beginner friendly' },
];

const statBoxes = [
  { value: 'Free',           sub: 'No registration fee' },
  { value: 'No Prerequisites', sub: 'Open to everyone' },
  { value: 'Certificate',    sub: 'On completion' },
  { value: 'Expert Instructors', sub: 'CortiSec team' },
];

function WorkshopCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="workshop" className="bg-brand-darker border-l-4 border-brand-accent py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Left */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-semibold px-3 py-1 mb-5">
                  FREE · MONTHLY
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                  Free Monthly Cybersecurity Workshop
                </h2>
                <p className="text-slate-300 text-lg mb-6">
                  Introduction to Enterprise Security & SOC Operations
                </p>

                <div className="space-y-3 mb-8">
                  {details.map((d, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <d.icon className="w-4 h-4 text-brand-accent shrink-0" />
                      {d.text}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="bg-brand-accent text-brand-dark font-bold rounded-full px-7 py-3 text-sm hover:shadow-glow transition-all duration-200"
                  >
                    Register Free →
                  </button>
                  <a
                    href="https://t.me/cybelatoralerts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-brand-accent text-brand-accent rounded-full px-7 py-3 text-sm font-semibold hover:bg-brand-accent/10 transition-all duration-200 text-center"
                  >
                    Join Telegram Community →
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right — stat boxes (desktop only) */}
            <div className="hidden lg:block w-[320px] shrink-0">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {statBoxes.map((box, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-5 text-center border border-white/10">
                    <p className="text-white font-bold text-sm leading-snug">{box.value}</p>
                    <p className="text-white/50 text-xs mt-1">{box.sub}</p>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        {modalOpen && (
          <TrainingRequestModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            courseTitle="Free Monthly Cybersecurity Workshop"
          />
        )}
      </Suspense>
    </>
  );
}

export default WorkshopCTA;
