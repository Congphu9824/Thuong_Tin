
import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 0,
      text: "I'm Grace and I'm a fitness trainer. At the sametime, I will also promote diet coffee products on Facebook. At the beginning, I promoted my weight loss products on Facebook, but they would be disabled soon. After I opened an account in SCB, my products were no longer disabled. And the ad account is free! This is really great! In 2018, my monthly sales were only about 3,000 US dollars, but now with the help of SCB on my website, the monthly sales in 2022 will stabilize at about 150,000 US dollars. Definitely strongly recommend you to open an advertising account with SCB.",
      name: "Grace",
      role: "Shopify Retailer",
      avatarType: "grace"
    },
    {
      id: 1,
      text: "Hi, I'm kim. I have to say I am very dependent on SCB now. Because their ad accounts are really stable. Helped me expand my business. You have to know that virtual currency products are not so easy to pass.So I consider myself very lucky because I opened an account with SCB when my business first started. So I started saving on ad dollars earlier than most of you and I have a pretty solid ad account.If your business wants to be stable,how important is a stable advertising account, isn't it? I don't see any reason why I wouldn't choose to continue my business at SCB.",
      name: "Kim",
      role: "Virtual currency",
      avatarType: "kim"
    },
    {
      id: 2,
      text: "Slow Cross Border Agency has been very professional and helpful for the past 3 years. We have Facebook, Instagram, Bing services. I opened Google and Facebook ad accounts here and it saves me tons of cash every year. So my advertising cost has been reduced a lot, which helps us to expand our customer base,they are very loyal. In short,their team genuinely care about their clients and are willing to help all the time.I really recommend this service provider, great customer service, solved my problem in a timely manner without annoying me.",
      name: "Lorelai Leigh",
      role: "DTC Brand CEO",
      avatarType: "lorelai"
    }
  ];

  const handleDotClick = (index: number) => {
    if (index !== activeIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleDotClick((activeIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const renderAvatar = (type: string) => {
    switch (type) {
      case 'grace':
        return (
           <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect width="100" height="100" fill="#E2E8F0" />
                <circle cx="50" cy="50" r="50" fill="#FFE8D6" />
                <path d="M20 50 C 20 20, 80 20, 80 50 L 85 80 L 15 80 Z" fill="#4A2C2A" />
                <rect x="42" y="70" width="16" height="20" fill="#E0C0A8" />
                <path d="M20 90 Q 50 110 80 90 L 80 100 L 20 100 Z" fill="#2D3748" />
                <path d="M50 90 L 45 100 L 55 100 Z" fill="#CBD5E0" />
                <path d="M48 95 L 52 95 L 50 98 Z" fill="#1A202C" /> 
                <ellipse cx="50" cy="55" rx="22" ry="26" fill="#F6AD55" /> 
                <path d="M28 55 Q 50 20 72 55 Q 80 40 75 25 Q 50 10 25 25 Q 20 40 28 55" fill="#4A2C2A" />
                <ellipse cx="43" cy="58" rx="2.5" ry="3.5" fill="#2D3748" />
                <ellipse cx="57" cy="58" rx="2.5" ry="3.5" fill="#2D3748" />
                <path d="M45 68 Q 50 72 55 68" stroke="#A05E44" strokeWidth="1.5" fill="none" />
                <circle cx="38" cy="62" r="3" fill="#FBD38D" opacity="0.6" />
                <circle cx="62" cy="62" r="3" fill="#FBD38D" opacity="0.6" />
            </svg>
        );
      case 'kim':
        return (
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect width="100" height="100" fill="#F7FAFC" />
                <circle cx="50" cy="50" r="50" fill="#FBB6CE" />
                {/* Hoodie */}
                <path d="M15 60 Q 50 10 85 60 L 90 100 L 10 100 Z" fill="#B83280" />
                <path d="M25 60 Q 50 25 75 60" fill="#97266D" /> 
                {/* Face */}
                <ellipse cx="50" cy="60" rx="20" ry="24" fill="#C05621" />
                {/* Headphones */}
                <path d="M25 60 C 25 35, 75 35, 75 60" stroke="#2D3748" strokeWidth="6" fill="none" />
                <rect x="22" y="55" width="8" height="15" rx="2" fill="#4A5568" />
                <rect x="70" y="55" width="8" height="15" rx="2" fill="#4A5568" />
                {/* Hair */}
                <path d="M32 50 Q 50 45 68 50" stroke="#1A202C" strokeWidth="4" fill="none" />
                {/* Eyes */}
                <circle cx="42" cy="60" r="2" fill="#1A202C" />
                <circle cx="58" cy="60" r="2" fill="#1A202C" />
                {/* Smile */}
                <path d="M45 70 Q 50 73 55 70" stroke="#7B341E" strokeWidth="1.5" fill="none" />
                {/* Hoodie strings */}
                <path d="M45 85 L 45 100" stroke="#FBB6CE" strokeWidth="2" />
                <path d="M55 85 L 55 100" stroke="#FBB6CE" strokeWidth="2" />
            </svg>
        );
      case 'lorelai':
        return (
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect width="100" height="100" fill="#EDF2F7" />
                <circle cx="50" cy="50" r="50" fill="#E2E8F0" />
                {/* Suit */}
                <path d="M15 80 Q 50 110 85 80 L 85 100 L 15 100 Z" fill="#2C5282" />
                <path d="M50 80 L 40 100 L 60 100 Z" fill="#FFFFFF" />
                <path d="M48 85 L 52 85 L 50 100 Z" fill="#2D3748" /> 
                {/* Neck */}
                <rect x="42" y="65" width="16" height="20" fill="#E9D8D5" />
                {/* Head */}
                <ellipse cx="50" cy="50" rx="21" ry="25" fill="#E9D8D5" />
                {/* Hair */}
                <path d="M25 45 Q 30 20 50 20 Q 70 20 75 45 Q 80 35 70 25 Q 50 10 30 25 Q 20 35 25 45" fill="#5D4037" />
                <path d="M48 20 L 52 25 L 55 20" fill="#5D4037" />
                {/* Eyes */}
                <circle cx="42" cy="52" r="2.5" fill="#2D3748" />
                <circle cx="58" cy="52" r="2.5" fill="#2D3748" />
                {/* Eyebrows */}
                <path d="M38 46 Q 42 44 46 46" stroke="#5D4037" strokeWidth="1.5" fill="none" />
                <path d="M54 46 Q 58 44 62 46" stroke="#5D4037" strokeWidth="1.5" fill="none" />
                {/* Mouth (Open/talking) */}
                <ellipse cx="50" cy="65" rx="4" ry="2" fill="#A05E44" />
            </svg>
        );
      default:
        return null;
    }
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] text-center mb-16 tracking-tight">
          Trusted by 5000+ Happy Customers
        </h2>

        {/* Content Container */}
        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {/* Testimonial Container */}
            <div className="max-w-4xl mx-auto relative px-8 md:px-16 min-h-[160px] flex items-center">
            
            {/* Left Quote Mark */}
            <div className="absolute top-0 left-0 md:-left-4 text-[#81E6D9]">
                <Quote size={48} className="fill-current transform rotate-180 opacity-60" />
            </div>

            {/* Text */}
            <p className="text-center text-gray-700 leading-8 text-lg md:text-[1.05rem] font-normal">
                {activeTestimonial.text}
            </p>

            {/* Right Quote Mark */}
            <div className="absolute bottom-0 right-0 md:-right-4 text-[#81E6D9]">
                <Quote size={48} className="fill-current opacity-60" />
            </div>
            </div>

            {/* Avatar & Author Info */}
            <div className="mt-12 flex flex-col items-center space-y-3">
                {/* 3D Avatar Recreation (CSS/SVG) */}
                <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-white shadow-lg bg-gray-50">
                    {renderAvatar(activeTestimonial.avatarType)}
                </div>

                <div className="text-center">
                    <h4 className="text-xl font-bold text-[#1A202C]">{activeTestimonial.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">{activeTestimonial.role}</p>
                </div>
            </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 mt-8">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === activeIndex 
                            ? 'bg-[#38B2AC] scale-110' 
                            : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
