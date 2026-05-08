import React from 'react';
import { Shield, Globe, Building2, CreditCard, CheckCircle2 } from 'lucide-react';

const dataSources = [
  {
    name: 'Indian Cyber Crime Coordination Centre (I4C)',
    icon: Shield,
    description: 'National cybercrime reporting and coordination',
    country: 'India'
  },
  {
    name: 'CERT-In',
    icon: Shield,
    description: 'India\'s national computer emergency response team',
    country: 'India'
  },
  {
    name: 'RBI Cyber Security Advisories',
    icon: Building2,
    description: 'Reserve Bank of India security alerts',
    country: 'India'
  },
  {
    name: 'NPCI',
    icon: CreditCard,
    description: 'UPI & banking security alerts',
    country: 'India'
  },
  {
    name: 'CISA (USA)',
    icon: Globe,
    description: 'Global threat intelligence and advisories',
    country: 'USA'
  },
  {
    name: 'Microsoft Security',
    icon: Shield,
    description: 'Public security advisories and patches',
    country: 'Global'
  },
  {
    name: 'Fortinet Threat Research',
    icon: Shield,
    description: 'Global threat intelligence',
    country: 'Global'
  },
  {
    name: 'Check Point Research',
    icon: Shield,
    description: 'Security research and threat updates',
    country: 'Global'
  }
];

function TrustedDataSources({ variant = 'default' }) {
  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-xl p-4 md:p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <h3 className="font-bold text-slate-900 text-lg md:text-xl">Verified from Official Advisories</h3>
        </div>
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          All information is cross-checked with trusted authorities including CERT-In, RBI, I4C, and global security organizations.
        </p>
        <div className="flex flex-wrap gap-2">
          {dataSources.slice(0, 6).map((source, idx) => (
            <div key={idx} className="bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 flex items-center gap-1.5">
              <source.icon className="w-3 h-3" />
              {source.name}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            Verified Information
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3">
            Cross-Checked with Trusted Authorities
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed md:leading-normal font-medium md:font-normal">
            Every alert and advisory is verified from official sources to ensure accuracy and reliability.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {dataSources.map((source, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-5 md:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow shrink-0 w-[280px] md:w-auto snap-center"
            >
              <div className="bg-slate-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <source.icon className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base line-clamp-1 md:line-clamp-none">{source.name}</h4>
              <p className="text-xs text-slate-600 mb-2 line-clamp-2 md:line-clamp-none leading-relaxed">{source.description}</p>
              <span className="inline-block bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] md:text-xs font-medium">
                {source.country}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-8 bg-white rounded-xl p-5 md:p-6 border border-slate-200 text-center">
          <p className="text-slate-700 font-medium text-sm md:text-base leading-relaxed">
            <span className="font-bold text-slate-900">Our commitment:</span> We never publish unverified information. 
            Each threat, scam, or alert is cross-referenced with multiple official sources before reaching you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrustedDataSources;