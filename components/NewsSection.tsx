
import React, { useState } from 'react';
import { Heart, Award, BarChart2, Camera, Video, Image as ImageIcon } from 'lucide-react';

const NewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Bing', 'Facebook', 'Google', 'Tiktok'];

  const articles = [
    {
      id: 1,
      title: "Landing page ranks first in importance for Facebook ad conversions!",
      excerpt: "Landing page is the most important for Facebook ad conversion!The importance of Facebook ad landing page, I believe most of the old operators and old ...",
      category: "Facebook",
      date: "7/3/2025",
      visualType: 'none'
    },
    {
      id: 2,
      title: "Why Meta will update AMM policy",
      excerpt: "First of all, they will definitely not do something that is not profitable. They used to not provide data to everyone under the banner of privacy, but...",
      category: "Facebook",
      date: "6/19/2025",
      visualType: 'none'
    },
    {
      id: 3,
      title: "A complete guide to scaling Facebook advertising by 2025",
      excerpt: "1.Optimize budget allocation and bidding strategy 2.Expand the audience 3.Optimize advertising creativity and format 3-1Keep the materials fres...",
      category: "Facebook",
      date: "6/13/2025",
      visualType: 'ads-manager'
    },
    // New Row
    {
      id: 4,
      title: "Facebook’s Golden Posting Time",
      excerpt: "Recently, according to a data released by Weizhuo Overseas Research Institute: Currently, more than 86% of American marketers choose to advertise ...",
      category: "Facebook",
      date: "12/27/2024",
      visualType: 'facebook-algo'
    },
    {
      id: 5,
      title: "How to run Google ads on a small budget?",
      excerpt: "Many people think that Google Ads is only for big businesses with ample budgets, such as those multinational brands. But this is not the case. Ma...",
      category: "Google",
      date: "12/26/2024",
      visualType: 'none'
    },
    {
      id: 6,
      title: "Meta Product Updates",
      excerpt: "Real Money Gambling (RMG): The Latest Timeline of Regulatory Changes in Brazil Taiwan Anti-Fraud Law: All advertisers targeting Taiwan must verify ben...",
      category: "Google",
      date: "12/25/2024",
      visualType: 'meta-form'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-[#1A202C] text-center mb-8 tracking-tight">
          Latest news & Industry insights
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-1.5 rounded-[4px] text-[15px] font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'border border-[#319795] text-[#319795]'
                  : 'text-[#319795] hover:text-[#285e61] border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              
              {/* Visual Content Logic */}
              
              {/* 1. Ads Manager Mockup */}
              {article.visualType === 'ads-manager' && (
                <div className="h-48 bg-[#F8F9FA] border-b border-gray-100 flex items-center justify-center p-4 relative overflow-hidden shrink-0">
                   <div className="w-full max-w-[240px] bg-white rounded shadow-sm border border-gray-200 p-3 relative transform translate-y-2">
                      <div className="flex items-center gap-2 mb-2">
                          <div className="flex-1 relative">
                              <div className="h-8 border border-gray-300 rounded px-2 flex items-center bg-white text-xs font-medium text-gray-700">
                                1,2
                              </div>
                              <div className="absolute -inset-[3px] border-2 border-[#F56565] rounded-[3px] pointer-events-none"></div>
                          </div>
                          <span className="text-gray-300 text-xs tracking-widest">•••</span>
                          <span className="text-gray-300 text-xs">✕</span>
                      </div>
                      <div>
                          <div className="inline-flex px-2 py-1 bg-gray-50 border border-gray-200 rounded text-[9px] font-bold text-gray-600 shadow-sm">
                            Add to conditions
                          </div>
                      </div>
                   </div>
                </div>
              )}

              {/* 2. Facebook Algorithm Graphic */}
              {article.visualType === 'facebook-algo' && (
                <div className="h-48 bg-white border-b border-gray-100 flex items-center justify-center p-2 shrink-0">
                  <div className="w-full h-full flex flex-col items-center justify-center py-2">
                    <div className="text-center font-bold text-lg leading-tight mb-3 text-[#1A202C]">
                      The <span className="text-[#3b5998]">facebook</span> algorithm<br />
                      Demystified
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 mb-1 w-full px-4">
                      {/* Icons Row */}
                      <div className="flex flex-col items-center gap-1 w-1/4">
                        <Heart className="w-8 h-8 text-[#3b5998] stroke-[1.5]" />
                      </div>
                      <span className="text-xs font-bold text-gray-400">x</span>
                      
                      <div className="flex flex-col items-center gap-1 w-1/4">
                         <Award className="w-8 h-8 text-[#3b5998] stroke-[1.5]" />
                      </div>
                      <span className="text-xs font-bold text-gray-400">x</span>

                      <div className="flex flex-col items-center gap-1 w-1/4">
                         <BarChart2 className="w-8 h-8 text-[#3b5998] stroke-[1.5]" />
                      </div>
                      <span className="text-xs font-bold text-gray-400">x</span>

                      <div className="flex flex-col items-center gap-1 w-1/4">
                         <Camera className="w-8 h-8 text-[#3b5998] stroke-[1.5]" />
                      </div>
                    </div>

                    {/* Labels Row */}
                    <div className="flex justify-between w-full px-4 text-[9px] text-center font-bold text-gray-600 leading-tight">
                        <div className="w-1/4">Interest in<br/>the Page</div>
                        <div className="w-1/4">Post<br/>Performance</div>
                        <div className="w-1/4">Past Page<br/>Performance</div>
                        <div className="w-1/4">Types of<br/>Content</div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Meta Form Mockup */}
              {article.visualType === 'meta-form' && (
                <div className="h-48 bg-[#F0F2F5] border-b border-gray-100 flex flex-col shrink-0 overflow-hidden">
                   {/* Header Bar */}
                   <div className="h-6 bg-[#3b5998] flex items-center px-3 justify-between shrink-0">
                      <span className="text-white font-bold text-[10px]">facebook</span>
                      <div className="h-3 w-24 bg-white/20 rounded-full flex items-center px-1">
                          <span className="text-white/70 text-[6px]">How can we help?</span>
                      </div>
                   </div>
                   
                   {/* Form Content */}
                   <div className="flex flex-1 p-2 gap-2 overflow-hidden">
                      {/* Sidebar */}
                      <div className="w-16 space-y-1.5 pt-1">
                          {[1,2,3,4,5,6,7].map(i => (
                              <div key={i} className="h-1 w-full bg-gray-300/50 rounded-sm"></div>
                          ))}
                      </div>
                      
                      {/* Main Form Area */}
                      <div className="flex-1 bg-white border border-gray-200 shadow-sm p-3">
                          <div className="flex justify-between items-center mb-2 border-b border-gray-100 pb-1">
                            <span className="text-[8px] text-blue-600 font-bold">Help Center</span>
                            <span className="text-[6px] text-gray-400">English (US)</span>
                          </div>
                          
                          <div className="space-y-2">
                             <div className="text-[9px] font-bold text-gray-800">Online Gambling & Games Advertising - Application Form</div>
                             <div className="text-[7px] text-gray-500 leading-relaxed">
                                This form should be used by an advertiser to request permission...
                             </div>
                             
                             <div className="space-y-1 mt-1">
                                <div className="text-[7px] font-bold text-gray-700">Part 1: About you and your Ad Account</div>
                                <div className="h-6 border border-gray-200 rounded bg-gray-50"></div>
                             </div>
                          </div>
                      </div>
                   </div>
                </div>
              )}


              {/* Card Text Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[17px] font-semibold text-[#2D3748] mb-3 leading-snug group-hover:text-[#319795] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-500 mb-6 leading-relaxed text-[13px] flex-grow">
                  {article.excerpt}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-400 font-medium mt-auto pt-4">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="flex justify-center">
            <button className="px-8 py-2.5 bg-white border border-gray-300 text-gray-600 font-medium rounded hover:bg-gray-50 hover:text-gray-800 hover:border-gray-400 transition-colors text-sm shadow-sm">
                Read more
            </button>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
