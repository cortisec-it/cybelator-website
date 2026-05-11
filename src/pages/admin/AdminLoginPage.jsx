import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { Helmet } from 'react-helmet';

function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [localLoading, setLocalLoading] = useState(false);
  const { loginAdmin } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLocalLoading(true);
    
    try {
      const { error: loginError } = await loginAdmin(email, password);
      
      if (loginError) {
        setError(loginError.message);
      } else {
        navigate('/admin');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLocalLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - Cybelator</title>
      </Helmet>
      <div className="min-h-screen bg-brand-darker flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="bg-brand-dark p-8 text-center border-b border-slate-800">
            <div className="mx-auto w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-brand-accent" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Access</h1>
            <p className="text-slate-400 text-sm mt-2">Authorized personnel only</p>
          </div>
          
          <div className="p-8">
            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg flex items-start gap-3 animate-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="admin@cybelator.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="••••••••"
                  />
                  <Lock className="absolute right-3 top-3.5 w-5 h-5 text-slate-400" />
                </div>
              </div>
              
              <Button 
                type="submit" 
                disabled={localLoading}
                className="w-full bg-brand-dark hover:bg-slate-800 text-white h-12 font-bold rounded-lg transition-all"
              >
                {localLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  'Secure Login'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* 
        SETUP GUIDE FOR DEVELOPERS 
        (This comment block is for reference on how to create the first admin user)
        
        -- SQL TO CREATE FIRST ADMIN USER --
        
        1. Sign up a new user via Supabase Auth (or use existing one).
        2. Get their UUID (User ID).
        3. Run this SQL in Supabase SQL Editor:
        
        INSERT INTO admin_users (user_id, email, is_admin)
        VALUES ('[USER_UUID_HERE]', 'admin@cybelator.com', true);
        
        -- Example:
        -- INSERT INTO admin_users (user_id, email, is_admin)
        -- VALUES ('d024647c-17e3-4065-9830-6126685791c5', 'admin@cybelator.com', true);
      */}
    </>
  );
}

export default AdminLoginPage;