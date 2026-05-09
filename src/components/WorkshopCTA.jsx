import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const TrainingRequestModal = lazy(() => import('@/components/TrainingRequestModal'));

const details = [
  { Icon: Calendar, text: 'Last Saturday of Every Month' },
  { Icon: MapPin, text: 'Online + Offline (Guwahati)' },
  { Icon: Users, text: 'Open to All — Completely Free' },
];

const topics = ['TCP/IP Basics', 'Wireshark', 'Packet Analysis', 'Network Threats'];

function WorkshopCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="workshop" className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-600 border border-amber-200 rounded-full text-xs font-bold px-3 py-1 mb-5 uppercase tracking-wide">
                Next Workshop
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight mb-4 leading-snug">
                Free Monthly Cybersecurity Workshop
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-7">
                Hands-on, beginner-friendly workshops covering real-world cybersecurity skills. No prior experience required.
              </p>

              <div className="space-y-3 mb-8">
                {details.map((d, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <d.Icon className="w-4 h-4 text-brand-teal shrink-0" />
                    <span className="text-sm font-medium text-slate-600">{d.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-brand-teal text-white font-bold rounded-xl px-6 py-3 text-sm hover:bg-brand-teal-dark transition-colors"
                >
                  Register for Next Workshop <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://t.me/cybelatoralerts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-brand-teal text-brand-teal font-semibold rounded-xl px-6 py-3 text-sm hover:bg-brand-teal/5 transition-colors"
                >
                  Join Telegram Community
                </a>
              </div>
            </motion.div>

            {/* Right — Featured workshop card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-card">
                {/* Dark header */}
                <div
                  className="p-8 relative"
                  style={{ background: 'linear-gradient(135deg, #0B1222 0%, #1E293B 100%)' }}
                >
                  <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-brand-teal/20 text-brand-teal-light uppercase tracking-wide">
                    Upcoming
                  </span>
                  <div className="mb-5">
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-1.5">Workshop #12</div>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      Introduction to Network Security & Packet Analysis
                    </h3>
                  </div>
                  <div className="flex gap-5 flex-wrap">
                    <div className="text-sm text-slate-400">
                      <span className="font-semibold text-white">Date: </span>May 31, 2026
                    </div>
                    <div className="text-sm text-slate-400">
                      <span className="font-semibold text-white">Time: </span>2:00 PM IST
                    </div>
                  </div>
                </div>
                {/* Light footer */}
                <div className="p-6 bg-white">
                  <p className="text-xs text-slate-400 font-medium mb-3">Topics covered:</p>
                  <div className="flex gap-2 flex-wrap">
                    {topics.map((t, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-teal-50 text-brand-teal-dark">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

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
