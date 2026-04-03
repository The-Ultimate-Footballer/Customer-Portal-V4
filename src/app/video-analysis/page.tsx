'use client';

import Link from 'next/link';
import { ArrowLeftIcon, VideoCameraIcon, PlayIcon, ArrowUpTrayIcon, EyeIcon, DocumentTextIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function VideoAnalysisPage() {
  const videoCategories = [
    { name: 'Training Sessions', count: 12, icon: PlayIcon, color: 'bg-blue-600/20', iconColor: 'text-blue-400' },
    { name: 'Game Footage', count: 8, icon: VideoCameraIcon, color: 'bg-purple-600/20', iconColor: 'text-purple-400' },
    { name: 'Skill Analysis', count: 5, icon: EyeIcon, color: 'bg-emerald-600/20', iconColor: 'text-emerald-400' },
    { name: 'AI Reviews', count: 15, icon: DocumentTextIcon, color: 'bg-amber-600/20', iconColor: 'text-amber-400' }
  ];

  const recentVideos = [
    { 
      title: 'Speed Training Session', 
      uploadDate: '2 days ago', 
      duration: '12:34',
      status: 'Analyzed',
      thumbnail: '/api/placeholder/300/200',
      type: 'training'
    },
    { 
      title: 'Match Highlights', 
      uploadDate: '5 days ago', 
      duration: '8:22',
      status: 'Processing',
      thumbnail: '/api/placeholder/300/200',
      type: 'match'
    },
    { 
      title: 'Shooting Practice', 
      uploadDate: '1 week ago', 
      duration: '15:45',
      status: 'Analyzed',
      thumbnail: '/api/placeholder/300/200',
      type: 'skill'
    },
    { 
      title: 'Defensive Drills', 
      uploadDate: '1 week ago', 
      duration: '18:12',
      status: 'Analyzed',
      thumbnail: '/api/placeholder/300/200',
      type: 'training'
    },
    { 
      title: 'Tactical Review', 
      uploadDate: '2 weeks ago', 
      duration: '25:30',
      status: 'Analyzed',
      thumbnail: '/api/placeholder/300/200',
      type: 'analysis'
    },
    { 
      title: 'Fitness Assessment', 
      uploadDate: '3 weeks ago', 
      duration: '20:18',
      status: 'Analyzed',
      thumbnail: '/api/placeholder/300/200',
      type: 'fitness'
    }
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
              <span className="text-xl font-light tracking-wide">Video Analysis</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <span className="text-zinc-300">AI-Powered Insights</span>
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
                Video Analysis
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
              AI-powered video analysis for technical improvement
            </p>
            
            {/* Upload Button */}
            <button className="bg-white text-black py-4 px-8 text-lg font-medium hover:bg-zinc-100 transition-colors flex items-center space-x-3 mx-auto">
              <ArrowUpTrayIcon className="h-6 w-6" />
              <span>Upload New Video</span>
            </button>
          </div>

          {/* Video Categories Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {videoCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 hover:border-zinc-600 transition-all duration-200 cursor-pointer">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${category.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                      <p className="text-zinc-400 text-sm">{category.count} videos</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Analysis Hub */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 mb-16">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <VideoCameraIcon className="h-10 w-10 text-purple-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">Professional Video Analysis</h2>
              <p className="text-zinc-400 max-w-md mx-auto">
                Upload your training videos and get detailed AI-powered analysis to improve your technique
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowUpTrayIcon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Upload</h3>
                <p className="text-zinc-400 text-sm">Upload your training or match footage</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <EyeIcon className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Analyze</h3>
                <p className="text-zinc-400 text-sm">AI analyzes technique and positioning</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Improve</h3>
                <p className="text-zinc-400 text-sm">Get personalized feedback and tips</p>
              </div>
            </div>
          </div>

          {/* Recent Videos */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-8">Recent Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentVideos.map((video, index) => (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-200 cursor-pointer group">
                  <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <PlayIcon className="h-12 w-12 text-zinc-500 group-hover:text-white transition-colors" />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {video.title}
                  </h3>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-400">{video.uploadDate}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      video.status === 'Analyzed' 
                        ? 'bg-emerald-600/20 text-emerald-400' 
                        : 'bg-amber-600/20 text-amber-400'
                    }`}>
                      {video.status}
                    </span>
                  </div>
                </div>
              ))}
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