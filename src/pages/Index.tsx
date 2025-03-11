
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import HowItWorks from '@/components/sections/HowItWorks';
import FundingProducts from '@/components/sections/FundingProducts';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';
import ProgressiveForm from '@/components/ProgressiveForm';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-funding-light-gray/5 to-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Enhanced visual separator between Hero and HowItWorks */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-funding-blue/50 to-transparent"></div>
          </div>
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white to-transparent"></div>
          
          {/* Decorative elements */}
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-24 h-24 bg-funding-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-24 h-24 bg-soft-green/5 rounded-full blur-3xl"></div>
        </div>
        
        <HowItWorks />
        <TrustIndicators />
        <FundingProducts />
        <Benefits />
        <Testimonials />
        <section id="apply-now" className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <ProgressiveForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
