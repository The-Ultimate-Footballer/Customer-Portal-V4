'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ChatBubbleLeftRightIcon, UserIcon, PaperAirplaneIcon, PlusIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      name: 'Coach Rodriguez',
      role: 'Head Coach',
      lastMessage: 'Great progress on your speed drills! Keep up the excellent work.',
      time: '2h ago',
      unread: 2,
      avatar: '🏆',
      online: true
    },
    {
      id: 2,
      name: 'Training Team',
      role: 'Support Staff',
      lastMessage: 'Your next session is scheduled for tomorrow at 3 PM.',
      time: '1d ago',
      unread: 0,
      avatar: '⚽',
      online: false
    },
    {
      id: 3,
      name: 'Nutritionist Sarah',
      role: 'Nutrition Specialist',
      lastMessage: 'Updated your meal plan with post-workout recommendations.',
      time: '2d ago',
      unread: 1,
      avatar: '🥗',
      online: true
    },
    {
      id: 4,
      name: 'Video Analyst',
      role: 'Performance Analyst',
      lastMessage: 'Your latest video analysis is ready for review.',
      time: '3d ago',
      unread: 0,
      avatar: '📹',
      online: false
    },
    {
      id: 5,
      name: 'Support Team',
      role: 'Technical Support',
      lastMessage: 'Welcome to The Ultimate Footballer platform!',
      time: '1w ago',
      unread: 0,
      avatar: '💬',
      online: false
    }
  ];

  const quickActions = [
    { title: 'Schedule Session', icon: ClockIcon, description: 'Book a coaching session' },
    { title: 'Ask Question', icon: ChatBubbleLeftRightIcon, description: 'Get help from coaches' },
    { title: 'Report Issue', icon: UserIcon, description: 'Technical support' }
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
              <span className="text-xl font-light tracking-wide">Messages</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <span className="text-zinc-300">Coach Communication</span>
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
                Messages
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Stay connected with your coaching team
            </p>
            
            {/* New Message Button */}
            <button className="bg-white text-black py-3 px-6 font-medium hover:bg-zinc-100 transition-colors flex items-center space-x-2 mx-auto">
              <PlusIcon className="h-5 w-5" />
              <span>New Message</span>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-zinc-400 text-sm">{action.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Communication Hub */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 mb-16">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-emerald-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftRightIcon className="h-10 w-10 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">Professional Communication</h2>
              <p className="text-zinc-400 max-w-md mx-auto">
                Direct access to your coaches, trainers, and support team for personalized guidance
              </p>
            </div>
          </div>

          {/* Conversations List */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Conversations</h2>
              <span className="text-zinc-400 text-sm">{conversations.filter(c => c.unread > 0).length} unread</span>
            </div>

            <div className="space-y-4">
              {conversations.map((conversation) => (
                <div key={conversation.id} className="flex items-center space-x-4 p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-pointer group">
                  <div className="relative">
                    <div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center text-lg">
                      {conversation.avatar}
                    </div>
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-zinc-800"></div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {conversation.name}
                      </h3>
                      <span className="text-zinc-500 text-xs">•</span>
                      <span className="text-zinc-500 text-xs">{conversation.role}</span>
                    </div>
                    <p className="text-zinc-400 text-sm line-clamp-1">
                      {conversation.lastMessage}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-zinc-500 text-xs mb-1">{conversation.time}</div>
                    {conversation.unread > 0 && (
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">{conversation.unread}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Composer */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800 mb-8">
            <h3 className="text-lg font-semibold mb-4">Quick Message</h3>
            <div className="space-y-4">
              <select className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white">
                <option>Select recipient...</option>
                <option>Coach Rodriguez</option>
                <option>Training Team</option>
                <option>Nutritionist Sarah</option>
                <option>Video Analyst</option>
              </select>
              <textarea 
                className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-white placeholder-zinc-500 resize-none"
                rows={4}
                placeholder="Type your message..."
              ></textarea>
              <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <PaperAirplaneIcon className="h-4 w-4" />
                <span>Send Message</span>
              </button>
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