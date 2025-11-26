
import React from 'react';
import { Check } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'facebook',
      title: 'Facebook Agency Account',
      logo: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      brandName: 'Facebook',
      gradient: 'bg-gradient-to-r from-[#2C7A7B] to-[#4FD1C5]',
      features: [
        'Free & Stable Ad Account',
        'Unlimited Ad Spend',
        'No VAT & Service Fee',
        'No Additional Fees on Refund',
      ],
      isHot: true,
      buttonStyle: 'filled',
    },
    {
      id: 'google',
      title: 'Google Agency Account',
      logo: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.347.533 12S5.867 24 12.48 24c3.44 0 6.04-1.133 8.16-3.293 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.133H12.48z" />
        </svg>
      ),
      brandName: 'Google',
      gradient: 'bg-gradient-to-r from-[#3182CE] to-[#63B3ED]',
      features: [
        'Instant Top Ups',
        'No VAT & Spend limit',
        'Advanced PPC Management',
        '1:1 Expert Support',
      ],
      isHot: false,
      buttonStyle: 'outlined',
    },
    {
      id: 'tiktok',
      title: 'Tiktok Agency Account',
      logo: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      brandName: 'Tiktok',
      gradient: 'bg-gradient-to-r from-[#6B46C1] to-[#805AD5]', // Muted purple gradient
      features: [
        'Free & Stable Ad Account',
        'Unlimited Ad Spend',
        'No VAT & Service Fee',
        'Run Global Ad Campaigns',
      ],
      isHot: false,
      buttonStyle: 'outlined',
    },
    {
      id: 'bing',
      title: 'Microsoft bing Agency Account',
      logo: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M9.4,2 L14,2 L14,22 L4,22 L9.4,2 Z M15.5,2 L15.5,5 L19,5 L19,2 L15.5,2 Z M15.5,6 L15.5,22 L19,22 L19,6 L15.5,6 Z"/>
            {/* Simple representation of Bing/MS */}
           <path d="M5.5 3L3.2 20.2L18.4 12L5.5 3ZM7 7.5L13.5 11.5L7 15V7.5Z" /> 
        </svg>
      ),
      brandName: 'Bing',
      gradient: 'bg-gradient-to-r from-[#4A5568] to-[#2D3748]', // Dark slate gradient
      features: [
        'Instant Top Ups',
        'No VAT & Service Fee',
        'Access to Advanced Features',
        '1:1 Expert Support',
      ],
      isHot: false,
      buttonStyle: 'outlined',
    },
  ];

  return (
    <div className="w-full bg-white py-24 text-gray-900">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C]">
            Expand Your Presence with SCB Agency
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            SCB enables you get access to agency ads account, creating impactful advertising campaigns that drive results with <span className="text-[#38B2AC] font-medium">more budget and less limits</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative flex flex-col bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {service.isHot && (
                 <div className="absolute top-0 right-6 -translate-y-1/2 z-20">
                     <span className="bg-[#FF5A5F] text-white text-[11px] font-extrabold px-3 py-1 rounded shadow-md uppercase tracking-wide">
                        Hot
                     </span>
                 </div>
              )}

              {/* Card Header */}
              <div className={`${service.gradient} p-8 flex flex-col items-center justify-center text-white h-48 space-y-3 relative rounded-t-lg`}>
                <h3 className="text-2xl font-bold text-center leading-tight">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h3>
                <div className="flex items-center gap-2 mt-2 opacity-90">
                  {service.logo}
                  <span className="font-serif font-medium tracking-wide">{service.brandName}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-8">
                <ul className="space-y-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-500 shrink-0 group-hover:bg-[#38B2AC] transition-colors" />
                      <span className="text-gray-600 font-medium text-[15px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer (Button) */}
              <div className="p-8 pt-0 mt-auto">
                <button 
                    className={`w-full py-3.5 px-4 rounded font-bold text-sm tracking-wide transition-all duration-300 uppercase
                    ${service.buttonStyle === 'filled' 
                        ? 'bg-[#38B2AC] hover:bg-[#319795] text-white shadow-lg shadow-teal-500/30 border border-transparent' 
                        : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 hover:border-gray-400'
                    }`}
                >
                  Get An Account
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
