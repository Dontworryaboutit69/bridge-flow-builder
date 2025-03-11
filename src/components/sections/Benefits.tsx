import { ChevronRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

const Benefits = () => {
  const benefits = [
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
  ];

  return (
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
          {benefits.map((benefit, index) => (
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
  );
};

export default Benefits;
