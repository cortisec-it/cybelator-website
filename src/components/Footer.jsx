import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, ExternalLink, AlertTriangle } from 'lucide-react';
import CybelatorLogo from '@/components/CybelatorLogo';
import ContactUsModal from '@/components/ContactUsModal';
import ExpertConsultationModal from '@/components/ExpertConsultationModal';
import TelegramFooterSection from '@/components/TelegramFooterSection';

function Footer() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-brand-darker text-slate-300 pt-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <TelegramFooterSection />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

            {/* Brand & Mission */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-brand-accent/10 p-1.5 rounded-lg">
                  <CybelatorLogo className="w-6 h-6 text-brand-accent" />
                </div>
                <span className="text-lg font-bold text-white">Cybelator</span>
              </div>
              <p className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-3">
                The Cyber Warrior for the Digital Age
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Democratizing cybersecurity awareness with real-time intelligence, expert guides, and actionable protection steps for everyone.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-accent hover:bg-slate-700 transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-accent hover:bg-slate-700 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-accent hover:bg-slate-700 transition-all">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Platform</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/current-threats" onClick={scrollToTop} className="text-slate-300 hover:text-brand-accent transition-colors">Current Scams & Fraud</Link></li>
                <li><Link to="/news-alerts" onClick={scrollToTop} className="text-slate-300 hover:text-brand-accent transition-colors">Today's Cyber Warnings</Link></li>
                <li><Link to="/threat-maps" onClick={scrollToTop} className="text-slate-300 hover:text-brand-accent transition-colors">Global Threat Maps</Link></li>
                <li><Link to="/victim-support" onClick={scrollToTop} className="text-orange-400 hover:text-orange-300 transition-colors font-medium">Victim Support</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/guides" onClick={scrollToTop} className="text-slate-300 hover:text-brand-accent transition-colors">Security Guides</Link></li>
                <li><Link to="/quizzes" onClick={scrollToTop} className="text-slate-300 hover:text-brand-accent transition-colors">Interactive Quizzes</Link></li>
                <li><Link to="/academy" onClick={scrollToTop} className="text-slate-300 hover:text-brand-accent transition-colors">CortiSec Academy</Link></li>
                <li>
                  <button onClick={() => setConsultationOpen(true)} className="text-brand-accent hover:text-brand-accentDark transition-colors text-left font-medium">
                    Expert Consultation
                  </button>
                </li>
                <li>
                  <button onClick={() => setContactModalOpen(true)} className="text-slate-300 hover:text-brand-accent transition-colors text-left">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Learn Cybersecurity */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Learn Cybersecurity</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/#roadmap" onClick={scrollToTop} className="text-slate-300 hover:text-brand-accent transition-colors">Career Roadmap</a>
                </li>
                <li>
                  <Link to="/guides" onClick={scrollToTop} className="text-slate-300 hover:text-brand-accent transition-colors">Beginner Guides</Link>
                </li>
                <li>
                  <a href="/#workshop" className="text-slate-300 hover:text-brand-accent transition-colors">Free Workshop</a>
                </li>
                <li>
                  <Link to="/academy" onClick={scrollToTop} className="text-brand-accent hover:text-brand-accentDark transition-colors font-medium">CortiSec Academy →</Link>
                </li>
              </ul>
            </div>

            {/* Trust & Sources */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Data Sources</h3>
              <p className="text-xs text-slate-500 mb-4">
                Aggregated from trusted global authorities:
              </p>
              <ul className="space-y-2 text-xs text-slate-500">
                <li className="flex items-center gap-2"><ExternalLink className="w-3 h-3 text-brand-accent/50" /> CERT-In (India)</li>
                <li className="flex items-center gap-2"><ExternalLink className="w-3 h-3 text-brand-accent/50" /> CISA (USA)</li>
                <li className="flex items-center gap-2"><ExternalLink className="w-3 h-3 text-brand-accent/50" /> NVD (NIST)</li>
                <li className="flex items-center gap-2"><ExternalLink className="w-3 h-3 text-brand-accent/50" /> RBI Cyber Cell</li>
              </ul>
            </div>
          </div>

          <div className="mb-8 bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl text-xs text-slate-500 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-slate-600" />
            <p>Disclaimer: This platform provides educational information and awareness. While we strive for accuracy, cyber threats evolve rapidly. Always consult official financial or legal advisors for specific incidents.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-brand-dark border-t border-slate-800 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p>© {new Date().getFullYear()} Cybelator Awareness Platform. All rights reserved.</p>
              <p>
                A{' '}
                <a href="https://cortisec.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline font-medium">
                  CortiSec Technologies Private Limited
                </a>{' '}
                initiative.
              </p>
            </div>
            <div className="flex gap-6">
              <Link to="/legal-policies" onClick={scrollToTop} className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
              <Link to="/legal-policies" onClick={scrollToTop} className="hover:text-brand-accent transition-colors">Terms of Service</Link>
              <Link to="/legal-policies" onClick={scrollToTop} className="hover:text-brand-accent transition-colors">Editorial Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      <ContactUsModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
      <ExpertConsultationModal 
        isOpen={consultationOpen} 
        onClose={() => setConsultationOpen(false)} 
      />
    </>
  );
}

export default Footer;