import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import TrainingSection from './components/TrainingSection';
import PricingSection from './components/PricingSection';
import CertificationsSection from './components/CertificationsSection';
import AwarenessSection from './components/AwarenessSection';
import AssistanceSection from './components/AssistanceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <TrainingSection />
        <PricingSection />
        <CertificationsSection />
        <AwarenessSection />
        <AssistanceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
