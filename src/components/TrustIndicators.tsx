
import { Shield, Clock, Award, BarChart } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <section className="py-12 md:py-16 bg-funding-light-gray/50">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
            Why Business Owners Trust Us
          </h2>
          <p className="text-funding-gray max-w-2xl mx-auto text-sm md:text-base">
            Growth Path Advisory has helped thousands of businesses secure the funding they need to grow and succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          <div className="glass-card p-5 flex flex-col items-center text-center animate-fade-in">
            <div className="bg-funding-blue/10 p-3 rounded-full mb-3">
              <Clock className="h-5 w-5 text-[#2F54EB]" />
            </div>
            <h3 className="text-base font-bold text-funding-dark mb-1">Quick Approvals</h3>
            <p className="text-funding-gray text-xs md:text-sm">
              Get approved in as little as 24 hours with minimal paperwork
            </p>
          </div>
          
          <div className="glass-card p-5 flex flex-col items-center text-center animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            <div className="bg-funding-blue/10 p-3 rounded-full mb-3">
              <Shield className="h-5 w-5 text-[#2F54EB]" />
            </div>
            <h3 className="text-base font-bold text-funding-dark mb-1">Secure Process</h3>
            <p className="text-funding-gray text-xs md:text-sm">
              Bank-level security protects your information at every step
            </p>
          </div>
          
          <div className="glass-card p-5 flex flex-col items-center text-center animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            <div className="bg-funding-blue/10 p-3 rounded-full mb-3">
              <BarChart className="h-5 w-5 text-[#2F54EB]" />
            </div>
            <h3 className="text-base font-bold text-funding-dark mb-1">Flexible Terms</h3>
            <p className="text-funding-gray text-xs md:text-sm">
              Customized funding solutions that fit your business needs
            </p>
          </div>
          
          <div className="glass-card p-5 flex flex-col items-center text-center animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <div className="bg-funding-blue/10 p-3 rounded-full mb-3">
              <Award className="h-5 w-5 text-[#2F54EB]" />
            </div>
            <h3 className="text-base font-bold text-funding-dark mb-1">Expert Support</h3>
            <p className="text-funding-gray text-xs md:text-sm">
              Dedicated advisors guide you through the entire process
            </p>
          </div>
        </div>
        
        <div className="mt-10 md:mt-16 text-center">
          <div className="glass-card py-6 px-4 md:px-6 max-w-4xl mx-auto">
            <p className="font-medium text-base md:text-lg text-funding-dark mb-4">
              "Our lending partners have helped over 10,000 businesses secure more than $500 million in funding"
            </p>
            <div className="grid grid-cols-2 gap-6 md:flex md:flex-wrap md:justify-center md:gap-8 mt-6">
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-[#2F54EB]">87%</span>
                <span className="text-xs md:text-sm text-funding-gray mt-1">Approval Rate</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-[#2F54EB]">24 hrs</span>
                <span className="text-xs md:text-sm text-funding-gray mt-1">Average Approval Time</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-[#2F54EB]">$57k</span>
                <span className="text-xs md:text-sm text-funding-gray mt-1">Average Funding Amount</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-[#2F54EB]">4.9/5</span>
                <span className="text-xs md:text-sm text-funding-gray mt-1">Customer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
