import React, { useState } from 'react';
import { 
  ArrowRight, BarChart, Clock, Building2, 
  Users, Car, LineChart, MapPin, ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet'; // Alternative to next/head for React apps
import Footer from '@/components/layout/Footer';

const SolutionsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      icon: Building2,
      title: "For City Planners",
      description: "Data-driven insights for smarter urban mobility decisions.",
      features: [
        "Traffic pattern analysis",
        "Infrastructure planning tools",
        "Population movement tracking",
        "Environmental impact reports"
      ],
      color: "from-blue-500 to-blue-600",
      stats: [
        { value: "40%", label: "Reduction in congestion" },
        { value: "25%", label: "Lower emissions" }
      ]
    },
    {
      icon: Car,
      title: "For Transit Operators",
      description: "Efficient fleet management with real-time monitoring and route optimization.",
      features: [
        "Real-time vehicle tracking",
        "Predictive maintenance alerts",
        "Dynamic routing algorithms",
        "Driver performance analytics"
      ],
      color: "from-purple-500 to-purple-600",
      stats: [
        { value: "30%", label: "Lower fuel costs" },
        { value: "99%", label: "On-time performance" }
      ]
    },
    {
      icon: Users,
      title: "For Passengers",
      description: "Accurate arrival times and reduced wait times for a seamless commuting experience.",
      features: [
        "Live arrival predictions",
        "Multi-modal trip planning",
        "Accessibility features",
        "Crowding information"
      ],
      color: "from-teal-500 to-teal-600",
      stats: [
        { value: "4.8★", label: "User satisfaction" },
        { value: "20%", label: "Time saved" }
      ]
    }
  ];

  const globalStats = [
    { value: "95%", label: "Accuracy in arrival predictions", icon: Clock },
    { value: "30%", label: "Reduction in operational costs", icon: BarChart },
    { value: "25+", label: "Cities implemented", icon: MapPin },
    { value: "1M+", label: "Daily users", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      {/* React Helmet for SEO - install with npm install react-helmet */}
      <Helmet>
        <title>Smart Transit Solutions | Urban Mobility Platform</title>
        <meta name="description" content="Discover our comprehensive solutions for city planners, transit operators, and passengers to transform urban transportation systems." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-blue-700/50 text-blue-200 mb-6">
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Urban Mobility
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive solutions tailored for every stakeholder in the transportation ecosystem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive solution cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-10`} />
                
                <div className="relative p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${solution.color} text-white`}>
                      <solution.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: hoveredIndex === index ? 'auto' : 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-2 text-blue-500">
                              <svg viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {solution.stats.map((stat, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r ${solution.color} hover:shadow-md transition-all`}
                    >
                      Learn more
                      <ArrowRight className="inline ml-2 w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Global stats section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Our Global Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {globalStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tabbed content section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {solutions.map((solution, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center justify-center space-x-2 flex-1 ${
                      activeTab === index
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <solution.icon className="w-5 h-5" />
                    <span>{solution.title}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="p-8">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solutions[activeTab].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solutions[activeTab].description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {solutions[activeTab].features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 text-blue-500">
                          <svg viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                    Request demo
                    <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                  </button>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white shadow-md flex items-center justify-center">
                      {React.createElement(solutions[activeTab].icon, { className: "w-12 h-12 text-blue-600" })}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {solutions[activeTab].stats.map((stat, i) => (
                        <div key={i} className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-600">
                      Interactive visualization of {solutions[activeTab].title.toLowerCase()} features
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your city's transit?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team of mobility experts is ready to discuss how we can help optimize your transportation network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Request a Demo
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all"
            >
              Contact Sales
            </motion.button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default SolutionsPage;