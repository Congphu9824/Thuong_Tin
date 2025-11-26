import React from 'react';
import { Check, ArrowRight, Play, Send, Search } from 'lucide-react';

const Hero: React.FC = () => {
  const features = [
    "No VAT & Services Fee",
    "Free & Stable Account",
    "Financial Security Guarantee",
    "24/7 Prioritized Support"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 lg:py-20 relative">
      
      {/* Left Column: Content */}
      <div className="space-y-8 z-20 relative px-4 lg:px-0">
        <div className="space-y-2">
          <h2 className="text-[#4FD1C5] font-semibold tracking-wide text-sm md:text-base uppercase flex items-center gap-2">
            Slow Cross Border <span className="text-gray-400 font-normal capitalize">Digital Marketing Agency</span>
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-extrabold leading-[1.1] text-[#2C7A7B] tracking-tight">
            Reduce Campaign Cost <br />
            <span className="text-[#2C7A7B]">Scale Your Business</span>
          </h1>
        </div>

        <p className="text-xl text-gray-300 font-light max-w-lg leading-relaxed">
          Cost-effective agency ad accounts for businesses of all sizes
        </p>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                 <Check size={14} className="text-black stroke-[4]" />
              </div>
              <span className="text-white font-medium text-lg">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-6">
          <button className="group relative overflow-hidden bg-[#5f8f8b] hover:bg-[#4fa09b] text-white font-bold py-4 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-teal-500/20 flex items-center gap-2">
            <span className="relative z-10 text-lg uppercase tracking-wider">Get Your Account</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Right Column: Illustration Composition */}
      <div className="relative flex justify-center lg:justify-end h-[400px] lg:h-[500px] w-full">
        {/* Container for the 3D Composition */}
        <div className="relative w-full max-w-[550px] h-full flex items-center justify-center lg:justify-end">
            
            {/* 1. The Browser Window UI */}
            <div className="relative w-[90%] md:w-[80%] aspect-[4/3] bg-[#1A2530] rounded-xl border border-gray-700 shadow-2xl z-10 flex flex-col overflow-hidden transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                {/* Header */}
                <div className="h-10 bg-[#2D3748] flex items-center px-4 gap-3 border-b border-gray-700 shrink-0">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    {/* Search Bar */}
                    <div className="ml-4 flex-1 max-w-[200px] h-5 bg-gray-600/50 rounded-full flex items-center px-2">
                        <Search size={10} className="text-gray-400" />
                        <div className="ml-2 w-16 h-1.5 bg-gray-500/50 rounded-full"></div>
                    </div>
                </div>

                {/* Body */}
                <div className="flex-1 p-5 flex gap-5 relative bg-[#1A202C]">
                     {/* Left Content Column */}
                    <div className="w-[45%] space-y-4 pt-2">
                        <div className="h-3 w-20 bg-gray-500 rounded mb-4"></div> {/* "Heading" */}
                        <div className="space-y-2.5">
                            <div className="h-2 w-full bg-gray-600 rounded-full opacity-60"></div>
                            <div className="h-2 w-5/6 bg-gray-600 rounded-full opacity-60"></div>
                            <div className="h-2 w-full bg-gray-600 rounded-full opacity-60"></div>
                            <div className="h-2 w-4/6 bg-gray-600 rounded-full opacity-60"></div>
                        </div>
                        
                        {/* Secondary Box */}
                         <div className="mt-8 p-3 bg-[#2D3748] rounded-lg border border-gray-600">
                            <div className="flex gap-2 items-center mb-2">
                                <div className="w-6 h-6 rounded bg-blue-500/20"></div>
                                <div className="h-2 w-16 bg-gray-500 rounded"></div>
                            </div>
                            <div className="h-1.5 w-full bg-gray-600/50 rounded mb-1"></div>
                            <div className="h-1.5 w-2/3 bg-gray-600/50 rounded"></div>
                         </div>
                    </div>

                    {/* Right Content Column (Ads Box) */}
                    <div className="flex-1 relative top-4">
                        <div className="aspect-[4/5] bg-gradient-to-br from-[#FC8181] to-[#D53F8C] rounded-xl shadow-lg transform rotate-[3deg] flex items-center justify-center group-hover:rotate-0 transition-transform duration-300 relative overflow-hidden">
                            <div className="absolute top-3 left-4 text-white font-bold text-sm tracking-wide opacity-90">Ads</div>
                            
                            {/* Play Button Card */}
                            <div className="w-14 h-10 bg-white rounded-lg shadow-xl flex items-center justify-center relative z-10">
                                <Play className="fill-red-500 text-red-500 ml-0.5" size={20} />
                            </div>

                            {/* Decorative lines on Ad box */}
                            <div className="absolute bottom-6 left-4 right-4 space-y-1.5 opacity-50">
                                <div className="h-1 w-full bg-white rounded-full"></div>
                                <div className="h-1 w-2/3 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Character / Avatar */}
            {/* Creating a CSS-only stylized "Agent" to avoid external image deps */}
            <div className="absolute bottom-[5%] right-0 lg:-right-4 z-20 transform translate-x-4 lg:translate-x-0">
                 <div className="relative w-40 h-40 lg:w-48 lg:h-48">
                    {/* Circle Background */}
                    <div className="absolute inset-0 bg-teal-500 rounded-full border-4 border-[#011214] overflow-hidden shadow-2xl">
                         {/* Body */}
                         <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[#1A202C] rounded-t-3xl"></div>
                         {/* Head */}
                         <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[#F6AD55] rounded-full flex flex-col items-center justify-center">
                              {/* Eyes */}
                              <div className="flex gap-3 mt-2">
                                  <div className="w-3 h-3 bg-black rounded-full"></div>
                                  <div className="w-3 h-3 bg-black rounded-full"></div>
                              </div>
                              {/* Smile */}
                              <div className="w-6 h-3 border-b-4 border-black rounded-full mt-1"></div>
                         </div>
                    </div>
                    {/* Megaphone/Horn */}
                    <div className="absolute -top-4 -left-8 bg-white p-3 rounded-xl border-4 border-[#011214] transform -rotate-12 shadow-lg z-30">
                        <div className="w-8 h-8 border-t-[8px] border-b-[8px] border-r-[14px] border-l-0 border-t-transparent border-b-transparent border-r-red-500"></div>
                    </div>
                 </div>
            </div>

            {/* 3. Floating Elements */}
            
            {/* Paper Plane (Telegram) */}
            <div className="absolute bottom-[35%] -left-[5%] lg:-left-[10%] bg-[#4299E1] p-3 rounded-xl shadow-xl z-30 animate-[bounce_3s_infinite] border-2 border-[#1A2530]">
                <Send className="text-white fill-white transform -rotate-12" size={20} />
            </div>

            {/* List/Menu Icon */}
            <div className="absolute top-[35%] right-[5%] lg:-right-[5%] bg-[#63B3ED] p-3 rounded-xl shadow-xl z-30 animate-[bounce_4s_infinite] border-2 border-[#1A2530]">
                <div className="space-y-1.5 w-5">
                    <div className="h-1 w-full bg-white rounded-full"></div>
                    <div className="h-1 w-2/3 bg-white rounded-full"></div>
                    <div className="h-1 w-full bg-white rounded-full"></div>
                </div>
            </div>
            
            {/* Location Pin */}
             <div className="absolute top-0 left-[20%] bg-[#F56565] w-10 h-10 rounded-full shadow-xl z-0 flex items-center justify-center animate-pulse border-2 border-[#1A2530]">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#F56565]"></div>
             </div>

            {/* Floor/Grass - Decorative */}
            <div className="absolute bottom-[10%] left-0 right-0 h-1.5 bg-[#4FD1C5] rounded-full z-0 w-[95%] mx-auto opacity-50"></div>
             <div className="absolute bottom-[10%] left-[15%] text-[#4FD1C5] opacity-60">
                <div className="flex gap-1 items-end">
                    <div className="w-1.5 h-4 bg-current rounded-t-full"></div>
                    <div className="w-1.5 h-7 bg-current rounded-t-full"></div>
                    <div className="w-1.5 h-3 bg-current rounded-t-full"></div>
                </div>
             </div>
             <div className="absolute bottom-[10%] right-[35%] text-[#4FD1C5] opacity-60">
                <div className="flex gap-1 items-end">
                    <div className="w-1.5 h-5 bg-current rounded-t-full"></div>
                    <div className="w-1.5 h-3 bg-current rounded-t-full"></div>
                </div>
             </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;