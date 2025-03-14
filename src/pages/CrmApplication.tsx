
import Navbar from '@/components/Navbar';
import CrmEmbed from '@/components/CrmEmbed';
import Footer from '@/components/sections/Footer';
import { useEffect } from 'react';

const CrmApplication = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-funding-light-gray/5 to-white">
      <Navbar />
      <main>
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
                Apply for Business Funding
              </h1>
              <p className="text-funding-gray max-w-xl mx-auto">
                Complete the form below to apply directly to our system.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6">
              <CrmEmbed height="1200px" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CrmApplication;
