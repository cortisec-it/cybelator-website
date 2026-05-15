import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, GraduationCap } from 'lucide-react';

const CARD = '#111620';
const BORDER = '#1c2438';
const TEAL = '#0D9488';

function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', qualification: '', status: '', specialisation: '', program: '' });

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
        <option>Other</option>
      </select>
      <select
        name="status" value={form.status} onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
        style={{ background: '#111620', border: `1px solid ${BORDER}`, color: form.status ? '#fff' : '#5a6478' }}
        onFocus={(e) => (e.target.style.borderColor = TEAL)}
        onBlur={(e) => (e.target.style.borderColor = BORDER)}
      >
        <option value="" disabled>Current Status / Occupation</option>
        <option>Student</option>
        <option>Fresher</option>
        <option>Working Professional</option>
        <option>IT Professional</option>
        <option>Network Engineer</option>
        <option>Career Switcher</option>
        <option>Business Owner</option>
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
        <option value="">Interested In... (Select Program)</option>
        <option>Starter Track — 20-Week Full Program (₹35,000) . Founding Batch</option>
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
            Fill in your details and our team will contact you within 24 hours to discuss the next batch.
          </p>
        </motion.div>

        {/* Single form — centered */}
        <div className="max-w-2xl mx-auto mb-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
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
