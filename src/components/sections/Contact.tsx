import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ChevronDown, BarChart, Clock, 
  Fuel, Database, Building2, Users, Car,
  LineChart, Mail, Phone, MapPin, LinkedinIcon,
  TwitterIcon, FacebookIcon
} from 'lucide-react';

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Ready to Optimize Your City's Transit?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg text-gray-900"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg text-gray-900"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg text-gray-900"
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg text-gray-900"
                  rows={4}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </button>
            </form>
          </div>
          <div className="space-y-8">
            
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <p>hello@urban-move.net</p>
            </div>
           
            <div className="flex gap-4 mt-8">
              <LinkedinIcon className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
              <TwitterIcon className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
              <FacebookIcon className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
