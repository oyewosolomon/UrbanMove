import React, { useState } from 'react';
import { 
  Mail, Calendar, Headset, Globe, 
  LinkedinIcon, TwitterIcon, FacebookIcon, 
  Send, Check, AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: ''
  });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormState('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        message: ''
      });
      setTimeout(() => setFormState('idle'), 3000);
    } catch (error) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "contact@urban-move.net",
      subtext: "Typically respond within 24 hours"
    },
    {
      icon: Calendar,
      title: "Book a Demo",
      description: "Schedule a consultation",
      subtext: "Available Monday-Friday",
      action: () => window.open('https://calendly.com/urban-move/demo', '_blank')
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving cities worldwide",
      subtext: "Currently in 30+ cities"
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-blue-700/50 text-blue-200 mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Ready to Optimize Your City's Transit?
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our mobility experts are ready to discuss solutions for your community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-green-500/10 rounded-lg border border-green-500/30 text-center"
              >
                <Check className="w-12 h-12 mx-auto text-green-400 mb-4" />
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p>We'll get back to you soon.</p>
              </motion.div>
            ) : formState === 'error' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-red-500/10 rounded-lg border border-red-500/30 text-center"
              >
                <AlertCircle className="w-12 h-12 mx-auto text-red-400 mb-4" />
                <h4 className="text-xl font-bold mb-2">Error Sending Message</h4>
                <p>Please try again or email us directly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-blue-200">Name*</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-blue-200">Email*</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-blue-200">Organization*</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-blue-200">Your Role</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-200">How can we help?*</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-blue-500/20 disabled:opacity-70"
                >
                  {formState === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Connect With Us</h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  onClick={method.action}
                  className={`flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors ${method.action ? 'cursor-pointer' : ''}`}
                >
                  <div className="p-3 rounded-lg bg-blue-600/20">
                    <method.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">{method.title}</h4>
                    <p className="text-lg mt-1">{method.description}</p>
                    <p className="text-sm text-blue-200 mt-1">{method.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-6">
              <h4 className="font-bold mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://linkedin.com/company/urban-move"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://twitter.com/urban_move"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://facebook.com/urbanmove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <h4 className="font-bold mb-2">Media Inquiries</h4>
              <p className="text-blue-200">
                Contact our communications team at <span className="text-white font-medium">press@urban-move.net</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;