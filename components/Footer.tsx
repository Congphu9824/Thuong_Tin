
import React from 'react';
import { Facebook, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#011214] text-white py-16 font-sans border-t border-gray-800/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: About SCB */}
          <div className="md:col-span-3 space-y-8">
            <h3 className="text-lg font-bold text-white tracking-wide">About SCB</h3>
            <ul className="space-y-4 text-gray-400 text-[15px] font-medium">
              <li><a href="#" className="hover:text-[#4FD1C5] transition-colors block">Why SCB</a></li>
              <li><a href="#" className="hover:text-[#4FD1C5] transition-colors block">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-4 space-y-8">
            <h3 className="text-lg font-bold text-white tracking-wide">Services</h3>
            <ul className="space-y-4 text-gray-400 text-[15px] font-medium">
              <li><a href="#" className="hover:text-[#4FD1C5] transition-colors block">Facebook Ads Agency Account</a></li>
              <li><a href="#" className="hover:text-[#4FD1C5] transition-colors block">Google Ads Agency Account</a></li>
              <li><a href="#" className="hover:text-[#4FD1C5] transition-colors block">Tiktok Ads Agency Account</a></li>
              <li><a href="#" className="hover:text-[#4FD1C5] transition-colors block">Bing Ads Agency Account</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="md:col-span-5 space-y-8 lg:pl-12">
            <h3 className="text-lg font-bold text-white tracking-wide">Contact Us</h3>
            
            <div className="space-y-6">
                <div className="text-3xl font-normal tracking-wide text-gray-100">
                +86 135-8825-5916
                </div>

                <div className="text-gray-400 text-[15px] space-y-1 font-medium">
                <p>Mailbox: scbagency@outlook.com</p>
                <p>mmkj1118@163.com</p>
                </div>

                <button className="border border-gray-600 hover:border-[#4FD1C5] text-white hover:text-[#4FD1C5] px-10 py-3 rounded text-[13px] font-bold tracking-widest transition-all uppercase">
                Get In Touch
                </button>

                <div className="flex gap-6 pt-2">
                <a href="#" className="bg-transparent text-white hover:text-[#4FD1C5] transition-colors border-2 border-white hover:border-[#4FD1C5] p-1 rounded-md">
                    <Facebook size={18} className="fill-current" />
                </a>
                <a href="#" className="bg-transparent text-white hover:text-[#4FD1C5] transition-colors">
                    <Linkedin size={28} className="fill-current stroke-0" />
                </a>
                <a href="#" className="bg-transparent text-white hover:text-[#4FD1C5] transition-colors pt-1">
                    <Mail size={24} />
                </a>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-10 text-center">
          <p className="text-gray-500 text-xs tracking-wide">
            Copyright © 2024 SLOW CROSS AGENCY Terms of service - Powered by FUNION DIGI-MARKETING
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
