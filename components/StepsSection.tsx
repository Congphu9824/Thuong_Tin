import React from 'react';
import { FileText, Wallet, Send } from 'lucide-react';

const StepsSection: React.FC = () => {
  const steps = [
    {
      icon: <FileText strokeWidth={1.5} className="w-16 h-16 text-[#38B2AC]" />,
      title: "STEP 1",
      description: "Complete the form or send us your website or page link via whatsapp/telegram for us to review if they comply with advertising policy"
    },
    {
      icon: <Wallet strokeWidth={1.5} className="w-16 h-16 text-[#38B2AC]" />,
      title: "STEP 2",
      description: "SCB team will send you a payment link, once the payment is successful, your account will be ready in 24h"
    },
    {
      icon: <Send strokeWidth={1.5} className="w-16 h-16 text-[#38B2AC]" />, // Using Send for the paper plane look
      title: "STEP 3",
      description: "Launch your campaigns and boost your business with free & stable account"
    }
  ];

  return (
    <section className="py-24 bg-[#F2FAFB]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] tracking-tight">
            3 Steps to Get Your Agency Ad Account
          </h2>
          <p className="text-gray-600 text-lg">
            Start runing your ads in just <span className="text-[#319795] font-medium">3 easy steps</span>
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-6 group">
              {/* Icon Container */}
              <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                {step.icon}
              </div>
              
              {/* Content */}
              <div className="space-y-4 max-w-sm">
                <h3 className="text-xl font-bold text-[#1A202C] uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StepsSection;