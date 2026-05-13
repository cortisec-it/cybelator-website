import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop   from './components/ScrollToTop';
import LandingPage   from './pages/LandingPage';
import AcademyPage   from './pages/AcademyPage';
import AwarenessPage from './pages/AwarenessPage';
import AssistancePage from './pages/AssistancePage';

export default function App() {
  return (
    <BrowserRouter>
      {/* Reset scroll position on every route change */}
      <ScrollToTop />

      <Routes>
        {/* ── Landing — three-path choice screen ── */}
        <Route path="/"           element={<LandingPage />}    />

        {/* ── Section pages ── */}
        <Route path="/academy"    element={<AcademyPage />}    />
        <Route path="/awareness"  element={<AwarenessPage />}  />
        <Route path="/assistance" element={<AssistancePage />} />

        {/* ── Legacy anchor redirects ── */}
        <Route path="/training"   element={<Navigate to="/academy"    replace />} />

        {/* ── 404 fallback → landing ── */}
        <Route path="*"           element={<Navigate to="/"           replace />} />
      </Routes>
    </BrowserRouter>
  );
}
