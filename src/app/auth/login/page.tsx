'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Demo credentials for different subscription tiers
      const demoAccounts = {
        'emmanuel@theultimatefootballer.com': {
          password: 'admin123',
          user: {
            email: 'emmanuel@theultimatefootballer.com',
            authenticated: true,
            firstName: 'Emmanuel',
            lastName: 'Perez',
            position: 'CEO/Founder',
            age: 28,
            subscription: {
              name: 'Admin Access',
              level: 'admin',
              hasVideoAnalysis: true,
              hasNutritionTracking: true,
              hasCoachAccess: true,
              hasAdminAccess: true,
              hasAnalytics: true
            }
          }
        },
        'pro@theultimatefootballer.com': {
          password: 'pro123',
          user: {
            email: 'pro@theultimatefootballer.com',
            authenticated: true,
            firstName: 'Maria',
            lastName: 'Santos',
            position: 'Forward',
            age: 17,
            subscription: {
              name: 'Pro Package',
              level: 'pro',
              hasNutritionTracking: true
            }
          }
        },
        'college@theultimatefootballer.com': {
          password: 'college123',
          user: {
            email: 'college@theultimatefootballer.com',
            authenticated: true,
            firstName: 'Jordan',
            lastName: 'Taylor',
            position: 'Defender',
            age: 18,
            subscription: {
              name: 'College Package',
              level: 'college',
              hasNutritionTracking: true
            }
          }
        },
        'academy@theultimatefootballer.com': {
          password: 'academy123',
          user: {
            email: 'academy@theultimatefootballer.com',
            authenticated: true,
            firstName: 'Alex',
            lastName: 'Rodriguez',
            position: 'Midfielder',
            age: 16,
            subscription: {
              name: 'Academy Package',
              level: 'academy',
              hasNutritionTracking: true
            }
          }
        }
      };

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check demo credentials
      const account = demoAccounts[formData.email as keyof typeof demoAccounts];
      
      if (account && account.password === formData.password) {
        // Store authentication state
        localStorage.setItem('auth', JSON.stringify(account.user));
        
        // Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        setError('Invalid email or password');
      }
      
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors">←</div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black text-xs font-bold">TUF</span>
              </div>
              <span className="text-sm font-light tracking-wide">THE ULTIMATE FOOTBALLER</span>
            </div>
          </Link>
          <Link href="/auth/signup" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Need an account?
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6">
        <div className="max-w-sm mx-auto min-h-[calc(100vh-200px)] flex flex-col justify-center">
          
          {/* Form Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl font-light tracking-tight">Member Access</h1>
            <p className="text-sm text-zinc-400 font-light">
              Continue your training journey
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs text-zinc-400 uppercase tracking-wider">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 bg-transparent border border-zinc-800 rounded-none text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-xs text-zinc-400 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-4 py-3 bg-transparent border border-zinc-800 rounded-none text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-zinc-500 hover:text-white transition-colors"
                >
                  {showPassword ? '👁️‍🗨️' : '👁️'}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="group w-full bg-white text-black py-4 px-8 rounded-none font-medium text-sm hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-3"></div>
                    Signing In...
                  </>
                ) : (
                  <>
                    <span>Access Dashboard</span>
                    <div className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform">→</div>
                  </>
                )}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-center">
              <Link href="/auth/reset" className="text-sm text-zinc-400 hover:text-white transition-colors">
                Forgot your password?
              </Link>
            </div>

          </form>



          {/* Footer */}
          <div className="mt-8 text-center text-xs text-zinc-500">
            <p>Secure login • Privacy protected</p>
          </div>
        </div>
      </main>
    </div>
  );
}