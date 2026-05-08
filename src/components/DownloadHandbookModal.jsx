import React, { useState } from 'react';
import { X, CheckCircle, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { apiFetch } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';

function DownloadHandbookModal({ isOpen, onClose }) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await apiFetch('/api/handbook', {
        method: 'POST',
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          contact: formData.contact,
        }),
      });

      if (error) throw new Error(error.error || 'Failed to submit');

      setIsSuccess(true);
      setTimeout(onClose, 3000);
    } catch (error) {
      console.error('Error submitting handbook download:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not process your request. Please try again later.",
      });
      setIsSubmitting(false); // Reset submitting state on error
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
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
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="bg-[#0F172A] p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-[#06B6D4]/20 p-2 rounded-lg">
                <FileText className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Security Handbook</h2>
                <p className="text-xs text-slate-400">Complete Protection Guide 2026</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-8">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-gray-600 text-sm mb-4">
                  Please provide your details to receive the comprehensive security handbook.
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none text-gray-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none text-gray-900"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-xs text-slate-500">
                    By submitting this form, you consent to receive security-related updates and communications from Cybelator. We respect your privacy.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#06B6D4] hover:bg-cyan-700 text-white font-bold h-12 text-base shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  {isSubmitting ? 'Processing...' : 'Send Handbook'}
                  {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you. The handbook will be sent to your email shortly.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default DownloadHandbookModal;