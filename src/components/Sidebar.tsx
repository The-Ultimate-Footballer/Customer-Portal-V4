'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon,
  PlayIcon,
  ChartBarIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  HeartIcon,
  AcademicCapIcon,
  CalendarIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  current?: boolean;
}

interface SidebarProps {
  onLogout?: () => void;
}

export default function Sidebar({ onLogout }: SidebarProps) {
  const pathname = usePathname();

  const navigation: NavigationItem[] = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Training', href: '/training', icon: PlayIcon },
    { name: 'Nutrition', href: '/nutrition', icon: DocumentTextIcon },
    { name: 'Recovery', href: '/recovery', icon: HeartIcon },
    { name: 'Video Analysis', href: '/video-analysis', icon: VideoCameraIcon },
    { name: 'College Recruitment', href: '/college-recruitment', icon: AcademicCapIcon },
    { name: 'Progress', href: '/progress', icon: ChartBarIcon },
    { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
    { name: 'Messages', href: '/messages', icon: ChatBubbleLeftRightIcon },
    { name: 'Profile', href: '/profile', icon: UserIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
    { name: 'Store', href: '/store', icon: ShoppingBagIcon },
  ];

  return (
    <div className="flex flex-col h-screen w-64 bg-zinc-900/80 backdrop-blur-sm border-r border-zinc-800">
      {/* Logo */}
      <div className="flex items-center space-x-3 p-6 border-b border-zinc-800">
        <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
          <span className="text-black text-xs font-bold">TUF</span>
        </div>
        <span className="text-lg font-light tracking-wide text-white">Dashboard</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-white text-black'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              <Icon 
                className={`h-5 w-5 ${
                  isActive ? 'text-black' : 'text-zinc-400 group-hover:text-white'
                }`} 
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-zinc-800">
        <button
          onClick={onLogout}
          className="group flex items-center space-x-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200 w-full"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5 text-zinc-400 group-hover:text-white" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}