import React from 'react';
import { Target, Users, Lightbulb, Recycle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          UrbanMove Solutions is revolutionizing urban transit through cutting-edge technology, 
          enhancing public transportation efficiency and passenger experience in 30 cities worldwide.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-600">
            To create smarter, greener cities by optimizing public transportation 
            and reducing environmental impact.
          </p>
        </div>
        <div className="bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-gray-600">
            Seamless urban mobility through intelligent transit management.
          </p>
        </div>
      </div>
    </div>
  </section>
);


export default AboutUs;