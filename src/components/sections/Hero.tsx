import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Particles from './Particles'; // You'll need to implement or import a particles component

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const stats = [
    { value: '25%', label: 'Reduction in Wait Times' },
    { value: '30%', label: 'Lower Fuel Consumption' },
    { value: '30', label: 'Cities Optimized' },
  ];

  useEffect(() => {
    setIsVisible(true);
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5
      }
    }
  };

  const statItem = (index: number) => ({
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5 + index * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  });

  return (
    <div className="relative min-h-screen overflow-hidden" ref={ref}>
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1 }}
      />
      
      {/* Particle effects */}
      <Particles 
        className="absolute inset-0 opacity-20"
        quantity={100}
        staticity={30}
      />
      
      {/* Floating circles decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute rounded-full bg-blue-600 opacity-20 w-96 h-96 -left-40 -top-40"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute rounded-full bg-blue-400 opacity-15 w-80 h-80 -right-20 -bottom-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl">
        <motion.div 
          className="space-y-8 text-center mt-12"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Main heading with text gradient and animation */}
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-6xl"
            variants={item}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              Smart City Transit Solutions
            </span>
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              for Seamless Commuting
            </motion.span>
          </motion.h1>

          {/* Subheading with fade-in */}
          <motion.p 
            className="max-w-2xl mx-auto text-xl text-gray-300"
            variants={item}
          >
            Optimizing public transportation across 30 cities with real-time passenger information and 30% lower fuel consumption.
          </motion.p>

          {/* CTA Buttons with hover effects */}
          <motion.div 
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={item}
          >
            <motion.button 
              className="px-8 py-3 text-lg font-semibold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center gap-2 group relative overflow-hidden"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
            <motion.button 
              className="px-8 py-3 text-lg font-semibold text-blue-100 transition-all border-2 border-blue-100 rounded-lg hover:bg-blue-100 hover:text-blue-900 relative overflow-hidden"
              onClick={() => scrollToSection('features')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Learn More</span>
              <motion.span 
                className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats Section with staggered animation */}
        <motion.div 
          className="grid max-w-4xl grid-cols-1 gap-8 mx-auto mt-20 sm:grid-cols-3"
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              variants={statItem(index)}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl font-bold text-blue-400">{stat.value}</div>
              <div className="mt-2 text-lg text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;