import React from 'react';
import { ExternalLink, ShieldAlert, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ReportIncidentSection({ className = "" }) {
  return (
    <div className={`bg-slate-50 border border-slate-200 rounded-xl p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <ShieldAlert className="w-6 h-6 text-red-600" />
        <h3 className="text-lg font-bold text-[#0F172A]">Report an Incident</h3>
      </div>
      
      <p className="text-sm text-slate-600 mb-6">
        If you are a victim of cybercrime, report it immediately to the official government authorities in your region.
      </p>

      <div className="space-y-3">
        <Button 
          asChild 
          variant="outline"
          className="w-full justify-between bg-white hover:bg-slate-100 text-slate-900 border-slate-300"
        >
          <a 
            href="https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">🇮🇳</span> India (National Cyber Crime Portal)
            </span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </Button>

        <Button 
          asChild 
          variant="outline"
          className="w-full justify-between bg-white hover:bg-slate-100 text-slate-900 border-slate-300"
        >
          <a 
            href="https://myservices.cisa.gov/irf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">🇺🇸</span> USA (CISA Incident Reporting)
            </span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </Button>
      </div>

      <div className="mt-4 flex items-start gap-2 text-xs text-slate-500 bg-white p-3 rounded-lg border border-slate-100">
        <Flag className="w-3 h-3 mt-0.5 shrink-0" />
        <p>You will be redirected to official government reporting portals. CyberShield does not collect this report data directly.</p>
      </div>
    </div>
  );
}

export default ReportIncidentSection;