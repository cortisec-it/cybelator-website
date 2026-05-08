import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Users, Settings, LogOut, Shield, Loader2 } from 'lucide-react';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { Helmet } from 'react-helmet';
import AdminContentManagement from './AdminContentManagement';
import AdminGlobalSettings from './AdminGlobalSettings';
import AdminUserDataManagement from './AdminUserDataManagement';

function AdminDashboard() {
  const { logoutAdmin, currentUser, isAdmin, loading } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Overview' },
    { path: '/admin/content', icon: FileText, label: 'Content' },
    { path: '/admin/data', icon: Users, label: 'User Data' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  const isActive = (path) => {
    // Exact match for root admin, startsWith for others
    if (path === '/admin') return location.pathname === '/admin';
    return location.pathname.startsWith(path);
  };

  // Double check protection
  useEffect(() => {
    if (!loading && !isAdmin) {
        navigate('/admin/login');
    }
  }, [isAdmin, loading, navigate]);

  if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <Loader2 className="w-8 h-8 animate-spin text-[#06B6D4]" />
        </div>
      );
  }

  if (!isAdmin) {
      return null; // Don't render anything while redirecting
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Cybelator</title>
      </Helmet>
      <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-[#0F172A] text-white flex flex-col shrink-0">
          <div className="p-6 border-b border-slate-800 flex items-center gap-3">
            <div className="bg-[#06B6D4] p-2 rounded-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Admin Panel</h1>
              <p className="text-xs text-slate-400">v1.1.0</p>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#06B6D4] text-white'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-800">
             <div className="mb-4 px-4">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Logged in as</p>
                <p className="text-sm font-medium text-white truncate" title={currentUser?.email}>
                    {currentUser?.email}
                </p>
             </div>
             <button
               onClick={logoutAdmin}
               className="flex items-center gap-3 px-4 py-2 w-full text-left text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-colors"
             >
               <LogOut className="w-5 h-5" />
               Sign Out
             </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto p-4 md:p-8">
           <Routes>
             <Route path="/" element={
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <h2 className="text-lg font-bold text-slate-800 mb-4">Quick Stats</h2>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="bg-blue-50 p-4 rounded-lg">
                            <span className="text-2xl font-bold text-blue-700 block">Active</span>
                            <span className="text-sm text-blue-600">System Status</span>
                         </div>
                         <div className="bg-green-50 p-4 rounded-lg">
                            <span className="text-2xl font-bold text-green-700 block">Secure</span>
                            <span className="text-sm text-green-600">Auth Gateway</span>
                         </div>
                      </div>
                   </div>
                   <div className="bg-gradient-to-br from-[#06B6D4] to-blue-600 p-6 rounded-xl text-white shadow-lg">
                      <h2 className="text-lg font-bold mb-2">Welcome Back</h2>
                      <p className="opacity-90">Use the sidebar to manage content, view user submissions, or update global application settings.</p>
                   </div>
                </div>
             } />
             <Route path="/content" element={<AdminContentManagement />} />
             <Route path="/data" element={<AdminUserDataManagement />} />
             <Route path="/settings" element={<AdminGlobalSettings />} />
           </Routes>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;