import { ChevronRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import BenefitCard from '@/components/cards/BenefitCard';
import { benefits } from '@/data/benefits';
const Benefits = () => {
  return <section id="benefits" className="py-12 md:py-16 bg-gradient-to-br from-funding-light-gray/30 to-white relative overflow-hidden bg-gray-100">
      {/* Background texture patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 md:w-96 h-72 md:h-96 bg-soft-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 md:w-96 h-72 md:h-96 bg-soft-green/10 rounded-full blur-3xl"></div>
        <div className="dot-pattern opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-funding-dark mb-4">
            Why Get Funded With Us
          </h2>
          <p className="text-funding-gray max-w-2xl mx-auto">
            Our business funding solutions are designed with your success in mind
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => <BenefitCard key={index} benefit={benefit} index={index} />)}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <CustomButton size="lg" href="#apply-now">
            Get Pre-Qualified
            <ChevronRight className="ml-1 w-4 h-4" />
          </CustomButton>
        </div>
      </div>
    </section>;
};
export default Benefits;