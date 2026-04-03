'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon, UserIcon, CogIcon, BellIcon, ShieldCheckIcon, KeyIcon, TrashIcon } from '@heroicons/react/24/outline';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  age: number;
  subscription: {
    name: string;
    level: string;
  };
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (!auth) {
      router.replace('/auth/login');
      return;
    }
    
    try {
      const userData = JSON.parse(auth);
      setUser(userData);
    } catch (error) {
      router.replace('/auth/login');
    }
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="relative z-10 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto"></div>
          <p className="mt-4 text-zinc-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  const accountSettings = [
    {
      title: 'Personal Information',
      description: 'Update your profile details and preferences',
      icon: UserIcon,
      color: 'bg-blue-600/20',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Change Password',
      description: 'Update your account password for security',
      icon: KeyIcon,
      color: 'bg-emerald-600/20',
      iconColor: 'text-emerald-400'
    },
    {
      title: 'Notification Settings',
      description: 'Manage your notification preferences',
      icon: BellIcon,
      color: 'bg-amber-600/20',
      iconColor: 'text-amber-400'
    },
    {
      title: 'Privacy & Security',
      description: 'Control your privacy and data settings',
      icon: ShieldCheckIcon,
      color: 'bg-purple-600/20',
      iconColor: 'text-purple-400'
    }
  ];

  const profileStats = [
    { label: 'Member Since', value: 'January 2024', icon: '📅' },
    { label: 'Training Sessions', value: '48', icon: '🏃' },
    { label: 'Goals Achieved', value: '12', icon: '🏆' },
    { label: 'Videos Analyzed', value: '8', icon: '📹' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Premium Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link href="/dashboard" className="flex items-center space-x-3 text-zinc-400 hover:text-white transition-colors">
              <ArrowLeftIcon className="h-6 w-6" />
              <span className="hidden sm:block">Back to Dashboard</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black text-xs font-bold">TUF</span>
              </div>
              <span className="text-xl font-light tracking-wide">Profile Settings</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <span className="text-zinc-300">Account Management</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
                Profile Settings
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Manage your account and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Profile Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* User Profile Card */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-20 h-20 bg-zinc-800 rounded-lg flex items-center justify-center">
                    <UserIcon className="h-10 w-10 text-zinc-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-white">{user.firstName} {user.lastName}</h2>
                    <p className="text-zinc-400 text-lg">{user.email}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded text-sm font-medium">
                        {user.subscription.name}
                      </span>
                      <span className="text-zinc-500 text-sm">•</span>
                      <span className="text-zinc-400 text-sm">{user.position}</span>
                    </div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-zinc-400 text-sm mb-2">First Name</label>
                    <div className="bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white">
                      {user.firstName}
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-sm mb-2">Last Name</label>
                    <div className="bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white">
                      {user.lastName}
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-sm mb-2">Position</label>
                    <div className="bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white">
                      {user.position}
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-sm mb-2">Age</label>
                    <div className="bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white">
                      {user.age} years old
                    </div>
                  </div>
                </div>

                <button className="mt-6 bg-white text-black py-3 px-6 font-medium hover:bg-zinc-100 transition-colors">
                  Edit Profile
                </button>
              </div>

              {/* Account Settings */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
                <h3 className="text-xl font-semibold mb-6">Account Settings</h3>
                <div className="space-y-4">
                  {accountSettings.map((setting, index) => {
                    const Icon = setting.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-700/30 transition-colors cursor-pointer group">
                        <div className={`w-12 h-12 ${setting.color} rounded-lg flex items-center justify-center`}>
                          <Icon className={`h-6 w-6 ${setting.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                            {setting.title}
                          </h4>
                          <p className="text-zinc-400 text-sm">{setting.description}</p>
                        </div>
                        <div className="text-zinc-500 group-hover:text-white transition-colors">→</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Danger Zone */}
              <div className="bg-red-600/10 backdrop-blur-sm rounded-lg p-8 border border-red-600/30">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Danger Zone</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Delete Account</h4>
                    <p className="text-zinc-400 text-sm">Permanently delete your account and all data</p>
                  </div>
                  <button className="bg-red-600/20 text-red-400 border border-red-600/30 py-2 px-4 rounded hover:bg-red-600/30 transition-colors flex items-center space-x-2">
                    <TrashIcon className="h-4 w-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-8">
              {/* Profile Stats */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
                <h3 className="text-lg font-semibold mb-6">Profile Stats</h3>
                <div className="space-y-4">
                  {profileStats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-2xl">{stat.icon}</span>
                      <div className="flex-1">
                        <div className="text-white font-medium">{stat.value}</div>
                        <div className="text-zinc-400 text-sm">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscription Info */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
                <h3 className="text-lg font-semibold mb-4">Subscription</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div>
                      <div className="text-white font-medium">{user.subscription.name} Plan</div>
                      <div className="text-zinc-400 text-sm">Active subscription</div>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                    Manage Subscription
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left py-2 px-3 bg-zinc-800/50 rounded hover:bg-zinc-700/50 transition-colors text-zinc-300 hover:text-white">
                    Export Data
                  </button>
                  <button className="w-full text-left py-2 px-3 bg-zinc-800/50 rounded hover:bg-zinc-700/50 transition-colors text-zinc-300 hover:text-white">
                    Download Reports
                  </button>
                  <button className="w-full text-left py-2 px-3 bg-zinc-800/50 rounded hover:bg-zinc-700/50 transition-colors text-zinc-300 hover:text-white">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-zinc-500 text-sm">
            © 2024 The Ultimate Footballer. Elite training platform.
          </div>
          <div className="text-zinc-500 text-sm">
            AI-Powered • Built for champions
          </div>
        </div>
      </footer>
    </div>
  );
}