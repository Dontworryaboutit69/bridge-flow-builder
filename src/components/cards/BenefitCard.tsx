
import React from 'react';
import { Benefit } from '@/types/benefits';

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

const BenefitCard = ({ benefit, index }: BenefitCardProps) => {
  const { title, description, features, gradient } = benefit;
  
  return (
    <div 
      className={`glass-card p-6 md:p-8 animate-fade-in ${gradient} hover-scale`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3 className="text-lg md:text-xl font-bold text-funding-dark mb-2 md:mb-3">{title}</h3>
      <p className="text-funding-gray mb-4 md:mb-6">{description}</p>
      <ul className="space-y-2 md:space-y-3">
        {features.map((feature, i) => (
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
  );
};

export default BenefitCard;
