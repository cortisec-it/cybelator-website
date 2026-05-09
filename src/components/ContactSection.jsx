import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const offices = [
  { city: 'Guwahati', address: 'Cortisec Technologies, Guwahati, Assam — 781001', type: 'Training Centre' },
  { city: 'Noida', address: 'Cortisec Technologies, Noida, Uttar Pradesh — 201301', type: 'Operations Office' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #0B1222 0%, #111D2E 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(13,148,136,0.12)', color: '#14B8A6', border: '1px solid rgba(13,148,136,0.25)' }}
          >
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Enrol, Enquire, or Get Help
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Whether you want to join a program, ask about certifications, or need guidance on a cyber incident — we're here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle2 className="w-14 h-14 mb-4" style={{ color: '#14B8A6' }} />
                <h3 className="text-xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Our team will reach out within 24 hours. For urgent cyber assistance, call 1930.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 bg-white/[0.06] border border-white/10 focus:outline-none focus:border-brand-teal-light transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 bg-white/[0.06] border border-white/10 focus:outline-none focus:border-brand-teal-light transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 bg-white/[0.06] border border-white/10 focus:outline-none focus:border-brand-teal-light transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">I'm interested in</label>
                  <select
                    name="program"
                    value={form.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white bg-white/[0.06] border border-white/10 focus:outline-none focus:border-brand-teal-light transition-colors"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="">Select a topic</option>
                    <option value="full-program">20-Week Full Program</option>
                    <option value="placement-track">Placement Track</option>
                    <option value="short-course">Short Course (6 weeks)</option>
                    <option value="certification">Individual Certification Training</option>
                    <option value="cyber-assistance">Cyber Incident Assistance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about your goals or situation..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 bg-white/[0.06] border border-white/10 focus:outline-none focus:border-brand-teal-light transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 disabled:opacity-60"
                  style={{ background: '#0D9488' }}
                >
                  {loading ? 'Sending...' : (<><Send className="w-4 h-4" /> Send Message</>)}
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Your information is never shared. See our Privacy Policy.
                </p>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Offices */}
            {offices.map((o, i) => (
              <div key={i} className="rounded-2xl p-5 border border-white/[0.07]" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4" style={{ color: '#14B8A6' }} />
                  <span className="text-sm font-bold text-white">{o.city}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(13,148,136,0.12)', color: '#14B8A6' }}>{o.type}</span>
                </div>
                <p className="text-sm text-slate-400">{o.address}</p>
              </div>
            ))}

            {/* Contact details */}
            <div className="rounded-2xl p-5 border border-white/[0.07] space-y-4" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" style={{ color: '#14B8A6' }} />
                <div>
                  <p className="text-xs text-slate-400 font-medium">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-white">+91-XXXXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" style={{ color: '#14B8A6' }} />
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email</p>
                  <a href="mailto:info@cortisec.com" className="text-sm font-semibold text-white hover:text-slate-300">
                    info@cortisec.com
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency box */}
            <div
              className="rounded-2xl p-5 border"
              style={{ background: 'rgba(220,38,38,0.08)', borderColor: 'rgba(220,38,38,0.25)' }}
            >
              <p className="text-sm font-bold text-red-400 mb-1">Cyber Emergency?</p>
              <p className="text-xs text-slate-400 mb-3">For financial fraud and active cyber attacks:</p>
              <div className="flex gap-3 flex-wrap">
                <a href="tel:1930" className="font-black text-2xl text-red-400 hover:text-red-300 transition-colors">1930</a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-300 underline self-end mb-1"
                >
                  cybercrime.gov.in
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
