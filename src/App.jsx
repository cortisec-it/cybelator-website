import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import { AdminAuthProvider } from '@/contexts/AdminAuthContext';
import ProtectedAdminRoute from '@/components/ProtectedAdminRoute';
import useScrollToTop from '@/hooks/useScrollToTop';

// Admin Pages
import AdminLoginPage from '@/pages/admin/AdminLoginPage';
import AdminDashboard from '@/pages/admin/AdminDashboard';

// Code Splitting - Lazy Load non-critical pages
const ThreatMapsPage = lazy(() => import('@/pages/ThreatMapsPage'));
const NewsAlertsPage = lazy(() => import('@/pages/NewsAlertsPage'));
const CurrentThreatsPage = lazy(() => import('@/pages/CurrentThreatsPage'));
const GuidesPage = lazy(() => import('@/pages/GuidesPage'));
const QuizzesPage = lazy(() => import('@/pages/QuizzesPage'));
const VictimSupportPage = lazy(() => import('@/pages/VictimSupportPage'));
const TrainingPage = lazy(() => import('@/pages/TrainingPage'));
const LegalPoliciesPage = lazy(() => import('@/pages/LegalPoliciesPage'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#06B6D4]"></div>
  </div>
);

// Wrapper component to use the hook inside Router context
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AdminAuthProvider>
          <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            <title>Cybelator - The Cyber Warrior for the Digital Age</title>
          </Helmet>
          
          <Routes>
            {/* Admin Routes - No Public Layout */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/*" element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            } />

            {/* Public Routes with Layout */}
            <Route path="*" element={
              <Layout>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/threat-maps" element={<ThreatMapsPage />} />
                    {/* Page: Today's Cyber Warnings */}
                    <Route path="/news-alerts" element={<NewsAlertsPage />} />
                    {/* Page: Current Scams & Online Fraud */}
                    <Route path="/current-threats" element={<CurrentThreatsPage />} />
                    <Route path="/guides" element={<GuidesPage />} />
                    <Route path="/quizzes" element={<QuizzesPage />} />
                    <Route path="/victim-support" element={<VictimSupportPage />} />
                    <Route path="/training" element={<TrainingPage />} />
                    <Route path="/legal-policies" element={<LegalPoliciesPage />} />
                    {/* Catch non-admin 404s */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Suspense>
              </Layout>
            } />
          </Routes>
          <Toaster />
        </AdminAuthProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;