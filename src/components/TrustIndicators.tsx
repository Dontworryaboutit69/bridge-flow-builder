
import { Shield, Clock, Award, BarChart } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <section className="py-16 bg-funding-light-gray/50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
            Why Business Owners Trust Us
          </h2>
          <p className="text-funding-gray max-w-2xl mx-auto">
            Growth Path Advisory has helped thousands of businesses secure the funding they need to grow and succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="glass-card p-6 flex flex-col items-center text-center animate-fade-in">
            <div className="bg-funding-blue/10 p-3 rounded-full mb-4">
              <Clock className="h-6 w-6 text-funding-blue" />
            </div>
            <h3 className="text-lg font-bold text-funding-dark mb-2">Quick Approvals</h3>
            <p className="text-funding-gray text-sm">
              Get approved in as little as 24 hours with minimal paperwork
            </p>
          </div>
          
          <div className="glass-card p-6 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-funding-blue/10 p-3 rounded-full mb-4">
              <Shield className="h-6 w-6 text-funding-blue" />
            </div>
            <h3 className="text-lg font-bold text-funding-dark mb-2">Secure Process</h3>
            <p className="text-funding-gray text-sm">
              Bank-level security protects your information at every step
            </p>
          </div>
          
          <div className="glass-card p-6 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-funding-blue/10 p-3 rounded-full mb-4">
              <BarChart className="h-6 w-6 text-funding-blue" />
            </div>
            <h3 className="text-lg font-bold text-funding-dark mb-2">Flexible Terms</h3>
            <p className="text-funding-gray text-sm">
              Customized funding solutions that fit your business needs
            </p>
          </div>
          
          <div className="glass-card p-6 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-funding-blue/10 p-3 rounded-full mb-4">
              <Award className="h-6 w-6 text-funding-blue" />
            </div>
            <h3 className="text-lg font-bold text-funding-dark mb-2">Expert Support</h3>
            <p className="text-funding-gray text-sm">
              Dedicated advisors guide you through the entire process
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card py-8 px-6 max-w-4xl mx-auto">
            <p className="font-medium text-lg text-funding-dark mb-4">
              "We've helped over 10,000 businesses secure more than $500 million in funding"
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-funding-blue">98%</span>
                <span className="text-sm text-funding-gray mt-1">Approval Rate</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-funding-blue">24 hrs</span>
                <span className="text-sm text-funding-gray mt-1">Average Approval Time</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-funding-blue">$250k</span>
                <span className="text-sm text-funding-gray mt-1">Average Funding Amount</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-funding-blue">4.9/5</span>
                <span className="text-sm text-funding-gray mt-1">Customer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
