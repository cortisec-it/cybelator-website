import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { apiFetch } from '@/lib/customSupabaseClient';

function TrainingRequestModal({ isOpen, onClose, courseTitle }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await apiFetch('/api/training', {
        method: 'POST',
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          contact_number: formData.contactNumber,
          training_type: courseTitle,
        }),
      });

      if (error) throw new Error(error.error || 'Failed to submit');

      toast({
        title: "Request Sent Successfully",
        description: `We've received your inquiry for ${courseTitle}. Our team will contact you shortly.`,
      });
      onClose();
      setFormData({ fullName: '', email: '', contactNumber: '' });
    } catch (error) {
      console.error('Error submitting training request:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was a problem sending your request. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-[#0F172A] mb-1">Request Enrollment</h2>
        <p className="text-sm text-gray-500 mb-6">For: <span className="font-semibold text-[#06B6D4]">{courseTitle}</span></p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              required 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none transition-all" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              required 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none transition-all" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
            <input 
              required 
              type="tel" 
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none transition-all" 
            />
          </div>
          
          <Button type="submit" disabled={loading} className="w-full bg-[#0F172A] hover:bg-slate-800 text-white mt-2">
            {loading ? 'Sending...' : 'Submit Request'}
            {!loading && <Send className="w-4 h-4 ml-2" />}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default TrainingRequestModal;