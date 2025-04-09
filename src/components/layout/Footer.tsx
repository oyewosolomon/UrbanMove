import React from 'react';

import { 
  ArrowRight, ChevronDown, BarChart, Clock, 
  Fuel, Database, Building2, Users, Car,
  LineChart, Mail, Phone, MapPin, LinkedinIcon,
  TwitterIcon, FacebookIcon
} from 'lucide-react';


const Footer = () => {
  const links = [
    'Home', 'About', 'Features', 'Solutions', 
    'Impact', 'Contact'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">UrbanMove Solutions</h3>
            <p className="mb-4">Transforming urban mobility through intelligent transit management.</p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Request a Demo
            </button>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <LinkedinIcon className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
              <TwitterIcon className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
              <FacebookIcon className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} UrbanMove Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;