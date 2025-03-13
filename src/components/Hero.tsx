import { ChevronRight, Phone, Shield, Check } from 'lucide-react';
import CustomButton from './ui/CustomButton';

const Hero = () => {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-funding-blue/5 to-white"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-funding-blue/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-soft-green/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
        <div className="absolute inset-0 diagonal-pattern opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Hero content with improved breathing room */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-funding-blue/10 text-funding-blue font-medium text-sm px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              Business Funding Made Simple
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-funding-dark mb-6 leading-tight">
              Get Business Funding <span className="text-funding-blue">In 24 Hours</span>
            </h1>
            
            <p className="text-xl text-funding-gray mb-8 max-w-xl mx-auto lg:mx-0">
              Access $5,000 to $500,000 with minimal paperwork and flexible repayment terms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="#apply-now">
                <CustomButton size="lg">
                  Get Funded Now
                  <ChevronRight className="ml-1 w-5 h-5" />
                </CustomButton>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[
                    { bg: 'bg-blue-500', text: 'J' },
                    { bg: 'bg-green-500', text: 'S' },
                    { bg: 'bg-purple-500', text: 'M' },
                    { bg: 'bg-amber-500', text: 'K' }
                  ].map((profile, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full border-2 border-white ${profile.bg} flex items-center justify-center text-xs font-medium text-white`}
                    >
                      {profile.text}
                    </div>
                  ))}
                </div>
                <div className="ml-3 text-sm font-medium text-funding-gray">
                  <span className="font-bold text-funding-dark">250+</span> happy clients
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="text-sm font-medium text-funding-dark">4.9/5</span>
              </div>
            </div>
          </div>
          
          {/* Qualification form card with enhanced visual separation */}
          <div className="w-full lg:w-1/2 max-w-md mx-auto lg:max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-funding-light-gray/50 relative backdrop-blur-sm">
              <div className="absolute -top-3 -right-3 bg-funding-blue/10 text-funding-blue text-xs font-bold px-3 py-1 rounded-full">
                <Shield className="w-4 h-4 inline-block mr-1" />
                Quick Pre-qualification
              </div>
              
              <h3 className="text-xl font-bold text-funding-dark mb-6">See if you qualify for funding</h3>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Business generating $15k+ monthly revenue",
                  "In business for 6+ months",
                  "No collateral required",
                  "All credit types considered"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="p-1 rounded-full bg-soft-green mr-3 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-funding-dark">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#apply-now">
                <CustomButton fullWidth size="lg">
                  Check Your Rate
                  <ChevronRight className="ml-1 w-5 h-5" />
                </CustomButton>
              </a>
              
              <div className="mt-6 flex items-center justify-center text-funding-gray">
                <Phone className="w-4 h-4 text-funding-blue mr-2" />
                <a href="tel:15735333894" className="text-sm hover:text-funding-blue transition-colors">
                  Call us at 1-573-533-3894
                </a>
              </div>
              
              <p className="text-xs text-center text-funding-gray mt-2">
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

