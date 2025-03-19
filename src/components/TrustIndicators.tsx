
import { Shield, Clock, Award, BarChart } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-funding-light-gray/30">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3 relative inline-block">
            Why Business Owners Trust Us
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-funding-blue/30 to-transparent rounded-full"></div>
          </h2>
          <p className="text-funding-gray max-w-2xl mx-auto text-sm md:text-base mt-4">
            Growth Path Advisory has helped thousands of businesses secure the funding they need to grow and succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          <div className="relative bg-white p-5 rounded-xl flex flex-col items-center text-center animate-fade-in shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-50 rounded-bl-full opacity-50 transition-all duration-300 group-hover:opacity-80"></div>
            <div className="bg-funding-blue/10 p-3 rounded-full mb-3 relative z-10">
              <Clock className="h-5 w-5 text-[#2F54EB]" />
            </div>
            <h3 className="text-base font-bold text-funding-dark mb-1 relative z-10">Quick Approvals</h3>
            <p className="text-funding-gray text-xs md:text-sm relative z-10">
              Get approved in as little as 24 hours with minimal paperwork
            </p>
          </div>
          
          <div className="relative bg-white p-5 rounded-xl flex flex-col items-center text-center animate-fade-in shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group" style={{
            animationDelay: '0.1s'
          }}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-50 rounded-bl-full opacity-50 transition-all duration-300 group-hover:opacity-80"></div>
            <div className="bg-funding-blue/10 p-3 rounded-full mb-3 relative z-10">
              <Shield className="h-5 w-5 text-[#2F54EB]" />
            </div>
            <h3 className="text-base font-bold text-funding-dark mb-1 relative z-10">Secure Process</h3>
            <p className="text-funding-gray text-xs md:text-sm relative z-10">
              Bank-level security protects your information at every step
            </p>
          </div>
          
          <div className="relative bg-white p-5 rounded-xl flex flex-col items-center text-center animate-fade-in shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group" style={{
            animationDelay: '0.2s'
          }}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 rounded-bl-full opacity-50 transition-all duration-300 group-hover:opacity-80"></div>
            <div className="bg-funding-blue/10 p-3 rounded-full mb-3 relative z-10">
              <BarChart className="h-5 w-5 text-[#2F54EB]" />
            </div>
            <h3 className="text-base font-bold text-funding-dark mb-1 relative z-10">Flexible Terms</h3>
            <p className="text-funding-gray text-xs md:text-sm relative z-10">
              Customized funding solutions that fit your business needs
            </p>
          </div>
          
          <div className="relative bg-white p-5 rounded-xl flex flex-col items-center text-center animate-fade-in shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group" style={{
            animationDelay: '0.3s'
          }}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-50 rounded-bl-full opacity-50 transition-all duration-300 group-hover:opacity-80"></div>
            <div className="bg-funding-blue/10 p-3 rounded-full mb-3 relative z-10">
              <Award className="h-5 w-5 text-[#2F54EB]" />
            </div>
            <h3 className="text-base font-bold text-funding-dark mb-1 relative z-10">Expert Support</h3>
            <p className="text-funding-gray text-xs md:text-sm relative z-10">
              Dedicated advisors guide you through the entire process
            </p>
          </div>
        </div>
        
        <div className="mt-10 md:mt-16 text-center">
          <div className="bg-white py-6 px-4 md:px-6 max-w-4xl mx-auto rounded-xl shadow-md border border-gray-100">
            <p className="font-medium text-base md:text-lg text-funding-dark mb-4">
              "Our lending partners have helped over 10,000 businesses secure more than $500 million in funding"
            </p>
            <div className="grid grid-cols-2 gap-6 md:flex md:flex-wrap md:justify-center md:gap-8 mt-6">
              <div className="flex flex-col items-center group">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-funding-blue to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">87%</span>
                <span className="text-xs md:text-sm text-funding-gray mt-1">Approval Rate</span>
              </div>
              <div className="flex flex-col items-center group">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-funding-blue to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">24 hrs</span>
                <span className="text-xs md:text-sm text-funding-gray mt-1">Average Approval Time</span>
              </div>
              <div className="flex flex-col items-center group">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-funding-blue to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">$57k</span>
                <span className="text-xs md:text-sm text-funding-gray mt-1">Average Funding Amount</span>
              </div>
              <div className="flex flex-col items-center group">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-funding-blue to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">4.9/5</span>
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
