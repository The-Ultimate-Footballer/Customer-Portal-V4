'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ChartBarIcon, TrophyIcon, ClockIcon, BoltIcon, FireIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Sidebar from '@/components/Sidebar';

export default function ProgressPage() {
  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/auth/login';
  };
  const progressMetrics = [
    {
      title: 'Speed Improvement',
      value: '12%',
      change: '+2.3% this week',
      icon: BoltIcon,
      color: 'bg-yellow-600/20',
      iconColor: 'text-yellow-400'
    },
    {
      title: 'Accuracy Rate',
      value: '87%',
      change: '+5% this month',
      icon: CheckCircleIcon,
      color: 'bg-emerald-600/20',
      iconColor: 'text-emerald-400'
    },
    {
      title: 'Endurance Level',
      value: '94%',
      change: '+8% this month',
      icon: FireIcon,
      color: 'bg-red-600/20',
      iconColor: 'text-red-400'
    }
  ];

  const recentAchievements = [
    { title: 'Speed Drill Master', description: 'Completed all agility challenges', date: '2 days ago', type: 'speed' },
    { title: 'Accuracy Champion', description: '95% passing accuracy achieved', date: '5 days ago', type: 'skill' },
    { title: 'Consistency King', description: '7-day training streak', date: '1 week ago', type: 'dedication' },
    { title: 'Goal Scorer', description: 'Perfect shooting session completed', date: '2 weeks ago', type: 'shooting' }
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
              <h1 className="text-2xl font-semibold text-white">Progress Analytics</h1>
              <p className="text-zinc-400 mt-1">Track your improvement and celebrate achievements</p>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="px-8 py-6">
          {/* Key Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mr-4">
                  <TrophyIcon className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">87%</div>
                  <div className="text-zinc-400 text-sm">Overall Progress</div>
                  <div className="text-emerald-400 text-xs">↗ +12% this month</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                  <ClockIcon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">24.5h</div>
                  <div className="text-zinc-400 text-sm">Training Time</div>
                  <div className="text-blue-400 text-xs">This month</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mr-4">
                  <ChartBarIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">15</div>
                  <div className="text-zinc-400 text-sm">Goals Achieved</div>
                  <div className="text-amber-400 text-xs">3 this week</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Progress Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {progressMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${metric.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{metric.title}</h3>
                      <p className="text-zinc-400 text-sm">{metric.change}</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="bg-zinc-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: metric.value }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Performance Chart Placeholder */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 mb-16">
            <h2 className="text-xl font-semibold mb-6">Performance Trends</h2>
            <div className="bg-zinc-800/50 rounded-lg p-12 text-center">
              <ChartBarIcon className="h-16 w-16 text-zinc-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-zinc-300 mb-2">Advanced Analytics Coming Soon</h3>
              <p className="text-zinc-500">Detailed performance charts and AI-powered insights will be available here.</p>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 mb-8">
            <h2 className="text-xl font-semibold mb-6">Recent Achievements</h2>
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 py-4 border-b border-zinc-800 last:border-b-0">
                  <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center">
                    <TrophyIcon className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{achievement.title}</h3>
                    <p className="text-zinc-400 text-sm">{achievement.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-zinc-500 text-xs">{achievement.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}