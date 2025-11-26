import React, { useState, useEffect } from 'react';
import { Send, Phone, ArrowUp } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const buttonBaseClass = "w-[72px] h-[72px] flex flex-col items-center justify-center text-white transition-all duration-300 bg-[#1A5F68] hover:bg-[#13484F] relative group";

  return (
    <div className="fixed right-0 top-[60%] -translate-y-1/2 z-50 flex flex-col shadow-2xl rounded-l-lg overflow-hidden font-sans">
      
      {/* Telegram */}
      <a 
        href="#" 
        className={`${buttonBaseClass} border-b border-teal-900/20`}
        aria-label="Telegram"
      >
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-110 transition-transform">
             <Send size={16} className="text-[#2AABEE] fill-[#2AABEE] transform -translate-x-[2px] translate-y-[1px]" />
        </div>
        <span className="text-[10px] font-medium tracking-wide">Telegram</span>
      </a>

      {/* Whatsapp */}
      <a 
        href="#" 
        className={`${buttonBaseClass} border-b border-teal-900/20`}
        aria-label="Whatsapp"
      >
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-110 transition-transform">
             <Phone size={16} className="text-[#25D366] fill-[#25D366]" />
        </div>
        <span className="text-[10px] font-medium tracking-wide">Whatsapp</span>
      </a>

      {/* Top Button */}
      <button 
        onClick={scrollToTop}
        className={`${buttonBaseClass} ${showTopBtn ? 'flex' : 'hidden'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="mb-1 stroke-[3]" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Top</span>
      </button>
    </div>
  );
};

export default SocialSidebar;