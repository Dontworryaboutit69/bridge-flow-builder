
import { ChevronRight, Phone, Shield, Check } from 'lucide-react';
import CustomButton from './ui/CustomButton';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Enhanced background effects with more personality */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#E0E8FF]/30 to-white"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#E0E8FF]/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4 animate-pulse-soft"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#E2F7E9]/30 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em02IDZ2Nmg2di02aC02em0tMTItMTJ2Nmg2di02aC02eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          {/* Hero content with improved typography and spacing */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-block bg-funding-blue/10 text-funding-blue font-medium text-sm px-4 py-1.5 rounded-full mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Business Funding Made Simple
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-playfair"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get Business Funding <span className="text-funding-blue relative inline-block">
                In 24 Hours
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-funding-blue/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,0 Q50,12 100,0" fill="currentColor" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-funding-gray mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Access $5,000 to $500,000 with minimal paperwork and flexible repayment terms.
            </motion.p>
            
            <motion.div 
              className="flex justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <CustomButton 
                href="#apply-now" 
                size="lg" 
                className="shadow-xl hover:shadow-funding-blue/30 transition-all duration-300 bg-gradient-to-r from-funding-blue to-purple-600 hover:from-funding-blue/90 hover:to-purple-600/90 transform hover:scale-105"
              >
                Get Pre-Qualified
                <ChevronRight className="ml-1 w-5 h-5" />
              </CustomButton>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[
                    { bg: 'bg-gradient-to-br from-purple-400 to-purple-600', text: 'J' },
                    { bg: 'bg-gradient-to-br from-green-400 to-green-600', text: 'S' },
                    { bg: 'bg-gradient-to-br from-amber-400 to-amber-600', text: 'M' },
                    { bg: 'bg-gradient-to-br from-pink-400 to-pink-600', text: 'K' }
                  ].map((profile, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full border-2 border-white ${profile.bg} flex items-center justify-center text-xs font-medium text-white shadow-md transform transition-transform hover:scale-110 hover:z-10`}
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
            </motion.div>
          </motion.div>
          
          {/* Qualification form card with more personality */}
          <motion.div 
            className="w-full lg:w-1/2 max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-funding-light-gray/30 relative backdrop-blur-sm transform transition-all hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 rounded-2xl"></div>
              
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500/90 to-funding-blue/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                <Shield className="w-4 h-4 inline-block mr-1" />
                Quick Pre-qualification
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-funding-dark mb-6 font-playfair">See if you qualify for funding</h3>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Business generating $15k+ monthly revenue",
                    "In business for 6+ months",
                    "No collateral required",
                    "All credit types considered"
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + (i * 0.1) }}
                    >
                      <div className="p-1.5 rounded-full bg-gradient-to-br from-green-100 to-green-200 mr-3 mt-0.5 shadow-sm">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-funding-dark">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <CustomButton 
                  href="#apply-now" 
                  fullWidth 
                  size="lg" 
                  className="bg-gradient-to-r from-funding-blue to-purple-600 hover:from-funding-blue/90 hover:to-purple-600/90 shadow-lg shadow-funding-blue/20 transform transition-all duration-300 hover:scale-105"
                >
                  Check Your Rate
                  <ChevronRight className="ml-1 w-5 h-5" />
                </CustomButton>
                
                <div className="mt-5 flex items-center justify-center text-funding-gray">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
