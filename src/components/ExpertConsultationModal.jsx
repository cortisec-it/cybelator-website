import React, { useState } from 'react';
import { X, Send, User, Mail, Phone, MessageSquare, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { apiFetch } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';

function ExpertConsultationModal({ isOpen, onClose }) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    message: '',
    preferredDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await apiFetch('/api/consultation', {
        method: 'POST',
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          contact_number: formData.contactNumber,
          topic: formData.message,
          preferred_date: formData.preferredDate || null,
          amount: 2500,
        }),
      });

      if (error) throw new Error(error.error || 'Failed to submit');

      toast({
        title: "Request Submitted Successfully",
        description: "An expert will review your request and contact you shortly.",
      });
      setFormData({ fullName: '', email: '', contactNumber: '', message: '', preferredDate: '' });
      setTimeout(onClose, 2000);
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Could not submit your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-20 flex flex-col max-h-[90vh]"
        >
          <div className="bg-brand-dark p-6 text-white shrink-0">
             <div className="flex justify-between items-start">
               <div>
                 <h2 className="text-xl font-bold">Talk to a Cyber Safety Expert</h2>
                 <p className="text-blue-200 text-sm mt-1">Get one-to-one guidance on your cyber safety concerns.</p>
               </div>
               <button 
                  onClick={onClose}
                  className="text-slate-400 hover:text-white transition-colors bg-white/10 p-1.5 rounded-lg hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
             </div>
          </div>

          <div className="p-6 md:p-8 overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-accent" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:bg-white outline-none transition-all text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-brand-accent" /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:bg-white outline-none transition-all text-sm"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-brand-accent" /> Contact Number
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      required
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:bg-white outline-none transition-all text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-accent" /> Preferred Date (Optional)
                   </label>
                   <input
                      type="datetime-local"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:bg-white outline-none transition-all text-sm text-gray-600"
                    />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-brand-accent" /> Brief Query / Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:bg-white outline-none transition-all text-sm resize-none"
                    placeholder="Briefly describe what you'd like to discuss..."
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 mt-6">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-dark hover:bg-slate-800 text-white font-bold h-12 rounded-xl text-base shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Request a Call Back'}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </Button>
                <p className="text-xs text-center text-slate-400 mt-3">
                   Consultation Fee: ₹1200 / hr. Payment details sent upon confirmation.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ExpertConsultationModal;