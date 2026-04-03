'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  UserIcon,
  ChartBarIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  PlayIcon,
  TrophyIcon,
  ClockIcon,
  CheckCircleIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import Sidebar from '@/components/Sidebar';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  subscription: {
    name: string;
    level: string;
  };
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('auth');
    if (!auth) {
      router.replace('/auth/login');
      return;
    }

    try {
      const userData = JSON.parse(auth);
      setUser(userData);
    } catch (error) {
      console.error('Auth error:', error);
      router.replace('/auth/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    router.replace('/auth/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="relative z-10 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto"></div>
          <p className="mt-4 text-zinc-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden flex">
      {/* Grid background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Sidebar */}
      <div className="relative z-10">
        <Sidebar onLogout={handleLogout} />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative z-10 pl-4">
        {/* Header */}
        <header className="px-8 py-6 border-b border-zinc-800/50">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-white">
                Welcome back, {user.firstName}!
              </h1>
              <p className="text-zinc-400 mt-1">
                {user.subscription.name} Member
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="text-right">
                <div className="text-xs text-zinc-400">Last login</div>
                <div className="text-sm font-medium text-zinc-200">Today, 7:46 AM</div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="px-8 py-6">
          {/* Business Performance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mr-4">
                  <TrophyIcon className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">39</div>
                  <div className="text-zinc-400 text-sm">Active Products</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                  <PlayIcon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">$2,000</div>
                  <div className="text-zinc-400 text-sm">Highlight Package</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4">
                  <VideoCameraIcon className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-zinc-400 text-sm">Highlight Tapes</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mr-4">
                  <ChartBarIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-zinc-400 text-sm">System Health</div>
                </div>
              </div>
            </div>
          </div>




        </main>
      </div>
    </div>
  );
}