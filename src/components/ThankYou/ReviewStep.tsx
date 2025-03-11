
import React from 'react';
import { ArrowRight, CalendarClock } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

type ReviewStepProps = {
  documentsSubmitted: boolean;
  onSchedule: () => void;
};

const ReviewStep = ({ documentsSubmitted, onSchedule }: ReviewStepProps) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-xl mr-5">
        {documentsSubmitted ? '1' : '2'}
      </div>
      <div className="text-left pt-1">
        <h4 className="font-medium text-lg text-funding-dark mb-1">Application Review</h4>
        <p className="text-funding-gray mb-3">
          A funding specialist will review your {documentsSubmitted ? 'documents' : 'application and documents'} within 24-48 hours.
        </p>
        <div className="flex justify-start">
          <CustomButton 
            variant="outline"
            size="sm"
            onClick={onSchedule}
            className="group px-5 py-2.5 inline-flex items-center"
          >
            <CalendarClock className="mr-2 w-4 h-4" />
            Schedule a Consultation
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
