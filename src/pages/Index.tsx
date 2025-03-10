
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import ProgressiveForm from '@/components/ProgressiveForm';
import { ArrowRight, CheckCircle, Clock, FileText, DollarSign, Shield, CreditCard, ChevronRight, Briefcase } from 'lucide-react';
import { useEffect } from 'react';
import CustomButton from '@/components/ui/CustomButton';

// Funding Products Component
const FundingProducts = () => (
  <section id="funding-products" className="py-16 bg-white relative overflow-hidden">
    {/* Background texture patterns */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-soft-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-soft-blue/10 rounded-full blur-3xl"></div>
      <div className="dot-pattern"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
          Flexible Funding Solutions
        </h2>
        <p className="text-funding-gray max-w-2xl mx-auto">
          Choose from multiple funding options tailored to your specific business needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <ChevronRight className="ml-1 w-5 h-5" />
          </CustomButton>
        </a>
      </div>
    </div>
  </section>
);

// Terms Component
const TermsAndPrivacy = () => (
  <section id="terms" className="py-16 bg-funding-light-gray/30">
    <div className="max-w-4xl mx-auto px-5 md:px-10">
      <div className="glass-card p-8 md:p-10 mb-10">
        <div className="diagonal-pattern"></div>
        <h2 className="text-2xl font-bold text-funding-dark mb-6">Terms of Service</h2>
        <div className="prose prose-blue max-w-none">
          <p>By using the Growth Path Advisory website and services, you agree to these Terms of Service. Please read them carefully.</p>
          
          <h3>Services Overview</h3>
          <p>Growth Path Advisory provides business funding connection services. We are not a lender but connect businesses with our network of funding partners. By submitting information, you authorize us to share your information with our network of funding providers.</p>
          
          <h3>Eligibility Requirements</h3>
          <p>To qualify for our services, your business must have been operating for at least 6 months and generate a minimum of $15,000 in monthly revenue. We reserve the right to decline service to businesses that do not meet these criteria.</p>
          
          <h3>Information Use</h3>
          <p>Information provided to Growth Path Advisory will be used to match you with appropriate funding options. We may contact you via phone, email, or text regarding your application and funding options.</p>
          
          <h3>Third-Party Services</h3>
          <p>We may refer you to third-party services if we believe they are better suited to your needs. We are not responsible for the services provided by these third parties.</p>
        </div>
      </div>
      
      <div className="glass-card p-8 md:p-10" id="privacy">
        <div className="grid-pattern"></div>
        <h2 className="text-2xl font-bold text-funding-dark mb-6">Privacy Policy</h2>
        <div className="prose prose-blue max-w-none">
          <p>Growth Path Advisory is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.</p>
          
          <h3>Information Collection</h3>
          <p>We collect information you provide directly to us, including personal and business information necessary to connect you with funding options. This may include contact details, financial information, and business history.</p>
          
          <h3>Information Use</h3>
          <p>We use your information to connect you with funding providers, improve our services, communicate with you about funding opportunities, and comply with legal obligations.</p>
          
          <h3>Information Sharing</h3>
          <p>We share your information with funding providers in our network to help you secure business funding. We may also share information with service providers who help us operate our business.</p>
          
          <h3>Your Choices</h3>
          <p>You can opt out of marketing communications at any time. Contact us at privacy@growthpathadvisory.com to request access to, correction of, or deletion of your personal information.</p>
        </div>
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
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="how-it-works" className="py-16 bg-white relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-soft-green/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-soft-blue/10 rounded-full blur-3xl"></div>
            <div className="grid-pattern"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
                How It Works
              </h2>
              <p className="text-funding-gray max-w-2xl mx-auto">
                We've simplified the business funding process to get you the capital you need, when you need it.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="w-8 h-8 text-funding-blue" />,
                  title: "1. Quick Application",
                  description: "Fill out our simple application in just 2 minutes with basic business information.",
                  delay: 0,
                  bgGradient: "from-soft-blue/20 to-soft-green/10"
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-funding-blue" />,
                  title: "2. Fast Approval",
                  description: "Get pre-approved in as little as 1 hour with minimal documentation required.",
                  delay: 0.1,
                  bgGradient: "from-soft-purple/20 to-soft-pink/10"
                },
                {
                  icon: <DollarSign className="w-8 h-8 text-funding-blue" />,
                  title: "3. Receive Funding",
                  description: "Once approved, funds can be deposited into your account within 24 hours.",
                  delay: 0.2,
                  bgGradient: "from-soft-peach/20 to-soft-yellow/10"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className={`glass-card p-8 flex flex-col items-center text-center animate-fade-in bg-gradient-to-br ${step.bgGradient} hover-scale`}
                  style={{ animationDelay: `${step.delay}s` }}
                >
                  <div className="bg-white/80 p-4 rounded-full mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-funding-dark mb-3">{step.title}</h3>
                  <p className="text-funding-gray">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <a href="#apply-now" className="inline-flex items-center text-funding-blue font-medium hover:text-funding-blue/80 transition-colors">
                Get Started Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
        
        <TrustIndicators />
        
        <FundingProducts />
        
        <section id="benefits" className="py-16 bg-white relative overflow-hidden">
          {/* Background texture patterns */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-soft-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-soft-green/10 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white via-funding-light-gray/5 to-white opacity-70"></div>
            <div className="dot-pattern"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
                Benefits of Our Funding
              </h2>
              <p className="text-funding-gray max-w-2xl mx-auto">
                Our business funding solutions are designed with your success in mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  className={`glass-card p-8 animate-fade-in ${benefit.gradient} hover-scale`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-funding-dark mb-3">{benefit.title}</h3>
                  <p className="text-funding-gray mb-6">{benefit.description}</p>
                  <ul className="space-y-3">
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
          </div>
        </section>
        
        <section id="testimonials" className="py-16 bg-funding-light-gray/50 relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-soft-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-soft-yellow/10 rounded-full blur-3xl"></div>
            <div className="diagonal-pattern"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
                What Our Clients Say
              </h2>
              <p className="text-funding-gray max-w-2xl mx-auto">
                Hundreds of business owners have grown their businesses with our funding solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "I was approved for $75,000 in less than 24 hours. The process was incredibly simple and straightforward.",
                  author: "Michael Johnson",
                  business: "Johnson Retail Solutions",
                  rating: 5,
                  gradient: "bg-gradient-to-br from-soft-blue/20 to-soft-purple/10"
                },
                {
                  quote: "After being rejected by three banks, Growth Path Advisory got me the funding I needed to expand my restaurant. Forever grateful!",
                  author: "Sarah Williams",
                  business: "Taste of Home Restaurant",
                  rating: 5,
                  gradient: "bg-gradient-to-br from-soft-peach/20 to-soft-yellow/10"
                },
                {
                  quote: "The team was professional and guided me through the entire process. I received the perfect funding solution for my construction business.",
                  author: "David Chen",
                  business: "Chen Construction Co.",
                  rating: 5,
                  gradient: "bg-gradient-to-br from-soft-green/20 to-soft-blue/10"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`glass-card p-8 flex flex-col animate-fade-in ${testimonial.gradient} hover-scale`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-funding-dark mb-6 flex-grow italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-funding-dark">{testimonial.author}</p>
                    <p className="text-sm text-funding-gray">{testimonial.business}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <ProgressiveForm />
        
        <TermsAndPrivacy />
      </main>
      
      <footer className="bg-funding-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Growth Path Advisory</h3>
              <p className="text-gray-400 mb-4">
                Helping businesses grow with fast, flexible funding solutions since 2015.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/GrowthPathAdvisory" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://twitter.com/GrowthPathAdv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/growth-path-advisory" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Funding Options</h3>
              <ul className="space-y-2">
                <li><a href="#funding-products" className="text-gray-400 hover:text-white">Term Loans</a></li>
                <li><a href="#funding-products" className="text-gray-400 hover:text-white">Merchant Cash Advances</a></li>
                <li><a href="#funding-products" className="text-gray-400 hover:text-white">Lines of Credit</a></li>
                <li><a href="#funding-products" className="text-gray-400 hover:text-white">Equipment Financing</a></li>
                <li><a href="#funding-products" className="text-gray-400 hover:text-white">Invoice Factoring</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-white">Benefits</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span><a href="tel:+18664447432">1-866-444-7432</a></span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span><a href="mailto:info@growthpathadvisory.com">info@growthpathadvisory.com</a></span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>15 N Mill St, Suite 207<br />Nyack, NY 10960</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Growth Path Advisory. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-white">Privacy Policy</a>
              <a href="#terms" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
