import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, ShieldAlert, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function VictimSupportCTA() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-slate-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 px-3 py-1 rounded-full mb-4">
            <HeartHandshake className="w-4 h-4 text-indigo-300" />
            <span className="text-xs font-semibold text-indigo-200 uppercase tracking-wide">Support Available</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Think You're a Victim of Cyber Fraud?</h2>
          <p className="text-lg text-indigo-100 leading-relaxed">
            Don't panic. Immediate action can minimize the damage. We provide step-by-step guidance on how to secure your accounts and report the incident to authorities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
          <Button 
            asChild
            size="lg"
            className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold"
          >
            <Link to="/victim-support">
              Get Immediate Help
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-indigo-400 text-white hover:bg-indigo-900/50 hover:text-white"
          >
            <Link to="/victim-support">
              <ShieldAlert className="w-4 h-4 mr-2" />
              Report an Incident
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VictimSupportCTA;