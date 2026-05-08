import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Terminal, UserCheck, Shield, BookOpen, MonitorPlay, Award, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TrainingRequestModal from '@/components/TrainingRequestModal';
import ExpertConsultationModal from '@/components/ExpertConsultationModal';
import TelegramSubscriptionCTA from '@/components/TelegramSubscriptionCTA';

function TrainingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const openModal = (course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Cybersecurity Training - Cybelator</title>
        <meta name="description" content="Professional cybersecurity training tracks for individuals and IT professionals offered by Cybelator." />
      </Helmet>

      <div className="bg-slate-50 min-h-screen">
        {/* Header */}
        <div className="bg-brand-dark text-white py-20 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-blue-600/5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           <div className="relative z-10 max-w-4xl mx-auto px-4">
             <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-6">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Certified Curriculum</span>
             </div>
             <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Master Cybersecurity Skills</h1>
             <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
               From basic awareness to advanced technical defense. Choose the path that fits your role.
             </p>
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 -mt-10 relative z-10">
           
           <div className="mb-12">
             <TelegramSubscriptionCTA variant="compact" />
           </div>

           {/* Free Awareness Track */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 mb-12 relative overflow-hidden group"
           >
              <div className="absolute top-0 right-0 bg-green-500 w-32 h-32 blur-[80px] opacity-10 rounded-full pointer-events-none"></div>
              
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                 <div className="flex-1">
                    <div className="inline-flex items-center gap-2 text-green-800 font-bold bg-green-100 px-4 py-1.5 rounded-full text-xs uppercase tracking-wide mb-5">
                       <CheckCircle2 className="w-4 h-4" /> FREE TRACK
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Cyber Awareness Training</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                       Essential training designed for individuals, employees, and small business owners. Learn to identify threats, protect your personal data, and browse safely without needing any technical expertise.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                       <div className="flex items-start gap-4">
                          <div className="bg-green-50 p-2.5 rounded-lg">
                            <Shield className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 text-lg">Phishing Defense</h4>
                             <p className="text-sm text-slate-500 mt-1">Spot fake emails & scams instantly.</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-4">
                          <div className="bg-green-50 p-2.5 rounded-lg">
                             <BookOpen className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 text-lg">Digital Hygiene</h4>
                             <p className="text-sm text-slate-500 mt-1">Password management & 2FA setup.</p>
                          </div>
                       </div>
                    </div>

                    <Button 
                      onClick={() => openModal('Awareness Training')}
                      className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 text-lg font-bold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all w-full sm:w-auto"
                    >
                      Start Free Awareness Training
                    </Button>
                 </div>
                 
                 {/* Visual/Image Area */}
                 <div className="w-full lg:w-1/3 bg-green-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-green-100 min-h-[300px]">
                    <div className="bg-white p-4 rounded-full shadow-md mb-6">
                        <MonitorPlay className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-2">Interactive Modules</h3>
                    <p className="text-sm text-green-700 mb-6 max-w-xs">Engaging video lessons, real-world quizzes, and completion certificates.</p>
                    <div className="text-xs font-bold uppercase tracking-wide text-green-700 bg-white border border-green-200 px-4 py-2 rounded-full shadow-sm">
                       Duration: 2-3 Hours
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* Divider */}
           <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-slate-300 flex-1"></div>
              <span className="text-slate-400 font-bold uppercase tracking-widest text-sm px-4">Professional Certification</span>
              <div className="h-px bg-slate-300 flex-1"></div>
           </div>

           {/* Technical Track - Card Style */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-[#1E293B] rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden"
           >
              {/* Background accent */}
              <div className="absolute -left-10 -bottom-10 bg-purple-600 w-64 h-64 blur-[100px] opacity-20 rounded-full pointer-events-none"></div>

              <div className="flex flex-col lg:flex-row gap-10 items-center">
                 <div className="flex-1 relative z-10">
                    <div className="inline-flex items-center gap-2 text-purple-200 font-bold bg-purple-500/20 border border-purple-500/30 px-4 py-1.5 rounded-full text-xs uppercase tracking-wide mb-5">
                       <Award className="w-4 h-4" /> PAID TECHNICAL TRACK
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced Defense Training</h2>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                       Hands-on technical training for system administrators, network engineers, and security analysts. Master firewall configuration, incident response, and threat hunting.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                       <div className="bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                          <div className="flex flex-wrap justify-between items-center gap-2 mb-1">
                             <h3 className="font-bold text-white text-lg">Fortinet NSE 4 Certification Prep</h3>
                             <span className="text-[10px] font-bold bg-purple-600 text-white px-2 py-1 rounded uppercase tracking-wide">Advanced</span>
                          </div>
                          <p className="text-sm text-slate-400 mt-1">Deep dive into FortiGate security, NAT, VPNs, and logging.</p>
                       </div>
                       <div className="bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                          <div className="flex flex-wrap justify-between items-center gap-2 mb-1">
                             <h3 className="font-bold text-white text-lg">Check Point Administrator (CCSA)</h3>
                             <span className="text-[10px] font-bold bg-blue-600 text-white px-2 py-1 rounded uppercase tracking-wide">Intermediate</span>
                          </div>
                          <p className="text-sm text-slate-400 mt-1">Security policy management, traffic monitoring, and identity awareness.</p>
                       </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        onClick={() => openModal('Technical Training')}
                        className="bg-purple-600 hover:bg-purple-700 text-white h-14 px-8 font-bold rounded-xl shadow-lg transition-all w-full sm:w-auto text-base"
                      >
                        Request Syllabus & Pricing
                      </Button>
                      <Button 
                        onClick={() => setConsultationOpen(true)}
                        variant="outline"
                        className="border-slate-600 text-white hover:bg-white hover:text-purple-900 h-14 px-8 font-medium rounded-xl transition-all w-full sm:w-auto text-base"
                      >
                         <UserCheck className="w-5 h-5 mr-2" /> Talk to Instructor
                      </Button>
                    </div>
                 </div>
                 
                 <div className="hidden lg:block w-1/3 opacity-90">
                     {/* Decorative code block visual */}
                     <div className="bg-brand-dark rounded-xl p-6 font-mono text-xs md:text-sm text-green-400 border border-slate-700 shadow-2xl relative">
                        <div className="absolute top-3 right-3 flex gap-1.5">
                           <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="mb-3 opacity-50 pt-2"># Initiating Security Protocols...</div>
                        <div className="mb-3">$ sudo ufw enable</div>
                        <div className="mb-3 text-white">Firewall is active and enabled on system startup</div>
                        <div className="mb-3">$ nmap -sV -p 1-65535 target_ip</div>
                        <div className="mb-3 text-yellow-400">Starting Nmap 7.93 scan...</div>
                        <div className="mb-3">Discovered open port 443/tcp on 192.168.1.5</div>
                        <div className="animate-pulse text-white font-bold">_</div>
                     </div>
                 </div>
              </div>
           </motion.div>
        </div>

        <TrainingRequestModal 
           isOpen={modalOpen} 
           onClose={() => setModalOpen(false)} 
           courseTitle={selectedCourse} 
        />
        <ExpertConsultationModal 
           isOpen={consultationOpen} 
           onClose={() => setConsultationOpen(false)} 
        />
      </div>
    </>
  );
}

export default TrainingPage;