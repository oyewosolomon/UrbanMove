import React, { useRef } from 'react';
import { 
  Database, LineChart, Clock, ArrowRight, ChevronDown
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const steps = [
    {
      title: "Data Collection",
      description: "Gathering real-time data from transit systems across multiple sources",
      icon: Database,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "AI Optimization",
      description: "Using machine learning to optimize routes, schedules and resource allocation",
      icon: LineChart,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Real-Time Deployment",
      description: "Delivering live updates to passengers and operational dashboards",
      icon: Clock,
      color: "from-teal-500 to-teal-600"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineAnimation = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      id="how-it-works" 
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-blue-100 text-blue-600 mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smart Transit Optimization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How our AI-powered platform transforms urban mobility in three simple steps
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Animated connection line */}
          <motion.div 
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 to-purple-200 -translate-y-1/2 hidden md:block"
            variants={lineAnimation}
          />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="relative group"
              >
                <div className="h-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col items-center">
                  <div className={`w-20 h-20 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${step.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {step.description}
                  </p>
                  <div className="mt-auto text-blue-600 font-medium flex items-center">
                    Step {index + 1}
                    <ChevronDown className="ml-2 w-5 h-5 md:hidden" />
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <>
                    <ArrowRight className="absolute top-1/2 -right-6 w-8 h-8 text-blue-500 -translate-y-1/2 hidden md:block opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.8 }}
                      className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:hidden"
                    >
                      <ChevronDown className="w-8 h-8 text-gray-300" />
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.2 } : {}}
          transition={{ delay: 0.5 }}
          className="absolute left-0 top-1/3 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl mix-blend-multiply -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.2 } : {}}
          transition={{ delay: 0.7 }}
          className="absolute right-0 bottom-1/4 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl mix-blend-multiply -z-10"
        />
      </div>
    </section>
  );
};

export default HowItWorks;