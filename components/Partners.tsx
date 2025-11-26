import React from 'react';
import { Facebook, Instagram, Search, Music, Chrome } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <div className="mt-auto py-12 border-t border-teal-900/30">
      <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-16">
        <p className="text-gray-400 text-lg font-light whitespace-nowrap">
          Partnered with Social Media Leaders
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-90">
            {/* Meta */}
            <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                    <span className="font-bold text-xl italic leading-none pb-1 relative top-[-1px]">∞</span>
                </div>
                <span className="text-xl font-bold">Meta</span>
            </div>

            {/* Google */}
            <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
                <Chrome size={28} className="text-white fill-white" />
                <span className="text-xl font-bold">Google</span>
            </div>

            {/* Tiktok */}
            <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
                <Music size={28} className="text-white" />
                <span className="text-xl font-bold">Tiktok</span>
            </div>

            {/* Bing */}
            <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
                <div className="relative w-7 h-7">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M5 3L3.2 20.2L18.4 12L5 3ZM6.5 6.8L13.8 11.2L6.5 15.2V6.8Z" /></svg>
                </div>
                <span className="text-xl font-bold">Bing</span>
            </div>

             {/* Instagram */}
             <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
                <Instagram size={28} className="text-white" />
                <span className="text-xl font-bold">Instagram</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;