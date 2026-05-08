import React, { useState } from 'react';
import { Mail, CheckCircle, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { apiFetch } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';

function NewsletterSubscription({ className = "" }) {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const { error, status } = await apiFetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      if (error) {
        if (status === 409 || error.code === '23505') {
          toast({ title: "Already Subscribed", description: "This email is already on our list." });
          setSubscribed(true);
        } else {
          throw new Error(error.error || 'Failed to subscribe');
        }
      } else {
        setSubscribed(true);
        toast({
          title: "Subscribed Successfully",
          description: "You're now on the list for critical security alerts.",
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (subscribed) {
    return (
      <div className={`bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
           <div className="bg-white/20 p-4 rounded-full mb-6 backdrop-blur-sm animate-in zoom-in duration-300">
              <CheckCircle className="w-12 h-12 text-white" />
           </div>
           <h3 className="text-3xl font-bold text-white mb-2">You're Subscribed!</h3>
           <p className="text-blue-100 text-lg">Watch your inbox for critical security intelligence.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden ${className}`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6 backdrop-blur-md border border-white/20 shadow-inner">
          <ShieldAlert className="w-8 h-8 text-blue-200" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Stay Informed on Cyber Threats</h3>
        <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-xl">
          Get weekly updates on emerging threats, vulnerability alerts, and actionable security insights directly in your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all text-base backdrop-blur-sm"
          />
          <Button 
            type="submit" 
            disabled={loading}
            className="bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-8 h-auto rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-base"
          >
            {loading ? 'Subscribing...' : 'Subscribe Now'}
          </Button>
        </form>
        
        <p className="text-blue-300/80 text-xs mt-4">
          {/*Trusted by 10,000+ security professionals. Unsubscribe at any time.*/}
          Privacy-first • No tracking • Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}

export default NewsletterSubscription;