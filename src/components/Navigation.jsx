import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogOut, Shield, LogIn, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CybelatorLogo from '@/components/CybelatorLogo';
import ContactUsModal from '@/components/ContactUsModal';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import { useAdminAuth } from '@/contexts/AdminAuthContext';

const primaryItems = [
  { path: '/', label: 'Home' },
  { path: '/current-threats', label: 'Threats' },
  { path: '/guides', label: 'Guides' },
  { path: '/quizzes', label: 'Training' },
  { path: '/victim-support', label: 'Victim Support' },
];

const moreItems = [
  { path: '/threat-maps', label: 'Live Attack Maps' },
  { path: '/news-alerts', label: "Today's Warnings" },
  { path: '/academy', label: 'CortiSec Academy' },
];

const allMobileItems = [...primaryItems, ...moreItems];

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin, logoutAdmin } = useAdminAuth();
  const moreRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); setMoreOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAdminLogout = async () => {
    await logoutAdmin();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;
  const isMoreActive = moreItems.some(item => isActive(item.path));

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-accent/10 border-b border-brand-accent/20 py-1 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-xs text-brand-accent font-medium flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-alert opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-alert" />
            </span>
            LIVE — Cyber threats monitored 24/7 across India
          </span>
          <span className="text-xs text-slate-400 hidden sm:block">Powered by CortiSec Technologies</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 bg-brand-darker/90 backdrop-blur-md border-b border-slate-800 transition-shadow duration-200 ${scrolled ? 'shadow-card' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <div className="bg-brand-accent/10 p-1.5 rounded-lg group-hover:bg-brand-accent/20 transition-colors">
                <CybelatorLogo className="w-7 h-7 text-brand-accent" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-white to-brand-accent bg-clip-text text-transparent">
                Cybelator
              </span>
            </Link>

            {/* Desktop center links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {primaryItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 text-sm font-medium transition-all rounded-md ${
                    isActive(item.path)
                      ? 'text-brand-accent border-b-2 border-brand-accent pb-0'
                      : 'text-slate-300 hover:text-brand-accent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Contact */}
              <button
                onClick={() => setContactModalOpen(true)}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-brand-accent transition-all rounded-md"
              >
                Contact
              </button>

              {/* More dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-all rounded-md ${
                    isMoreActive ? 'text-brand-accent' : 'text-slate-300 hover:text-brand-accent'
                  }`}
                >
                  More <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-brand-dark border border-slate-700 rounded-xl shadow-card overflow-hidden z-50"
                    >
                      {moreItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isActive(item.path)
                              ? 'text-brand-accent bg-brand-accent/10'
                              : 'text-slate-300 hover:text-brand-accent hover:bg-slate-800'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop right actions */}
            <div className="hidden lg:flex items-center gap-2">
              {isAdmin ? (
                <>
                  <Link to="/admin">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-slate-800 gap-2">
                      <Shield className="w-4 h-4 text-brand-accent" /> Dashboard
                    </Button>
                  </Link>
                  <Button size="sm" variant="ghost" onClick={handleAdminLogout} className="text-red-400 hover:text-red-300 hover:bg-red-900/20">
                    <LogOut className="w-4 h-4 mr-1" /> Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/victim-support">
                    <button className="border border-brand-accent text-brand-accent rounded-full px-4 py-1.5 text-sm font-medium hover:bg-brand-accent hover:text-brand-dark transition-all duration-200">
                      Get Help
                    </button>
                  </Link>
                  <Link to="/academy">
                    <button className="bg-brand-accent text-brand-dark font-semibold rounded-full px-4 py-1.5 text-sm hover:shadow-glow transition-all duration-200">
                      CortiSec Academy
                    </button>
                  </Link>
                  <Link to="/admin/login" className="text-slate-400 hover:text-white text-sm px-2">
                    <LogIn className="w-4 h-4" />
                  </Link>
                </>
              )}
              <PWAInstallPrompt />
            </div>

            {/* Mobile actions */}
            <div className="lg:hidden flex items-center gap-2">
              <PWAInstallPrompt />
              <button
                className="text-white p-1.5 hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-brand-darker overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {allMobileItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 border-b border-slate-800 text-sm transition-all ${
                      isActive(item.path)
                        ? 'text-brand-accent font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {isAdmin ? (
                  <>
                    <Link to="/admin" className="flex items-center gap-2 px-4 py-3 text-white border-b border-slate-800 text-sm">
                      <Shield className="w-4 h-4 text-brand-accent" /> Admin Dashboard
                    </Link>
                    <button
                      onClick={handleAdminLogout}
                      className="flex items-center gap-2 px-4 py-3 text-red-400 text-sm w-full text-left border-b border-slate-800"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </>
                ) : null}

                <div className="pt-3 pb-2 space-y-2">
                  <Link to="/victim-support" className="block w-full text-center border border-brand-accent text-brand-accent rounded-xl py-3 text-sm font-semibold hover:bg-brand-accent hover:text-brand-dark transition-all">
                    Get Help
                  </Link>
                  <Link to="/academy" className="block w-full text-center bg-brand-accent text-brand-dark rounded-xl py-3 text-sm font-bold hover:shadow-glow transition-all">
                    CortiSec Academy
                  </Link>
                  <button
                    onClick={() => { setMobileMenuOpen(false); setContactModalOpen(true); }}
                    className="block w-full text-center text-slate-400 text-xs py-2 hover:text-white"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ContactUsModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
}

export default Navigation;
