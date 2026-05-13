import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, GraduationCap, LifeBuoy, ExternalLink, MessageCircle, ArrowUp } from 'lucide-react';

const DARK = '#0a0d12';
const CARD = '#111620';
const BORDER = '#1c2438';
const TEAL = '#0D9488';

function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', qualification: '', specialisation: '', program: '' });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        const msg = data.errors
          ? Object.values(data.errors).join(' ')
          : (data.error || 'Submission failed. Please try again.');
        setError(msg);
      } else {
        setSent(true);
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <CheckCircle2 className="w-10 h-10 mb-3" style={{ color: TEAL }} />
        <h3 className="text-base font-bold text-white mb-1">Message received!</h3>
        <p className="text-sm" style={{ color: '#8a96a8' }}>We'll get back to you within 24 hours.</p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 font-mono text-xs px-4 py-2 rounded-lg"
          style={{ background: 'rgba(255,255,255,0.05)', color: '#8a96a8', border: `1px solid ${BORDER}` }}
        >
          SEND ANOTHER
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="name" value={form.name} onChange={handleChange}
          placeholder="Full name" required
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
          style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, color: '#fff' }}
          onFocus={(e) => (e.target.style.borderColor = TEAL)}
          onBlur={(e) => (e.target.style.borderColor = BORDER)}
        />
        <input
          name="phone" value={form.phone} onChange={handleChange}
          placeholder="Phone number" required
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
          style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, color: '#fff' }}
          onFocus={(e) => (e.target.style.borderColor = TEAL)}
          onBlur={(e) => (e.target.style.borderColor = BORDER)}
        />
      </div>
      <input
        name="email" type="email" value={form.email} onChange={handleChange}
        placeholder="Email address" required
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
        style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, color: '#fff' }}
        onFocus={(e) => (e.target.style.borderColor = TEAL)}
        onBlur={(e) => (e.target.style.borderColor = BORDER)}
      />
      <input
        name="city" value={form.city} onChange={handleChange}
        placeholder="City"
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
        style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, color: '#fff' }}
        onFocus={(e) => (e.target.style.borderColor = TEAL)}
        onBlur={(e) => (e.target.style.borderColor = BORDER)}
      />
      <select
        name="qualification" value={form.qualification} onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
        style={{ background: '#111620', border: `1px solid ${BORDER}`, color: form.qualification ? '#fff' : '#5a6478' }}
        onFocus={(e) => (e.target.style.borderColor = TEAL)}
        onBlur={(e) => (e.target.style.borderColor = BORDER)}
      >
        <option value="" disabled>Highest Qualification</option>
        <option>Diploma</option>
        <option>B.Tech / B.E.</option>
        <option>BCA</option>
        <option>B.Sc IT / B.Sc CS</option>
        <option>MCA</option>
        <option>MBA</option>
        <option>Working Professional</option>
        <option>Other</option>
      </select>
      <input
        name="specialisation" value={form.specialisation} onChange={handleChange}
        placeholder="Specialisation (e.g. Computer Science, Electronics, IT, Networking)"
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
        style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, color: '#fff' }}
        onFocus={(e) => (e.target.style.borderColor = TEAL)}
        onBlur={(e) => (e.target.style.borderColor = BORDER)}
      />
      <select
        name="program" value={form.program} onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
        style={{ background: '#111620', border: `1px solid ${BORDER}`, color: form.program ? '#fff' : '#5a6478' }}
        onFocus={(e) => (e.target.style.borderColor = TEAL)}
        onBlur={(e) => (e.target.style.borderColor = BORDER)}
      >
        <option value="">Interested in... (select program)</option>
        <option>Starter Track — 20-Week Full Program (₹35,000)</option>
        <option>Career Track — 20-Week Full Program with Placement (₹45,000)</option>
        <option>Explorer Track — 6-Week Short Course (₹12,000)</option>
        <option>Individual Certification — CCNA</option>
        <option>Individual Certification — CCSA R82</option>
        <option>Individual Certification — CCSE R82</option>
        <option>Individual Certification — FCP FortiGate</option>
        <option>Individual Certification — CyberArk PAM-DEF</option>
        <option>Individual Certification — CyberArk PAM-SEN</option>
        <option>Individual Certification — SCP NPM</option>
        <option>Other / General Enquiry</option>
      </select>
      {error && (
        <p className="text-xs text-red-400 text-center">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-xs font-bold transition-all"
        style={{ background: loading ? '#0F766E' : TEAL, color: '#fff', letterSpacing: '0.06em', opacity: loading ? 0.7 : 1 }}
        onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#0F766E'; }}
        onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = TEAL; }}
      >
        {loading ? 'SENDING...' : <> SEND ENQUIRY <Send className="w-3.5 h-3.5" /> </>}
      </button>
    </form>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: '#0a1628' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
            style={{ background: 'rgba(0,229,255,0.08)', color: '#00e5ff', border: '1px solid rgba(0,229,255,0.2)', letterSpacing: '0.12em' }}
          >
            CONTACT
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#8a96a8' }}>
            Two paths — choose what applies to you.
          </p>
        </motion.div>

        {/* Two-path split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

          {/* Path A — Learn */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 flex flex-col"
            style={{ background: CARD, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(13,148,136,0.15)' }}>
                <GraduationCap className="w-4 h-4" style={{ color: TEAL }} />
              </div>
              <h3 className="font-display text-lg font-bold text-white">I want to learn cybersecurity</h3>
            </div>
            <p className="text-sm mb-6 pl-11" style={{ color: '#8a96a8' }}>
              Enquire about the program, next batch, or fees
            </p>
            <EnquiryForm />
          </motion.div>

          {/* Path B — Help */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 flex flex-col"
            style={{ background: CARD, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(248,113,113,0.12)' }}>
                <LifeBuoy className="w-4 h-4" style={{ color: '#f87171' }} />
              </div>
              <h3 className="font-display text-lg font-bold text-white">I need help with a cybercrime</h3>
            </div>
            <p className="text-sm mb-8 pl-11" style={{ color: '#8a96a8' }}>
              Talk to a Cortisec volunteer directly
            </p>

            <div className="space-y-4 flex-1">
              {/* Option 1 — reporting guide */}
              <button
                onClick={() => document.querySelector('#assistance')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full flex items-center gap-4 p-5 rounded-xl border text-left transition-all group"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: BORDER }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = '#2d3a52'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = BORDER; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(99,102,241,0.12)' }}>
                  <ArrowUp className="w-5 h-5" style={{ color: '#818CF8' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Use the reporting guide ↑</p>
                  <p className="text-xs mt-0.5" style={{ color: '#5a6478' }}>Step-by-step action checklist — scroll to Cyber Assistance above</p>
                </div>
              </button>

              {/* Option 2 — WhatsApp */}
              <a
                href="https://wa.me/917289054028?text=Hi%2C%20I%20need%20help%20understanding%20a%20cybercrime%20that%20happened%20to%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-4 p-5 rounded-xl border text-left transition-all group no-underline"
                style={{ background: 'rgba(37,211,102,0.06)', borderColor: 'rgba(37,211,102,0.2)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.06)'; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(37,211,102,0.15)' }}>
                  <MessageCircle className="w-5 h-5" style={{ color: '#25d366' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#25d366' }}>WhatsApp a volunteer →</p>
                  <p className="text-xs mt-0.5" style={{ color: '#5a6478' }}>+91 72890 54028 · Speak directly to a CortiSec team member</p>
                </div>
              </a>
               
              {/* Option 3 — Email */}
              <a
                href="mailto:contact@cybelator.com"
                className="w-full flex items-center gap-4 p-5 rounded-xl border text-left transition-all group no-underline"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: BORDER }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = '#2d3a52'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = BORDER; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(99,102,241,0.12)' }}>
                  <Mail className="w-5 h-5" style={{ color: '#818CF8' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email us →</p>
                  <p className="text-xs mt-0.5" style={{ color: '#5a6478' }}>contact@cybelator.com · We respond within 24 hours</p>
                </div>
              </a>
      
            </div>

            {/* Contact info strip */}
            {/* <div className="mt-8 pt-6 space-y-3" style={{ borderTop: `1px solid ${BORDER}` }}>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 shrink-0" style={{ color: '#5a6478' }} />
                <span className="text-xs" style={{ color: '#8a96a8' }}>contact@cybelator.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: '#5a6478' }} />
                <a href="tel:+917289054028" className="text-xs" style={{ color: '#8a96a8', textDecoration: 'none' }}>+91 72890 54028</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: '#5a6478' }} />
                <span className="text-xs" style={{ color: '#8a96a8' }}>Guwahati Training Centre · Noida Operations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ExternalLink className="w-3.5 h-3.5 shrink-0" style={{ color: '#5a6478' }} />
                <a href="https://cortisec.com" target="_blank" rel="noopener noreferrer" className="text-xs transition-colors" style={{ color: '#8a96a8', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8a96a8')}
                >cortisec.com ↗</a>
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Company details strip */}
      {/*  <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-xl px-5 py-4 flex flex-wrap gap-x-8 gap-y-2"
          style={{ background: CARD, border: `1px solid ${BORDER}` }}
        >
          {[
            ['LEGAL', 'CortiSec Technologies Private Limited'],
            ['CIN', 'U70200UP2025PTC230788'],
            ['TYPE', 'Cybersecurity Training & Services'],
            ['REGIONS', 'Northeast India · Noida · Online'],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center gap-2">
              <span className="font-mono text-[9px]" style={{ color: '#5a6478' }}>{k}</span>
              <span className="text-xs font-mono" style={{ color: '#8a96a8' }}>{v}</span>
            </div>
          ))}
        </motion.div> */}

      </div>
    </section>
  );
}
