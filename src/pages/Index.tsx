
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
        
        {/* Visual separator between Hero and HowItWorks */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-5 md:px-10 py-2">
            <div className="h-px w-full bg-gradient-to-r from-funding-light-gray/10 via-funding-blue/30 to-funding-light-gray/10"></div>
          </div>
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
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
