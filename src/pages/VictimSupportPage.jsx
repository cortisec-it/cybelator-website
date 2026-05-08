import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HeartHandshake, Phone, ShieldAlert, FileText, Lock, Globe } from 'lucide-react';
import VictimSupportCard from '@/components/VictimSupportCard';
import ReportIncidentSection from '@/components/ReportIncidentSection';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { apiFetch } from '@/lib/customSupabaseClient';
import TelegramSubscriptionCTA from '@/components/TelegramSubscriptionCTA';

function VictimSupportPage() {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    incidentType: 'Financial Fraud / UPI Scam',
    message: ''
  });

  const handleSupportClick = (action) => {
    if (action === 'form') {
      setShowForm(true);
      setTimeout(() => {
        document.getElementById('support-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      toast({
        title: "Redirecting to external service",
        description: `You are being redirected to ${action}`,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await apiFetch('/api/victim-support', {
        method: 'POST',
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          contact_number: formData.contactNumber,
          incident_type: formData.incidentType,
          message: formData.message,
        }),
      });

      if (error) throw new Error(error.error || 'Failed to submit');

      toast({
        title: "Request Received",
        description: "Thank you. We will contact you shortly to provide assistance.",
      });
      setShowForm(false);
      setFormData({
        fullName: '',
        email: '',
        contactNumber: '',
        incidentType: 'Financial Fraud / UPI Scam',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting support request:", error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "Could not send your request. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Victim Support & Incident Reporting - Cybelator</title>
        <meta name="description" content="Cybelator Victim Support: Get immediate help if you've been a victim of cyber fraud. Report incidents, find resources, and get expert guidance on recovery." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#0F172A] text-white py-16 relative overflow-hidden">
        {/* Subtle comforting background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#06B6D4]/10 backdrop-blur-sm border border-[#06B6D4]/30 px-4 py-2 rounded-full mb-6">
              <HeartHandshake className="w-5 h-5 text-[#06B6D4]" />
              <span className="text-[#06B6D4] font-medium">We are here to help</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              You Are Not Alone
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              If you've fallen victim to a cyber crime, immediate action can help minimize damage. Cybelator provides guidance and resources to help you recover.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Actions - Redesigned Cards */}
      <section className="py-16 bg-slate-50 -mt-8 relative z-10 rounded-t-3xl border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <TelegramSubscriptionCTA variant="compact" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="h-full"
            >
              <VictimSupportCard 
                title="I think I'm a victim of cyber fraud"
                description="If you suspect unauthorized transactions, identity theft, or data compromise, act now to freeze accounts and secure your identity."
                icon={ShieldAlert}
                actionLabel="Get Immediate Help"
                onAction={() => handleSupportClick('form')}
                variant="urgent"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="h-full"
            >
              <VictimSupportCard 
                title="Report a cyber incident"
                description="File an official report with authorities. This is crucial for legal recourse and insurance claims. We'll guide you to the right portal."
                icon={FileText}
                actionLabel="Scroll to Reporting"
                onAction={() => document.getElementById('report-section').scrollIntoView({ behavior: 'smooth' })}
              />
            </motion.div>
          </div>

          {/* Official Reporting Section */}
          <div id="report-section" className="mb-16">
            <ReportIncidentSection />
          </div>

          {/* Immediate Steps Guidance */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold text-lg text-[#0F172A] mb-3">1. Secure Accounts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Change passwords immediately. Enable 2FA. If banking is involved, call your bank to freeze cards.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-[#0F172A] mb-3">2. Contact Authorities</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Dial 1930 (India) for financial fraud. Visit your local police station or cybercrime portal.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold text-lg text-[#0F172A] mb-3">3. Document Everything</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Take screenshots, save emails/messages. Do not delete any evidence. Note down timestamps.</p>
            </div>
          </div>

          {/* Contact Form */}
          {showForm && (
            <motion.div 
              id="support-form"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Request Assistance</h3>
              <p className="text-gray-500 mb-8">Our team will guide you on the next steps. Your data is encrypted and secure.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name (Optional)</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none transition-all" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Email</label>
                    <input 
                      type="email" 
                      required 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none transition-all" 
                      placeholder="email@example.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number</label>
                    <input 
                      type="tel" 
                      required 
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none transition-all" 
                      placeholder="+91 9876543210" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Incident Type</label>
                    <select 
                      name="incidentType"
                      value={formData.incidentType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none transition-all bg-white"
                    >
                      <option>Financial Fraud / UPI Scam</option>
                      <option>Identity Theft</option>
                      <option>Harassment / Cyberbullying</option>
                      <option>Hacking / Malware</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Brief Description</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none transition-all resize-none" 
                    placeholder="Please describe what happened..." 
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-bold py-4 h-auto text-lg">
                  {isSubmitting ? 'Sending...' : 'Submit Securely'}
                </Button>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

export default VictimSupportPage;