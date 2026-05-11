import React from 'react';
import { ShieldCheck, Lock, Eye } from 'lucide-react';

function TrustReassuranceStatement() {
  return (
    <div className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="flex items-start gap-6">
            <div className="bg-green-100 p-4 rounded-xl shrink-0">
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                Your Privacy is Protected
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Cybelator is an educational and awareness platform. We do not collect or store your personal or financial information. 
                Your privacy is protected, and your data is never shared with third parties.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm">No Financial Data</h4>
                    <p className="text-sm text-slate-600">
                      We never ask for or store banking, card, or payment information
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm">Transparent Operations</h4>
                    <p className="text-sm text-slate-600">
                      All our data comes from public, verified sources
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-slate-500 mt-6 italic">
                Subscription data (email, phone for alerts) is stored securely and used only for sending you important security updates. 
                You can unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustReassuranceStatement;