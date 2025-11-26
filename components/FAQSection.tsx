import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does SCB agency ad account cost?",
      answer: "SCB offers you free agency accounts, you can either rent or buy one. With a minimum deposit of just $100, you're set to go"
    },
    {
      question: "What payment options are available?",
      answer: "We support a wide range of payment options including USDT (TRC20/ERC20), Bank Transfer, Payoneer, and other local payment methods to ensure convenience for our global partners."
    },
    {
      question: "What happens if my account is suspended?",
      answer: "If your account is suspended, our 24/7 support team will assist you immediately. We provide guidance on appeals and, in cases where recovery isn't possible, we help you transition to a new account efficiently to minimize downtime."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 flex flex-col items-center">
        
        <h2 className="text-3xl font-bold text-[#1A202C] text-center mb-12 tracking-tight">
          Questions You Might Have
        </h2>

        <div className="w-full max-w-4xl border-t border-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group select-none"
              >
                <span className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-[#1A202C]' : 'text-[#1A202C] group-hover:text-[#38B2AC]'}`}>
                  {faq.question}
                </span>
                <span className="ml-4 text-gray-400 shrink-0">
                     <ChevronDown 
                        size={20} 
                        className={`transform transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-180 text-[#38B2AC]' : ''}`} 
                     />
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;