'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { 
  HeartIcon,
  MoonIcon,
  FireIcon,
  ClockIcon,
  CheckCircleIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

export default function RecoveryPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get user data from localStorage
    const authData = localStorage.getItem('auth');
    if (authData) {
      setUser(JSON.parse(authData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/auth/login';
  };

  const recoveryPrograms = [
    { 
      title: 'Sleep Optimization', 
      duration: '8-10 hours', 
      description: 'Quality sleep tracking and improvement techniques',
      icon: MoonIcon,
      color: 'bg-indigo-600/20',
      iconColor: 'text-indigo-400',
      status: 'Active'
    },
    { 
      title: 'Active Recovery', 
      duration: '30-45 min', 
      description: 'Light movement and mobility sessions',
      icon: HeartIcon,
      color: 'bg-rose-600/20',
      iconColor: 'text-rose-400',
      status: 'Pending'
    },
    { 
      title: 'Ice Bath Therapy', 
      duration: '10-15 min', 
      description: 'Cold exposure for inflammation reduction',
      icon: FireIcon,
      color: 'bg-blue-600/20',
      iconColor: 'text-blue-400',
      status: 'Scheduled'
    },
    { 
      title: 'Meditation & Mindfulness', 
      duration: '15-20 min', 
      description: 'Mental recovery and stress management',
      icon: ClockIcon,
      color: 'bg-purple-600/20',
      iconColor: 'text-purple-400',
      status: 'Available'
    }
  ];

  if (!user) {
    return <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='m0 .5 32 0'/%3e%3cpath d='m0 .5 0 32'/%3e%3c/svg%3e")`,
        }}></div>
        
        <div className="relative">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Recovery & Wellness</h1>
            <p className="text-zinc-400 text-lg">Optimize your recovery for peak performance</p>
          </div>

          {/* Recovery Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-4">
                  <MoonIcon className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">7.5h</div>
                  <div className="text-zinc-400 text-sm">Avg Sleep</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-600/20 rounded-lg flex items-center justify-center mr-4">
                  <HeartIcon className="h-6 w-6 text-rose-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">68</div>
                  <div className="text-zinc-400 text-sm">Resting HR</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mr-4">
                  <CheckCircleIcon className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">85%</div>
                  <div className="text-zinc-400 text-sm">Recovery Score</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                  <FireIcon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">3</div>
                  <div className="text-zinc-400 text-sm">Ice Baths/Week</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recovery Programs */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Recovery Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recoveryPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`h-6 w-6 ${program.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-white">{program.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            program.status === 'Active' ? 'bg-emerald-600/20 text-emerald-400' :
                            program.status === 'Pending' ? 'bg-amber-600/20 text-amber-400' :
                            program.status === 'Scheduled' ? 'bg-blue-600/20 text-blue-400' :
                            'bg-zinc-600/20 text-zinc-400'
                          }`}>
                            {program.status}
                          </span>
                        </div>
                        <p className="text-zinc-400 text-sm mb-4">{program.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-500 text-sm">{program.duration}</span>
                          <button className="bg-white text-black py-2 px-4 rounded text-sm hover:bg-zinc-100 transition-colors font-medium flex items-center space-x-2">
                            <PlayIcon className="h-4 w-4" />
                            <span>Start Session</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}