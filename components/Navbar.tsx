
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Services', href: '#', badge: 'HOT' },
    { name: 'Why SCB', href: '#' },
    { name: 'Insights', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-[#011214]/95 backdrop-blur-md shadow-lg shadow-teal-900/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 relative">
              {/* Stylized M Logo */}
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M4 32L14 8L20 24" stroke="#4FD1C5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 24L26 8L36 32" stroke="#2C7A7B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-wider text-[#2C7A7B] uppercase font-sans">
            <span className="text-[#4FD1C5]">SLOW</span> CROSS BORDER
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-[16px] font-bold tracking-wide transition-colors duration-200 ${
                link.name === 'Home' ? 'text-white' : 'text-gray-200 hover:text-white'
              }`}
            >
              {link.name}
              {link.badge && (
                <span className="absolute -top-3 -right-6 bg-[#FF5A5F] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-[4px] shadow-sm leading-none">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block shrink-0">
          <button className="bg-gradient-to-r from-[#38B2AC] to-[#4FD1C5] hover:from-[#319795] hover:to-[#38B2AC] text-white font-extrabold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(79,209,197,0.4)] text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(79,209,197,0.6)] hover:scale-105 transform">
            Get In Touch
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none hover:text-[#4FD1C5] transition-colors p-1">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#011214] border-t border-white/5 ${
          isOpen ? 'max-h-[400px] opacity-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-6 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-gray-200 hover:text-[#4FD1C5] transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              {link.badge && (
                <span className="bg-[#FF5A5F] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <div className="pt-2">
             <button className="bg-gradient-to-r from-[#38B2AC] to-[#4FD1C5] text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/20 text-center uppercase tracking-wider w-full">
                Get In Touch
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
