'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { 
  ShoppingBagIcon,
  StarIcon,
  HeartIcon,
  PlayIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  TrophyIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function StorePage() {
  const [user, setUser] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const categories = [
    { id: 'all', name: 'All Products', count: 39 },
    { id: 'highlights', name: 'Highlight Tapes', count: 4 },
    { id: 'supplements', name: 'Supplements', count: 8 },
    { id: 'training', name: 'Training Sessions', count: 6 },
    { id: 'equipment', name: 'Equipment', count: 12 },
    { id: 'nutrition', name: 'Nutrition Plans', count: 9 }
  ];

  const featuredProducts = [
    {
      title: 'Platinum Highlight Package',
      price: '$2,000',
      originalPrice: null,
      category: 'highlights',
      description: 'Complete professional highlight tape production for top-tier college recruitment',
      image: '/api/placeholder/300/200',
      rating: 5,
      reviews: 24,
      bestseller: true,
      icon: TrophyIcon,
      features: ['Professional editing', 'Music & graphics', 'College distribution', '5-7 min reel']
    },
    {
      title: 'Thorne Supplement Stack',
      price: '$299',
      originalPrice: '$350',
      category: 'supplements',
      description: '8-supplement performance stack for elite soccer players',
      image: '/api/placeholder/300/200',
      rating: 4.8,
      reviews: 156,
      popular: true,
      icon: HeartIcon,
      features: ['8 premium supplements', 'Performance optimization', 'Recovery support', 'Monthly supply']
    },
    {
      title: 'Gold Highlight Package',
      price: '$1,700',
      originalPrice: null,
      category: 'highlights',
      description: 'Professional highlight production - Most Popular choice for college recruitment',
      image: '/api/placeholder/300/200',
      rating: 4.9,
      reviews: 89,
      popular: true,
      icon: StarIcon,
      features: ['Professional editing', 'Music included', 'College sharing', '4-5 min reel']
    },
    {
      title: 'Private Training Session',
      price: '$150',
      originalPrice: '$200',
      category: 'training',
      description: '1-on-1 personalized training with certified coaches',
      image: '/api/placeholder/300/200',
      rating: 4.7,
      reviews: 43,
      icon: PlayIcon,
      features: ['1-on-1 coaching', 'Skill assessment', 'Personalized drills', '90 minutes']
    },
    {
      title: 'Custom Nutrition Plan',
      price: '$199',
      originalPrice: null,
      category: 'nutrition',
      description: 'Personalized meal plans designed for soccer performance',
      image: '/api/placeholder/300/200',
      rating: 4.6,
      reviews: 67,
      icon: DocumentTextIcon,
      features: ['Custom meal plans', 'Macro tracking', 'Recipe library', '3-month program']
    },
    {
      title: 'Video Analysis Package',
      price: '$299',
      originalPrice: '$350',
      category: 'training',
      description: 'Professional game footage analysis with detailed feedback',
      image: '/api/placeholder/300/200',
      rating: 4.8,
      reviews: 32,
      icon: VideoCameraIcon,
      features: ['Game analysis', 'Performance report', 'Improvement plan', 'Coach feedback']
    }
  ];

  const storeStats = [
    { label: 'Total Products', value: '39', icon: ShoppingBagIcon },
    { label: 'Happy Customers', value: '500+', icon: StarIcon },
    { label: 'Avg Rating', value: '4.8', icon: HeartIcon },
    { label: 'Success Rate', value: '96%', icon: TrophyIcon }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === selectedCategory);

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
            <h1 className="text-4xl font-bold text-white mb-4">TUF Store</h1>
            <p className="text-zinc-400 text-lg">Premium products and services for elite soccer development</p>
          </div>

          {/* Store Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {storeStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-zinc-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-white text-black'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all">
                  {/* Product Image Placeholder */}
                  <div className="relative h-48 bg-zinc-800 flex items-center justify-center">
                    <Icon className="h-12 w-12 text-zinc-400" />
                    {product.bestseller && (
                      <div className="absolute top-3 left-3 bg-amber-600 text-black px-2 py-1 rounded text-xs font-bold">
                        BESTSELLER
                      </div>
                    )}
                    {product.popular && (
                      <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                        POPULAR
                      </div>
                    )}
                    {product.originalPrice && (
                      <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2 py-1 rounded text-xs font-bold">
                        SAVE ${parseInt(product.originalPrice.replace('$', '')) - parseInt(product.price.replace('$', ''))}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-white mb-2">{product.title}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center space-x-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-zinc-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-zinc-400">({product.reviews})</span>
                      </div>
                    </div>

                    <p className="text-zinc-400 text-sm mb-4">{product.description}</p>

                    <div className="space-y-1 mb-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          <span className="text-zinc-300 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-white">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-zinc-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <button 
                      onClick={() => window.open('https://theultimatefootballer.com/products/' + product.title.toLowerCase().replace(/\s+/g, '-'), '_blank')}
                      className="w-full mt-4 bg-white text-black py-3 px-4 rounded hover:bg-zinc-100 transition-colors font-medium flex items-center justify-center space-x-2"
                    >
                      <ShoppingBagIcon className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Browse Full Store */}
          <div className="mt-12 text-center">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800">
              <h2 className="text-2xl font-bold text-white mb-4">Browse Full Store</h2>
              <p className="text-zinc-400 mb-6">
                Explore our complete collection of 39+ products on our main store
              </p>
              <button 
                onClick={() => window.open('https://theultimatefootballer.com/collections/all', '_blank')}
                className="bg-white text-black py-3 px-6 rounded-lg hover:bg-zinc-100 transition-colors font-medium inline-flex items-center space-x-2"
              >
                <span>Visit Store</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}