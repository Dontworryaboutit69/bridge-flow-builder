import { CreditCard, DollarSign, Shield, Briefcase, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

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
        <CustomButton size="lg" href="#apply-now">
          Get Pre-Qualified
          <ChevronRight className="ml-1 w-4 h-4" />
        </CustomButton>
      </div>
    </div>
  </section>
);

export default FundingProducts;
