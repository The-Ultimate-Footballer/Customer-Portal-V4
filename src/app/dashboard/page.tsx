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

  const quickActions = [
    {
      title: 'Highlight Tape Services',
      description: 'Manage $900-$2,000 highlight packages for college recruitment',
      icon: VideoCameraIcon,
      href: '/video-analysis',
      color: 'bg-purple-600/20',
      iconColor: 'text-purple-400'
    },
    {
      title: 'Training Programs',
      description: 'Soccer development programs and personalized coaching',
      icon: PlayIcon,
      href: '/training',
      color: 'bg-blue-600/20',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Business Analytics',
      description: 'Revenue tracking, customer metrics, and growth insights',
      icon: ChartBarIcon,
      href: '/progress', 
      color: 'bg-emerald-600/20',
      iconColor: 'text-emerald-400'
    },
    {
      title: 'Supplement Sales',
      description: 'Track $300+ supplement stack sales and inventory',
      icon: DocumentTextIcon,
      href: '/nutrition',
      color: 'bg-rose-600/20',
      iconColor: 'text-rose-400'
    },
    {
      title: 'Customer Communications',
      description: 'Manage client relationships and support',
      icon: ChatBubbleLeftRightIcon,
      href: '/messages',
      color: 'bg-amber-600/20',
      iconColor: 'text-amber-400'
    },
    {
      title: 'Admin Settings',
      description: 'Business management and system configuration',
      icon: UserIcon,
      href: '/profile',
      color: 'bg-zinc-600/20',
      iconColor: 'text-zinc-400'
    }
  ];

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
      <div className="flex-1 relative z-10">
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

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className="group bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 hover:border-zinc-600 transition-all duration-200 hover:bg-zinc-800/50 cursor-pointer active:bg-zinc-700/50"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${action.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {action.title}
                      </h3>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    {action.description}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Recent Activity */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 mb-8">
            <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { title: 'Unified Dashboard Deployed', time: '2 hours ago', icon: CheckCircleIcon, color: 'text-emerald-400' },
                { title: 'AI Agent System Optimized', time: '4 hours ago', icon: CogIcon, color: 'text-blue-400' },
                { title: 'Supplement Sales Integration', time: '1 day ago', icon: DocumentTextIcon, color: 'text-rose-400' },
                { title: 'Customer Portal V2 Launch', time: '2 days ago', icon: TrophyIcon, color: 'text-amber-400' },
                { title: 'Shopify Store Sync Complete', time: '3 days ago', icon: CheckCircleIcon, color: 'text-emerald-400' }
              ].map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 py-3 border-b border-zinc-800 last:border-b-0">
                    <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                      <Icon className={`h-5 w-5 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{activity.title}</div>
                      <div className="text-zinc-400 text-sm">{activity.time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}