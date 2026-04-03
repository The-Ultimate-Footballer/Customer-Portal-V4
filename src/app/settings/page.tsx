'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { 
  Cog6ToothIcon,
  BellIcon,
  ShieldCheckIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export default function SettingsPage() {
  const [user, setUser] = useState<any>(null);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    training: true,
    marketing: false
  });
  const [privacy, setPrivacy] = useState({
    profilePublic: false,
    statsPublic: true,
    videosPublic: false
  });

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

  const settingsCategories = [
    {
      title: 'Account Settings',
      icon: UserIcon,
      color: 'bg-blue-600/20 text-blue-400',
      settings: [
        { name: 'Personal Information', description: 'Update your name, email, and contact details', action: true },
        { name: 'Password & Security', description: 'Change password and security settings', action: true },
        { name: 'Subscription Management', description: 'Manage your subscription and billing', action: true }
      ]
    },
    {
      title: 'Notification Preferences',
      icon: BellIcon,
      color: 'bg-emerald-600/20 text-emerald-400',
      settings: [
        { name: 'Training Reminders', description: 'Get notified about upcoming training sessions', toggle: true, key: 'training' },
        { name: 'Email Notifications', description: 'Receive updates and news via email', toggle: true, key: 'email' },
        { name: 'Push Notifications', description: 'Mobile and browser notifications', toggle: true, key: 'push' },
        { name: 'SMS Alerts', description: 'Text message notifications for urgent updates', toggle: true, key: 'sms' },
        { name: 'Marketing Communications', description: 'Promotional offers and updates', toggle: true, key: 'marketing' }
      ]
    },
    {
      title: 'Privacy & Data',
      icon: ShieldCheckIcon,
      color: 'bg-purple-600/20 text-purple-400',
      settings: [
        { name: 'Public Profile', description: 'Make your profile visible to other users', toggle: true, key: 'profilePublic', category: 'privacy' },
        { name: 'Public Statistics', description: 'Share your training stats publicly', toggle: true, key: 'statsPublic', category: 'privacy' },
        { name: 'Video Sharing', description: 'Allow your videos to be featured', toggle: true, key: 'videosPublic', category: 'privacy' }
      ]
    },
    {
      title: 'App Preferences',
      icon: DevicePhoneMobileIcon,
      color: 'bg-amber-600/20 text-amber-400',
      settings: [
        { name: 'Language', description: 'English (US)', action: true },
        { name: 'Time Zone', description: 'Eastern Time (ET)', action: true },
        { name: 'Units', description: 'Imperial (ft, lbs, mph)', action: true }
      ]
    }
  ];

  const handleToggle = (key: string, category = 'notifications') => {
    if (category === 'privacy') {
      setPrivacy(prev => ({
        ...prev,
        [key]: !prev[key as keyof typeof prev]
      }));
    } else {
      setNotifications(prev => ({
        ...prev,
        [key]: !prev[key as keyof typeof prev]
      }));
    }
  };

  const getToggleValue = (setting: any) => {
    const category = 'category' in setting ? setting.category : 'notifications';
    const targetObj = category === 'privacy' ? privacy : notifications;
    return targetObj[setting.key! as keyof typeof targetObj] || false;
  };

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
            <h1 className="text-4xl font-bold text-white mb-4">Settings</h1>
            <p className="text-zinc-400 text-lg">Manage your account preferences and privacy settings</p>
          </div>

          {/* Settings Categories */}
          <div className="space-y-8">
            {settingsCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800">
                  <div className="p-6 border-b border-zinc-800">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${category.color.split(' ')[0]} rounded-lg flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${category.color.split(' ')[1]} ${category.color.split(' ')[2]}`} />
                      </div>
                      <h2 className="text-xl font-bold text-white">{category.title}</h2>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      {category.settings.map((setting, settingIndex) => (
                        <div key={settingIndex} className="flex items-center justify-between p-4 rounded-lg bg-zinc-800/30 hover:bg-zinc-800/50 transition-colors">
                          <div className="flex-1">
                            <h3 className="text-white font-medium">{setting.name}</h3>
                            <p className="text-zinc-400 text-sm mt-1">{setting.description}</p>
                          </div>
                          
                          {'toggle' in setting && setting.toggle && (
                            <button
                              onClick={() => handleToggle(setting.key!, 'category' in setting ? setting.category : 'notifications')}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                getToggleValue(setting) ? 'bg-blue-600' : 'bg-zinc-700'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  getToggleValue(setting) ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          )}
                          
                          {'action' in setting && setting.action && (
                            <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                              Change
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Account Actions */}
          <div className="mt-8 bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
            <h2 className="text-xl font-bold text-white mb-4">Account Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Export Data
              </button>
              <button className="bg-zinc-700 text-white py-3 px-6 rounded-lg hover:bg-zinc-600 transition-colors font-medium">
                Contact Support
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-zinc-800">
              <button className="bg-red-600/20 text-red-400 py-3 px-6 rounded-lg hover:bg-red-600/30 transition-colors font-medium border border-red-600/30">
                Delete Account
              </button>
              <p className="text-zinc-500 text-xs mt-2">This action cannot be undone. All your data will be permanently deleted.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}