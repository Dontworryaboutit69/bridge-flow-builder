
import React from 'react';
import DocumentStep from './DocumentStep';
import ReviewStep from './ReviewStep';
import FundingStep from './FundingStep';

type NextStepsSectionProps = {
  documentsSubmitted: boolean;
  onSchedule: () => void;
};

const NextStepsSection = ({ documentsSubmitted, onSchedule }: NextStepsSectionProps) => {
  return (
    <>
      <h3 className="text-xl font-bold text-funding-dark mb-4">Next Steps</h3>
      
      <div className="space-y-6 mb-10">
        <DocumentStep documentsSubmitted={documentsSubmitted} />
        <ReviewStep documentsSubmitted={documentsSubmitted} onSchedule={onSchedule} />
        <FundingStep documentsSubmitted={documentsSubmitted} />
      </div>
    </>
  );
};

export default NextStepsSection;
