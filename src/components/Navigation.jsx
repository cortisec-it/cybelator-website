import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Settings, ToggleLeft, ToggleRight, LogOut, Shield, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CybelatorLogo from '@/components/CybelatorLogo';
import ContactUsModal from '@/components/ContactUsModal';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import { getSourceLinksSetting, setSourceLinksSetting } from '@/config/featureFlags';
import { useAdminAuth } from '@/contexts/AdminAuthContext';

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/threat-maps', label: 'Live Attacks' },
  { path: '/news-alerts', label: "Today's Cyber Warnings" },
  { path: '/current-threats', label: 'Current Scams & Fraud' },
  { path: '/guides', label: 'Protection Guides' },
  { path: '/academy', label: 'CortiSec Academy' },
  { path: '/victim-support', label: 'Victim Support' },
];

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [showSources, setShowSources] = useState(getSourceLinksSetting());
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin, logoutAdmin } = useAdminAuth();

  useEffect(() => {
    const handleStorageChange = () => {
        setShowSources(getSourceLinksSetting());
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleSources = () => {
      const newValue = !showSources;
      setSourceLinksSetting(newValue);
      setShowSources(newValue);
  };

  const handleAdminLogout = async () => {
    await logoutAdmin();
    navigate('/');
  };

  return (
    <>
      <nav className="bg-[#0F172A] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-[#06B6D4]/10 p-1.5 rounded-lg group-hover:bg-[#06B6D4]/20 transition-colors">
                <CybelatorLogo className="w-8 h-8 text-[#06B6D4]" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-[#06B6D4] bg-clip-text text-transparent">
                Cybelator
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? 'bg-[#06B6D4] text-white'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-6 w-px bg-slate-700 mx-2" />
              
              {/* Admin Logic / Source Toggle */}
              {isAdmin ? (
                 <>
                   <Link to="/admin">
                     <Button size="sm" variant="ghost" className="text-white hover:bg-slate-800 mr-2 gap-2">
                        <Shield className="w-4 h-4 text-[#06B6D4]" /> Dashboard
                     </Button>
                   </Link>
                   <Button size="sm" variant="ghost" onClick={handleAdminLogout} className="text-red-400 hover:text-red-300 hover:bg-red-900/20">
                      <LogOut className="w-4 h-4 mr-2" /> Logout
                   </Button>
                 </>
              ) : (
                 <>
                   <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 mr-2"
                    onClick={() => setContactModalOpen(true)}
                  >
                    Contact Us
                  </Button>
                  
                  <Link to="/admin/login">
                     <Button 
                        size="sm"
                        className="bg-[#06B6D4] hover:bg-cyan-600 text-white font-semibold transition-colors shadow-md shadow-cyan-900/20"
                     >
                       <LogIn className="w-4 h-4 mr-2" /> Login
                     </Button>
                  </Link>
                 </>
              )}
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2">
                 <PWAInstallPrompt />
                <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-slate-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all ${
                      location.pathname === item.path
                        ? 'bg-[#06B6D4] text-white'
                        : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {isAdmin ? (
                  <>
                     <Link
                       to="/admin"
                       onClick={() => setMobileMenuOpen(false)}
                       className="flex items-center gap-2 px-4 py-3 rounded-lg text-white bg-slate-800"
                     >
                       <Shield className="w-4 h-4" /> Admin Dashboard
                     </Link>
                     <button
                       onClick={() => { setMobileMenuOpen(false); handleAdminLogout(); }}
                       className="flex items-center gap-2 px-4 py-3 rounded-lg text-red-400 w-full text-left"
                     >
                       <LogOut className="w-4 h-4" /> Logout
                     </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setContactModalOpen(true);
                      }}
                      className="w-full text-left block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-white"
                    >
                      Contact Us
                    </button>
                    
                     <Link
                        to="/admin/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 rounded-lg text-white bg-slate-800 border border-slate-700 mt-2"
                      >
                        <LogIn className="w-4 h-4" /> Login
                    </Link>
                  </>
                )}

                <Link
                    to="/legal-policies"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-gray-400 hover:bg-slate-800 hover:text-white border-t border-slate-800 mt-2"
                  >
                    Legal & Policies
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ContactUsModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </>
  );
}

export default Navigation;