import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Download } from 'lucide-react';
import GuideCard from '@/components/GuideCard';
import DownloadHandbookModal from '@/components/DownloadHandbookModal';
import { guidesData } from '@/data/guidesData';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import TelegramSubscriptionCTA from '@/components/TelegramSubscriptionCTA';

function GuidesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const { toast } = useToast();

  const handleDownloadChecklist = (guideTitle) => {
    // Keep individual checklists as generic toast for now, or link to modal too if preferred.
    // Keeping as toast based on task description implied for "Handbook" button primarily.
    toast({
      title: "🚧 Checklist Download",
      description: `Specific checklist for "${guideTitle}" is coming soon!`
    });
  };

  return (
    <>
      <Helmet>
        <title>Cyber Hygiene & Protection Guides - Cybelator</title>
        <meta name="description" content="Comprehensive guides by Cybelator to improve your cybersecurity hygiene. Learn password safety, phishing awareness, and device protection." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1654588830920-92085849e384)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-500/30 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Expert guidance</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Essential Protection Guides
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive step-by-step guides to improve your cybersecurity hygiene and protect your digital life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
             <TelegramSubscriptionCTA variant="compact" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Master Cybersecurity Fundamentals</h2>
            <p className="text-xl text-gray-600">
              Follow these guides to build a strong security foundation
            </p>
          </motion.div>

          <div className="space-y-6">
            {guidesData.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GuideCard 
                  guide={guide} 
                  onDownload={() => handleDownloadChecklist(guide.title)}
                />
              </motion.div>
            ))}
          </div>

          {/* Additional Resources */}
          {/*<motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-br from-brand-accent to-cyan-600 rounded-2xl p-10 text-white text-center shadow-xl shadow-cyan-900/20"
          >
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Download className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Download Complete Security Handbook</h3>
            <p className="mb-8 opacity-90 text-lg max-w-2xl mx-auto">
              Get all our guides in one comprehensive PDF with bonus checklists, templates, and emergency response plans.
            </p>
            <Button 
              onClick={() => setModalOpen(true)}
              className="bg-white text-brand-accent hover:bg-cyan-50 text-lg font-bold px-8 py-6 h-auto shadow-lg"
            >
              Download Handbook
            </Button>
          </motion.div>*/}
        </div>
      </section>

      <DownloadHandbookModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
}

export default GuidesPage;