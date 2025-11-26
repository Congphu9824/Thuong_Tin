
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialSidebar from './components/SocialSidebar';
import Partners from './components/Partners';
import FloatingWidget from './components/FloatingWidget';
import ServicesSection from './components/ServicesSection';
import StepsSection from './components/StepsSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsSection from './components/NewsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans">
      
      {/* Dark Section (Hero + Partners) */}
      <div className="relative bg-[#011214] text-white selection:bg-teal-500 selection:text-white">
        {/* Background decoration (subtle glow) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
            <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-teal-900/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-teal-800/10 rounded-full blur-[100px]" />
        </div>

        <Navbar />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col pt-20">
            <main className="flex-grow flex flex-col justify-center min-h-[calc(100vh-80px)]">
            <Hero />
            <Partners />
            </main>
        </div>
      </div>

      {/* White Section (Services) */}
      <ServicesSection />

      {/* Light Teal Section (Steps) */}
      <StepsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* News Section */}
      <NewsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      <SocialSidebar />
      <FloatingWidget />
    </div>
  );
};

export default App;
