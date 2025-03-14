
import { ChevronRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import FundingProductCard from '@/components/cards/FundingProductCard';
import { fundingProducts } from '@/data/fundingProducts';

const FundingProducts = () => (
  <section id="funding-products" className="py-10 md:py-16 bg-white relative overflow-hidden">
    {/* Background texture patterns */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-24 -right-24 w-72 md:w-96 h-72 md:h-96 bg-soft-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 md:w-96 h-72 md:h-96 bg-soft-blue/10 rounded-full blur-3xl"></div>
      <div className="dot-pattern"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 md:px-10 relative">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-funding-dark mb-3">
          Flexible Funding Solutions
        </h2>
        <p className="text-funding-gray max-w-2xl mx-auto text-sm md:text-base">
          Choose from multiple funding options tailored to your specific business needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {fundingProducts.map((product, index) => (
          <FundingProductCard key={index} product={product} />
        ))}
      </div>
      
      <div className="mt-10 md:mt-12 text-center">
        <CustomButton size="lg" href="#apply-now">
          Get Pre-Qualified
          <ChevronRight className="ml-1 w-4 h-4" />
        </CustomButton>
      </div>
    </div>
  </section>
);

export default FundingProducts;
