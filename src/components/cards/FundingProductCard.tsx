
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FundingProduct } from '@/types/funding';

interface FundingProductCardProps {
  product: FundingProduct;
}

const FundingProductCard = ({ product }: FundingProductCardProps) => {
  const { icon: Icon, title, description, features, cardStyle } = product;
  
  return (
    <div className={`funding-card ${cardStyle}`}>
      <div className="funding-card-icon">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-bold text-funding-dark mb-2">{title}</h3>
      <p className="text-funding-gray mb-4 text-sm">{description}</p>
      
      <div className="space-y-1 mb-4">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-sm text-funding-dark">{feature}</span>
          </div>
        ))}
      </div>
      
      <a href="#apply-now" className="inline-flex items-center text-funding-blue font-medium hover:text-funding-blue/80 transition-colors text-sm">
        Apply Now
        <ChevronRight className="ml-1 w-4 h-4" />
      </a>
    </div>
  );
};

export default FundingProductCard;
