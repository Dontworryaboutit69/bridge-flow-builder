
import React from 'react';

type FundingStepProps = {
  documentsSubmitted: boolean;
};

const FundingStep = ({ documentsSubmitted }: FundingStepProps) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-xl mr-5">
        {documentsSubmitted ? '2' : '3'}
      </div>
      <div className="text-left pt-1">
        <h4 className="font-medium text-lg text-funding-dark mb-1">Funding Decision</h4>
        <p className="text-funding-gray">
          You'll receive a funding decision and available options. Upon approval, funds can be deposited as quickly as 24 hours.
        </p>
      </div>
    </div>
  );
};

export default FundingStep;
