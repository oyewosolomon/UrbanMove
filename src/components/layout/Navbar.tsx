import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, ChevronDown } from 'lucide-react';


// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
          <svg fill={`${isScrolled?'#2563eb':'#ffffff' }`} height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M233.416,104.475c-5.615-9.046-17.5-11.826-26.545-6.211l-52.618,32.665c-4.614,2.865-7.806,7.543-8.79,12.882 c-0.984,5.34,0.329,10.849,3.618,15.171l22.876,30.055h48.453l-27.808-36.536l34.604-21.481 C236.251,125.405,239.031,113.52,233.416,104.475z"></path> </g> </g> <g> <g> <path d="M505.687,305.606l-12.878-16.986h-82.707c-7.098,0-12.852-5.754-12.852-12.852s5.754-12.852,12.852-12.852h63.22 l-8.694-11.467c-14.18-18.704-34.37-31.561-56.795-36.709H0v140.72h480.921c17.164,0,31.079-13.914,31.079-31.079 C512,317.601,509.783,311.008,505.687,305.606z M166.864,288.62h-22.247c-7.098,0-12.852-5.754-12.852-12.852 s5.754-12.852,12.852-12.852h22.247c7.098,0,12.852,5.754,12.852,12.852S173.961,288.62,166.864,288.62z M252.886,288.62h-22.247 c-7.098,0-12.852-5.754-12.852-12.852s5.754-12.852,12.852-12.852h22.247c7.098,0,12.852,5.754,12.852,12.852 S259.984,288.62,252.886,288.62z M338.909,288.62h-22.247c-7.098,0-12.852-5.754-12.852-12.852s5.754-12.852,12.852-12.852h22.247 c7.098,0,12.852,5.754,12.852,12.852S346.007,288.62,338.909,288.62z"></path> </g> </g> <g> <g> <path d="M483.472,378.083H26.119c-10.646,0-19.277,8.631-19.277,19.277c0,10.646,8.631,19.277,19.277,19.277h457.353 c10.646,0,19.277-8.631,19.277-19.277C502.749,386.714,494.118,378.083,483.472,378.083z"></path> </g> </g> </g></svg>
            <a href="#" className="flex items-center ml-2">
              <span className={`text-2xl font-bold ${
                isScrolled ? 'hidden text-blue-600' : 'flex text-white'
              }`}>
                UrbanMove
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;