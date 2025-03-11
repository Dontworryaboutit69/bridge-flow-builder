
import React from 'react';
import { CheckCircle } from 'lucide-react';

type SuccessHeaderProps = {
  documentsSubmitted: boolean;
};

const SuccessHeader = ({ documentsSubmitted }: SuccessHeaderProps) => {
  return (
    <>
      <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
        {documentsSubmitted ? "Documents Submitted Successfully!" : "Application Submitted Successfully!"}
      </h1>
      
      <p className="text-funding-gray mb-8 max-w-2xl mx-auto">
        {documentsSubmitted 
          ? "Thank you for submitting your documents to Growth Path Advisory. Your documents have been received and are being reviewed by our team."
          : "Thank you for submitting your funding application to Growth Path Advisory. We're excited to help your business grow. Your application has been received and is being processed."}
      </p>
    </>
  );
};

export default SuccessHeader;
