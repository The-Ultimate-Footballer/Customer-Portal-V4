'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { 
  CalendarIcon,
  ClockIcon,
  VideoCameraIcon,
  PlayIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function CalendarPage() {
  const [user, setUser] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

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

  const upcomingEvents = [
    {
      title: 'Speed & Agility Training',
      date: '2026-03-16',
      time: '10:00 AM',
      duration: '1.5 hours',
      type: 'training',
      location: 'Main Field',
      icon: PlayIcon,
      color: 'bg-blue-600/20 text-blue-400'
    },
    {
      title: 'Video Analysis Session',
      date: '2026-03-17',
      time: '2:00 PM', 
      duration: '1 hour',
      type: 'analysis',
      location: 'Online',
      icon: VideoCameraIcon,
      color: 'bg-purple-600/20 text-purple-400'
    },
    {
      title: 'College Scout Meeting',
      date: '2026-03-18',
      time: '4:00 PM',
      duration: '45 min',
      type: 'meeting',
      location: 'Conference Room',
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-emerald-600/20 text-emerald-400'
    },
    {
      title: 'Highlight Tape Review',
      date: '2026-03-19',
      time: '11:00 AM',
      duration: '30 min', 
      type: 'review',
      location: 'Studio',
      icon: CheckCircleIcon,
      color: 'bg-amber-600/20 text-amber-400'
    },
    {
      title: 'Strength Training',
      date: '2026-03-20',
      time: '9:00 AM',
      duration: '2 hours',
      type: 'training',
      location: 'Gym',
      icon: PlayIcon,
      color: 'bg-rose-600/20 text-rose-400'
    }
  ];

  const todayStats = [
    { label: 'Training Sessions', value: '2', icon: PlayIcon },
    { label: 'Video Reviews', value: '1', icon: VideoCameraIcon },
    { label: 'Meetings', value: '1', icon: ChatBubbleLeftRightIcon },
    { label: 'Recovery Time', value: '4h', icon: ClockIcon }
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
            <h1 className="text-4xl font-bold text-white mb-4">Training Calendar</h1>
            <p className="text-zinc-400 text-lg">Manage your training schedule and appointments</p>
          </div>

          {/* Today's Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {todayStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-zinc-400 text-xs">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar Widget */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                <div className="flex items-center space-x-3 mb-6">
                  <CalendarIcon className="h-6 w-6 text-white" />
                  <h2 className="text-xl font-bold text-white">March 2026</h2>
                </div>
                
                {/* Simple Calendar View */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                    <div key={day} className="text-center text-zinc-400 text-sm font-medium p-2">
                      {day}
                    </div>
                  ))}
                  {/* Calendar days - simplified */}
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <div 
                      key={day} 
                      className={`text-center text-sm p-2 rounded cursor-pointer transition-colors ${
                        day === 15 ? 'bg-white text-black font-semibold' : 
                        [16, 17, 18, 19, 20].includes(day) ? 'bg-blue-600/20 text-blue-400' : 
                        'text-zinc-300 hover:bg-zinc-800'
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-blue-600/20 rounded"></div>
                  <span className="text-zinc-400">Has Events</span>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                <h2 className="text-xl font-bold text-white mb-6">Upcoming Events</h2>
                
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => {
                    const Icon = event.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-zinc-800/30 hover:bg-zinc-800/50 transition-colors">
                        <div className={`w-10 h-10 ${event.color.split(' ')[0]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`h-5 w-5 ${event.color.split(' ')[1]} ${event.color.split(' ')[2]}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">{event.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-zinc-400 mt-1">
                            <div className="flex items-center space-x-1">
                              <ClockIcon className="h-4 w-4" />
                              <span>{event.time} • {event.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPinIcon className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <div className="text-xs text-zinc-500 mt-1">
                            {new Date(event.date).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                        </div>
                        <button className="text-blue-400 hover:text-blue-300 transition-colors">
                          <span className="text-sm">View</span>
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <button className="w-full bg-white text-black py-3 px-4 rounded hover:bg-zinc-100 transition-colors font-medium">
                    Schedule New Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}