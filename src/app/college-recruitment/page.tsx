'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { 
  AcademicCapIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  StarIcon,
  TrophyIcon,
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function CollegeRecruitmentPage() {
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

  const recruitmentServices = [
    { 
      title: 'Platinum Highlight Package', 
      price: '$2,000', 
      description: 'Complete professional highlight tape production for top-tier colleges',
      icon: TrophyIcon,
      color: 'bg-amber-600/20',
      iconColor: 'text-amber-400',
      features: ['Professional editing', 'Music & graphics', 'College distribution', '5-7 min highlight reel']
    },
    { 
      title: 'Gold Highlight Package', 
      price: '$1,700', 
      description: 'Professional highlight production - Most Popular choice',
      icon: StarIcon,
      color: 'bg-yellow-600/20',
      iconColor: 'text-yellow-400',
      features: ['Professional editing', 'Music included', 'College sharing', '4-5 min highlight reel']
    },
    { 
      title: 'Silver Highlight Package', 
      price: '$1,200', 
      description: 'Essential highlight tape - Best Value option',
      icon: VideoCameraIcon,
      color: 'bg-zinc-400/20',
      iconColor: 'text-zinc-300',
      features: ['Quality editing', 'Basic graphics', 'Digital delivery', '3-4 min highlight reel']
    },
    { 
      title: 'Custom Highlight Package', 
      price: '$900', 
      description: 'Basic highlight compilation - Perfect Start',
      icon: DocumentTextIcon,
      color: 'bg-blue-600/20',
      iconColor: 'text-blue-400',
      features: ['Basic editing', 'Standard format', 'Digital file', '2-3 min highlight reel']
    }
  ];

  const recruitmentStats = [
    { label: 'College Scouts Reached', value: '150+', icon: AcademicCapIcon, color: 'bg-blue-600/20 text-blue-400' },
    { label: 'Successful Placements', value: '45', icon: TrophyIcon, color: 'bg-emerald-600/20 text-emerald-400' },
    { label: 'Highlight Tapes Created', value: '200+', icon: VideoCameraIcon, color: 'bg-purple-600/20 text-purple-400' },
    { label: 'Scholarships Earned', value: '$2.1M+', icon: StarIcon, color: 'bg-amber-600/20 text-amber-400' }
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
            <h1 className="text-4xl font-bold text-white mb-4">College Recruitment</h1>
            <p className="text-zinc-400 text-lg">Professional highlight tapes that get you noticed by college scouts</p>
          </div>

          {/* Recruitment Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {recruitmentStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${stat.color.split(' ')[0]} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className={`h-6 w-6 ${stat.color.split(' ')[1]} ${stat.color.split(' ')[2]}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-zinc-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Highlight Packages */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Highlight Tape Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recruitmentServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`h-6 w-6 ${service.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                          <span className="text-2xl font-bold text-white">{service.price}</span>
                        </div>
                        <p className="text-zinc-400 text-sm mb-4">{service.description}</p>
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                              <span className="text-zinc-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <button 
                          onClick={() => window.open('mailto:emmanuel@theultimatefootballer.com?subject=Interest in ' + service.title + '&body=I am interested in the ' + service.title + ' (' + service.price + '). Please send me more information and next steps.', '_blank')}
                          className="w-full bg-white text-black py-3 px-4 rounded hover:bg-zinc-100 transition-colors font-medium flex items-center justify-center space-x-2"
                        >
                          <span>Get Started</span>
                          <ArrowRightIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Steps Section */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Recruited?</h2>
            <p className="text-zinc-400 mb-6">
              Our highlight tapes have helped hundreds of players earn college scholarships. Let's create yours next.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <VideoCameraIcon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">1. Submit Your Footage</h3>
                <p className="text-zinc-400 text-sm">Send us your best game and training footage</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DocumentTextIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">2. Professional Editing</h3>
                <p className="text-zinc-400 text-sm">We create a compelling highlight tape</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <AcademicCapIcon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">3. College Distribution</h3>
                <p className="text-zinc-400 text-sm">Your tape reaches the right coaches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}