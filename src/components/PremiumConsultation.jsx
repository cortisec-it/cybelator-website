import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { apiFetch } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';

function PremiumConsultation({ className = "" }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    preferredDate: '',
    topic: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await apiFetch('/api/consultation', {
        method: 'POST',
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          contact_number: formData.contactNumber,
          preferred_date: formData.preferredDate || null,
          topic: formData.topic,
        }),
      });

      if (error) throw new Error(error.error || 'Failed to submit');

      setSubmitted(true);
      toast({
        title: "Request Received",
        description: "We will contact you shortly to confirm your consultation slot.",
      });
    } catch (error) {
      console.error('Consultation request error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not submit request. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-white border border-gray-200 rounded-xl p-8 text-center shadow-lg ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Request Confirmed</h3>
        <p className="text-gray-600 mb-4">
          Thank you for requesting a consultation. Our team will contact you at <strong>{formData.email}</strong> shortly to finalize the schedule and payment.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Book Another Session
        </Button>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg ${className}`}>
      <div className="bg-[#0F172A] p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Talk to a Cybersecurity Expert</h3>
        <p className="text-slate-300 text-sm">Discuss incidents, risks, or security planning with a professional.</p>
        <div className="mt-4 inline-block bg-[#06B6D4] px-4 py-1 rounded-full text-sm font-bold shadow-lg">
          ₹2500 / 1-hour consultation
        </div>
      </div>

      <div className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <User className="w-3 h-3" /> Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Mail className="w-3 h-3" /> Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none text-sm"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Phone className="w-3 h-3" /> Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contactNumber"
                required
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Preferred Date/Time
              </label>
              <input
                type="datetime-local"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none text-sm text-gray-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <MessageSquare className="w-3 h-3" /> Topic of Discussion
            </label>
            <textarea
              name="topic"
              required
              rows="3"
              value={formData.topic}
              onChange={handleChange}
              placeholder="e.g. Incident Response, Security Audit, General Advice..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none text-sm resize-none"
            />
          </div>

          <div className="pt-2">
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-bold h-11"
            >
              {loading ? 'Processing...' : 'Request Consultation'}
            </Button>
            <p className="text-xs text-center text-gray-400 mt-2">
              Payment link will be sent after confirmation. Secure checkout via Stripe (Coming Soon).
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PremiumConsultation;