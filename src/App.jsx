import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import CurriculumSection from './components/CurriculumSection';
import PricingSection from './components/PricingSection';
import RolesGrid from './components/RolesGrid';
import CertSection from './components/CertSection';
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
        <CurriculumSection />
        <PricingSection />
        <RolesGrid />
        <CertSection />
        <AwarenessSection />
        <AssistanceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
