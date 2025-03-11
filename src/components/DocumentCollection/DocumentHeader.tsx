
import React from 'react';
import { Phone, CalendarClock } from 'lucide-react';
import Logo from '@/components/Logo';
import CustomButton from '@/components/ui/CustomButton';

type DocumentHeaderProps = {
  schedulingLink: string;
};

const DocumentHeader = ({ schedulingLink }: DocumentHeaderProps) => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="w-full flex justify-between items-center mb-12">
        <Logo />
        
        <div className="flex items-center gap-4">
          <a 
            href="tel:15735333894" 
            className="flex items-center text-funding-blue font-medium hover:text-funding-blue/80 transition-colors duration-200"
          >
            <Phone className="w-4 h-4 mr-2" />
            1-573-533-3894
          </a>
          
          <CustomButton 
            href={schedulingLink}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            <CalendarClock className="mr-2 w-4 h-4" />
            Schedule Now
          </CustomButton>
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
        Document Collection
      </h1>
      <p className="text-funding-gray max-w-2xl mx-auto text-center">
        Please upload the required documents to complete your funding application
      </p>
    </div>
  );
};

export default DocumentHeader;
