
import { ChevronRight } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-funding-light-gray/50 to-white overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-funding-blue/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-funding-light-blue/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Hero content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-funding-blue/10 text-funding-blue font-medium text-sm px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              Business Funding Made Simple
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-funding-dark mb-6 leading-tight animate-slide-in">
              Get Fast Business Funding to Fuel Your Growth
            </h1>
            
            <p className="text-lg text-funding-gray mb-8 max-w-xl mx-auto md:mx-0 animate-slide-in" style={{ animationDelay: '0.1s' }}>
              Access $5,000 to $500,000 in as little as 24 hours with minimal paperwork and flexible repayment terms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <a href="#apply-now">
                <Button size="lg">
                  Get Funded Now
                  <ChevronRight className="ml-1 w-5 h-5" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button variant="outline" size="lg">
                  How It Works
                </Button>
              </a>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="ml-3 text-sm text-funding-gray">
                  <span className="font-medium text-funding-dark">1,000+</span> businesses funded this month
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="text-sm font-medium text-funding-dark">4.9/5</span>
              </div>
            </div>
          </div>
          
          {/* Hero image or form teaser */}
          <div className="flex-1 w-full max-w-md mx-auto md:max-w-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-6 md:p-8 relative">
              <div className="absolute -top-3 -right-3 bg-funding-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                Pre-qualify in 2 minutes
              </div>
              <h3 className="text-xl font-bold text-funding-dark mb-6">See if you qualify for funding</h3>
              
              <ul className="space-y-4 mb-6">
                {[
                  "Business generating $15k+ monthly revenue",
                  "In business for 6+ months",
                  "No collateral required",
                  "All credit types considered"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-funding-blue/10 p-1 rounded-full mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-funding-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-funding-dark">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#apply-now" className="block">
                <Button fullWidth size="lg">
                  Check Your Rate
                  <ChevronRight className="ml-1 w-5 h-5" />
                </Button>
              </a>
              
              <p className="text-xs text-center text-funding-gray mt-4">
                Checking your rate won't affect your credit score
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
