import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import ProgressiveForm from '@/components/ProgressiveForm';
import { ArrowRight, CheckCircle, Clock, FileText, DollarSign, Shield, CreditCard, ChevronRight, Briefcase, Phone, Mail, MapPin, CalendarClock, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import CustomButton from '@/components/ui/CustomButton';
import Logo from '@/components/Logo';

// CTA Section Component for reuse
const CTASection = ({ bgClass = "bg-white" }) => {
  const schedulingLink = "https://api.leadconnectorhq.com/widget/bookings/soniab";

  return (
    <section className={`py-12 md:py-16 ${bgClass} relative overflow-hidden`}>
      <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-6">
          Ready to Grow Your Business?
        </h2>
        <p className="text-funding-gray mb-8 md:text-lg">
          Get the funding you need with flexible options tailored to your specific business requirements.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CustomButton href="#apply-now" size="lg" fullWidth className="sm:w-auto">
            Apply Now
            <ChevronRight className="ml-1 w-4 h-4" />
          </CustomButton>
          <CustomButton 
            href={schedulingLink} 
            target="_blank" 
            rel="noopener noreferrer"
            variant="outline" 
            size="lg"
            fullWidth
            className="sm:w-auto"
          >
            Schedule Consultation
            <CalendarClock className="ml-1 w-4 h-4" />
          </CustomButton>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-soft-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-soft-pink/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

// Funding Products Component
const FundingProducts = () => (
  <section id="funding-products" className="py-12 md:py-16 bg-white relative overflow-hidden">
    {/* Background texture patterns */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-24 -right-24 w-72 md:w-96 h-72 md:h-96 bg-soft-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 md:w-96 h-72 md:h-96 bg-soft-blue/10 rounded-full blur-3xl"></div>
      <div className="dot-pattern"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-funding-dark mb-4">
          Flexible Funding Solutions
        </h2>
        <p className="text-funding-gray max-w-2xl mx-auto">
          Choose from multiple funding options tailored to your specific business needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Term Loans */}
        <div className="funding-card funding-card-blue">
          <div className="funding-card-icon">
            <CreditCard className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-funding-dark mb-2">Term Loans</h3>
          <p className="text-funding-gray mb-4 text-sm">Access lump-sum financing with fixed repayment terms and competitive rates.</p>
          
          <div className="space-y-1 mb-4">
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">$15k-$500k funding amount</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">3-36 month terms</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Fixed or variable rates</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Weekly or monthly payments</span>
            </div>
          </div>
          
          <a href="#apply-now" className="inline-flex items-center text-funding-blue font-medium hover:text-funding-blue/80 transition-colors text-sm">
            Apply Now
            <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>
        
        {/* Merchant Cash Advances */}
        <div className="funding-card funding-card-purple">
          <div className="funding-card-icon">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-funding-dark mb-2">Merchant Cash Advances</h3>
          <p className="text-funding-gray mb-4 text-sm">Get funding based on your future sales with flexible repayment options.</p>
          
          <div className="space-y-1 mb-4">
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">$5k-$250k funding amount</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Repay based on daily sales</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">No fixed payment amount</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Ideal for seasonal businesses</span>
            </div>
          </div>
          
          <a href="#apply-now" className="inline-flex items-center text-funding-blue font-medium hover:text-funding-blue/80 transition-colors text-sm">
            Apply Now
            <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>
        
        {/* Lines of Credit */}
        <div className="funding-card funding-card-green">
          <div className="funding-card-icon">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-funding-dark mb-2">Lines of Credit</h3>
          <p className="text-funding-gray mb-4 text-sm">Flexible funding that allows you to draw funds as needed up to a set limit.</p>
          
          <div className="space-y-1 mb-4">
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">$10k-$150k credit line</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Only pay interest on what you use</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Revolving credit available</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Funds available in 24 hours</span>
            </div>
          </div>
          
          <a href="#apply-now" className="inline-flex items-center text-funding-blue font-medium hover:text-funding-blue/80 transition-colors text-sm">
            Apply Now
            <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>
        
        {/* Equipment Financing */}
        <div className="funding-card funding-card-teal">
          <div className="funding-card-icon">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-funding-dark mb-2">Equipment Financing</h3>
          <p className="text-funding-gray mb-4 text-sm">Finance new or used equipment with the equipment serving as collateral.</p>
          
          <div className="space-y-1 mb-4">
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Up to 100% equipment value</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">2-7 year terms</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Potential tax advantages</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Fixed monthly payments</span>
            </div>
          </div>
          
          <a href="#apply-now" className="inline-flex items-center text-funding-blue font-medium hover:text-funding-blue/80 transition-colors text-sm">
            Apply Now
            <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>
        
        {/* Invoice Factoring */}
        <div className="funding-card funding-card-orange">
          <div className="funding-card-icon">
            <CheckCircle className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-funding-dark mb-2">Invoice Factoring</h3>
          <p className="text-funding-gray mb-4 text-sm">Turn your unpaid invoices into immediate cash flow for your business.</p>
          
          <div className="space-y-1 mb-4">
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">80-90% advance rates</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">No debt on balance sheet</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Immediate working capital</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Credit based on your customers</span>
            </div>
          </div>
          
          <a href="#apply-now" className="inline-flex items-center text-funding-blue font-medium hover:text-funding-blue/80 transition-colors text-sm">
            Apply Now
            <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>
        
        {/* Short-Term Funding */}
        <div className="funding-card funding-card-pink">
          <div className="funding-card-icon">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-funding-dark mb-2">Short-Term Funding</h3>
          <p className="text-funding-gray mb-4 text-sm">Quick access to capital for immediate business opportunities or challenges.</p>
          
          <div className="space-y-1 mb-4">
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">$5k-$250k funding amount</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">3-18 month terms</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Approval within hours</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm text-funding-dark">Daily or weekly payments</span>
            </div>
          </div>
          
          <a href="#apply-now" className="inline-flex items-center text-funding-blue font-medium hover:text-funding-blue/80 transition-colors text-sm">
            Apply Now
            <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <a href="#apply-now">
          <CustomButton size="lg">
            Check Your Rate
            <ChevronRight className="ml-1 w-4 h-4" />
          </CustomButton>
        </a>
      </div>
    </div>
  </section>
);

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
        
        <section id="how-it-works" className="py-12 md:py-16 bg-white relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-72 md:w-96 h-72 md:h-96 bg-soft-green/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-72 md:w-96 h-72 md:h-96 bg-soft-blue/10 rounded-full blur-3xl"></div>
            <div className="grid-pattern opacity-20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-funding-dark mb-4">
                How It Works
              </h2>
              <p className="text-funding-gray max-w-2xl mx-auto">
                Get pre-qualified in minutes with our simple process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="w-7 h-7 md:w-8 md:h-8 text-funding-blue" />,
                  title: "1. Quick Application",
                  description: "Fill out our simple application in just 2 minutes with basic business information.",
                  delay: 0,
                  bgGradient: "from-soft-blue/20 to-soft-green/10"
                },
                {
                  icon: <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-funding-blue" />,
                  title: "2. Fast Approval",
                  description: "Get pre-approved in as little as 1 hour with minimal documentation required.",
                  delay: 0.1,
                  bgGradient: "from-soft-purple/20 to-soft-pink/10"
                },
                {
                  icon: <DollarSign className="w-7 h-7 md:w-8 md:h-8 text-funding-blue" />,
                  title: "3. Receive Funding",
                  description: "Once approved, funds can be deposited into your account within 24 hours.",
                  delay: 0.2,
                  bgGradient: "from-soft-peach/20 to-soft-yellow/10"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className={`glass-card p-6 md:p-8 flex flex-col items-center text-center animate-fade-in bg-gradient-to-br ${step.bgGradient} hover-scale`}
                  style={{ animationDelay: `${step.delay}s` }}
                >
                  <div className="bg-white/80 p-3 md:p-4 rounded-full mb-5 md:mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-funding-dark mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-funding-gray">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 md:mt-16 text-center">
              <CustomButton size="lg" href="#apply-now">
                Get Pre-Qualified
                <ArrowRight className="ml-2 w-4 h-4" />
              </CustomButton>
            </div>
          </div>
        </section>
        
        <TrustIndicators />
        
        <FundingProducts />
        
        <section id="benefits" className="py-12 md:py-16 bg-gradient-to-br from-funding-light-gray/30 to-white relative overflow-hidden">
          {/* Background texture patterns */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-72 md:w-96 h-72 md:h-96 bg-soft-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-72 md:w-96 h-72 md:h-96 bg-soft-green/10 rounded-full blur-3xl"></div>
            <div className="dot-pattern opacity-20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-funding-dark mb-4">
                Benefits of Our Funding
              </h2>
              <p className="text-funding-gray max-w-2xl mx-auto">
                Our business funding solutions are designed with your success in mind
              </p>
            </div>
            
            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: "Flexible Funding Options",
                  description: "Choose from multiple funding products tailored to your business needs.",
                  features: [
                    "Term loans from 3-36 months",
                    "Merchant cash advances",
                    "Lines of credit",
                    "Equipment financing"
                  ],
                  gradient: "bg-gradient-to-br from-soft-blue/20 to-soft-green/10"
                },
                {
                  title: "Simple Requirements",
                  description: "Minimal paperwork and easier qualification than traditional banks.",
                  features: [
                    "No collateral required",
                    "6+ months in business",
                    "$15,000+ monthly revenue",
                    "All credit types considered"
                  ],
                  gradient: "bg-gradient-to-br from-soft-purple/20 to-soft-pink/10"
                },
                {
                  title: "Fast & Efficient Process",
                  description: "Get the capital you need without the long wait.",
                  features: [
                    "Same-day approval possible",
                    "Funding in as little as 24 hours",
                    "Simple online application",
                    "Dedicated funding advisor"
                  ],
                  gradient: "bg-gradient-to-br from-soft-peach/20 to-soft-yellow/10"
                },
                {
                  title: "Use Funds Your Way",
                  description: "No restrictions on how you use your business funding.",
                  features: [
                    "Equipment purchases",
                    "Inventory expansion",
                    "Hiring and payroll",
                    "Marketing and growth"
                  ],
                  gradient: "bg-gradient-to-br from-soft-green/20 to-soft-blue/10"
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className={`glass-card p-6 md:p-8 animate-fade-in ${benefit.gradient} hover-scale`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-funding-dark mb-2 md:mb-3">{benefit.title}</h3>
                  <p className="text-funding-gray mb-4 md:mb-6">{benefit.description}</p>
                  <ul className="space-y-2 md:space-y-3">
                    {benefit.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-funding-blue/10 p-1 rounded-full mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-funding-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-funding-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-12 md:mt-16 text-center">
              <CustomButton size="lg" href="#apply-now">
                Get Pre-Qualified
                <ChevronRight className="ml-1 w-4 h-4" />
              </CustomButton>
            </div>
          </div>
        </section>
        
        <section id="testimonials" className="py-12 md:py-16 bg-gradient-to-br from-white to-funding-light-gray/50 relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-72 md:w-96 h-72 md:h-96 bg-soft-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-72 md:w-96 h-72 md:h-96 bg-soft-yellow/10 rounded-full blur-3xl"></div>
            <div className="diagonal-pattern opacity-20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-funding-dark mb-4">
                What Our Clients Say
              </h2>
              <p className="text-funding-gray max-w-2xl mx-auto">
                Hundreds of business owners have grown their businesses with our funding solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  quote: "I was approved for $75,000 in less than 24 hours. The process was incredibly simple and straightforward.",
                  author: "Franklyn Jackson",
                  business: "Action Jackson Septic",
                  rating: 5,
                  gradient: "bg-gradient-to-br from-soft-blue/20 to-soft-purple/10"
                },
                {
                  quote: "After being rejected by three banks, Growth Path Advisory got me the funding I needed to expand my business. Forever grateful!",
                  author: "Arturo Rendon",
                  business: "AAffordable Landscape",
                  rating: 5,
                  gradient: "bg-gradient-to-br from-soft-peach/20 to-soft-yellow/10"
                },
                {
                  quote: "The team was professional and responsive. They found the perfect funding solution for my situation when no one else could.",
                  author: "Sarah Mitchell",
                  business: "Bright Ideas Marketing",
                  rating: 5,
                  gradient: "bg-gradient-to-br from-soft-green/20 to-soft-blue/10"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`glass-card p-6 md:p-8 animate-fade-in ${testimonial.gradient} hover-scale`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-funding-dark mb-4 italic">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-funding-dark">{testimonial.author}</p>
                    <p className="text-funding-gray text-sm">{testimonial.business}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
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
      
      <footer className="bg-funding-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-1">
              <Logo className="w-40 mb-4" />
              <p className="text-gray-400 mb-4">
                Providing fast, flexible funding solutions for businesses nationwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-bold text-lg mb-4">Funding</h4>
              <ul className="space-y-2">
                <li><a href="#funding-products" className="text-gray-400 hover:text-white transition-colors">Term Loans</a></li>
                <li><a href="#funding-products" className="text-gray-400 hover:text-white transition-colors">Merchant Cash Advances</a></li>
                <li><a href="#funding-products" className="text-gray-400 hover:text-white transition-colors">Equipment Financing</a></li>
                <li><a href="#funding-products" className="text-gray-400 hover:text-white transition-colors">Lines of Credit</a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-2 text-funding-blue" />
                  <a href="tel:8885551234" className="text-gray-400 hover:text-white transition-colors">(888) 555-1234</a>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 text-funding-blue" />
                  <a href="mailto:info@example.com" className="text-gray-400 hover:text-white transition-colors">info@example.com</a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 text-funding-blue" />
                  <span className="text-gray-400">123 Funding St, Suite 100<br />New York, NY 10001</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center sm:text-left text-gray-500 text-sm">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p>&copy; 2023 Growth Path Advisory. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
