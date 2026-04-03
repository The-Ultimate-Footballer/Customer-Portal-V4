'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Premium Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8"></div>
            <span className="text-xl font-light tracking-wide">THE ULTIMATE FOOTBALLER</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <span className="text-zinc-300">Elite Training Platform</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 min-h-[calc(100vh-120px)] items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white uppercase tracking-wider font-medium">
                  Premium Members Only
                </div>
                
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.85] tracking-tight">
                  Elite
                  <span className="block">Performance</span>
                  <span className="block">Training</span>
                </h1>
                
                <p className="text-lg text-zinc-300 max-w-md leading-relaxed font-light">
                  Precision-engineered training protocols for athletes 
                  committed to excellence.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/auth/signup"
                  className="group inline-flex items-center justify-center bg-yellow-500 text-black px-8 py-4 text-sm font-semibold hover:bg-yellow-400 transition-all duration-300"
                >
                  <span>Begin Training</span>
                  <ArrowRightIcon className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/auth/login"
                  className="group inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm font-semibold hover:border-white/50 hover:bg-white/5 transition-all duration-300"
                >
                  <span>Member Access</span>
                  <ChevronRightIcon className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-white">500+</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Athletes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white">150+</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Scholarships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-white">98%</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Success</div>
                </div>
              </div>
            </div>

            {/* Right Content - Geometric Design */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              
              {/* Main Circular Design */}
              <div className="relative">
                {/* Outer Circles */}
                <div className="w-96 h-96 border border-white/20 rounded-full relative">
                  <div className="absolute inset-8 border border-white/15 rounded-full">
                    <div className="absolute inset-8 border border-white/10 rounded-full">
                      <div className="absolute inset-8 border border-white/5 rounded-full">
                        <div className="absolute inset-12 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <div className="text-center space-y-3">
                            <div className="w-16 h-16 mx-auto"></div>
                            <div className="text-sm text-white uppercase tracking-wider font-semibold">Elite</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-4 h-4 bg-white rounded-full opacity-60"></div>
                <div className="absolute -bottom-8 -left-8 w-3 h-3 bg-zinc-300 rounded-full opacity-40"></div>
                <div className="absolute top-1/3 -left-10 w-2 h-2 bg-white rounded-full opacity-30"></div>
                <div className="absolute bottom-1/3 -right-8 w-2 h-2 bg-zinc-400 rounded-full opacity-50"></div>
              </div>

              {/* Performance Metrics */}
              <div className="absolute bottom-0 left-0 right-0 space-y-3">
                <div className="flex justify-between items-center px-6 py-4 bg-white/5 border border-white/10 backdrop-blur">
                  <span className="text-sm text-zinc-300 uppercase tracking-wider font-medium">Performance Index</span>
                  <span className="text-lg font-mono text-white">98.7%</span>
                </div>
                <div className="flex justify-between items-center px-6 py-4 bg-white/5 border border-white/10 backdrop-blur">
                  <span className="text-sm text-zinc-300 uppercase tracking-wider font-medium">Training Load</span>
                  <span className="text-lg font-mono text-white">Elite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features Section */}
          <div className="py-20 border-t border-white/10 mt-16">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-light text-white">Precision Training</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Data-driven programs calibrated for peak athletic performance.
                </p>
              </div>
              
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-light text-white">Performance Analytics</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Advanced metrics and insights to optimize every aspect of your game.
                </p>
              </div>
              
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-light text-white">Elite Network</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Connect with top-tier coaches and collegiate recruitment opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-zinc-400">
            © 2026 The Ultimate Footballer. All rights reserved.
          </div>
          <div className="flex items-center space-x-8 text-xs text-zinc-400">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}