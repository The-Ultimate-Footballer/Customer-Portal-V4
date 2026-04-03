'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon, PlayIcon, TrophyIcon, ClockIcon, UserGroupIcon, FireIcon, BoltIcon } from '@heroicons/react/24/outline';
import Sidebar from '@/components/Sidebar';

export default function TrainingPage() {
  const [user, setUser] = useState<any>(null);
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
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }
  const trainingPrograms = [
    { 
      title: 'Platinum Package', 
      level: '$2,000', 
      duration: 'Full Service',
      description: 'Complete highlight tape production with professional editing',
      icon: TrophyIcon,
      color: 'bg-amber-600/20',
      iconColor: 'text-amber-400'
    },
    { 
      title: 'Gold Package', 
      level: '$1,700', 
      duration: 'Most Popular',
      description: 'Professional highlight production for college recruitment',
      icon: PlayIcon,
      color: 'bg-yellow-600/20',
      iconColor: 'text-yellow-400'
    },
    { 
      title: 'Silver Package', 
      level: '$1,200', 
      duration: 'Best Value',
      description: 'Essential highlight tape for scholarship applications',
      icon: BoltIcon,
      color: 'bg-zinc-400/20',
      iconColor: 'text-zinc-300'
    },
    { 
      title: 'Custom Package', 
      level: '$900', 
      duration: 'Perfect Start',
      description: 'Basic highlight compilation for initial exposure',
      icon: UserGroupIcon,
      color: 'bg-blue-600/20',
      iconColor: 'text-blue-400'
    },
    { 
      title: 'Private Sessions', 
      level: '$75-$200', 
      duration: '1-on-1',
      description: 'Personalized training and technique development',
      icon: FireIcon,
      color: 'bg-emerald-600/20',
      iconColor: 'text-emerald-400'
    },
    { 
      title: 'Group Training', 
      level: '$55-$150', 
      duration: 'Team Focus',
      description: 'Group sessions and team development programs',
      icon: ClockIcon,
      color: 'bg-purple-600/20',
      iconColor: 'text-purple-400'
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
              <h1 className="text-2xl font-semibold text-white">Training Programs</h1>
              <p className="text-zinc-400 mt-1">Personalized workouts designed to elevate your game</p>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="px-8 py-6">
          {/* Service Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                  <PlayIcon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">6</div>
                  <div className="text-zinc-400 text-sm">Service Packages</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mr-4">
                  <ClockIcon className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">$900</div>
                  <div className="text-zinc-400 text-sm">Starting Price</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mr-4">
                  <TrophyIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">$2,000</div>
                  <div className="text-zinc-400 text-sm">Premium Package</div>
                </div>
              </div>
            </div>
          </div>

          {/* Training Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div 
                  key={index} 
                  className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 hover:border-zinc-600 transition-all duration-200 hover:bg-zinc-800/50 cursor-pointer group"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${program.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-zinc-400 text-sm">{program.level}</p>
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400">Duration:</span>
                      <span className="text-white font-medium">{program.duration}</span>
                    </div>
                    <button 
                      onClick={() => window.open('mailto:emmanuel@theultimatefootballer.com?subject=Interest in ' + program.title + '&body=I am interested in the ' + program.title + ' (' + program.level + '). Please send me more information.', '_blank')}
                      className="w-full bg-white text-black py-3 px-4 rounded hover:bg-zinc-100 transition-colors font-medium flex items-center justify-center space-x-2"
                    >
                      <PlayIcon className="h-4 w-4" />
                      <span>Get Quote</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}