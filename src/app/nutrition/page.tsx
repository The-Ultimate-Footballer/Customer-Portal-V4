'use client';

import Link from 'next/link';
import { ArrowLeftIcon, DocumentTextIcon, HeartIcon, BeakerIcon, PlusIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function NutritionPage() {
  const nutritionStats = [
    {
      title: 'Daily Calories',
      current: '2,400',
      target: '2,800',
      percentage: 86,
      icon: DocumentTextIcon,
      color: 'bg-blue-600/20',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Water Intake',
      current: '6.5L',
      target: '8L',
      percentage: 81,
      icon: HeartIcon,
      color: 'bg-cyan-600/20',
      iconColor: 'text-cyan-400'
    },
    {
      title: 'Protein',
      current: '120g',
      target: '140g',
      percentage: 86,
      icon: BeakerIcon,
      color: 'bg-emerald-600/20',
      iconColor: 'text-emerald-400'
    }
  ];

  const macronutrients = [
    { name: 'Protein', current: '120g', target: '140g', percentage: 86, color: 'bg-emerald-500' },
    { name: 'Carbohydrates', current: '280g', target: '350g', percentage: 80, color: 'bg-blue-500' },
    { name: 'Fats', current: '65g', target: '90g', percentage: 72, color: 'bg-amber-500' }
  ];

  const supplements = [
    { name: 'Whey Protein', taken: true, time: 'Post-workout', status: 'complete' },
    { name: 'Creatine', taken: true, time: 'Pre-workout', status: 'complete' },
    { name: 'Multivitamin', taken: false, time: 'Morning', status: 'pending' },
    { name: 'Fish Oil', taken: true, time: 'With dinner', status: 'complete' },
    { name: 'Magnesium', taken: false, time: 'Evening', status: 'pending' }
  ];

  const mealPlan = [
    { meal: 'Breakfast', time: '7:00 AM', calories: 520, status: 'logged', items: ['Oatmeal', 'Banana', 'Greek Yogurt'] },
    { meal: 'Mid-Morning', time: '10:00 AM', calories: 180, status: 'logged', items: ['Protein Shake', 'Almonds'] },
    { meal: 'Lunch', time: '1:00 PM', calories: 680, status: 'logged', items: ['Chicken Breast', 'Brown Rice', 'Vegetables'] },
    { meal: 'Pre-Workout', time: '4:00 PM', calories: 120, status: 'pending', items: ['Energy Bar'] },
    { meal: 'Post-Workout', time: '6:30 PM', calories: 340, status: 'pending', items: ['Protein Shake', 'Banana'] },
    { meal: 'Dinner', time: '8:00 PM', calories: 620, status: 'pending', items: ['Salmon', 'Quinoa', 'Green Salad'] }
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
              <span className="text-xl font-light tracking-wide">Nutrition Tracking</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <span className="text-zinc-300">Performance Nutrition</span>
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
                Nutrition Tracking
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Fuel your performance with optimized nutrition
            </p>
            
            {/* Quick Add Button */}
            <button className="bg-white text-black py-3 px-6 font-medium hover:bg-zinc-100 transition-colors flex items-center space-x-2 mx-auto">
              <PlusIcon className="h-5 w-5" />
              <span>Log Meal</span>
            </button>
          </div>

          {/* Nutrition Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {nutritionStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{stat.title}</h3>
                      <p className="text-zinc-400 text-sm">{stat.current} / {stat.target}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Progress</span>
                      <span className="text-white font-medium">{stat.percentage}%</span>
                    </div>
                    <div className="bg-zinc-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Macronutrient Breakdown */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 mb-16">
            <h2 className="text-xl font-semibold mb-6">Daily Macronutrients</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {macronutrients.map((macro, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{macro.name}</span>
                    <span className="text-zinc-400 text-sm">{macro.current} / {macro.target}</span>
                  </div>
                  <div className="bg-zinc-800 rounded-full h-3">
                    <div 
                      className={`${macro.color} h-3 rounded-full transition-all duration-300`}
                      style={{ width: `${macro.percentage}%` }}
                    />
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-zinc-400 text-xs">{macro.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Supplements Tracking */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <h2 className="text-xl font-semibold mb-6">Daily Supplements</h2>
              <div className="space-y-4">
                {supplements.map((supplement, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-zinc-800/30 rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      supplement.taken ? 'bg-emerald-600' : 'bg-zinc-700'
                    }`}>
                      {supplement.taken && <CheckCircleIcon className="h-5 w-5 text-white" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{supplement.name}</h3>
                      <p className="text-zinc-400 text-sm">{supplement.time}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      supplement.taken 
                        ? 'bg-emerald-600/20 text-emerald-400' 
                        : 'bg-amber-600/20 text-amber-400'
                    }`}>
                      {supplement.taken ? 'Complete' : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hydration Tracking */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <h2 className="text-xl font-semibold mb-6">Hydration Tracker</h2>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">6.5L</div>
                <p className="text-zinc-400 mb-4">Water intake today</p>
                <div className="bg-zinc-800 rounded-full h-4 mb-2">
                  <div className="bg-cyan-400 h-4 rounded-full" style={{width: '81%'}}></div>
                </div>
                <p className="text-zinc-400 text-sm">Goal: 8L (81% complete)</p>
              </div>
              
              <button className="w-full bg-cyan-600 text-white py-3 px-4 rounded hover:bg-cyan-700 transition-colors font-medium flex items-center justify-center space-x-2">
                <PlusIcon className="h-5 w-5" />
                <span>Add Water</span>
              </button>
            </div>
          </div>

          {/* Meal Plan */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800 mb-8">
            <h2 className="text-xl font-semibold mb-6">Today's Meal Plan</h2>
            <div className="space-y-4">
              {mealPlan.map((meal, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <ClockIcon className="h-5 w-5 text-zinc-400" />
                    <div className="text-sm text-zinc-400">{meal.time}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{meal.meal}</h3>
                    <p className="text-zinc-400 text-sm">{meal.items.join(', ')}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{meal.calories} cal</div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      meal.status === 'logged' 
                        ? 'bg-emerald-600/20 text-emerald-400' 
                        : 'bg-amber-600/20 text-amber-400'
                    }`}>
                      {meal.status === 'logged' ? 'Logged' : 'Pending'}
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