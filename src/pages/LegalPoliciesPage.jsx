import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, FileText, Scale, AlertTriangle, BookOpen } from 'lucide-react';

function LegalPoliciesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Legal & Editorial Policies - Cybelator</title>
        <meta name="description" content="Read Cybelator's Privacy Policy, Terms of Service, Editorial Standards, and Disclaimers. We are committed to transparency and education." />
      </Helmet>

      <div className="bg-slate-50 min-h-screen">
        {/* Header */}
        <div className="bg-brand-dark text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 p-2 px-4 rounded-full mb-6">
              <Scale className="w-5 h-5 text-brand-accent" />
              <span className="text-brand-accent font-medium text-sm">Transparency & Trust</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal & Editorial Policies</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Cybelator is dedicated to empowering users with knowledge. Here is how we operate, handle data, and ensure content quality.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto gap-8 py-4 text-sm font-medium whitespace-nowrap scrollbar-hide">
              <button onClick={() => scrollToSection('privacy')} className="text-gray-600 hover:text-brand-accent">Privacy Policy</button>
              <button onClick={() => scrollToSection('terms')} className="text-gray-600 hover:text-brand-accent">Terms of Service</button>
              <button onClick={() => scrollToSection('editorial')} className="text-gray-600 hover:text-brand-accent">Editorial Policy</button>
              <button onClick={() => scrollToSection('disclaimer')} className="text-gray-600 hover:text-brand-accent">Disclaimer</button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          
          {/* Privacy Policy */}
          <section id="privacy" className="scroll-mt-32">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="bg-blue-50 p-2 rounded-lg"><Shield className="w-6 h-6 text-blue-600" /></div>
                <h2 className="text-2xl font-bold text-brand-dark">Privacy Policy</h2>
              </div>
              <div className="prose prose-slate max-w-none text-gray-600 space-y-4">
                <p>
                  At Cybelator ("we", "our", "us"), we prioritize your privacy. As an educational and awareness platform, our primary goal is to provide information, not to monetize personal data.
                </p>
                <h3 className="text-lg font-bold text-brand-dark mt-4">Data Collection</h3>
                <p>
                  We collect minimal data necessary to improve your experience, such as quiz progress bookmarks (stored locally on your device via LocalStorage) and optional newsletter subscriptions (email addresses). We do not sell your personal data to third parties.
                </p>
                <h3 className="text-lg font-bold text-brand-dark mt-4">Cookies & Local Storage</h3>
                <p>
                  We use LocalStorage technology to remember your preferences, bookmarked threats, and quiz progress. This data stays on your device and is not transmitted to our servers unless explicitly stated (e.g., incident reporting forms).
                </p>
              </div>
            </div>
          </section>

          {/* Terms of Service */}
          <section id="terms" className="scroll-mt-32">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="bg-purple-50 p-2 rounded-lg"><FileText className="w-6 h-6 text-purple-600" /></div>
                <h2 className="text-2xl font-bold text-brand-dark">Terms of Service</h2>
              </div>
              <div className="prose prose-slate max-w-none text-gray-600 space-y-4">
                <p>
                  By accessing Cybelator, you agree to use the platform for educational and informational purposes only.
                </p>
                <h3 className="text-lg font-bold text-brand-dark mt-4">User Responsibilities</h3>
                <p>
                  You agree not to use the information provided on Cybelator for malicious purposes, including but not limited to hacking, phishing simulations without consent, or social engineering. The knowledge provided here is strictly for defense and protection ("Blue Teaming").
                </p>
                <h3 className="text-lg font-bold text-brand-dark mt-4">Platform Availability</h3>
                <p>
                  We strive to keep the platform available 24/7 but do not guarantee uninterrupted access. We reserve the right to modify or discontinue content at any time.
                </p>
              </div>
            </div>
          </section>

          {/* Editorial Policy */}
          <section id="editorial" className="scroll-mt-32">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="bg-green-50 p-2 rounded-lg"><BookOpen className="w-6 h-6 text-green-600" /></div>
                <h2 className="text-2xl font-bold text-brand-dark">Editorial Policy</h2>
              </div>
              <div className="prose prose-slate max-w-none text-gray-600 space-y-4">
                <p>
                  Our content is curated with a commitment to accuracy, neutrality, and public safety.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Trusted Sources:</strong> We aggregate threat intelligence from recognized authorities including CERT-In, CISA, RBI, NVD, and major cybersecurity vendors (Check Point, Fortinet, etc.).</li>
                  <li><strong>Simplified for Everyone:</strong> Our editors translate complex technical jargon into plain, actionable language suitable for non-technical users.</li>
                  <li><strong>No Sponsored Security Advice:</strong> We do not accept payment to promote specific security products as "solutions" to threats unless explicitly marked as sponsored content. Our protection advice is vendor-neutral where possible.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section id="disclaimer" className="scroll-mt-32">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 border-l-4 border-l-orange-500">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="bg-orange-50 p-2 rounded-lg"><AlertTriangle className="w-6 h-6 text-orange-600" /></div>
                <h2 className="text-2xl font-bold text-brand-dark">Disclaimer</h2>
              </div>
              <div className="prose prose-slate max-w-none text-gray-600 space-y-4">
                <p className="font-medium text-slate-800">
                  The information provided on Cybelator is for general awareness and educational purposes only.
                </p>
                <p>
                  While we strive for accuracy, the cyber threat landscape evolves rapidly. Cybelator does not guarantee that following our guides will prevent all cyberattacks. We accept no liability for any financial loss, data breach, or system damage sustained by users.
                </p>
                <p>
                  <strong>Always consult with official legal counsel or professional cybersecurity incident response firms for specific security incidents or breaches.</strong>
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

export default LegalPoliciesPage;