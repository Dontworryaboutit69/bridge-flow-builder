
import { useEffect, useLayoutEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import HowItWorks from '@/components/sections/HowItWorks';
import FundingProducts from '@/components/sections/FundingProducts';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';
import { Link } from 'react-router-dom';

// Create a cross-browser compatible useIsomorphicLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Index = () => {
  // More aggressive scroll reset using layout effect and multiple approaches
  useIsomorphicLayoutEffect(() => {
    // Immediate scroll
    window.scrollTo(0, 0);
    
    // Delayed scroll as backup (sometimes needed for certain browsers/scenarios)
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
      
      // Force scroll position with a small delay as a final fallback
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
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
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return <div className="min-h-screen bg-gradient-to-b from-white via-funding-light-gray/5 to-white">
      {/* Add an invisible marker at the top to ensure scroll position is correct */}
      <div id="page-top" className="h-0 w-0 overflow-hidden"></div>
      <Navbar />
      <main>
        <Hero />
        
        {/* Simple visual separator with minimal spacing */}
        <div className="relative py-2">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-funding-blue/30 to-transparent"></div>
          </div>
        </div>
        
        <HowItWorks />
        <TrustIndicators />
        <FundingProducts />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>;
};

export default Index;
