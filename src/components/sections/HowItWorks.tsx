import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ChevronDown, BarChart, Clock, 
  Fuel, Database, Building2, Users, Car,
  LineChart, Mail, Phone, MapPin, LinkedinIcon,
  TwitterIcon, FacebookIcon
} from 'lucide-react';

// How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      title: "Data Collection",
      description: "Gathering real-time data from transit systems",
      icon: Database
    },
    {
      title: "Analytics & Optimization",
      description: "Using AI to optimize routes and schedules",
      icon: LineChart
    },
    {
      title: "Real-Time Updates",
      description: "Delivering live information to passengers and operators",
      icon: Clock
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute top-1/2 -right-4 w-8 h-8 text-blue-600 -translate-y-1/2 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
