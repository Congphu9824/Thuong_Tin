
import React from 'react';
import { ArrowRight, MousePointer2, Heart } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-[#011214] py-20 lg:py-32 relative overflow-hidden text-white font-sans">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-900/5 blur-[120px] pointer-events-none rounded-full transform translate-x-1/2"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Text & Button */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-10 tracking-tight">
            Tired of sky-high advertising costs with bans and limits? Let Us Help!
          </h2>
          
          <button className="group bg-gradient-to-r from-[#5f8f8b] to-[#4fa09b] hover:from-[#4fa09b] hover:to-[#3b8c87] text-white font-bold py-4 px-8 rounded shadow-[0_4px_14px_0_rgba(79,209,197,0.2)] hover:shadow-[0_6px_20px_rgba(79,209,197,0.3)] transition-all duration-300 flex items-center gap-2 uppercase tracking-wider text-sm md:text-base">
            Get Your Account
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Column: Illustration Composition */}
        <div className="relative h-[350px] lg:h-[400px] flex items-center justify-center lg:justify-end">
            
            {/* The Illustration Container */}
            <div className="relative w-[400px] h-[350px]">
                
                {/* 1. Holographic Screen */}
                <div className="absolute top-0 left-0 w-48 h-36 border-2 border-cyan-400/40 bg-cyan-900/10 backdrop-blur-sm rounded-xl z-20 shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center justify-center overflow-hidden animate-pulse-slow">
                    {/* Screen Content: Target */}
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 border border-yellow-400 rounded-full opacity-60 animate-ping-slow"></div>
                        <div className="w-12 h-12 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]"></div>
                        </div>
                    </div>
                    {/* Cursor Clicking */}
                    <div className="absolute bottom-8 right-12 transform translate-x-1/2 translate-y-1/2">
                         <MousePointer2 className="fill-blue-500 text-blue-500 w-8 h-8 drop-shadow-lg transform -rotate-12 animate-bounce-subtle" />
                    </div>
                    {/* Screen Scanline Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent bg-[length:100%_200%] animate-scanline pointer-events-none"></div>
                </div>

                {/* PPC Badge */}
                <div className="absolute -top-4 left-36 bg-[#F687B3] text-white text-[10px] font-black px-2 py-1 rounded shadow-lg z-30 transform rotate-6 animate-float">
                    PPC
                </div>

                {/* Like Bubble */}
                <div className="absolute top-8 right-12 bg-[#F687B3] p-2 rounded-lg rounded-bl-none shadow-lg z-30 transform -rotate-12 animate-float-delayed">
                    <Heart size={16} className="fill-white text-white" />
                </div>

                {/* 2. Character */}
                <div className="absolute bottom-0 right-10 lg:right-20 w-48 h-64 z-10 flex flex-col items-center">
                    {/* Head */}
                    <div className="relative w-24 h-28 bg-[#5D4037] rounded-[2rem] z-20 flex flex-col items-center justify-center shadow-xl">
                        {/* Hair (Dreads style) */}
                        <div className="absolute -top-4 w-28 h-12 flex justify-center gap-1 flex-wrap">
                            {[1,2,3,4,5,6,7].map(i => (
                                <div key={i} className="w-3 h-6 bg-[#2D3748] rounded-full transform rotate-12 translate-y-2"></div>
                            ))}
                        </div>
                        {/* Face Features */}
                        <div className="mt-4 flex flex-col items-center gap-2">
                            <div className="flex gap-4">
                                <div className="w-2 h-2 bg-black rounded-full"></div>
                                <div className="w-2 h-2 bg-black rounded-full"></div>
                            </div>
                            <div className="w-2 h-3 bg-black/20 rounded-full"></div>
                            <div className="w-6 h-3 bg-white rounded-b-full overflow-hidden relative">
                                <div className="absolute top-0 w-full h-1 bg-red-300/50"></div>
                            </div>
                        </div>
                        {/* Ear */}
                        <div className="absolute -left-2 top-10 w-3 h-5 bg-[#5D4037] rounded-l-lg"></div>
                         <div className="absolute -right-2 top-10 w-3 h-5 bg-[#5D4037] rounded-r-lg"></div>
                    </div>

                    {/* Neck */}
                    <div className="w-8 h-6 bg-[#5D4037] -mt-2 z-10"></div>

                    {/* Body/Shirt */}
                    <div className="relative w-40 h-32 bg-[#4A7A75] rounded-t-[3rem] shadow-inner z-10 flex justify-center">
                        <div className="w-1 h-full bg-[#39605C]"></div>
                        {/* Collar */}
                        <div className="absolute top-0 w-16 h-8 border-b-2 border-[#39605C] rounded-full"></div>
                        
                        {/* Arms */}
                         {/* Left Arm (Pointing) */}
                        <div className="absolute top-4 -left-8 w-24 h-8 bg-[#4A7A75] rounded-full transform -rotate-45 origin-right">
                             <div className="absolute left-0 w-8 h-8 bg-[#5D4037] rounded-full border-4 border-[#4A7A75]"></div>
                        </div>
                         {/* Right Arm (Resting) */}
                        <div className="absolute top-12 -right-4 w-12 h-24 bg-[#4A7A75] rounded-full transform rotate-12 origin-top">
                             <div className="absolute bottom-0 w-8 h-8 bg-[#5D4037] rounded-full border-4 border-[#4A7A75]"></div>
                        </div>
                    </div>
                    
                    {/* Belt/Pants Top */}
                    <div className="w-36 h-4 bg-[#D69E2E] mt-0 z-10 rounded-sm"></div>
                    <div className="w-36 h-10 bg-[#E2E8F0] z-0 rounded-t-lg"></div>
                </div>

                {/* 3. Falling Coins */}
                <div className="absolute bottom-24 left-20 w-8 h-8 bg-[#F6E05E] rounded-full border-2 border-[#D69E2E] flex items-center justify-center shadow-md transform -rotate-12 animate-bounce">
                    <span className="text-[#B7791F] font-bold text-xs">$</span>
                </div>
                <div className="absolute bottom-12 left-28 w-10 h-10 bg-[#F6E05E] rounded-full border-2 border-[#D69E2E] flex items-center justify-center shadow-md transform rotate-12 animate-bounce-delayed">
                    <span className="text-[#B7791F] font-bold text-sm">$</span>
                </div>

                {/* Floor Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 w-full lg:w-[120%] -ml-10"></div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
