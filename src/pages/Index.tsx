
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import HowItWorks from '@/components/sections/HowItWorks';
import FundingProducts from '@/components/sections/FundingProducts';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
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
        <HowItWorks />
        <TrustIndicators />
        <FundingProducts />
        <Benefits />
        <Testimonials />
        <section id="apply-now" className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-funding-dark mb-4">
                Ready to Get Funded?
              </h2>
              <p className="text-funding-gray max-w-2xl mx-auto mb-8">
                Complete our quick application to check your pre-qualification options with no impact to your credit.
              </p>
            </div>
            <ProgressiveForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
