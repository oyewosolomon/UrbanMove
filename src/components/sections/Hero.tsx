import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const stats = [
    { value: '25%', label: 'Reduction in Wait Times' },
    { value: '30%', label: 'Lower Fuel Consumption' },
    { value: '30', label: 'Cities Optimized' },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90" />
      
      {/* Video background */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/images/placeholder/1920/1080"
          alt="Urban Transit" 
          className="object-cover w-full h-full"
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl">
        <div className={`space-y-8 text-center transition-all mt-12 duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Smart City Transit Solutions
            <span className="block text-blue-400">for Seamless Commuting</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Optimizing public transportation across 30 cities with real-time passenger information and 30% lower fuel consumption.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button 
              className="px-8 py-3 text-lg font-semibold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center gap-2 group"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              className="px-8 py-3 text-lg font-semibold text-blue-100 transition-all border-2 border-blue-100 rounded-lg hover:bg-blue-100 hover:text-blue-900"
              onClick={() => scrollToSection('features')}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto mt-20 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-1000 delay-${index + 2}00 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="text-4xl font-bold text-blue-400">{stat.value}</div>
              <div className="mt-2 text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-75" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;