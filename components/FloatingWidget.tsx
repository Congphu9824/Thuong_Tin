import React from 'react';
import { RotateCw } from 'lucide-react';

const FloatingWidget: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in hidden sm:block">
      <div className="bg-white text-gray-500 rounded shadow-lg p-3 w-16 h-16 flex items-center justify-center hover:shadow-xl transition-shadow cursor-pointer opacity-80 hover:opacity-100">
        <div className="flex flex-col items-center gap-1">
             <div className="relative w-8 h-8">
                {/* Simulated Recaptcha Logo */}
                <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-blue-500 rounded-full"></div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingWidget;